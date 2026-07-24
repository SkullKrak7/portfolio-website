import { render, screen } from '@testing-library/react';
import { describe, it, expect, afterEach } from 'vitest';
import Template from '@/app/template';

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

describe('Template', () => {
  afterEach(() => {
    // @ts-expect-error resetting test stub
    delete window.matchMedia;
  });

  it('wraps children in an animated container by default', () => {
    setMatchMedia(false);
    const { container } = render(<Template><p>content</p></Template>);
    expect(screen.getByText('content')).toBeInTheDocument();
    const wrapper = container.firstElementChild as HTMLElement;
    expect(wrapper.tagName).toBe('DIV');
    // After mount, the effect flips opacity to 1 / translateY(0).
    expect(wrapper.style.opacity).toBe('1');
    expect(wrapper.style.transform).toBe('translateY(0)');
  });

  it('renders children directly under reduced motion (no wrapper transition)', () => {
    setMatchMedia(true);
    const { container } = render(<Template><p>plain content</p></Template>);
    expect(screen.getByText('plain content')).toBeInTheDocument();
    // No animated wrapper div — children render as-is.
    expect(container.querySelector('p')?.parentElement).toBe(container);
  });
});
