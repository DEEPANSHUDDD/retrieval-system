import { useState } from 'react';
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
    toast.success('Welcome to Smart Information Retrieval System!');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    toast.success('Logged out successfully');
  };

  if (!isLoggedIn) {
    return (
      <>
        <Login onLogin={handleLogin} />
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