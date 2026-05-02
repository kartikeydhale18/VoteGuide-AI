import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';

describe('App', () => {
  it('renders without crashing', async () => {
    render(
      <HelmetProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </HelmetProvider>
    );
    const elements = await screen.findAllByText(/VoteGuide/i);
    expect(elements.length).toBeGreaterThan(0);
  });
});
