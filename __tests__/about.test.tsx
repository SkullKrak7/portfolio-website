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

  it('skill category headings are text-only, with no emoji', () => {
    render(<AboutPage />);
    expect(screen.getByText('ML & Data')).toBeInTheDocument();
    expect(screen.getByText('Backend & Engineering')).toBeInTheDocument();
    expect(screen.getByText('Infrastructure & DevOps')).toBeInTheDocument();
    expect(screen.getByText('Frontend')).toBeInTheDocument();
  });

  it('timeline uses a plain dot marker instead of emoji icons', () => {
    const { container } = render(<AboutPage />);
    expect(container.textContent).not.toMatch(/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}]/u);
    // 7 roadmap entries, each with an aria-hidden dot marker.
    const markers = container.querySelectorAll('[aria-hidden="true"]');
    expect(markers.length).toBe(7);
  });
});
