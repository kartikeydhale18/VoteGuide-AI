import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Home from './Home';

// Mock the translation hook
vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key) => key,
  }),
}));

describe('Home Component', () => {
  it('renders the hero section correctly', () => {
    render(
      <HelmetProvider>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </HelmetProvider>
    );
    expect(screen.getByText('home.title')).toBeInTheDocument();
    expect(screen.getByText('home.subtitle')).toBeInTheDocument();
    expect(screen.getByText('home.startBtn')).toBeInTheDocument();
  });

  it('renders the feature cards', () => {
    render(
      <HelmetProvider>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </HelmetProvider>
    );
    expect(screen.getByText('home.card1.title')).toBeInTheDocument();
    expect(screen.getByText('home.card2.title')).toBeInTheDocument();
    expect(screen.getByText('home.card3.title')).toBeInTheDocument();
  });
});
