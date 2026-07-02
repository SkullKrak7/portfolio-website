import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ProjectsPage from '@/app/projects/page';

describe('Projects Page', () => {
  it('renders page title', () => {
    render(<ProjectsPage />);
    expect(screen.getByText('All Projects')).toBeInTheDocument();
  });

  it('displays project count', () => {
    render(<ProjectsPage />);
    expect(screen.getByText(/13 projects/i)).toBeInTheDocument();
  });

  it('shows project cards', () => {
    render(<ProjectsPage />);
    const projectLinks = screen.getAllByRole('link');
    expect(projectLinks.length).toBeGreaterThan(0);
  });

  it('has proper semantic structure', () => {
    render(<ProjectsPage />);
    const main = screen.getByRole('main');
    expect(main).toBeInTheDocument();
  });
});
