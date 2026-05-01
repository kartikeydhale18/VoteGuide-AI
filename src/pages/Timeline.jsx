import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from 'firebase/auth';
import { auth, googleProvider } from '../firebase';
import { addEventToCalendar } from '../utils/calendar';
import { loadUserProgress, saveTimelineProgress } from '../utils/db';
import { useTranslation } from 'react-i18next';

const Timeline = () => {
  const { t } = useTranslation();
  const [completedPhases, setCompletedPhases] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        const data = await loadUserProgress(currentUser.uid);
        if (data && data.completedPhases) {
          setCompletedPhases(data.completedPhases);
        }
      } else {
        setCompletedPhases([]);
      }
    });
    return () => unsubscribe();
  }, []);

  const togglePhase = (phaseNumber) => {
    if (!user) {
      alert("Please sign in to save your progress!");
      return;
    }

    const isComplete = completedPhases.includes(phaseNumber);
    const newPhases = isComplete 
      ? completedPhases.filter(p => p !== phaseNumber)
      : [...completedPhases, phaseNumber];
    
    setCompletedPhases(newPhases);
    saveTimelineProgress(user.uid, newPhases);
  };

  const phases = [
    { id: 1, title: t('time.p1Title'), desc: t('time.p1Desc'), startDate: '2026-05-01T09:00:00+05:30', endDate: '2026-05-01T17:00:00+05:30' },
    { id: 2, title: t('time.p2Title'), desc: t('time.p2Desc'), startDate: '2026-05-10T09:00:00+05:30', endDate: '2026-05-10T17:00:00+05:30' },
    { id: 3, title: t('time.p3Title'), desc: t('time.p3Desc'), startDate: '2026-05-15T09:00:00+05:30', endDate: '2026-05-15T17:00:00+05:30' },
    { id: 4, title: t('time.p4Title'), desc: t('time.p4Desc'), startDate: '2026-05-20T09:00:00+05:30', endDate: '2026-05-20T17:00:00+05:30' },
    { id: 5, title: t('time.p5Title'), desc: t('time.p5Desc'), startDate: '2026-06-01T08:00:00+05:30', endDate: '2026-06-01T18:00:00+05:30' },
    { id: 6, title: t('time.p6Title'), desc: t('time.p6Desc'), startDate: '2026-06-04T08:00:00+05:30', endDate: '2026-06-04T20:00:00+05:30' },
    { id: 7, title: t('time.p7Title'), desc: t('time.p7Desc'), startDate: '2026-06-10T09:00:00+05:30', endDate: '2026-06-10T17:00:00+05:30' }
  ];

  const totalPhases = phases.length;
  const progressPercent = Math.round((completedPhases.length / totalPhases) * 100);

  const handleAddToCalendar = async (phase) => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;

      const eventDetails = {
        summary: `Phase ${phase.id}: ${phase.title}`,
        description: phase.desc,
        startDateTime: phase.startDate,
        endDateTime: phase.endDate
      };

      await addEventToCalendar(token, eventDetails);
      alert(`Successfully added "${phase.title}" to your Google Calendar!`);
    } catch (error) {
      console.error("Error signing in or adding event", error);
      alert("Failed to add to calendar. Check console for details.");
      alert(t('time.errorAlert'));
    }
  };

  return (
    <div className="page fade-in">
      <Helmet>
        <title>{t('time.title')} - VoteGuide AI</title>
        <meta name="description" content="Interactive timeline of the Indian electoral process." />
      </Helmet>
      
      <h2>{t('time.title')}</h2>
      <p>{t('time.desc')}</p>

      <div className="progress-container glassmorphism" style={{padding: '1rem', marginBottom: '2rem'}}>
        <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem'}}>
          <span>{t('time.progress')}</span>
          <span>{progressPercent}%</span>
        </div>
        <div style={{background: 'rgba(255,255,255,0.1)', height: '10px', borderRadius: '5px', overflow: 'hidden'}}>
          <div style={{background: 'var(--accent-color)', width: `${progressPercent}%`, height: '100%', transition: 'width 0.3s ease-in-out'}}></div>
        </div>
      </div>

      <div className="timeline-container">
        {phases.map(phase => {
          const isComplete = completedPhases.includes(phase.id);
          return (
            <div key={phase.id} className={`timeline-item glassmorphism ${isComplete ? 'completed' : ''}`} style={{opacity: isComplete ? 0.6 : 1}}>
              <div className="phase-number" style={{background: isComplete ? '#22c55e' : 'var(--accent-color)'}}>{phase.id}</div>
              <div className="phase-content">
                <h3>{phase.title}</h3>
                <p>{phase.desc}</p>
                <div style={{display: 'flex', gap: '1rem', marginTop: '1rem', flexWrap: 'wrap'}}>
                  <button className="primary-btn" onClick={() => handleAddToCalendar(phase)} style={{padding: '0.5rem 1rem', fontSize: '0.9rem'}}>{t('time.addBtn')}</button>
                  <button className="primary-btn" onClick={() => togglePhase(phase.id)} style={{padding: '0.5rem 1rem', fontSize: '0.9rem', background: isComplete ? 'transparent' : 'var(--accent-color)', border: isComplete ? '1px solid #22c55e' : 'none', color: isComplete ? '#22c55e' : 'white'}}>
                    {isComplete ? '✓ ' + t('time.complete') : t('time.complete')}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Timeline;
