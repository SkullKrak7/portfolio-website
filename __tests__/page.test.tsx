import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Home from '@/app/page';

describe('Home Page', () => {
  it('renders hero section with name', () => {
    render(<Home />);
    expect(screen.getByText(/Sai Karthik Kagolanu/i)).toBeInTheDocument();
  });

  it('displays role title', () => {
    render(<Home />);
    expect(screen.getByText(/ML Engineer & Robotics Graduate/i)).toBeInTheDocument();
  });

  it('shows availability badge', () => {
    render(<Home />);
    expect(screen.getByText(/Available for opportunities/i)).toBeInTheDocument();
  });

  it('displays stats section', () => {
    render(<Home />);
    expect(screen.getByText('10')).toBeInTheDocument();
    expect(screen.getByText('Projects')).toBeInTheDocument();
    expect(screen.getByText('17K+')).toBeInTheDocument();
    expect(screen.getByText('Lines of Code')).toBeInTheDocument();
  });

  it('shows featured projects section', () => {
    render(<Home />);
    expect(screen.getByText('Featured Projects')).toBeInTheDocument();
    expect(screen.getByText('RAG Demo')).toBeInTheDocument();
    expect(screen.getByText('CV Suite')).toBeInTheDocument();
    expect(screen.getByText('Retail Odyssey')).toBeInTheDocument();
  });

  it('has CTA buttons', () => {
    render(<Home />);
    expect(screen.getByRole('link', { name: /view projects/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /download cv/i })).toBeInTheDocument();
  });

  it('has proper semantic structure', () => {
    render(<Home />);
    const main = screen.getByRole('main');
    expect(main).toBeInTheDocument();
    expect(main).toHaveAttribute('id', 'main-content');
  });

  it('displays all stats correctly', () => {
    render(<Home />);
    expect(screen.getByText('95%+')).toBeInTheDocument();
    expect(screen.getByText('Test Coverage')).toBeInTheDocument();
    expect(screen.getByText('2x')).toBeInTheDocument();
    expect(screen.getByText('Hackathon Winner')).toBeInTheDocument();
  });

  it('has skip to main content link', () => {
    render(<Home />);
    const skipLink = screen.getByText(/skip to main content/i);
    expect(skipLink).toBeInTheDocument();
    expect(skipLink.closest('a')).toHaveAttribute('href', '#main-content');
  });

  it('featured projects have learn more links', () => {
    render(<Home />);
    const learnMoreLinks = screen.getAllByText(/learn more/i);
    expect(learnMoreLinks.length).toBe(3);
  });

  it('CV download link has correct attributes', () => {
    render(<Home />);
    const cvLink = screen.getByRole('link', { name: /download cv/i });
    expect(cvLink).toHaveAttribute('href', '/resume.pdf');
    expect(cvLink).toHaveAttribute('download');
  });

  it('projects link navigates correctly', () => {
    render(<Home />);
    const projectsLink = screen.getByRole('link', { name: /view projects/i });
    expect(projectsLink).toHaveAttribute('href', '/projects');
  });

  it('displays project tags', () => {
    render(<Home />);
    expect(screen.getByText('96% Coverage')).toBeInTheDocument();
    expect(screen.getByText('Winner')).toBeInTheDocument();
    expect(screen.getByText('Gemini')).toBeInTheDocument();
  });
});
