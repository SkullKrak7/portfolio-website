import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Footer from '@/components/Footer';

describe('Footer Component', () => {
  it('renders copyright text', () => {
    render(<Footer />);
    expect(screen.getByText(/© 2026 Sai Karthik Kagolanu/i)).toBeInTheDocument();
  });

  it('displays social links', () => {
    render(<Footer />);
    expect(screen.getByRole('link', { name: /github/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /linkedin/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /email/i })).toBeInTheDocument();
  });

  it('has correct external links', () => {
    render(<Footer />);
    const githubLink = screen.getByRole('link', { name: /github/i });
    expect(githubLink).toHaveAttribute('href', 'https://github.com/SkullKrak7');
    expect(githubLink).toHaveAttribute('target', '_blank');
    expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('has email link', () => {
    render(<Footer />);
    const emailLink = screen.getByRole('link', { name: /email/i });
    expect(emailLink).toHaveAttribute('href', 'mailto:sai.kagolanu@yahoo.com');
  });

  it('renders as footer element', () => {
    const { container } = render(<Footer />);
    const footer = container.querySelector('footer');
    expect(footer).toBeInTheDocument();
  });
});
