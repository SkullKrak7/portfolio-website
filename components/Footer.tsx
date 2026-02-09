'use client'

export default function Footer() {
  return (
    <footer className="py-8 mt-auto" style={{ background: 'var(--bg-elevated)', borderTop: '1px solid var(--border-subtle)' }}>
      <div className="container mx-auto px-4 text-center">
        <p className="mb-2 text-sm" style={{ color: 'var(--text-muted)' }}>© 2026 Sai Karthik Kagolanu. All rights reserved.</p>
        <div className="flex justify-center gap-6">
          <a 
            href="https://github.com/SkullKrak7" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm transition-colors hover:text-[var(--accent)]"
            style={{ color: 'var(--text-secondary)' }}
          >
            GitHub
          </a>
          <a 
            href="https://linkedin.com/in/karthik-kagolanu" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm transition-colors hover:text-[var(--accent)]"
            style={{ color: 'var(--text-secondary)' }}
          >
            LinkedIn
          </a>
          <a 
            href="mailto:sai.kagolanu@yahoo.com" 
            className="text-sm transition-colors hover:text-[var(--accent)]"
            style={{ color: 'var(--text-secondary)' }}
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
