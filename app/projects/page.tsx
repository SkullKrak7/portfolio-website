'use client'
import { useState } from 'react'
import ProjectCard from '@/components/ProjectCard';
import { projects, filterProjects } from '@/lib/projects';

export default function ProjectsPage() {
  const [filter, setFilter] = useState('All')
  
  const filters = ['All', 'ML/AI', 'Computer Vision', 'NLP', 'Full-Stack', 'Hackathon', 'Python', 'C++', 'React']
  
  const filtered = filterProjects(projects, filter);

  return (
    <main className="overflow-hidden py-4 lg:py-6" style={{ background: 'var(--bg-page)' }}>
      <div className="container mx-auto px-4 lg:px-8 py-4 lg:py-6 max-w-full">
        <h1 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>All Projects</h1>
        <p className="text-lg mb-4" style={{ color: 'var(--text-secondary)' }}>
          {projects.length} projects showcasing ML, computer vision, NLP, and full-stack development
        </p>

        <div className="flex gap-3 mb-4 overflow-x-auto pb-2 scrollbar-hide">
          {filters.map(tag => (
            <button
              key={tag}
              onClick={() => setFilter(tag)}
              className="px-4 py-2 rounded-lg whitespace-nowrap transition-colors flex-shrink-0"
              style={filter === tag 
                ? { background: 'var(--accent)', color: 'var(--bg-page)' }
                : { background: 'var(--bg-elevated)', color: 'var(--text-secondary)', border: '1px solid var(--border-subtle)' }
              }
            >
              {tag} {tag === 'All' ? `(${projects.length})` : `(${projects.filter(p => {
                if (tag === 'ML/AI') return p.category === 'ML' || p.tags.some(t => t.includes('XGBoost') || t.includes('CNN') || t.includes('LSTM'))
                if (tag === 'Computer Vision') return p.tags.some(t => t.includes('PyTorch') || t.includes('TensorFlow') || t.includes('CNN')) || p.title.includes('Vision')
                if (tag === 'NLP') return p.tags.some(t => t.includes('LangChain') || t.includes('Gemini')) || p.title.includes('RAG')
                if (tag === 'Full-Stack') return p.category === 'Full-Stack' || p.tags.some(t => t.includes('React') || t.includes('Flask') || t.includes('FastAPI'))
                if (tag === 'Hackathon') return p.category === 'Hackathon' || p.tags.includes('🏆 Winner')
                return p.tags.some(t => t.includes(tag))
              }).length})`}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 lg:gap-6 max-w-full">
          {filtered.map((project) => (
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
