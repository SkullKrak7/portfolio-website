import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Home from '@/app/page';

describe('Home Page', () => {
  it('renders hero section', () => {
    render(<Home />);
    expect(screen.getByText(/Sai Karthik Kagolanu/i)).toBeInTheDocument();
  });

  it('displays stats', () => {
    render(<Home />);
    expect(screen.getByText('10')).toBeInTheDocument();
    expect(screen.getByText('Projects')).toBeInTheDocument();
  });

  it('has main content', () => {
    render(<Home />);
    const main = screen.getByRole('main');
    expect(main).toBeInTheDocument();
  });
});
