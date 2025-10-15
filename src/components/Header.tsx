import { User, Menu, Bell, Settings, LogOut, LogIn } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';
import { motion } from 'motion/react';

interface HeaderProps {
  onToggleSidebar?: () => void;
  onLogout?: () => void;
  onShowLogin?: () => void;
  isLoggedIn?: boolean;
}

export function Header({ onToggleSidebar, onLogout, onShowLogin, isLoggedIn }: HeaderProps) {
  return (
    <header className="bg-white/90 backdrop-blur-xl border-b border-gray-200/60 sticky top-0 z-30 shadow-professional">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-4">
          <button
            onClick={onToggleSidebar}
            className="p-2 hover:bg-gray-100 rounded-xl transition-all duration-200 active:scale-95"
          >
            <Menu className="w-5 h-5 text-gray-600" />
          </button>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-[#002D62] bg-gradient-to-r from-[#002D62] to-[#004080] bg-clip-text text-transparent">
                Ministry of Education | Smart India Hackathon 2025
              </h1>
              <Badge className="bg-green-100 text-green-700 hover:bg-green-100 border-green-200">
                Live
              </Badge>
            </div>
            <p className="text-gray-500 text-sm flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse" />
              AI-Powered Smart Information Retrieval System
            </p>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          {/* Notifications */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative p-2.5 hover:bg-gray-100 rounded-xl transition-all duration-200 hidden sm:block"
          >
            <Bell className="w-5 h-5 text-gray-600" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
          </motion.button>

          {/* Settings */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="p-2.5 hover:bg-gray-100 rounded-xl transition-all duration-200 hidden sm:block"
          >
            <Settings className="w-5 h-5 text-gray-600" />
          </motion.button>

          {/* User Profile - Only show when logged in */}
          {isLoggedIn && (
            <div className="hidden md:flex items-center gap-3 px-4 py-2 bg-gradient-to-r from-orange-50 to-orange-100/50 rounded-xl border border-orange-200/50">
              <div className="w-9 h-9 bg-gradient-to-br from-[#F97316] to-[#ea6a0a] rounded-full flex items-center justify-center shadow-md">
                <span className="text-white text-sm font-semibold">PG</span>
              </div>
              <div>
                <p className="text-gray-900 text-sm font-medium">pankajmittal</p>
                <p className="text-gray-500 text-xs">Guest User</p>
              </div>
            </div>
          )}

          {/* Login/Logout Button */}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                {isLoggedIn ? (
                  <Button 
                    onClick={onLogout}
                    variant="outline"
                    className="border-red-200 text-red-600 hover:bg-red-50 hover:text-red-700 transition-all duration-200"
                  >
                    <LogOut className="w-4 h-4 mr-2" />
                    Logout
                  </Button>
                ) : (
                  <Button 
                    onClick={onShowLogin}
                    className="bg-gradient-to-r from-[#002D62] to-[#004080] hover:from-[#001f45] hover:to-[#002D62] text-white cursor-pointer transition-all duration-200 shadow-lg shadow-blue-900/30"
                  >
                    <LogIn className="w-4 h-4 mr-2" />
                    Login
                  </Button>
                )}
              </TooltipTrigger>
              <TooltipContent>
                <p>{isLoggedIn ? 'Click to Logout' : 'Click to Login'}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </header>
  );
}
