interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  slug: string;
}

export default function ProjectCard({ title, description, tags, slug }: ProjectCardProps) {
  return (
    <a 
      href={`/projects/${slug}`}
      className="group block rounded-xl shadow-md hover:shadow-xl transition-all overflow-hidden cursor-pointer" 
      style={{ 
        background: 'var(--bg-elevated)',
        border: '1px solid var(--border-subtle)'
      }}
    >
      <div className="p-5">
        <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-600 transition-colors" style={{ color: 'var(--text-primary)' }}>{title}</h3>
        <p className="mb-4 text-sm" style={{ color: 'var(--text-secondary)' }}>{description}</p>
        
        <div className="flex flex-wrap gap-2">
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
      </div>
    </a>
  );
}
