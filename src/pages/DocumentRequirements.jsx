import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';
import { loadUserProgress, saveDocumentProgress } from '../utils/db';
import { useTranslation } from 'react-i18next';

const DocumentRequirements = () => {
  const { t } = useTranslation();
  const [hasDobProof, setHasDobProof] = useState(false);
  const [hasAddressProof, setHasAddressProof] = useState(false);
  const [hasPhoto, setHasPhoto] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        const data = await loadUserProgress(currentUser.uid);
        if (data && data.documents) {
          setHasDobProof(data.documents.dob || false);
          setHasAddressProof(data.documents.address || false);
          setHasPhoto(data.documents.photo || false);
        }
      } else {
        setHasDobProof(false);
        setHasAddressProof(false);
        setHasPhoto(false);
      }
    });
    return () => unsubscribe();
  }, []);

  // Document DB save handled directly in onChange now

  const isReady = hasDobProof && hasAddressProof && hasPhoto;

  return (
    <div className="page fade-in">
      <Helmet>
        <title>{t('docs.title')} - VoteGuide AI</title>
        <meta name="description" content={t('docs.desc')} />
      </Helmet>
      
      <h2>{t('docs.title')}</h2>
      <p>{t('docs.desc')}</p>

      {isReady && (
        <div className="success-banner" style={{background: 'var(--accent-color)', padding: '1rem', borderRadius: '8px', color: 'white', textAlign: 'center', marginBottom: '1rem'}}>
          {t('docs.success')}
        </div>
      )}

      <div className="info-banner" style={{background: 'rgba(255,255,255,0.05)', padding: '1rem', borderRadius: '8px', borderLeft: '4px solid #3b82f6', marginBottom: '2rem'}}>
        <h4 style={{margin: '0 0 0.5rem 0'}}>{t('docs.form8NoteTitle')}</h4>
        <p style={{margin: 0, fontSize: '0.9rem', opacity: 0.9}}>{t('docs.form8NoteDesc')}</p>
      </div>

      <div className="doc-grid">
        <div className="card glassmorphism">
          <h3>{t('docs.dobTitle')}</h3>
          <div style={{marginBottom: '1rem', padding: '0.75rem', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', border: '1px solid var(--glass-border)'}}>
            <label style={{display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer', fontWeight: 'bold', fontSize: '1.1rem'}}>
              <input type="checkbox" checked={hasDobProof} onChange={(e) => { setHasDobProof(e.target.checked); if (user) saveDocumentProgress(user.uid, e.target.checked, hasAddressProof, hasPhoto); }} style={{transform: 'scale(1.5)', cursor: 'pointer'}} /> 
              {t('docs.dobLabel')}
            </label>
          </div>
          <p style={{fontSize: '0.9rem', marginBottom: '0.5rem', opacity: 0.8}}>{t('docs.accDocs')}</p>
          <ul style={{opacity: 0.8}}>
            <li>{t('docs.dob1')}</li>
            <li>{t('docs.dob2')}</li>
            <li>{t('docs.dob3')}</li>
            <li>{t('docs.dob4')}</li>
          </ul>
        </div>
        
        <div className="card glassmorphism">
          <h3>{t('docs.addressTitle')}</h3>
          <div style={{marginBottom: '1rem', padding: '0.75rem', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', border: '1px solid var(--glass-border)'}}>
            <label style={{display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer', fontWeight: 'bold', fontSize: '1.1rem'}}>
              <input type="checkbox" checked={hasAddressProof} onChange={(e) => { setHasAddressProof(e.target.checked); if (user) saveDocumentProgress(user.uid, hasDobProof, e.target.checked, hasPhoto); }} style={{transform: 'scale(1.5)', cursor: 'pointer'}} /> 
              {t('docs.addressLabel')}
            </label>
          </div>
          <p style={{fontSize: '0.9rem', marginBottom: '0.5rem', opacity: 0.8}}>{t('docs.accDocs')}</p>
          <ul style={{opacity: 0.8}}>
            <li>{t('docs.addr1')}</li>
            <li>{t('docs.addr2')}</li>
            <li>{t('docs.addr3')}</li>
            <li>{t('docs.addr4')}</li>
          </ul>
        </div>

        <div className="card glassmorphism">
          <h3>{t('docs.photoTitle')}</h3>
          <div style={{marginBottom: '1rem', padding: '0.75rem', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', border: '1px solid var(--glass-border)'}}>
            <label style={{display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer', fontWeight: 'bold', fontSize: '1.1rem'}}>
              <input type="checkbox" checked={hasPhoto} onChange={(e) => { setHasPhoto(e.target.checked); if (user) saveDocumentProgress(user.uid, hasDobProof, hasAddressProof, e.target.checked); }} style={{transform: 'scale(1.5)', cursor: 'pointer'}} /> 
              {t('docs.photoLabel')}
            </label>
          </div>
          <p style={{fontSize: '0.9rem', marginBottom: '0.5rem', opacity: 0.8}}>{t('docs.reqs')}</p>
          <ul style={{opacity: 0.8}}>
            <li>{t('docs.photo1')}</li>
            <li>{t('docs.photo2')}</li>
            <li>{t('docs.photo3')}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DocumentRequirements;
