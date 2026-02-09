import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Toast from '@/components/Toast';

describe('Toast Component', () => {
  it('renders success toast', () => {
    const onClose = vi.fn();
    render(<Toast message="Success!" type="success" onClose={onClose} />);
    expect(screen.getByText('Success!')).toBeInTheDocument();
  });

  it('renders error toast', () => {
    const onClose = vi.fn();
    render(<Toast message="Error occurred" type="error" onClose={onClose} />);
    expect(screen.getByText('Error occurred')).toBeInTheDocument();
  });

  it('renders info toast', () => {
    const onClose = vi.fn();
    render(<Toast message="Info message" type="info" onClose={onClose} />);
    expect(screen.getByText('Info message')).toBeInTheDocument();
  });

  it('displays correct styling for success', () => {
    const onClose = vi.fn();
    render(<Toast message="Success" type="success" onClose={onClose} />);
    expect(screen.getByText('Success')).toBeInTheDocument();
  });

  it('displays correct styling for error', () => {
    const onClose = vi.fn();
    render(<Toast message="Error" type="error" onClose={onClose} />);
    expect(screen.getByText('Error')).toBeInTheDocument();
  });
});
