import { render, screen, fireEvent, act } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import ScrollToTop from '@/components/ScrollToTop';

describe('ScrollToTop', () => {
  beforeEach(() => {
    window.scrollTo = vi.fn();
    Object.defineProperty(window, 'scrollY', { writable: true, value: 0 });
  });

  it('hides when scroll is below threshold', () => {
    render(<ScrollToTop />);
    expect(screen.queryByLabelText('Scroll to top')).not.toBeInTheDocument();
  });

  it('shows when scrolled past 300px', () => {
    render(<ScrollToTop />);
    act(() => {
      Object.defineProperty(window, 'scrollY', { writable: true, value: 400 });
      fireEvent.scroll(window);
    });
    expect(screen.getByLabelText('Scroll to top')).toBeInTheDocument();
  });

  it('scrolls to top when clicked', () => {
    render(<ScrollToTop />);
    act(() => {
      Object.defineProperty(window, 'scrollY', { writable: true, value: 400 });
      fireEvent.scroll(window);
    });
    fireEvent.click(screen.getByLabelText('Scroll to top'));
    expect(window.scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });
  });
});
