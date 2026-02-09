import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-gray-50 dark:from-gray-900 dark:via-blue-950 dark:to-gray-900 flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-blue-600 dark:text-blue-400 mb-4">404</h1>
        <h2 className="text-4xl font-bold mb-4 dark:text-white">Page Not Found</h2>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link 
          href="/" 
          className="px-8 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 font-semibold shadow-lg hover:shadow-xl transition-all inline-block"
        >
          Go Home
        </Link>
      </div>
    </main>
  )
}
