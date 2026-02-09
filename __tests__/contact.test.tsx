import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import ContactPage from '@/app/contact/page';

describe('Contact Page', () => {
  beforeEach(() => {
    // Mock clipboard API
    Object.defineProperty(navigator, 'clipboard', {
      value: {
        writeText: vi.fn(() => Promise.resolve()),
      },
      writable: true,
    });
    vi.clearAllMocks();
  });

  it('renders page title', () => {
    render(<ContactPage />);
    expect(screen.getByText('Get in Touch')).toBeInTheDocument();
  });

  it('displays contact form', () => {
    render(<ContactPage />);
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
  });

  it('displays email and LinkedIn cards', () => {
    render(<ContactPage />);
    expect(screen.getByText('Email')).toBeInTheDocument();
    expect(screen.getByText('LinkedIn')).toBeInTheDocument();
    expect(screen.getByText('sai.kagolanu@yahoo.com')).toBeInTheDocument();
  });

  it('validates required fields', async () => {
    render(<ContactPage />);
    const submitButton = screen.getByRole('button', { name: /send message/i });
    
    fireEvent.click(submitButton);
    
    const nameInput = screen.getByLabelText(/name/i) as HTMLInputElement;
    expect(nameInput.required).toBe(true);
  });

  it('copies email to clipboard', async () => {
    render(<ContactPage />);
    const copyButton = screen.getAllByRole('button')[1]; // Second button is copy
    
    fireEvent.click(copyButton);
    
    await waitFor(() => {
      expect(navigator.clipboard.writeText).toHaveBeenCalledWith('sai.kagolanu@yahoo.com');
    });
  });

  it('has proper form structure', () => {
    render(<ContactPage />);
    const form = screen.getByRole('button', { name: /send message/i }).closest('form');
    expect(form).toBeInTheDocument();
  });

  it('displays submit button', () => {
    render(<ContactPage />);
    const submitButton = screen.getByRole('button', { name: /send message/i });
    expect(submitButton).toBeInTheDocument();
    expect(submitButton).not.toBeDisabled();
  });
});
