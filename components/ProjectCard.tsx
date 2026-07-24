'use client';

import { useState } from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  slug: string;
  image?: string;
}

export default function ProjectCard({ title, description, tags, slug, image }: ProjectCardProps) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const prefersReducedMotion = () =>
    typeof window !== 'undefined' &&
    typeof window.matchMedia === 'function' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (prefersReducedMotion()) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const offsetX = e.clientX - rect.left - centerX;
    const offsetY = e.clientY - rect.top - centerY;

    const rotateY = (offsetX / centerX) * 6;
    const rotateX = -(offsetY / centerY) * 6;

    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div style={{ perspective: '800px' }}>
      <a
        href={`/projects/${slug}`}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="group block rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden cursor-pointer card-interactive"
        style={{
          background: 'var(--bg-elevated)',
          border: '1px solid var(--border-subtle)',
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transformStyle: 'preserve-3d',
        }}
      >
        {image && (
          <div className="overflow-hidden">
            <img
              src={image}
              alt=""
              aria-hidden="true"
              loading="lazy"
              className="w-full aspect-[16/10] object-cover object-top"
            />
          </div>
        )}
        <div className="p-5">
          <h3 className="text-lg font-semibold mb-2 group-hover:text-[var(--accent)] transition-colors" style={{ color: 'var(--text-primary)' }}>{title}</h3>
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
    </div>
  );
}
