import Link from 'next/link'

export default function NotFound() {
  return (
    <main
      className="min-h-screen flex items-center justify-center px-4"
      style={{ background: 'var(--bg-page)' }}
    >
      <div className="text-center">
        <h1 className="text-9xl font-bold mb-4" style={{ color: 'var(--accent)' }}>404</h1>
        <h2 className="text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>Page Not Found</h2>
        <p className="text-xl mb-8" style={{ color: 'var(--text-secondary)' }}>
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="px-8 py-4 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all inline-block"
          style={{ background: 'var(--accent)' }}
        >
          Go Home
        </Link>
      </div>
    </main>
  )
}
