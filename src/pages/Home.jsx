import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="page fade-in">
      <Helmet>
        <title>VoteGuide AI - Empowering Indian Voters</title>
        <meta name="description" content="An interactive, secure, and highly scalable civic education platform designed to demystify the Indian electoral process." />
      </Helmet>
      
      <section className="hero">
        <h1>{t('home.title')}</h1>
        <p className="subtitle">{t('home.subtitle')}</p>
        <div className="cta-container">
          <button className="primary-btn" onClick={() => navigate('/timeline')}>{t('home.startBtn')}</button>
        </div>
      </section>

      <section className="features">
        <Link to="/eligibility" style={{textDecoration: 'none', color: 'inherit'}}>
          <div className="card glassmorphism" style={{cursor: 'pointer', height: '100%'}}>
            <h3>{t('home.card1.title')}</h3>
            <p>{t('home.card1.desc')}</p>
          </div>
        </Link>
        <Link to="/documents" style={{textDecoration: 'none', color: 'inherit'}}>
          <div className="card glassmorphism" style={{cursor: 'pointer', height: '100%'}}>
            <h3>{t('home.card2.title')}</h3>
            <p>{t('home.card2.desc')}</p>
          </div>
        </Link>
        <Link to="/accessibility" style={{textDecoration: 'none', color: 'inherit'}}>
          <div className="card glassmorphism" style={{cursor: 'pointer', height: '100%'}}>
            <h3>{t('home.card3.title')}</h3>
            <p>{t('home.card3.desc')}</p>
          </div>
        </Link>
      </section>
    </div>
  );
};

export default Home;
