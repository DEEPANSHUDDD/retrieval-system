import { useState } from 'react';
import { Lock, Mail, Shield, ArrowRight, Eye, EyeOff, X } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { motion } from 'motion/react';

interface LoginProps {
  onLogin: () => void;
  onClose?: () => void;
}

export function Login({ onLogin, onClose }: LoginProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-[#002D62] via-[#003875] to-[#001f45]">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>

        {/* Floating Orbs */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-20 right-20 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
        />

        {/* Tricolor Accent Lines */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-500 via-white to-green-500 opacity-50" />
        <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-green-500 via-white to-orange-500 opacity-50" />

        {/* Animated Data Nodes */}
        <svg className="absolute inset-0 w-full h-full opacity-20">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#F97316" stopOpacity="0.5" />
            </linearGradient>
          </defs>
          {[...Array(5)].map((_, i) => (
            <motion.circle
              key={i}
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0.2, 0.8, 0.2],
                cx: [Math.random() * 100 + '%', Math.random() * 100 + '%'],
                cy: [Math.random() * 100 + '%', Math.random() * 100 + '%'],
              }}
              transition={{
                duration: 10 + i * 2,
                repeat: Infinity,
                ease: "linear"
              }}
              r="4"
              fill="url(#lineGradient)"
            />
          ))}
        </svg>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-6">
        <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Branding */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white hidden lg:block"
          >
            <div className="mb-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20 shadow-2xl">
                  <Shield className="w-12 h-12 text-orange-500" />
                </div>
                <div>
                  <h2 className="text-white mb-1">Ministry of Education</h2>
                  <p className="text-white/70">Government of India</p>
                </div>
              </div>
              <h1 className="text-white mb-4 text-5xl">
                Smart Information Retrieval System
              </h1>
              <p className="text-2xl text-blue-200 mb-8">AI-powered Knowledge Access Portal</p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full" />
                  <p className="text-white/80">Secure & Verified Government Data</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <p className="text-white/80">AI-Powered Smart Search</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full" />
                  <p className="text-white/80">Real-time Policy Updates</p>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="mt-12 space-y-3">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ width: 0 }}
                  animate={{ width: `${60 + i * 15}%` }}
                  transition={{ duration: 1, delay: 0.5 + i * 0.2 }}
                  className="h-1 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full"
                />
              ))}
            </div>
          </motion.div>

          {/* Right Side - Login Form */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl p-10 border border-white/20 relative">
              {/* Close Button */}
              {onClose && (
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
                >
                  <X className="w-5 h-5 text-gray-500" />
                </button>
              )}

              {/* Mobile Logo */}
              <div className="lg:hidden mb-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#002D62] to-[#004080] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl">
                  <Shield className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-[#002D62] mb-2">Welcome Back</h2>
                <p className="text-gray-600">Smart Information Retrieval System</p>
              </div>

              {/* Form Header */}
              <div className="text-center mb-8 hidden lg:block">
                <h2 className="text-[#002D62] mb-2">Welcome Back</h2>
                <p className="text-gray-600">Sign in to access the portal</p>
              </div>

              {/* Login Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-700">Username or Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Input
                      id="email"
                      type="text"
                      placeholder="Enter your email or username"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-12 py-6 border-gray-300 focus:border-[#002D62] focus:ring-[#002D62] rounded-xl"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password" className="text-gray-700">Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Input
                      id="password"
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="pl-12 pr-12 py-6 border-gray-300 focus:border-[#002D62] focus:ring-[#002D62] rounded-xl"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 text-[#002D62] border-gray-300 rounded focus:ring-[#002D62]" />
                    <span className="text-sm text-gray-600">Remember me</span>
                  </label>
                  <a href="#" className="text-sm text-[#002D62] hover:text-[#004080] font-medium">
                    Forgot Password?
                  </a>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#002D62] to-[#004080] hover:from-[#001f45] hover:to-[#002D62] text-white py-6 text-lg shadow-lg shadow-blue-900/30 group"
                >
                  Sign In
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>

                <div className="relative my-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-white text-gray-500">or</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <Button
                    type="button"
                    variant="outline"
                    className="py-6 border-gray-300 hover:bg-gray-50"
                  >
                    <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                    </svg>
                    Google
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    className="py-6 border-gray-300 hover:bg-gray-50"
                  >
                    <Shield className="w-5 h-5 mr-2 text-[#002D62]" />
                    DigiLocker
                  </Button>
                </div>
              </form>

              {/* Footer */}
              <div className="mt-8 pt-6 border-t border-gray-200 text-center">
                <p className="text-sm text-gray-600">
                  Don't have an account?{' '}
                  <a href="#" className="text-[#002D62] hover:text-[#004080] font-medium">
                    Register Now
                  </a>
                </p>
              </div>
            </div>

            {/* Footer Info */}
            <div className="mt-6 text-center text-white/70 text-sm">
              <p>© Ministry of Education | Smart India Hackathon 2025</p>
              <p className="mt-1">Powered by AI Knowledge Engine</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Corner Accents */}
      <div className="absolute top-0 left-0 w-32 h-32 border-t-4 border-l-4 border-orange-500/50 rounded-tl-3xl" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-b-4 border-r-4 border-green-500/50 rounded-br-3xl" />
    </div>
  );
}
