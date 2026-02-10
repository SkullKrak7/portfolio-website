import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import AboutPage from '@/app/about/page';

describe('About Page', () => {
  it('renders page title', () => {
    render(<AboutPage />);
    expect(screen.getByText('About Me')).toBeInTheDocument();
  });

  it('displays who I am section', () => {
    render(<AboutPage />);
    expect(screen.getByText('Who I Am')).toBeInTheDocument();
    expect(screen.getByText(/MSc Robotics graduate/i)).toBeInTheDocument();
  });

  it('displays skills section', () => {
    render(<AboutPage />);
    expect(screen.getByText('Skills')).toBeInTheDocument();
    expect(screen.getByText('ML & AI')).toBeInTheDocument();
    expect(screen.getByText('Engineering')).toBeInTheDocument();
  });

  it('displays education section', () => {
    render(<AboutPage />);
    expect(screen.getByText('Education')).toBeInTheDocument();
    const roboticsElements = screen.getAllByText(/MSc Robotics/i);
    expect(roboticsElements.length).toBeGreaterThan(0);
    expect(screen.getByText(/BTech/i)).toBeInTheDocument();
  });

  it('has proper semantic structure', () => {
    render(<AboutPage />);
    const main = screen.getByRole('main');
    expect(main).toBeInTheDocument();
  });

  it('displays all skill categories', () => {
    render(<AboutPage />);
    expect(screen.getByText('Python')).toBeInTheDocument();
    expect(screen.getByText('PyTorch')).toBeInTheDocument();
    expect(screen.getByText('C++')).toBeInTheDocument();
    expect(screen.getByText('React')).toBeInTheDocument();
  });
});
