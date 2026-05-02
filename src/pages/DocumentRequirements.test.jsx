import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { HelmetProvider } from 'react-helmet-async';
import DocumentRequirements from './DocumentRequirements';

vi.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key) => key }),
}));
vi.mock('firebase/auth', () => ({
  onAuthStateChanged: vi.fn((auth, cb) => {
    cb(null);
    return vi.fn();
  })
}));
vi.mock('../firebase', () => ({ auth: {} }));
vi.mock('../utils/db', () => ({
  loadUserProgress: vi.fn(),
  saveDocumentProgress: vi.fn()
}));

describe('DocumentRequirements Component', () => {
  it('renders document checklists correctly', () => {
    render(
      <HelmetProvider>
        <DocumentRequirements />
      </HelmetProvider>
    );
    expect(screen.getByText('docs.title')).toBeInTheDocument();
    expect(screen.getByText('docs.dobTitle')).toBeInTheDocument();
    expect(screen.getByText('docs.addressTitle')).toBeInTheDocument();
    expect(screen.getByText('docs.photoTitle')).toBeInTheDocument();
    expect(screen.getByText('docs.idTitle')).toBeInTheDocument();
  });
});
