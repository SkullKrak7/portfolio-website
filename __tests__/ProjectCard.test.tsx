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

  it('displays github link when provided', () => {
    render(<ProjectCard {...mockProps} github="https://github.com/test" />);
    expect(screen.getByText('GitHub')).toBeInTheDocument();
  });

  it('displays demo link when provided', () => {
    render(<ProjectCard {...mockProps} demo="https://demo.com" />);
    expect(screen.getByText('Demo')).toBeInTheDocument();
  });

  it('github link opens in new tab', () => {
    render(<ProjectCard {...mockProps} github="https://github.com/test" />);
    const githubLink = screen.getByText('GitHub').closest('a');
    expect(githubLink).toHaveAttribute('target', '_blank');
    expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('renders all provided tags', () => {
    render(<ProjectCard {...mockProps} tags={['React', 'TypeScript', 'Next.js', 'Tailwind']} />);
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
    expect(screen.getByText('Next.js')).toBeInTheDocument();
    expect(screen.getByText('Tailwind')).toBeInTheDocument();
  });
});
