import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { HelmetProvider } from 'react-helmet-async';
import Eligibility from './Eligibility';

vi.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key) => key }),
}));

describe('Eligibility Component', () => {
  it('renders eligibility criteria correctly', () => {
    render(
      <HelmetProvider>
        <Eligibility />
      </HelmetProvider>
    );
    expect(screen.getByText('Know Your Eligibility')).toBeInTheDocument();
    expect(screen.getByText(/To register as a voter in India/i)).toBeInTheDocument();
    expect(screen.getByText('Enter your Date of Birth:')).toBeInTheDocument();
  });
});
