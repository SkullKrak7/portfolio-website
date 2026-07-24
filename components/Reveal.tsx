'use client'
import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react'

interface RevealProps {
  children: ReactNode
  delay?: number
  className?: string
  style?: CSSProperties
}

export default function Reveal({ children, delay, className, style }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  // Visible by default: SSR-safe and matches first client render, avoiding hydration mismatch.
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (typeof IntersectionObserver === 'undefined' || prefersReducedMotion) {
      return
    }

    // React attaches refs before this effect runs, so the wrapper div is always mounted here.
    const node = ref.current!

    setVisible(false)

    let timeoutId: ReturnType<typeof setTimeout> | undefined

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            if (delay) {
              timeoutId = setTimeout(() => setVisible(true), delay)
            } else {
              setVisible(true)
            }
            observer.unobserve(entry.target)
          }
        }
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    )

    observer.observe(node)

    return () => {
      observer.disconnect()
      if (timeoutId) clearTimeout(timeoutId)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transition: 'opacity .6s ease, transform .6s ease',
        transitionDelay: delay ? `${delay}ms` : undefined,
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : 'translateY(24px)',
        ...style,
      }}
    >
      {children}
    </div>
  )
}
