import { User, Menu, Bell, Settings, LogOut } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { motion } from 'motion/react';

interface HeaderProps {
  onToggleSidebar?: () => void;
  onLogout?: () => void;
}

export function Header({ onToggleSidebar, onLogout }: HeaderProps) {
  return (
    <header className="bg-white/95 backdrop-blur-md border-b border-slate-200 sticky top-0 z-30 shadow-sm">
      <div className="flex items-center justify-between px-4 lg:px-6 py-4">
        <div className="flex items-center gap-4">
          <button
            onClick={onToggleSidebar}
            className="lg:hidden p-2.5 hover:bg-slate-100 rounded-lg transition-all duration-200 active:scale-95"
            aria-label="Toggle sidebar"
          >
            <Menu className="w-5 h-5 text-slate-600" />
          </button>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center shadow-sm">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-3">
                <h1 className="text-slate-900 font-semibold text-lg">
                  Smart Information Retrieval System
                </h1>
                <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100 border-emerald-200 text-xs">
                  Live
                </Badge>
              </div>
              <p className="text-slate-600 text-sm flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                Ministry of Education | SIH 2025
              </p>
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          {/* Notifications */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative p-2.5 hover:bg-slate-100 rounded-lg transition-all duration-200 hidden sm:block"
            aria-label="Notifications"
          >
            <Bell className="w-5 h-5 text-slate-600" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
          </motion.button>

          {/* Settings */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="p-2.5 hover:bg-slate-100 rounded-lg transition-all duration-200 hidden sm:block"
            aria-label="Settings"
          >
            <Settings className="w-5 h-5 text-slate-600" />
          </motion.button>

          {/* User Profile */}
          <div className="hidden md:flex items-center gap-3 px-4 py-2.5 bg-slate-50 rounded-lg border border-slate-200">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center shadow-sm">
              <User className="w-4 h-4 text-white" />
            </div>
            <div>
              <p className="text-slate-900 text-sm font-medium">Guest User</p>
              <p className="text-slate-500 text-xs">Ministry of Education</p>
            </div>
          </div>

          {/* Logout Button */}
          <Button 
            onClick={onLogout}
            variant="outline"
            size="sm"
            className="border-slate-300 text-slate-700 hover:bg-slate-50 hover:text-slate-900"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>
      </div>
    </header>
  );
}
