import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import { signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth';
import { auth, googleProvider } from '../firebase';
import './Navigation.css';

const Navigation = () => {
  const { t, i18n } = useTranslation();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
  };

  const changeLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <header className="header glassmorphism">
      <div className="logo">VoteGuide <span>AI</span></div>
      <nav className="nav-links">
        <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>{t('nav.home')}</NavLink>
        <NavLink to="/timeline" className={({ isActive }) => isActive ? 'active' : ''}>{t('nav.timeline')}</NavLink>
        <NavLink to="/documents" className={({ isActive }) => isActive ? 'active' : ''}>{t('nav.documents')}</NavLink>
      </nav>
      <div className="nav-controls" style={{display: 'flex', gap: '1rem', alignItems: 'center'}}>
        <div className="language-switcher">
          <select aria-label="Select Language" onChange={changeLanguage} value={i18n.language}>
            <option value="en">English</option>
            <option value="hi">हिंदी (Hindi)</option>
            <option value="mr">मराठी (Marathi)</option>
          </select>
        </div>
        {user ? (
          <div className="user-profile" style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
            <img src={user.photoURL || 'https://www.gravatar.com/avatar/?d=mp'} referrerPolicy="no-referrer" alt="Profile" style={{width: '32px', height: '32px', borderRadius: '50%', objectFit: 'cover'}} />
            <button onClick={handleLogout} style={{background: 'transparent', border: '1px solid var(--glass-border)', color: 'white', padding: '0.25rem 0.5rem', borderRadius: '4px', cursor: 'pointer'}}>Log Out</button>
          </div>
        ) : (
          <button onClick={handleLogin} style={{background: 'var(--accent-color)', border: 'none', color: 'white', padding: '0.5rem 1rem', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold'}}>Sign In</button>
        )}
      </div>
    </header>
  );
};

export default Navigation;
