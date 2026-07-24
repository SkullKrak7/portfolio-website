'use client'
import { useEffect, useRef, useState } from 'react'

interface CountUpProps {
  value: number
  suffix?: string
  prefix?: string
  durationMs?: number
}

// Ease-out cubic for a natural deceleration into the final value.
function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3)
}

export default function CountUp({ value, suffix, prefix, durationMs = 1400 }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  // Start at the final value: SSR-safe and matches first client render, avoiding hydration mismatch.
  const [display, setDisplay] = useState(value)

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (typeof IntersectionObserver === 'undefined' || prefersReducedMotion) {
      return
    }

    // React attaches refs before this effect runs, so the span is always mounted here.
    const node = ref.current!

    let rafId: number | undefined

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            observer.unobserve(entry.target)
            // Reset to 0 only once we're actually on-screen and animating. Doing this
            // inside the callback (not the effect body) keeps the final value in
            // environments whose IntersectionObserver never fires (jsdom/happy-dom tests).
            setDisplay(0)
            const start = performance.now()
            const tick = (now: number) => {
              const elapsed = now - start
              const progress = Math.min(elapsed / durationMs, 1)
              const current = value * easeOutCubic(progress)
              setDisplay(Math.round(current))
              if (progress < 1) {
                rafId = requestAnimationFrame(tick)
              }
            }
            rafId = requestAnimationFrame(tick)
          }
        }
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    )

    observer.observe(node)

    return () => {
      observer.disconnect()
      if (rafId) cancelAnimationFrame(rafId)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, durationMs])

  return <span ref={ref}>{`${prefix ?? ''}${display}${suffix ?? ''}`}</span>
}
