import { useState, useEffect } from 'react';
import { Layout } from './components/Layout';
import { Dashboard } from './pages/Dashboard';
import { Results } from './pages/Results';
import { DocumentViewer } from './pages/DocumentViewer';
import { Analytics } from './pages/Analytics';
import { Support } from './pages/Support';
import { About } from './pages/About';
import { Login } from './pages/Login';
import { Toaster } from './components/Toaster';
import { motion, AnimatePresence } from 'motion/react';
import { toast } from 'sonner@2.0.3';

export default function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  // Initialize with dashboard as default
  useEffect(() => {
    // Check if user was previously logged in
    const savedLoginState = localStorage.getItem('isLoggedIn');
    if (savedLoginState === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard onNavigate={setCurrentPage} />;
      case 'results':
        return <Results onNavigate={setCurrentPage} />;
      case 'document':
        return <DocumentViewer />;
      case 'analytics':
        return <Analytics />;
      case 'support':
        return <Support />;
      case 'about':
        return <About />;
      default:
        return <Dashboard onNavigate={setCurrentPage} />;
    }
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    setShowLogin(false);
    localStorage.setItem('isLoggedIn', 'true');
    toast.success('Welcome to Smart Information Retrieval System!');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentPage('dashboard'); // Return to dashboard after logout
    localStorage.removeItem('isLoggedIn');
    toast.success('Logged out successfully');
  };

  const handleShowLogin = () => {
    setShowLogin(true);
  };

  const handleCloseLogin = () => {
    setShowLogin(false);
  };

  // Show login page only when explicitly requested
  if (showLogin) {
    return (
      <>
        <Login onLogin={handleLogin} onClose={handleCloseLogin} />
        <Toaster />
      </>
    );
  }

  return (
    <>
      <Layout 
        currentPage={currentPage} 
        onNavigate={setCurrentPage}
        onLogout={handleLogout}
        onShowLogin={handleShowLogin}
        isLoggedIn={isLoggedIn}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </Layout>
      <Toaster />
    </>
  );
}