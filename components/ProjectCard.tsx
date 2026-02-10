interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  slug: string;
  image?: string;
}

export default function ProjectCard({ title, description, tags, slug, image }: ProjectCardProps) {
  return (
    <div className="group rounded-xl shadow-md hover:shadow-xl transition-all overflow-hidden" style={{ 
      background: 'var(--bg-elevated)',
      border: '1px solid var(--border-subtle)'
    }}>
      {image && (
        <div className="relative h-48 overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transition-transform group-hover:scale-105"
          />
        </div>
      )}
      <div className="p-5">
        <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>{title}</h3>
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

        <a 
          href={`/projects/${slug}`} 
          className="font-medium hover:underline text-sm"
          style={{ color: 'var(--accent)' }}
        >
          View Details →
        </a>
      </div>
    </div>
  );
}
