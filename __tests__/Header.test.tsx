import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Header from '@/components/Header';

describe('Header Component', () => {
  it('renders site logo', () => {
    render(<Header />);
    expect(screen.getByText('Sai Karthik')).toBeInTheDocument();
  });

  it('displays all navigation links', () => {
    render(<Header />);
    expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /projects/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /about/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /contact/i })).toBeInTheDocument();
  });

  it('has correct navigation links', () => {
    render(<Header />);
    const homeLink = screen.getByRole('link', { name: /home/i });
    expect(homeLink).toHaveAttribute('href', '/');
    
    const projectsLink = screen.getByRole('link', { name: /projects/i });
    expect(projectsLink).toHaveAttribute('href', '/projects');
  });

  it('renders as header element', () => {
    const { container } = render(<Header />);
    const header = container.querySelector('header');
    expect(header).toBeInTheDocument();
  });

  it('has navigation element', () => {
    render(<Header />);
    const nav = screen.getByRole('navigation');
    expect(nav).toBeInTheDocument();
  });
});
