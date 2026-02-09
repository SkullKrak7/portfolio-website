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

  it('validates fields on submission', async () => {
    render(<ContactPage />);
    const submitButton = screen.getByRole('button', { name: /send message/i });
    
    fireEvent.click(submitButton);
    
    await waitFor(() => {
      expect(screen.getByText('Please fill in all fields')).toBeInTheDocument();
    });
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
    fireEvent.change(messageInput, { target: { value: 'Test message content that is long enough' } });
    
    fireEvent.click(submitButton);
    
    await waitFor(() => {
      expect(submitButton).toHaveTextContent(/sending/i);
    }, { timeout: 100 });
  });

  it('shows error for empty name', async () => {
    render(<ContactPage />);
    
    const emailInput = screen.getByLabelText(/email/i);
    const messageInput = screen.getByLabelText(/message/i);
    const submitButton = screen.getByRole('button', { name: /send message/i });
    
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(messageInput, { target: { value: 'Test message' } });
    fireEvent.click(submitButton);
    
    const nameInput = screen.getByLabelText(/name/i) as HTMLInputElement;
    expect(nameInput.value).toBe('');
  });

  it('shows error for empty email', async () => {
    render(<ContactPage />);
    
    const nameInput = screen.getByLabelText(/name/i);
    const messageInput = screen.getByLabelText(/message/i);
    const submitButton = screen.getByRole('button', { name: /send message/i });
    
    fireEvent.change(nameInput, { target: { value: 'Test' } });
    fireEvent.change(messageInput, { target: { value: 'Test message' } });
    fireEvent.click(submitButton);
    
    const emailInput = screen.getByLabelText(/email/i) as HTMLInputElement;
    expect(emailInput.value).toBe('');
  });

  it('shows error for empty message', async () => {
    render(<ContactPage />);
    
    const nameInput = screen.getByLabelText(/name/i);
    const emailInput = screen.getByLabelText(/email/i);
    const submitButton = screen.getByRole('button', { name: /send message/i });
    
    fireEvent.change(nameInput, { target: { value: 'Test' } });
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.click(submitButton);
    
    const messageInput = screen.getByLabelText(/message/i) as HTMLInputElement;
    expect(messageInput.value).toBe('');
  });

  it('shows error for empty form submission', async () => {
    render(<ContactPage />);
    const submitButton = screen.getByRole('button', { name: /send message/i });
    
    fireEvent.click(submitButton);
    
    await waitFor(() => {
      expect(screen.getByText('Please fill in all fields')).toBeInTheDocument();
    });
  });

  it('submits form with all fields filled', async () => {
    render(<ContactPage />);
    
    fireEvent.change(screen.getByLabelText(/name/i), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByLabelText(/message/i), { target: { value: 'Test message' } });
    
    const form = screen.getByRole('button', { name: /send message/i }).closest('form');
    fireEvent.submit(form!);
    
    await waitFor(() => {
      expect(screen.getByText(/sending/i)).toBeInTheDocument();
    }, { timeout: 100 });
  });

  it('shows success message after form submission', async () => {
    render(<ContactPage />);
    
    fireEvent.change(screen.getByLabelText(/name/i), { target: { value: 'Test' } });
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'test@test.com' } });
    fireEvent.change(screen.getByLabelText(/message/i), { target: { value: 'Message' } });
    
    const form = screen.getByRole('button', { name: /send message/i }).closest('form');
    fireEvent.submit(form!);
    
    await waitFor(() => {
      expect(screen.getByText('Message sent successfully!')).toBeInTheDocument();
    }, { timeout: 2000 });
  });

  it('closes toast when onClose is called', async () => {
    render(<ContactPage />);
    
    fireEvent.change(screen.getByLabelText(/name/i), { target: { value: 'Test' } });
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'test@test.com' } });
    fireEvent.change(screen.getByLabelText(/message/i), { target: { value: 'Message' } });
    
    const form = screen.getByRole('button', { name: /send message/i }).closest('form');
    fireEvent.submit(form!);
    
    await waitFor(() => {
      expect(screen.getByText('Message sent successfully!')).toBeInTheDocument();
    }, { timeout: 2000 });
    
    // Wait for toast auto-close
    await waitFor(() => {
      expect(screen.queryByText('Message sent successfully!')).not.toBeInTheDocument();
    }, { timeout: 4000 });
  });

  it('shows error message when API call fails', async () => {
    const mockSubmit = vi.fn().mockRejectedValue(new Error('API Error'));
    
    render(<ContactPage onSubmit={mockSubmit} />);
    
    fireEvent.change(screen.getByLabelText(/name/i), { target: { value: 'Test' } });
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'test@test.com' } });
    fireEvent.change(screen.getByLabelText(/message/i), { target: { value: 'Message' } });
    
    const form = screen.getByRole('button', { name: /send message/i }).closest('form');
    fireEvent.submit(form!);
    
    await waitFor(() => {
      expect(screen.getByText('Failed to send message. Please try again.')).toBeInTheDocument();
    });
    
    expect(mockSubmit).toHaveBeenCalledWith({
      name: 'Test',
      email: 'test@test.com',
      message: 'Message'
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

  it('has external links with proper attributes', () => {
    render(<ContactPage />);
    const linkedinLink = screen.getByRole('link', { name: /linkedin\.com/i });
    expect(linkedinLink).toHaveAttribute('target', '_blank');
    expect(linkedinLink).toHaveAttribute('rel', 'noopener noreferrer');
  });
});
