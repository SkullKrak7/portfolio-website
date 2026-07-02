import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/lib/projects';

export default function ProjectsPage() {
  return (
    <main className="overflow-hidden py-4 lg:py-6" style={{ background: 'var(--bg-page)' }}>
      <div className="container mx-auto px-4 lg:px-8 py-4 lg:py-6 max-w-full">
        <h1 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>All Projects</h1>
        <p className="text-lg mb-4" style={{ color: 'var(--text-secondary)' }}>
          {projects.length} projects showcasing ML, computer vision, NLP, and full-stack development
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 lg:gap-6 max-w-full">
          {projects.map((project) => (
            <ProjectCard 
              key={project.slug}
              title={project.title}
              description={project.description}
              tags={project.tags}
              slug={project.slug}
            />
          ))}
        </div>
      </div>
    </main>
  )
}
