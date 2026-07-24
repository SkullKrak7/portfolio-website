'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

function SunIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="M4.93 4.93l1.41 1.41" />
      <path d="M17.66 17.66l1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="M6.34 17.66l-1.41 1.41" />
      <path d="M19.07 4.93l-1.41 1.41" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  )
}

function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <button
        type="button"
        aria-label="Switch theme"
        className="inline-flex items-center justify-center w-8 h-8 rounded-full transition-colors"
        style={{ color: 'var(--text-secondary)' }}
      >
        <span style={{ width: 18, height: 18, display: 'inline-block' }} />
      </button>
    )
  }

  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
      className="inline-flex items-center justify-center w-8 h-8 rounded-full transition-colors hover:text-[var(--accent)]"
      style={{ color: 'var(--text-secondary)' }}
    >
      {isDark ? <SunIcon /> : <MoonIcon />}
    </button>
  )
}

export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl" style={{
      background: 'linear-gradient(to bottom, rgba(5, 8, 22, 0.96), rgba(5, 8, 22, 0.9), transparent)',
      borderBottom: '1px solid var(--border-subtle)'
    }}>
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
        <a href="/" className="text-sm font-semibold tracking-wide" style={{ color: 'var(--text-secondary)' }}>
          SK
        </a>
        <div className="flex gap-6 items-center">
          <a href="/" className="nav-link text-sm transition-colors hover:text-[var(--accent)]" style={{ color: 'var(--text-secondary)' }}>
            Home
          </a>
          <a href="/projects" className="nav-link text-sm transition-colors hover:text-[var(--accent)]" style={{ color: 'var(--text-secondary)' }}>
            Projects
          </a>
          <a href="/about" className="nav-link text-sm transition-colors hover:text-[var(--accent)]" style={{ color: 'var(--text-secondary)' }}>
            About
          </a>
          <a href="/contact" className="nav-link text-sm transition-colors hover:text-[var(--accent)]" style={{ color: 'var(--text-secondary)' }}>
            Contact
          </a>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}
