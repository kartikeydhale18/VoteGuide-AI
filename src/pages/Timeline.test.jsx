import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { HelmetProvider } from 'react-helmet-async';
import Timeline from './Timeline';

vi.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key) => key }),
}));
vi.mock('firebase/auth', () => ({
  onAuthStateChanged: vi.fn((auth, cb) => {
    cb(null);
    return vi.fn();
  })
}));
vi.mock('../firebase', () => ({ auth: {}, googleProvider: {} }));
vi.mock('../utils/db', () => ({
  loadUserProgress: vi.fn(),
  saveTimelineProgress: vi.fn()
}));
vi.mock('../utils/calendar', () => ({ addEventToCalendar: vi.fn() }));

describe('Timeline Component', () => {
  it('renders all election phases', () => {
    render(
      <HelmetProvider>
        <Timeline />
      </HelmetProvider>
    );
    expect(screen.getByText('time.title')).toBeInTheDocument();
    // Phase titles from translation keys
    expect(screen.getByText('time.p1Title')).toBeInTheDocument();
    expect(screen.getByText('time.p7Title')).toBeInTheDocument();
  });
});
