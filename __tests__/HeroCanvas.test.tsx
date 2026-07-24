import { render, cleanup } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import HeroCanvas from '@/components/HeroCanvas';

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

function makeFakeCtx() {
  return {
    fillStyle: '',
    globalAlpha: 1,
    strokeStyle: '',
    lineWidth: 1,
    clearRect: vi.fn(),
    beginPath: vi.fn(),
    arc: vi.fn(),
    fill: vi.fn(),
    moveTo: vi.fn(),
    lineTo: vi.fn(),
    stroke: vi.fn(),
    setTransform: vi.fn(),
  };
}

// Controllable ResizeObserver: captures the callback so a test can simulate a resize.
let roCallback: (() => void) | null = null;
let roObserved = false;
let roDisconnected = false;
class MockRO {
  constructor(cb: () => void) {
    roCallback = cb;
  }
  observe() {
    roObserved = true;
  }
  disconnect() {
    roDisconnected = true;
  }
}

// Controllable requestAnimationFrame: captures the latest callback and hands out
// incrementing ids so cancelAnimationFrame calls can be observed too.
function stubRaf() {
  let nextId = 1;
  const pending = new Map<number, FrameRequestCallback>();
  const raf = vi.fn((cb: FrameRequestCallback) => {
    const id = nextId++;
    pending.set(id, cb);
    return id;
  });
  const caf = vi.fn((id: number) => {
    pending.delete(id);
  });
  vi.stubGlobal('requestAnimationFrame', raf as unknown as typeof requestAnimationFrame);
  vi.stubGlobal('cancelAnimationFrame', caf as unknown as typeof cancelAnimationFrame);
  return {
    raf,
    caf,
    runFrame(now: number) {
      // Run every callback currently scheduled (simulates the browser firing a frame).
      const callbacks = Array.from(pending.values());
      pending.clear();
      callbacks.forEach((cb) => cb(now));
    },
  };
}

