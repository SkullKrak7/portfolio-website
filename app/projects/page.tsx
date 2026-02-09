import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/lib/projects';

export default function ProjectsPage() {
  const categories = ['All', 'ML', 'Backend', 'Full-Stack', 'Hackathon'];

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-4">All Projects</h1>
        <p className="text-xl text-gray-600 mb-8">
          {projects.length} projects showcasing ML, backend systems, and full-stack development
        </p>

        {/* Category Filter - Static for now */}
        <div className="flex gap-3 mb-8 overflow-x-auto">
          {categories.map(cat => (
            <button
              key={cat}
              className="px-4 py-2 rounded-lg bg-white border border-gray-300 hover:bg-gray-100 whitespace-nowrap"
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(project => (
            <ProjectCard
              key={project.slug}
              title={project.title}
              description={project.description}
              tags={project.tags}
              slug={project.slug}
              github={project.github}
              demo={project.demo}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
