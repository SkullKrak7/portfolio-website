import { render, screen } from '@testing-library/react';
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import CountUp from '@/components/CountUp';

// Controllable IntersectionObserver: capture the callback so a test can drive intersection.
let ioCallback: ((entries: unknown[]) => void) | null = null;
class MockIO {
  constructor(cb: (entries: unknown[]) => void) {
    ioCallback = cb;
  }
  observe() {}
  unobserve() {}
  disconnect() {}
}

function setMatchMedia(reduced: boolean) {
  window.matchMedia = ((query: string) => ({
    matches: reduced,
    media: query,
    onchange: null,
    addEventListener: () => {},
    removeEventListener: () => {},
    addListener: () => {},
    removeListener: () => {},
    dispatchEvent: () => false,
  })) as unknown as typeof window.matchMedia;
}

describe('CountUp', () => {
  beforeEach(() => {
    ioCallback = null;
    setMatchMedia(false);
    vi.stubGlobal('IntersectionObserver', MockIO as unknown as typeof IntersectionObserver);
  });

  afterEach(() => {
    vi.unstubAllGlobals();
    vi.restoreAllMocks();
  });

  it('renders the final value before any intersection (SSR/test-safe default)', () => {
    render(<CountUp value={74} suffix="%" />);
    expect(screen.getByText('74%')).toBeInTheDocument();
  });

  it('supports prefix and suffix', () => {
    render(<CountUp value={2} suffix="x" prefix="~" />);
    expect(screen.getByText('~2x')).toBeInTheDocument();
  });

  it('animates to the final value once scrolled into view', () => {
    // Make the rAF loop complete in a single frame by reporting a timestamp past the duration.
    vi.spyOn(performance, 'now').mockReturnValue(0);
    vi.stubGlobal('requestAnimationFrame', ((cb: FrameRequestCallback) => {
      cb(10_000);
      return 1;
    }) as unknown as typeof requestAnimationFrame);

    render(<CountUp value={13} />);
    expect(ioCallback).toBeTypeOf('function');
    ioCallback!([{ isIntersecting: true, target: document.createElement('span') }]);

    expect(screen.getByText('13')).toBeInTheDocument();
  });

  it('does not animate and shows the final value under reduced motion', () => {
    setMatchMedia(true);
    render(<CountUp value={23} suffix="%" />);
    // Even if a stray intersection fires, reduced-motion means no observer was created.
    expect(screen.getByText('23%')).toBeInTheDocument();
  });

  it('re-schedules another frame mid-animation before completing', () => {
    vi.spyOn(performance, 'now').mockReturnValue(0);
    let frame = 0;
    vi.stubGlobal('requestAnimationFrame', ((cb: FrameRequestCallback) => {
      frame += 1;
      if (frame === 1) {
        // Mid-animation: progress < 1, so the component must schedule another frame.
        cb(500);
      } else {
        // Second frame: past the duration, animation completes.
        cb(10_000);
      }
      return frame;
    }) as unknown as typeof requestAnimationFrame);

    render(<CountUp value={50} durationMs={1400} />);
    ioCallback!([{ isIntersecting: true, target: document.createElement('span') }]);

    expect(frame).toBe(2);
    expect(screen.getByText('50')).toBeInTheDocument();
  });

  it('ignores a non-intersecting entry and stays at the final value', () => {
    render(<CountUp value={42} />);
    ioCallback!([{ isIntersecting: false, target: document.createElement('span') }]);
    expect(screen.getByText('42')).toBeInTheDocument();
  });

  it('shows the final value when IntersectionObserver is unavailable', () => {
    vi.stubGlobal('IntersectionObserver', undefined);
    render(<CountUp value={100} suffix="%" />);
    expect(screen.getByText('100%')).toBeInTheDocument();
  });
});
