import { Helmet } from 'react-helmet-async';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const Accessibility = () => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const { t, i18n } = useTranslation();

  // Cancel speech if component unmounts or language changes
  useEffect(() => {
    return () => {
      if (window.speechSynthesis) window.speechSynthesis.cancel();
    };
  }, [i18n.language]);

  const toggleSpeech = () => {
    if (!window.speechSynthesis) {
      alert("Text-to-speech is not supported in your browser.");
      return;
    }

    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    } else {
      const textContent = `${t('access.title')}. ${t('access.desc')} ${t('access.amfTitle')}. ${t('access.amfDesc')} ${t('access.brailleTitle')}. ${t('access.brailleDesc')} ${t('access.compTitle')}. ${t('access.compDesc')} ${t('access.transTitle')}. ${t('access.transDesc')}`;
      
      const utterance = new SpeechSynthesisUtterance(textContent);
      
      // Set language for TTS engine to match app language
      if (i18n.language === 'hi') utterance.lang = 'hi-IN';
      else if (i18n.language === 'mr') utterance.lang = 'mr-IN'; // Note: mr-IN TTS support depends on OS/Browser
      else utterance.lang = 'en-IN';
      
      utterance.rate = 0.9; 
      utterance.onend = () => setIsSpeaking(false);
      
      window.speechSynthesis.speak(utterance);
      setIsSpeaking(true);
    }
  };

  return (
    <div className="page fade-in">
      <Helmet>
        <title>{t('access.title')} - VoteGuide AI</title>
        <meta name="description" content={t('access.desc')} />
      </Helmet>
      
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem'}}>
        <h2>{t('access.title')}</h2>
        <button 
          onClick={toggleSpeech} 
          className="primary-btn" 
          style={{background: isSpeaking ? '#ef4444' : 'var(--accent-color)', display: 'flex', gap: '0.5rem', alignItems: 'center'}}
        >
          {isSpeaking ? `⏹ ${t('access.stop')}` : `🔊 ${t('access.listen')}`}
        </button>
      </div>
      
      <p>{t('access.desc')}</p>

      <div className="doc-grid" style={{marginTop: '2rem'}}>
        <div className="card glassmorphism">
          <h3>{t('access.amfTitle')}</h3>
          <p>{t('access.amfDesc')}</p>
        </div>
        
        <div className="card glassmorphism">
          <h3>{t('access.brailleTitle')}</h3>
          <p>{t('access.brailleDesc')}</p>
        </div>

        <div className="card glassmorphism">
          <h3>{t('access.compTitle')}</h3>
          <p>{t('access.compDesc')}</p>
        </div>

        <div className="card glassmorphism">
          <h3>{t('access.transTitle')}</h3>
          <p>{t('access.transDesc')}</p>
        </div>
      </div>
    </div>
  );
};

export default Accessibility;
