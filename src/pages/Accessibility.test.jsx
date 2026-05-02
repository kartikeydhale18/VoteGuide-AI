import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Accessibility from './Accessibility';
import { HelmetProvider } from 'react-helmet-async';

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key) => key,
    i18n: { language: 'en' }
  }),
}));

describe('Accessibility Component', () => {
  it('renders accessibility content', () => {
    render(
      <HelmetProvider>
        <Accessibility />
      </HelmetProvider>
    );
    expect(screen.getByText('access.title')).toBeInTheDocument();
    expect(screen.getByText(/access.listen/)).toBeInTheDocument();
  });

  it('triggers speech synthesis when read aloud is clicked', () => {
    window.alert = vi.fn();
    const speakMock = vi.fn();
    window.speechSynthesis = {
      speak: speakMock,
      cancel: vi.fn(),
      getVoices: () => []
    };
    
    // Mock SpeechSynthesisUtterance
    window.SpeechSynthesisUtterance = class {
      constructor(text) {
        this.text = text;
      }
    };

    render(
      <HelmetProvider>
        <Accessibility />
      </HelmetProvider>
    );
    
    const readBtn = screen.getByText(/access.listen/);
    fireEvent.click(readBtn);
    
    expect(window.speechSynthesis.cancel).not.toHaveBeenCalled(); // since isSpeaking is false initially
    expect(speakMock).toHaveBeenCalled();
  });
});
