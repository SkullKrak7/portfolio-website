import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import AboutPage from '@/app/about/page';

describe('About Page', () => {
  it('renders page title', () => {
    render(<AboutPage />);
    expect(screen.getByText('About Me')).toBeInTheDocument();
  });

  it('displays journey roadmap section', () => {
    render(<AboutPage />);
    expect(screen.getByText('My Journey')).toBeInTheDocument();
    
    // Check for some key timeline items
    expect(screen.getByText('Operations Intern')).toBeInTheDocument();
    expect(screen.getByText(/Fuse Energy/)).toBeInTheDocument();
    
    expect(screen.getByText('Double Hackathon Winner')).toBeInTheDocument();
    
    expect(screen.getByText('MSc Robotics (Merit)')).toBeInTheDocument();
    expect(screen.getByText('BTech Mechanical Engineering')).toBeInTheDocument();
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
