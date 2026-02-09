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

  it('sends metrics via sendBeacon in production', () => {
    process.env.NODE_ENV = 'production';
    const sendBeacon = vi.fn();
    Object.defineProperty(navigator, 'sendBeacon', { value: sendBeacon, writable: true });
    
    render(<WebVitals />);
    
    expect(sendBeacon).toHaveBeenCalledWith('/api/vitals', JSON.stringify({ name: 'CLS', value: 0.1 }));
    
    process.env.NODE_ENV = originalEnv;
  });

  it('falls back to fetch when sendBeacon unavailable', () => {
    process.env.NODE_ENV = 'production';
    Object.defineProperty(navigator, 'sendBeacon', { value: undefined, writable: true });
    global.fetch = vi.fn();
    
    render(<WebVitals />);
    
    expect(global.fetch).toHaveBeenCalledWith('/api/vitals', {
      body: JSON.stringify({ name: 'CLS', value: 0.1 }),
      method: 'POST',
      keepalive: true
    });
    
    process.env.NODE_ENV = originalEnv;
  });
});
