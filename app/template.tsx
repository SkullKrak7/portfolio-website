'use client'
import { useEffect, useState, type ReactNode } from 'react'

export default function Template({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    setReducedMotion(prefersReducedMotion)
    setMounted(true)
  }, [])

  if (reducedMotion) {
    return <>{children}</>
  }

  return (
    <div
      style={{
        opacity: mounted ? 1 : 0,
        transform: mounted ? 'translateY(0)' : 'translateY(8px)',
        transition: 'opacity .35s ease, transform .35s ease',
      }}
    >
      {children}
    </div>
  )
}
