import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { useTheme } from 'next-themes';
import Header from '@/components/Header';

vi.mock('next-themes', () => ({
  useTheme: vi.fn(),
}));

function mockTheme(theme: string, setTheme = vi.fn()) {
  vi.mocked(useTheme).mockReturnValue({
    theme,
    setTheme,
    themes: [],
    systemTheme: undefined,
    resolvedTheme: theme,
  } as unknown as ReturnType<typeof useTheme>);
  return setTheme;
}

describe('Header Component', () => {
  beforeEach(() => {
    mockTheme('dark');
  });

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

  it('has an accessible theme toggle control', () => {
    render(<Header />);
    expect(screen.getByRole('button', { name: /theme/i })).toBeInTheDocument();
  });

  it('shows the sun icon and switches to light when the theme is dark', () => {
    const setTheme = mockTheme('dark');
    render(<Header />);
    const button = screen.getByRole('button', { name: /switch to light theme/i });
    fireEvent.click(button);
    expect(setTheme).toHaveBeenCalledWith('light');
  });

  it('shows the moon icon and switches to dark when the theme is light', () => {
    const setTheme = mockTheme('light');
    render(<Header />);
    const button = screen.getByRole('button', { name: /switch to dark theme/i });
    // Moon icon has a distinct path only rendered when isDark is false.
    expect(button.querySelector('path')).toHaveAttribute(
      'd',
      'M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z'
    );
    fireEvent.click(button);
    expect(setTheme).toHaveBeenCalledWith('dark');
  });
});
