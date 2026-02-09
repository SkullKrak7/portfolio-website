import { render } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { WebVitals } from '@/components/WebVitals';

// Mock next/web-vitals
vi.mock('next/web-vitals', () => ({
  useReportWebVitals: vi.fn((callback) => {
    callback({ name: 'CLS', value: 0.1, rating: 'good' });
  }),
}));

describe('WebVitals Component', () => {
  it('renders without crashing', () => {
    const { container } = render(<WebVitals />);
    expect(container).toBeInTheDocument();
  });

  it('component mounts successfully', () => {
    const { container } = render(<WebVitals />);
    expect(container).toBeTruthy();
  });
});
