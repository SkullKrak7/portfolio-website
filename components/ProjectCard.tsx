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
    <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map(tag => (
          <span 
            key={tag} 
            className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex gap-3">
        <a 
          href={`/projects/${slug}`} 
          className="text-blue-600 hover:underline font-medium"
        >
          Details →
        </a>
        {github && (
          <a 
            href={github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900"
          >
            GitHub
          </a>
        )}
        {demo && (
          <a 
            href={demo} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-green-600 hover:text-green-800"
          >
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
}
