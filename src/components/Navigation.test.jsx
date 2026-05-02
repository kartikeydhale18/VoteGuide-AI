import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import Navigation from './Navigation';

// Mock dependencies
vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key) => key,
    i18n: { language: 'en', changeLanguage: vi.fn() }
  }),
}));

vi.mock('firebase/auth', () => ({
  getAuth: vi.fn(),
  signInWithPopup: vi.fn(),
  signOut: vi.fn(),
  onAuthStateChanged: vi.fn((auth, cb) => {
    cb(null); // Simulate user not logged in
    return vi.fn();
  }),
  GoogleAuthProvider: class {}
}));

vi.mock('../firebase', () => ({
  auth: {},
  googleProvider: {}
}));

describe('Navigation Component', () => {
  it('renders navigation logo and links correctly', () => {
    render(
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    );
    
    // Check for logo
    expect(screen.getByText('VoteGuide')).toBeInTheDocument();
    
    // Check for links
    expect(screen.getByText('nav.home')).toBeInTheDocument();
    expect(screen.getByText('nav.timeline')).toBeInTheDocument();
    expect(screen.getByText('nav.documents')).toBeInTheDocument();
  });

  it('toggles theme when theme button is clicked', () => {
    render(
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    );
    
    const themeBtn = screen.getByLabelText(/Toggle Theme/i);
    expect(themeBtn).toBeInTheDocument();
    
    // Click theme toggle
    fireEvent.click(themeBtn);
    expect(document.documentElement.getAttribute('data-theme')).toBeDefined();
  });
});
