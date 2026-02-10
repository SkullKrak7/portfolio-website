import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import Toast from '@/components/Toast';

describe('Toast', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('renders success toast', () => {
    render(<Toast message="Success!" type="success" onClose={vi.fn()} />);
    expect(screen.getByText('Success!')).toBeInTheDocument();
  });

  it('renders error toast', () => {
    render(<Toast message="Error!" type="error" onClose={vi.fn()} />);
    expect(screen.getByText('Error!')).toBeInTheDocument();
  });

  it('renders info toast', () => {
    render(<Toast message="Info!" type="info" onClose={vi.fn()} />);
    expect(screen.getByText('Info!')).toBeInTheDocument();
  });

  it('calls onClose after timeout', async () => {
    const onClose = vi.fn();
    const { rerender } = render(<Toast message="Test" onClose={onClose} />);
    
    await vi.advanceTimersByTimeAsync(3000);
    expect(onClose).not.toHaveBeenCalled();
    
    await vi.advanceTimersByTimeAsync(300);
    expect(onClose).toHaveBeenCalled();
  });

  it('defaults to success type', () => {
    const { container } = render(<Toast message="Default" onClose={vi.fn()} />);
    expect(container.querySelector('.bg-green-600')).toBeInTheDocument();
  });
});
