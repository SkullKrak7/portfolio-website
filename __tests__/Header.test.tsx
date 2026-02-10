import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Header from '@/components/Header';

describe('Header Component', () => {
  it('renders site logo', () => {
    render(<Header />);
    expect(screen.getByText('SK')).toBeInTheDocument();
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
    
    const aboutLink = screen.getByRole('link', { name: /about/i });
    expect(aboutLink).toHaveAttribute('href', '/about');
    
    const contactLink = screen.getByRole('link', { name: /contact/i });
    expect(contactLink).toHaveAttribute('href', '/contact');
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

  it('handles hover on navigation links', () => {
    render(<Header />);
    const homeLink = screen.getByRole('link', { name: /home/i });
    
    fireEvent.mouseEnter(homeLink);
    fireEvent.mouseLeave(homeLink);
    
    expect(homeLink).toBeInTheDocument();
  });

  it('logo is a link', () => {
    render(<Header />);
    const logo = screen.getByText('SK');
    expect(logo.closest('a')).toHaveAttribute('href', '/');
  });
});
