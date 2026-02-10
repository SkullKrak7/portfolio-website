import { render } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { WebVitals } from '@/components/WebVitals';

vi.mock('next/web-vitals', () => ({
  useReportWebVitals: (callback: (metric: any) => void) => {
    callback({ name: 'CLS', value: 0.1 });
    callback({ name: 'FID', value: 50 });
    callback({ name: 'FCP', value: 1200 });
    callback({ name: 'LCP', value: 2400 });
    callback({ name: 'TTFB', value: 600 });
    callback({ name: 'INP', value: 100 });
  }
}));

describe('WebVitals', () => {
  const originalEnv = process.env.NODE_ENV;

  it('logs metrics in development', () => {
    process.env.NODE_ENV = 'development';
    const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {});
    
    render(<WebVitals />);
    
    expect(consoleSpy).toHaveBeenCalledWith({ name: 'CLS', value: 0.1 });
    expect(consoleSpy).toHaveBeenCalledWith({ name: 'FID', value: 50 });
    expect(consoleSpy).toHaveBeenCalledWith({ name: 'FCP', value: 1200 });
    expect(consoleSpy).toHaveBeenCalledWith({ name: 'LCP', value: 2400 });
    expect(consoleSpy).toHaveBeenCalledWith({ name: 'TTFB', value: 600 });
    expect(consoleSpy).toHaveBeenCalledWith({ name: 'INP', value: 100 });
    
    consoleSpy.mockRestore();
    process.env.NODE_ENV = originalEnv;
  });

  it('does not send metrics in production (handled by Vercel Speed Insights)', () => {
    process.env.NODE_ENV = 'production';
    const sendBeacon = vi.fn();
    Object.defineProperty(navigator, 'sendBeacon', { value: sendBeacon, writable: true });
    global.fetch = vi.fn();
    
    render(<WebVitals />);
    
    // Should not call sendBeacon or fetch - metrics handled by Speed Insights
    expect(sendBeacon).not.toHaveBeenCalled();
    expect(global.fetch).not.toHaveBeenCalled();
    
    process.env.NODE_ENV = originalEnv;
  });

  it('renders without errors', () => {
    const { container } = render(<WebVitals />);
    expect(container).toBeTruthy();
  });
});
