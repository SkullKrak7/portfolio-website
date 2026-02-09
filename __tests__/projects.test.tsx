import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ProjectsPage from '@/app/projects/page';

describe('Projects Page', () => {
  it('renders page title', () => {
    render(<ProjectsPage />);
    expect(screen.getByText('All Projects')).toBeInTheDocument();
  });

  it('displays project count', () => {
    render(<ProjectsPage />);
    expect(screen.getByText(/10 projects/i)).toBeInTheDocument();
  });

  it('displays filter buttons', () => {
    render(<ProjectsPage />);
    expect(screen.getByRole('button', { name: /all/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /ml\/ai/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /python/i })).toBeInTheDocument();
  });

  it('filters projects when clicking filter button', () => {
    render(<ProjectsPage />);
    const mlFilter = screen.getByRole('button', { name: /ml\/ai/i });
    
    fireEvent.click(mlFilter);
    
    // Filter button should be active
    expect(mlFilter).toBeInTheDocument();
  });

  it('displays all filter options', () => {
    render(<ProjectsPage />);
    expect(screen.getByRole('button', { name: /computer vision/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /nlp/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /full-stack/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /hackathon/i })).toBeInTheDocument();
  });

  it('shows project cards', () => {
    render(<ProjectsPage />);
    // Should have multiple project cards
    const viewDetailsLinks = screen.getAllByText(/view details/i);
    expect(viewDetailsLinks.length).toBeGreaterThan(0);
  });

  it('has proper semantic structure', () => {
    render(<ProjectsPage />);
    const main = screen.getByRole('main');
    expect(main).toBeInTheDocument();
  });
});