describe('HeroCanvas', () => {
  beforeEach(() => {
    roCallback = null;
    roObserved = false;
    roDisconnected = false;
    setMatchMedia(false);
    vi.stubGlobal('ResizeObserver', MockRO as unknown as typeof ResizeObserver);
  });

  afterEach(() => {
    cleanup();
    vi.unstubAllGlobals();
    vi.restoreAllMocks();
  });

  it('renders nothing when the canvas has no 2d context', () => {
    vi.spyOn(HTMLCanvasElement.prototype, 'getContext').mockReturnValue(null);
    const { container } = render(<HeroCanvas />);
    expect(container.querySelector('canvas')).not.toBeInTheDocument();
  });

  it('draws a single static frame under reduced motion and never schedules rAF', () => {
    setMatchMedia(true);
    const ctx = makeFakeCtx();
    vi.spyOn(HTMLCanvasElement.prototype, 'getContext').mockReturnValue(
      ctx as unknown as CanvasRenderingContext2D
    );
    const { raf } = stubRaf();
    vi.spyOn(Element.prototype, 'getBoundingClientRect').mockReturnValue({
      width: 200,
      height: 150,
      top: 0,
      left: 0,
      right: 200,
      bottom: 150,
      x: 0,
      y: 0,
      toJSON() {
        return {};
      },
    });

    const { container } = render(<HeroCanvas />);
    expect(container.querySelector('canvas')).toBeInTheDocument();
    expect(ctx.clearRect).toHaveBeenCalled();
    expect(ctx.fill).toHaveBeenCalled();
    // Reduced motion draws exactly one static frame; no animation loop is started.
    expect(raf).not.toHaveBeenCalled();
  });

  it('animates particles, links nearby ones, bounces off the canvas edges, and pauses/resumes on visibility change', () => {
    const ctx = makeFakeCtx();
    vi.spyOn(HTMLCanvasElement.prototype, 'getContext').mockReturnValue(
      ctx as unknown as CanvasRenderingContext2D
    );
    vi.spyOn(Element.prototype, 'getBoundingClientRect').mockReturnValue({
      width: 200,
      height: 200,
      top: 0,
      left: 0,
      right: 200,
      bottom: 200,
      x: 0,
      y: 0,
      toJSON() {
        return {};
      },
    });

    // Deterministic particle field: particle 0 starts pinned near the right/bottom
    // edge moving further out (bounces both x and y); particle 1 starts near the
    // top-left edge moving further out the other way (bounces both x and y the
    // other direction); particle 2 sits in an empty corner (far from the rest, so
    // some pair distances exceed the link threshold); everyone else clusters at
    // the same point (in bounds the whole time, and close enough to link).
    const overrides: Record<number, number[]> = {
      0: [0.9995, 0.5, 0.995, 0.5],
      1: [0.0005, 0.9995, 0.005, 0.995],
      2: [0, 0, 0.5, 0.5],
    };
    const clusterVals = [0.75, 0.75, 0.5, 0.5];
    let callIdx = 0;
    vi.spyOn(Math, 'random').mockImplementation(() => {
      const particleIdx = Math.floor(callIdx / 4);
      const slot = callIdx % 4;
      callIdx += 1;
      const vals = overrides[particleIdx] ?? clusterVals;
      return vals[slot];
    });

    const { raf, caf, runFrame } = stubRaf();

    const { container, unmount } = render(<HeroCanvas />);
    expect(container.querySelector('canvas')).toBeInTheDocument();
    expect(raf).toHaveBeenCalledTimes(1);

    // Drive a handful of animation frames.
    runFrame(16);
    runFrame(32);
    runFrame(48);

    expect(ctx.clearRect).toHaveBeenCalled();
    expect(ctx.stroke).toHaveBeenCalled(); // some pair was within LINK_DISTANCE
    expect(ctx.arc).toHaveBeenCalled();

    // Pause via visibilitychange (document.hidden = true): the in-flight frame
    // should not reschedule itself.
    Object.defineProperty(document, 'hidden', { configurable: true, get: () => true });
    document.dispatchEvent(new Event('visibilitychange'));
    const rafCallsBeforePause = raf.mock.calls.length;
    runFrame(64);
    expect(raf.mock.calls.length).toBe(rafCallsBeforePause);

    // Resume via visibilitychange (document.hidden = false): since a frame is
    // already scheduled from the last draw, nothing new needs to be queued, but
    // the handler still runs its guard branch.
    Object.defineProperty(document, 'hidden', { configurable: true, get: () => false });
    document.dispatchEvent(new Event('visibilitychange'));

    // Trigger a resize through the (mocked) ResizeObserver callback.
    expect(roObserved).toBe(true);
    expect(typeof roCallback).toBe('function');
    roCallback!();

    unmount();
    expect(caf).toHaveBeenCalled();
    expect(roDisconnected).toBe(true);
  });

  it('falls back to devicePixelRatio=1 and clientWidth/clientHeight when the rect and dpr are unavailable', () => {
    const ctx = makeFakeCtx();
    vi.spyOn(HTMLCanvasElement.prototype, 'getContext').mockReturnValue(
      ctx as unknown as CanvasRenderingContext2D
    );
    // No real devicePixelRatio: exercises the `window.devicePixelRatio || 1` fallback.
    Object.defineProperty(window, 'devicePixelRatio', { configurable: true, value: 0 });
    // rect with nullish width/height: exercises the `rect?.width ?? canvas.clientWidth` fallback.
    vi.spyOn(Element.prototype, 'getBoundingClientRect').mockReturnValue({
      width: undefined as unknown as number,
      height: undefined as unknown as number,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      x: 0,
      y: 0,
      toJSON() {
        return {};
      },
    });
    const { raf, runFrame } = stubRaf();

    render(<HeroCanvas />);
    expect(raf).toHaveBeenCalled();
    runFrame(16);
    expect(ctx.clearRect).toHaveBeenCalled();
  });

  it('does not double-schedule a frame if resumed while one is still pending', () => {
    const ctx = makeFakeCtx();
    vi.spyOn(HTMLCanvasElement.prototype, 'getContext').mockReturnValue(
      ctx as unknown as CanvasRenderingContext2D
    );
    vi.spyOn(Element.prototype, 'getBoundingClientRect').mockReturnValue({
      width: 100,
      height: 100,
      top: 0,
      left: 0,
      right: 100,
      bottom: 100,
      x: 0,
      y: 0,
      toJSON() {
        return {};
      },
    });
    const { raf } = stubRaf();

    render(<HeroCanvas />);
    expect(raf).toHaveBeenCalledTimes(1);

    // Pause and resume back-to-back with no frame executing in between: the
    // rafId sentinel is still a real (non-zero) id from the initial schedule, so
    // the resume guard's "already scheduled, do nothing" branch takes effect.
    Object.defineProperty(document, 'hidden', { configurable: true, get: () => true });
    document.dispatchEvent(new Event('visibilitychange'));
    Object.defineProperty(document, 'hidden', { configurable: true, get: () => false });
    document.dispatchEvent(new Event('visibilitychange'));

    expect(raf).toHaveBeenCalledTimes(1);
  });

  it('falls back to a window resize listener when ResizeObserver is unavailable', () => {
    vi.stubGlobal('ResizeObserver', undefined);
    const ctx = makeFakeCtx();
    vi.spyOn(HTMLCanvasElement.prototype, 'getContext').mockReturnValue(
      ctx as unknown as CanvasRenderingContext2D
    );
    vi.spyOn(Element.prototype, 'getBoundingClientRect').mockReturnValue({
      width: 100,
      height: 100,
      top: 0,
      left: 0,
      right: 100,
      bottom: 100,
      x: 0,
      y: 0,
      toJSON() {
        return {};
      },
    });
    const { raf, runFrame } = stubRaf();
    const addSpy = vi.spyOn(window, 'addEventListener');
    const removeSpy = vi.spyOn(window, 'removeEventListener');

    const { unmount } = render(<HeroCanvas />);
    expect(addSpy).toHaveBeenCalledWith('resize', expect.any(Function));

    runFrame(16);
    expect(raf).toHaveBeenCalled();

    window.dispatchEvent(new Event('resize'));

    unmount();
    expect(removeSpy).toHaveBeenCalledWith('resize', expect.any(Function));
  });
});
