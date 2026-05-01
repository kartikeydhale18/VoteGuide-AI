import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';
import '../index.css';

const Layout = () => {
  return (
    <div className="app-container">
      <Navigation />
      <main className="main-content">
        <Outlet />
      </main>
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} VoteGuide AI. Empowering Indian Voters.</p>
      </footer>
    </div>
  );
};

export default Layout;
