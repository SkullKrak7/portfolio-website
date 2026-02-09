import { projects } from '@/lib/projects'
import { notFound } from 'next/navigation'
import Link from 'next/link'

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) notFound()

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <Link href="/projects" className="text-blue-600 dark:text-blue-400 hover:underline mb-8 inline-block">
          ← Back to Projects
        </Link>
        
        <h1 className="text-4xl font-bold mb-4 dark:text-white">{project.title}</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">{project.description}</p>

        {/* Project Image Placeholder */}
        <div className="mb-8 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-xl h-64 flex items-center justify-center">
          <div className="text-center">
            <svg className="w-20 h-20 mx-auto mb-4 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <p className="text-gray-600 dark:text-gray-400">Project Screenshot</p>
          </div>
        </div>

        {/* Links */}
        <div className="flex gap-4 mb-8 flex-wrap">
          {project.github && (
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 font-semibold transition-all inline-flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              View on GitHub
            </a>
          )}
          {project.demo && (
            <a 
              href={project.demo} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-semibold transition-all inline-flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Live Demo
            </a>
          )}
        </div>

        {project.stats && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {project.stats.loc && (
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{project.stats.loc}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Lines of Code</div>
              </div>
            )}
            {project.stats.files && (
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <div className="text-2xl font-bold text-green-600 dark:text-green-400">{project.stats.files}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Files</div>
              </div>
            )}
            {project.stats.coverage && (
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">{project.stats.coverage}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Test Coverage</div>
              </div>
            )}
            {project.stats.accuracy && (
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">{project.stats.accuracy}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Accuracy</div>
              </div>
            )}
          </div>
        )}

        <div className="bg-white dark:bg-gray-800 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4 dark:text-white">Overview</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">{project.longDescription}</p>

          {project.highlights && (
            <>
              <h3 className="text-xl font-bold mb-3 dark:text-white">Key Highlights</h3>
              <ul className="list-disc list-inside space-y-2 mb-6">
                {project.highlights.map((highlight, i) => (
                  <li key={i} className="text-gray-700 dark:text-gray-300">{highlight}</li>
                ))}
              </ul>
            </>
          )}

          {project.techStack && (
            <>
              <h3 className="text-xl font-bold mb-3 dark:text-white">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, i) => (
                  <span key={i} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </>
          )}
        </div>

        <div className="flex gap-4">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" 
               className="px-6 py-3 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600">
              View on GitHub →
            </a>
          )}
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer"
               className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Live Demo →
            </a>
          )}
        </div>
      </div>
    </main>
  )
}
