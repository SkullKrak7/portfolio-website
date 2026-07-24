'use client'
import { useEffect, useRef, useState } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
}

const PARTICLE_COUNT = 60
const LINK_DISTANCE = 140
const MAX_DPR = 2

export default function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [supported, setSupported] = useState(true)

  useEffect(() => {
    // React attaches refs before this effect runs, so the canvas is always mounted here.
    const canvas = canvasRef.current!
    const ctx = canvas.getContext('2d')
    if (!ctx) {
      setSupported(false)
      return
    }

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const accent = getComputedStyle(document.documentElement)
      .getPropertyValue('--accent')
      .trim() || '#6366f1'

    let width = 0
    let height = 0
    let dpr = Math.min(window.devicePixelRatio || 1, MAX_DPR)
    let particles: Particle[] = []
    let rafId = 0
    let paused = false

    const makeParticles = () => {
      particles = Array.from({ length: PARTICLE_COUNT }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
      }))
    }

    const resize = () => {
      const rect = canvas.parentElement?.getBoundingClientRect()
      width = rect?.width ?? canvas.clientWidth
      height = rect?.height ?? canvas.clientHeight
      dpr = Math.min(window.devicePixelRatio || 1, MAX_DPR)
      canvas.width = Math.max(1, Math.floor(width * dpr))
      canvas.height = Math.max(1, Math.floor(height * dpr))
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      if (particles.length === 0) makeParticles()
    }

    const drawStaticFrame = () => {
      resize()
      ctx.clearRect(0, 0, width, height)
      ctx.fillStyle = accent
      ctx.globalAlpha = 0.5
      for (const p of particles) {
        ctx.beginPath()
        ctx.arc(p.x, p.y, 1.5, 0, Math.PI * 2)
        ctx.fill()
      }
      ctx.globalAlpha = 1
    }

    if (prefersReducedMotion) {
      drawStaticFrame()
      return
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height)

      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > width) p.vx *= -1
        if (p.y < 0 || p.y > height) p.vy *= -1
        p.x = Math.max(0, Math.min(width, p.x))
        p.y = Math.max(0, Math.min(height, p.y))
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i]
          const b = particles[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < LINK_DISTANCE) {
            ctx.strokeStyle = accent
            ctx.globalAlpha = (1 - dist / LINK_DISTANCE) * 0.25
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }

      ctx.globalAlpha = 0.6
      ctx.fillStyle = accent
      for (const p of particles) {
        ctx.beginPath()
        ctx.arc(p.x, p.y, 1.5, 0, Math.PI * 2)
        ctx.fill()
      }
      ctx.globalAlpha = 1

      // 0 is never a real requestAnimationFrame id, so it doubles as an "unscheduled"
      // sentinel: the tail of the loop clears it whenever it stops rescheduling itself.
      rafId = paused ? 0 : requestAnimationFrame(draw)
    }

    resize()
    rafId = requestAnimationFrame(draw)

    const handleVisibility = () => {
      paused = document.hidden
      // Real both ways: if the loop already cleared rafId to 0 (it stopped
      // rescheduling while paused), resuming schedules a fresh frame; if a frame is
      // still pending from before the pause took effect, there is nothing to do.
      if (!paused && rafId === 0) {
        rafId = requestAnimationFrame(draw)
      }
    }

    let resizeObserver: ResizeObserver | undefined
    if (typeof ResizeObserver !== 'undefined' && canvas.parentElement) {
      resizeObserver = new ResizeObserver(() => resize())
      resizeObserver.observe(canvas.parentElement)
    } else {
      window.addEventListener('resize', resize)
    }

    document.addEventListener('visibilitychange', handleVisibility)

    return () => {
      // Cancelling id 0 (the "unscheduled" sentinel) is a safe no-op, so this always
      // runs unconditionally instead of branching on whether a frame is pending.
      cancelAnimationFrame(rafId)
      document.removeEventListener('visibilitychange', handleVisibility)
      if (resizeObserver) {
        resizeObserver.disconnect()
      } else {
        window.removeEventListener('resize', resize)
      }
    }
  }, [])

  if (!supported) return null

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
      }}
    />
  )
}
