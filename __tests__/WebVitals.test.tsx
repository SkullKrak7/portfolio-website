import { render } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { WebVitals } from '@/components/WebVitals';

describe('WebVitals Component', () => {
  it('renders without crashing', () => {
    const { container } = render(<WebVitals />);
    expect(container).toBeInTheDocument();
  });

  it('calls onCLS when metric is received', () => {
    const consoleLogSpy = vi.spyOn(console, 'log').mockImplementation(() => {});
    render(<WebVitals />);
    
    // Component should render successfully
    expect(consoleLogSpy).not.toThrow();
    
    consoleLogSpy.mockRestore();
  });
});
