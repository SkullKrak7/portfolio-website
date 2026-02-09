'use client'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl" style={{ 
      background: 'linear-gradient(to bottom, rgba(5, 8, 22, 0.96), rgba(5, 8, 22, 0.9), transparent)',
      borderBottom: '1px solid var(--border-subtle)'
    }}>
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
        <a href="/" className="text-sm font-semibold tracking-widest uppercase" style={{ color: 'var(--text-secondary)' }}>
          Sai Karthik
        </a>
        <div className="flex gap-6 items-center">
          <a href="/" className="text-sm transition-colors hover:text-[var(--accent)]" style={{ color: 'var(--text-secondary)' }}>
            Home
          </a>
          <a href="/projects" className="text-sm transition-colors hover:text-[var(--accent)]" style={{ color: 'var(--text-secondary)' }}>
            Projects
          </a>
          <a href="/about" className="text-sm transition-colors hover:text-[var(--accent)]" style={{ color: 'var(--text-secondary)' }}>
            About
          </a>
          <a href="/contact" className="text-sm transition-colors hover:text-[var(--accent)]" style={{ color: 'var(--text-secondary)' }}>
            Contact
          </a>
        </div>
      </nav>
    </header>
  )
}
