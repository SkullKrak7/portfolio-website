import { projects } from '@/lib/projects';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return projects.map(project => ({
    slug: project.slug,
  }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find(p => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        {/* Back Link */}
        <a href="/projects" className="text-blue-600 hover:underline mb-6 inline-block">
          ← Back to Projects
        </a>

        {/* Header */}
        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
        <p className="text-xl text-gray-600 mb-6">{project.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map(tag => (
            <span 
              key={tag} 
              className="px-3 py-1 bg-blue-100 text-blue-800 rounded-lg"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4 mb-8">
          {project.github && (
            <a 
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800"
            >
              View on GitHub
            </a>
          )}
          {project.demo && (
            <a 
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
              Live Demo
            </a>
          )}
        </div>

        {/* Content Placeholder */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold mb-4">Overview</h2>
          <p className="text-gray-600 mb-6">
            Detailed project information will be loaded from MDX files. 
            For now, visit the GitHub repository for full documentation.
          </p>

          <h2 className="text-2xl font-bold mb-4">Key Features</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
            <li>Feature details coming soon</li>
            <li>Check GitHub README for complete information</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4">Tech Stack</h2>
          <div className="flex flex-wrap gap-2">
            {project.tags.map(tag => (
              <span 
                key={tag} 
                className="px-3 py-2 bg-gray-100 text-gray-800 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
