import { useState } from 'react';
import { Helmet } from 'react-helmet-async';

const Eligibility = () => {
  const [dob, setDob] = useState('');
  const [result, setResult] = useState(null);

  const calculateEligibility = (e) => {
    e.preventDefault();
    if (!dob) return;

    const birthDate = new Date(dob);
    // ECI Qualifying Date: January 1st of the election year (assume 2026 for this prototype)
    const qualifyingDate = new Date('2026-01-01');
    
    let age = qualifyingDate.getFullYear() - birthDate.getFullYear();
    const m = qualifyingDate.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && qualifyingDate.getDate() < birthDate.getDate())) {
      age--;
    }

    if (age >= 18) {
      setResult({
        eligible: true,
        message: `🎉 You are ${age} years old by the Jan 1, 2026 qualifying date. You are ELIGIBLE to register to vote! Proceed to Form 6.`
      });
    } else {
      setResult({
        eligible: false,
        message: `❌ You will only be ${age} years old by Jan 1, 2026. You must be at least 18 to vote.`
      });
    }
  };

  return (
    <div className="page fade-in">
      <Helmet>
        <title>Eligibility Calculator - VoteGuide AI</title>
        <meta name="description" content="Calculate your voting eligibility based on the Election Commission of India's qualifying dates." />
      </Helmet>
      
      <h2>Know Your Eligibility</h2>
      <p>To register as a voter in India, you must be 18 years old on the qualifying date (usually January 1st of the year the electoral roll is prepared).</p>

      <div className="card glassmorphism" style={{maxWidth: '500px', margin: '2rem auto'}}>
        <form onSubmit={calculateEligibility} style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
          <label style={{fontWeight: 'bold'}}>Enter your Date of Birth:</label>
          <input 
            type="date" 
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            style={{padding: '0.75rem', borderRadius: '4px', border: '1px solid var(--glass-border)', background: 'rgba(255,255,255,0.1)', color: 'white'}}
            required
          />
          <button type="submit" className="primary-btn" style={{marginTop: '1rem'}}>Check Eligibility</button>
        </form>

        {result && (
          <div style={{marginTop: '2rem', padding: '1rem', borderRadius: '8px', background: result.eligible ? 'rgba(34, 197, 94, 0.2)' : 'rgba(239, 68, 68, 0.2)', border: `1px solid ${result.eligible ? '#22c55e' : '#ef4444'}`}}>
            <h3 style={{color: result.eligible ? '#22c55e' : '#ef4444', marginBottom: '0.5rem'}}>{result.eligible ? 'Eligible!' : 'Not Yet Eligible'}</h3>
            <p>{result.message}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Eligibility;
