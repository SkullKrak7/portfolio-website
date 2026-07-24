import { render, screen, act } from '@testing-library/react';
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import Reveal from '@/components/Reveal';

let ioCallback: ((entries: unknown[]) => void) | null = null;
let observed = false;
class MockIO {
  constructor(cb: (entries: unknown[]) => void) {
    ioCallback = cb;
  }
  observe() {
    observed = true;
  }
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

describe('Reveal', () => {
  beforeEach(() => {
    ioCallback = null;
    observed = false;
    setMatchMedia(false);
    vi.stubGlobal('IntersectionObserver', MockIO as unknown as typeof IntersectionObserver);
  });

  afterEach(() => {
    vi.unstubAllGlobals();
    vi.restoreAllMocks();
  });

  it('always renders its children in the DOM', () => {
    render(<Reveal><p>hello reveal</p></Reveal>);
    expect(screen.getByText('hello reveal')).toBeInTheDocument();
  });

  it('starts hidden then reveals when intersecting', () => {
    render(<Reveal><p>reveal me</p></Reveal>);
    const wrapper = screen.getByText('reveal me').parentElement as HTMLElement;
    expect(observed).toBe(true);
    expect(wrapper.style.opacity).toBe('0');

    act(() => {
      ioCallback!([{ isIntersecting: true, target: wrapper }]);
    });
    expect(wrapper.style.opacity).toBe('1');
  });

  it('honors a stagger delay via a timer', () => {
    vi.useFakeTimers();
    render(<Reveal delay={200}><p>delayed</p></Reveal>);
    const wrapper = screen.getByText('delayed').parentElement as HTMLElement;
    act(() => {
      ioCallback!([{ isIntersecting: true, target: wrapper }]);
    });
    expect(wrapper.style.opacity).toBe('0');
    act(() => {
      vi.advanceTimersByTime(200);
    });
    expect(wrapper.style.opacity).toBe('1');
    vi.useRealTimers();
  });

  it('stays hidden when an intersection entry is not intersecting', () => {
    render(<Reveal><p>not yet</p></Reveal>);
    const wrapper = screen.getByText('not yet').parentElement as HTMLElement;
    expect(wrapper.style.opacity).toBe('0');
    act(() => {
      ioCallback!([{ isIntersecting: false, target: wrapper }]);
    });
    expect(wrapper.style.opacity).toBe('0');
  });

  it('clears the pending delay timer if unmounted before it fires', () => {
    const clearSpy = vi.spyOn(globalThis, 'clearTimeout');
    const { unmount } = render(<Reveal delay={300}><p>staggered</p></Reveal>);
    const wrapper = screen.getByText('staggered').parentElement as HTMLElement;
    act(() => {
      ioCallback!([{ isIntersecting: true, target: wrapper }]);
    });
    // A timeout is now pending (delay > 0); unmounting should clear it.
    unmount();
    expect(clearSpy).toHaveBeenCalled();
  });

  it('stays visible under reduced motion', () => {
    setMatchMedia(true);
    render(<Reveal><p>no anim</p></Reveal>);
    const wrapper = screen.getByText('no anim').parentElement as HTMLElement;
    expect(wrapper.style.opacity).toBe('1');
  });

  it('stays visible when IntersectionObserver is unavailable', () => {
    vi.stubGlobal('IntersectionObserver', undefined);
    render(<Reveal><p>fallback</p></Reveal>);
    const wrapper = screen.getByText('fallback').parentElement as HTMLElement;
    expect(wrapper.style.opacity).toBe('1');
  });
});
