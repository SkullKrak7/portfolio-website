import { describe, it, expect } from 'vitest';
import { projects } from '@/lib/projects';

describe('Projects Data', () => {
  it('has 10 projects', () => {
    expect(projects).toHaveLength(10);
  });

  it('all projects have required fields', () => {
    projects.forEach(project => {
      expect(project).toHaveProperty('title');
      expect(project).toHaveProperty('description');
      expect(project).toHaveProperty('tags');
      expect(project).toHaveProperty('slug');
      expect(project).toHaveProperty('category');
    });
  });

  it('all projects have unique slugs', () => {
    const slugs = projects.map(p => p.slug);
    const uniqueSlugs = new Set(slugs);
    expect(uniqueSlugs.size).toBe(projects.length);
  });

  it('all projects have at least one tag', () => {
    projects.forEach(project => {
      expect(project.tags.length).toBeGreaterThan(0);
    });
  });
});
