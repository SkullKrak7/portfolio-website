import { describe, it, expect } from 'vitest';
import { filterProjects, projects, type Project } from '@/lib/projects';

describe('filterProjects', () => {
  it('returns all projects when filter is All', () => {
    const result = filterProjects(projects, 'All');
    expect(result).toEqual(projects);
    expect(result.length).toBe(10);
  });

  it('filters by ML category', () => {
    const result = filterProjects(projects, 'ML/AI');
    expect(result.length).toBeGreaterThan(0);
    result.forEach(p => {
      expect(p.category === 'ML' || p.tags.some(t => t.includes('XGBoost') || t.includes('CNN') || t.includes('LSTM'))).toBe(true);
    });
  });

  it('filters by XGBoost tag', () => {
    const testProjects: Project[] = [{
      slug: 'test',
      title: 'Test',
      description: 'Test',
      longDescription: 'Test',
      tags: ['XGBoost'],
      category: 'Backend'
    }];
    const result = filterProjects(testProjects, 'ML/AI');
    expect(result.length).toBe(1);
  });

  it('filters by CNN tag', () => {
    const testProjects: Project[] = [{
      slug: 'test',
      title: 'Test',
      description: 'Test',
      longDescription: 'Test',
      tags: ['CNN'],
      category: 'Backend'
    }];
    const result = filterProjects(testProjects, 'ML/AI');
    expect(result.length).toBe(1);
  });

  it('filters by LSTM tag', () => {
    const testProjects: Project[] = [{
      slug: 'test',
      title: 'Test',
      description: 'Test',
      longDescription: 'Test',
      tags: ['LSTM'],
      category: 'Backend'
    }];
    const result = filterProjects(testProjects, 'ML/AI');
    expect(result.length).toBe(1);
  });

  it('filters Computer Vision by PyTorch tag', () => {
    const testProjects: Project[] = [{
      slug: 'test',
      title: 'Test',
      description: 'Test',
      longDescription: 'Test',
      tags: ['PyTorch'],
      category: 'Backend'
    }];
    const result = filterProjects(testProjects, 'Computer Vision');
    expect(result.length).toBe(1);
  });

  it('filters Computer Vision by TensorFlow tag', () => {
    const testProjects: Project[] = [{
      slug: 'test',
      title: 'Test',
      description: 'Test',
      longDescription: 'Test',
      tags: ['TensorFlow'],
      category: 'Backend'
    }];
    const result = filterProjects(testProjects, 'Computer Vision');
    expect(result.length).toBe(1);
  });

  it('filters Computer Vision by CNN tag in tags', () => {
    const testProjects: Project[] = [{
      slug: 'test',
      title: 'Test',
      description: 'Test',
      longDescription: 'Test',
      tags: ['CNN'],
      category: 'Backend'
    }];
    const result = filterProjects(testProjects, 'Computer Vision');
    expect(result.length).toBe(1);
  });

  it('filters Computer Vision by title containing Vision', () => {
    const testProjects: Project[] = [{
      slug: 'test',
      title: 'Vision System',
      description: 'Test',
      longDescription: 'Test',
      tags: [],
      category: 'Backend'
    }];
    const result = filterProjects(testProjects, 'Computer Vision');
    expect(result.length).toBe(1);
  });

  it('excludes Computer Vision when neither tags nor title match', () => {
    const testProjects: Project[] = [{
      slug: 'test',
      title: 'Test',
      description: 'Test',
      longDescription: 'Test',
      tags: ['Python'],
      category: 'Backend'
    }];
    const result = filterProjects(testProjects, 'Computer Vision');
    expect(result.length).toBe(0);
  });

  it('filters NLP by LangChain tag', () => {
    const testProjects: Project[] = [{
      slug: 'test',
      title: 'Test',
      description: 'Test',
      longDescription: 'Test',
      tags: ['LangChain'],
      category: 'Backend'
    }];
    const result = filterProjects(testProjects, 'NLP');
    expect(result.length).toBe(1);
  });

  it('filters NLP by Gemini tag', () => {
    const testProjects: Project[] = [{
      slug: 'test',
      title: 'Test',
      description: 'Test',
      longDescription: 'Test',
      tags: ['Gemini'],
      category: 'Backend'
    }];
    const result = filterProjects(testProjects, 'NLP');
    expect(result.length).toBe(1);
  });

  it('filters NLP by title containing RAG', () => {
    const testProjects: Project[] = [{
      slug: 'test',
      title: 'RAG System',
      description: 'Test',
      longDescription: 'Test',
      tags: [],
      category: 'Backend'
    }];
    const result = filterProjects(testProjects, 'NLP');
    expect(result.length).toBe(1);
  });

  it('filters Full-Stack by category', () => {
    const testProjects: Project[] = [{
      slug: 'test',
      title: 'Test',
      description: 'Test',
      longDescription: 'Test',
      tags: [],
      category: 'Full-Stack'
    }];
    const result = filterProjects(testProjects, 'Full-Stack');
    expect(result.length).toBe(1);
  });

  it('filters Full-Stack by React tag', () => {
    const testProjects: Project[] = [{
      slug: 'test',
      title: 'Test',
      description: 'Test',
      longDescription: 'Test',
      tags: ['React'],
      category: 'Backend'
    }];
    const result = filterProjects(testProjects, 'Full-Stack');
    expect(result.length).toBe(1);
  });

  it('filters Full-Stack by Flask tag', () => {
    const testProjects: Project[] = [{
      slug: 'test',
      title: 'Test',
      description: 'Test',
      longDescription: 'Test',
      tags: ['Flask'],
      category: 'Backend'
    }];
    const result = filterProjects(testProjects, 'Full-Stack');
    expect(result.length).toBe(1);
  });

  it('filters Full-Stack by FastAPI tag', () => {
    const testProjects: Project[] = [{
      slug: 'test',
      title: 'Test',
      description: 'Test',
      longDescription: 'Test',
      tags: ['FastAPI'],
      category: 'Backend'
    }];
    const result = filterProjects(testProjects, 'Full-Stack');
    expect(result.length).toBe(1);
  });

  it('filters Hackathon by category', () => {
    const testProjects: Project[] = [{
      slug: 'test',
      title: 'Test',
      description: 'Test',
      longDescription: 'Test',
      tags: [],
      category: 'Hackathon'
    }];
    const result = filterProjects(testProjects, 'Hackathon');
    expect(result.length).toBe(1);
  });

  it('filters Hackathon by winner tag', () => {
    const testProjects: Project[] = [{
      slug: 'test',
      title: 'Test',
      description: 'Test',
      longDescription: 'Test',
      tags: ['🏆 Winner'],
      category: 'Backend'
    }];
    const result = filterProjects(testProjects, 'Hackathon');
    expect(result.length).toBe(1);
  });

  it('filters by custom tag', () => {
    const result = filterProjects(projects, 'Python');
    expect(result.length).toBeGreaterThan(0);
    result.forEach(p => {
      expect(p.tags.some(t => t.includes('Python'))).toBe(true);
    });
  });

  it('returns empty array when no matches', () => {
    const result = filterProjects(projects, 'NonExistentTag');
    expect(result).toEqual([]);
  });
});
