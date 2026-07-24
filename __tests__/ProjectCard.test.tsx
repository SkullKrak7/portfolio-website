import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, afterEach, vi } from 'vitest';
import ProjectCard from '@/components/ProjectCard';

function setMatchMedia(reduced: boolean) {
  window.matchMedia = ((query: string) => ({
    matches: reduced,
    media: query,
    onchange: null,
    addEventListener: () => {},
    removeEventListener: () => {},
    addListener: () => {},
    removeListener: () => {},
    dispatchEvent: () => false,
  })) as unknown as typeof window.matchMedia;
}

describe('ProjectCard', () => {
  const mockProps = {
    slug: 'test-project',
    title: 'Test Project',
    description: 'Test description',
    tags: ['React', 'TypeScript'],
  };

  it('renders project title', () => {
    render(<ProjectCard {...mockProps} />);
    expect(screen.getByText('Test Project')).toBeInTheDocument();
  });

  it('renders project description', () => {
    render(<ProjectCard {...mockProps} />);
    expect(screen.getByText('Test description')).toBeInTheDocument();
  });

  it('renders tags', () => {
    render(<ProjectCard {...mockProps} />);
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
  });

  it('has accessible link', () => {
    render(<ProjectCard {...mockProps} />);
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/projects/test-project');
  });

  it('renders all provided tags', () => {
    render(<ProjectCard {...mockProps} tags={['React', 'TypeScript', 'Next.js', 'Tailwind']} />);
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
    expect(screen.getByText('Next.js')).toBeInTheDocument();
    expect(screen.getByText('Tailwind')).toBeInTheDocument();
  });

  it('entire card is clickable', () => {
    render(<ProjectCard {...mockProps} />);
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/projects/test-project');
  });

  it('has hover effect on title', () => {
    const { container } = render(<ProjectCard {...mockProps} />);
    const link = container.querySelector('a');
    expect(link).toHaveClass('group');
  });

  it('renders no thumbnail when image is not provided', () => {
    const { container } = render(<ProjectCard {...mockProps} />);
    expect(container.querySelector('img')).not.toBeInTheDocument();
  });

  it('renders a decorative thumbnail when image is provided', () => {
    const { container } = render(<ProjectCard {...mockProps} image="/projects/test.png" />);
    const img = container.querySelector('img');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', '/projects/test.png');
    expect(img).toHaveAttribute('alt', '');
    expect(img).toHaveAttribute('loading', 'lazy');
  });

  describe('pointer tilt', () => {
    afterEach(() => {
      vi.restoreAllMocks();
    });

    it('tilts toward the cursor on mouse move and resets on leave', () => {
      setMatchMedia(false);
      const { container } = render(<ProjectCard {...mockProps} />);
      const link = container.querySelector('a') as HTMLAnchorElement;
      vi.spyOn(link, 'getBoundingClientRect').mockReturnValue({
        width: 200,
        height: 100,
        left: 0,
        top: 0,
        right: 200,
        bottom: 100,
        x: 0,
        y: 0,
        toJSON: () => {},
      } as DOMRect);

      expect(link.style.transform).toBe('rotateX(0deg) rotateY(0deg)');
      fireEvent.mouseMove(link, { clientX: 200, clientY: 100 });
      expect(link.style.transform).not.toBe('rotateX(0deg) rotateY(0deg)');

      fireEvent.mouseLeave(link);
      expect(link.style.transform).toBe('rotateX(0deg) rotateY(0deg)');
    });

    it('does not tilt when the user prefers reduced motion', () => {
      setMatchMedia(true);
      const { container } = render(<ProjectCard {...mockProps} />);
      const link = container.querySelector('a') as HTMLAnchorElement;
      fireEvent.mouseMove(link, { clientX: 200, clientY: 100 });
      expect(link.style.transform).toBe('rotateX(0deg) rotateY(0deg)');
    });
  });
});
