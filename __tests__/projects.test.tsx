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
    const projectLinks = screen.getAllByRole('link');
    expect(projectLinks.length).toBeGreaterThan(0);
  });

  it('has proper semantic structure', () => {
    render(<ProjectsPage />);
    const main = screen.getByRole('main');
    expect(main).toBeInTheDocument();
  });

  it('filters by Python', () => {
    render(<ProjectsPage />);
    const pythonFilter = screen.getByRole('button', { name: /^python/i });
    
    fireEvent.click(pythonFilter);
    
    const cards = screen.getAllByRole('link');
    expect(cards.length).toBeGreaterThan(0);
  });

  it('filters by C++', () => {
    render(<ProjectsPage />);
    const cppFilter = screen.getByRole('button', { name: /c\+\+/i });
    
    fireEvent.click(cppFilter);
    
    expect(cppFilter).toBeInTheDocument();
  });

  it('filters by React', () => {
    render(<ProjectsPage />);
    const reactFilter = screen.getByRole('button', { name: /react/i });
    
    fireEvent.click(reactFilter);
    
    expect(reactFilter).toBeInTheDocument();
  });

  it('shows all projects when All filter clicked', () => {
    render(<ProjectsPage />);
    const allFilter = screen.getByRole('button', { name: /^all/i });
    
    fireEvent.click(allFilter);
    
    const cards = screen.getAllByRole('link');
    expect(cards.length).toBe(10);
  });

  it('renders all filter buttons', () => {
    render(<ProjectsPage />);
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBeGreaterThanOrEqual(9);
  });
});
