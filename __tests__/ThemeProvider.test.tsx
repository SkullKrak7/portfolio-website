import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ThemeProvider from '@/components/ThemeProvider';

describe('ThemeProvider', () => {
  it('renders its children', () => {
    render(
      <ThemeProvider>
        <p>themed content</p>
      </ThemeProvider>
    );
    expect(screen.getByText('themed content')).toBeInTheDocument();
  });
});
