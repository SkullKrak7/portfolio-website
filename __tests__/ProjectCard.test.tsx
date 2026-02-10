import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ProjectCard from '@/components/ProjectCard';

describe('ProjectCard', () => {
  const mockProps = {
    slug: 'test-project',
    title: 'Test Project',
    description: 'Test description',
    tags: ['React', 'TypeScript'],
  };

  it('renders project title', () => {
    render(<ProjectCard {...mockProps} />);
    expect(screen.getByText('Test Project')).toBeInTheDocument();
  });

  it('renders project description', () => {
    render(<ProjectCard {...mockProps} />);
    expect(screen.getByText('Test description')).toBeInTheDocument();
  });

  it('renders tags', () => {
    render(<ProjectCard {...mockProps} />);
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
  });

  it('has accessible link', () => {
    render(<ProjectCard {...mockProps} />);
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/projects/test-project');
  });

  it('renders all provided tags', () => {
    render(<ProjectCard {...mockProps} tags={['React', 'TypeScript', 'Next.js', 'Tailwind']} />);
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
    expect(screen.getByText('Next.js')).toBeInTheDocument();
    expect(screen.getByText('Tailwind')).toBeInTheDocument();
  });

  it('renders with image when provided', () => {
    const propsWithImage = { ...mockProps, image: '/test-image.png' };
    render(<ProjectCard {...propsWithImage} />);
    const img = screen.getByRole('img');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', '/test-image.png');
    expect(img).toHaveAttribute('alt', mockProps.title);
  });

  it('renders without image when not provided', () => {
    render(<ProjectCard {...mockProps} />);
    expect(screen.queryByRole('img')).not.toBeInTheDocument();
  });
});
