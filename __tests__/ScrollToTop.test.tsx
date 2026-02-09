import { render } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import ScrollToTop from '@/components/ScrollToTop';

describe('ScrollToTop Component', () => {
  beforeEach(() => {
    window.scrollTo = vi.fn();
    Object.defineProperty(window, 'scrollY', {
      writable: true,
      value: 0,
    });
  });

  it('renders without crashing', () => {
    const { container } = render(<ScrollToTop />);
    expect(container).toBeInTheDocument();
  });

  it('does not show button when not scrolled', () => {
    const { container } = render(<ScrollToTop />);
    expect(container.firstChild).toBeNull();
  });
});
