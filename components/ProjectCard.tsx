interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  slug: string;
  github?: string;
  demo?: string;
}

export default function ProjectCard({ title, description, tags, slug, github, demo }: ProjectCardProps) {
  return (
    <div className="group p-5 rounded-xl shadow-md hover:shadow-xl transition-all" style={{ 
      background: 'radial-gradient(circle at top left, #111827 0%, var(--bg-elevated) 52%)',
      border: '1px solid var(--border-subtle)'
    }}>
      <h3 className="text-lg font-semibold mb-2 transition-colors" style={{ color: 'var(--text-primary)' }}>{title}</h3>
      <p className="mb-4 text-sm" style={{ color: 'var(--text-secondary)' }}>{description}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map(tag => (
          <span 
            key={tag} 
            className="px-2 py-1 rounded text-xs"
            style={{ background: 'var(--accent-soft)', color: 'var(--accent)' }}
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex gap-3 text-sm">
        <a 
          href={`/projects/${slug}`} 
          className="font-medium hover:underline"
          style={{ color: 'var(--accent)' }}
        >
          View Details →
        </a>
        {github && (
          <a 
            href={github} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="font-medium hover:underline"
            style={{ color: 'var(--text-secondary)' }}
          >
            GitHub
          </a>
        )}
        {demo && (
          <a 
            href={demo} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="font-medium hover:underline"
            style={{ color: 'var(--text-secondary)' }}
          >
            Demo
          </a>
        )}
      </div>
    </div>
  );
}
