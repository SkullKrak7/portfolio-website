import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import ContactPage from '@/app/contact/page';

describe('Contact Page', () => {
  beforeEach(() => {
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
    const copyButtons = screen.getAllByRole('button');
    const copyButton = copyButtons.find(btn => btn.getAttribute('title') === 'Copy email');
    
    if (copyButton) {
      fireEvent.click(copyButton);
      await waitFor(() => {
        expect(navigator.clipboard.writeText).toHaveBeenCalledWith('sai.kagolanu@yahoo.com');
      });
    }
  });

  it('handles form submission with valid data', async () => {
    render(<ContactPage />);
    
    const nameInput = screen.getByLabelText(/name/i);
    const emailInput = screen.getByLabelText(/email/i);
    const messageInput = screen.getByLabelText(/message/i);
    const submitButton = screen.getByRole('button', { name: /send message/i });
    
    fireEvent.change(nameInput, { target: { value: 'Test User' } });
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(messageInput, { target: { value: 'Test message content' } });
    
    fireEvent.click(submitButton);
    
    await waitFor(() => {
      expect(submitButton).toHaveTextContent(/sending/i);
    });
  });

  it('shows error for empty form submission', async () => {
    render(<ContactPage />);
    const submitButton = screen.getByRole('button', { name: /send message/i });
    
    fireEvent.click(submitButton);
    
    const nameInput = screen.getByLabelText(/name/i) as HTMLInputElement;
    expect(nameInput.validity.valid).toBe(false);
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

  it('has external links with proper attributes', () => {
    render(<ContactPage />);
    const linkedinLink = screen.getByRole('link', { name: /linkedin\.com/i });
    expect(linkedinLink).toHaveAttribute('target', '_blank');
    expect(linkedinLink).toHaveAttribute('rel', 'noopener noreferrer');
  });
});
