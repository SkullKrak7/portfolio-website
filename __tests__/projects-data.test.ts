import { describe, it, expect } from 'vitest';
import { projects } from '@/lib/projects';

describe('Projects Data', () => {
  it('has 13 projects', () => {
    expect(projects).toHaveLength(13);
  });

  it('does not reference stale renamed slugs or titles', () => {
    const slugs = projects.map(p => p.slug);
    expect(slugs).not.toContain('zaxia');
    expect(slugs).not.toContain('taa-society-treasurer');
    expect(slugs).not.toContain('fsw-rag-demo');
    expect(slugs).toContain('axiar');
    expect(slugs).toContain('trezia');
    expect(slugs).toContain('rag-demo');

    const titles = projects.map(p => p.title);
    expect(titles).not.toContain('Zaxia');
    expect(titles).not.toContain('Apartment Society Finance App');
    expect(titles).toContain('Axiar');
    expect(titles).toContain('Trezia');
  });

  it('does not expose private repo links for axiar or trezia', () => {
    const axiar = projects.find(p => p.slug === 'axiar');
    const trezia = projects.find(p => p.slug === 'trezia');
    expect(axiar?.github).toBeUndefined();
    expect(trezia?.github).toBeUndefined();
  });

  it('rag-demo points at the underscore GitHub repo', () => {
    const ragDemo = projects.find(p => p.slug === 'rag-demo');
    expect(ragDemo?.github).toBe('https://github.com/SkullKrak7/RAG_Demo');
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

  it('uses a plain "Winner" tag with no emoji glitter', () => {
    const retailOdyssey = projects.find(p => p.slug === 'retail-odyssey');
    const sheffaware = projects.find(p => p.slug === 'sheffaware');
    expect(retailOdyssey?.tags).toContain('Winner');
    expect(sheffaware?.tags).toContain('Winner');
    projects.forEach(project => {
      project.tags.forEach(tag => expect(tag).not.toMatch(/🏆/));
    });
  });
});
