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
    <div className="w-72 bg-gradient-to-b from-[#0A192F] via-[#1e293b] to-[#0A192F] min-h-screen flex flex-col shadow-2xl">
      {/* Logo Section */}
      <div className="p-6 border-b border-white/10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-3"
        >
          <div className="relative">
            <div className="w-12 h-12 bg-gradient-to-br from-[#334155] to-[#475569] rounded-xl flex items-center justify-center shadow-lg shadow-slate-500/30">
              <Shield className="w-7 h-7 text-white" />
            </div>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-[#0A192F]" />
          </div>
          <div>
            <h2 className="text-white font-semibold">Ministry of Education</h2>
            <p className="text-white/60 text-xs">Smart Retrieval AI</p>
          </div>
        </motion.div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1">
        <p className="text-white/40 text-xs px-3 mb-3 uppercase tracking-wider">Main Menu</p>
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
                  className={`w-full group relative flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r from-[#334155] to-[#475569] text-white shadow-lg shadow-slate-500/30'
                      : 'text-white/70 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-gradient-to-r from-[#334155] to-[#475569] rounded-xl"
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
      <div className="p-4 border-t border-white/10">
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-white/60 text-xs">System Status</span>
            <span className="text-green-400 text-xs flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
              Online
            </span>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span className="text-white/60">Documents</span>
              <span className="text-white">1,247</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-white/60">Active Users</span>
              <span className="text-white">3,420</span>
            </div>
          </div>
        </div>
        <p className="text-white/30 text-xs text-center">SIH 2025 © All Rights Reserved</p>
      </div>
    </div>
  );
}
