import { Home, SearchIcon, FileText, BarChart3, HeadphonesIcon, Info, Shield, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';

interface SidebarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Sidebar({ currentPage, onNavigate }: SidebarProps) {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'results', label: 'Search Results', icon: SearchIcon },
    { id: 'document', label: 'Document Viewer', icon: FileText },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'support', label: 'Support', icon: HeadphonesIcon },
    { id: 'about', label: 'About', icon: Info },
  ];

  return (
    <div className="w-72 bg-slate-900 min-h-screen flex flex-col shadow-xl">
      {/* Logo Section */}
      <div className="p-6 border-b border-slate-700">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-3"
        >
          <div className="relative">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
              <Shield className="w-7 h-7 text-white" />
            </div>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full border-2 border-slate-900" />
          </div>
          <div>
            <h2 className="text-white font-semibold text-lg">Ministry of Education</h2>
            <p className="text-slate-400 text-sm">Smart Retrieval System</p>
          </div>
        </motion.div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1">
        <p className="text-slate-400 text-xs px-3 mb-4 uppercase tracking-wider font-medium">Navigation</p>
        <ul className="space-y-1">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = currentPage === item.id;
            return (
              <motion.li
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <button
                  onClick={() => onNavigate(item.id)}
                  className={`w-full group relative flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-blue-600 rounded-lg"
                      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    />
                  )}
                  <Icon className={`w-5 h-5 relative z-10`} />
                  <span className="relative z-10 font-medium">{item.label}</span>
                  {isActive && (
                    <ChevronRight className="w-4 h-4 ml-auto relative z-10" />
                  )}
                </button>
              </motion.li>
            );
          })}
        </ul>
      </nav>

      {/* Footer Stats */}
      <div className="p-4 border-t border-slate-700">
        <div className="bg-slate-800 rounded-lg p-4 mb-4">
          <div className="flex items-center justify-between mb-3">
            <span className="text-slate-400 text-sm font-medium">System Status</span>
            <span className="text-emerald-400 text-sm flex items-center gap-2">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              Online
            </span>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-slate-400">Documents</span>
              <span className="text-white font-medium">1,247</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-slate-400">Active Users</span>
              <span className="text-white font-medium">3,420</span>
            </div>
          </div>
        </div>
        <p className="text-slate-500 text-xs text-center">© 2025 Ministry of Education. All rights reserved.</p>
      </div>
    </div>
  );
}
