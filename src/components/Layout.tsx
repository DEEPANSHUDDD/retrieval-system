import { useState } from 'react';
import { Sidebar } from './Sidebar';
import { Header } from './Header';

interface LayoutProps {
  children: React.ReactNode;
  currentPage: string;
  onNavigate: (page: string) => void;
  onLogout?: () => void;
  onShowLogin?: () => void;
  isLoggedIn?: boolean;
}

export function Layout({ children, currentPage, onNavigate, onLogout, onShowLogin, isLoggedIn }: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleNavigate = (page: string) => {
    onNavigate(page);
    setSidebarOpen(false); // Close sidebar after navigation
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/20 to-gray-50">
      {/* Sidebar Overlay */}
      {sidebarOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300"
            onClick={() => setSidebarOpen(false)}
          />
          <div className="fixed left-0 top-0 bottom-0 z-50">
            <Sidebar currentPage={currentPage} onNavigate={handleNavigate} />
          </div>
        </>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <Header 
          onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
          onLogout={onLogout}
          onShowLogin={onShowLogin}
          isLoggedIn={isLoggedIn}
        />
        <main className="flex-1 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
