import { useState } from 'react';
import { Search, Mic, FileText, Lightbulb, BookOpen, Shield, Clock, TrendingUp, Sparkles, ArrowRight, Filter } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { VoiceSearchDialog } from '../components/VoiceSearchDialog';
import { motion } from 'motion/react';

interface DashboardProps {
  onNavigate: (page: string) => void;
}

export function Dashboard({ onNavigate }: DashboardProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [voiceSearchOpen, setVoiceSearchOpen] = useState(false);

  const handleSearch = () => {
    if (searchQuery.trim()) {
      onNavigate('results');
    }
  };

  const handleVoiceSearch = (query: string) => {
    setSearchQuery(query);
    onNavigate('results');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };
  const quickCards = [
    {
      title: 'Policies',
      description: 'Government policies and regulations',
      count: '435',
      icon: FileText,
      gradient: 'from-blue-500 to-blue-600',
      bgGradient: 'from-blue-50 to-blue-100',
    },
    {
      title: 'Schemes',
      description: 'Educational schemes and programs',
      count: '280',
      icon: Lightbulb,
      gradient: 'from-orange-500 to-orange-600',
      bgGradient: 'from-orange-50 to-orange-100',
    },
    {
      title: 'Reports',
      description: 'Detailed reports and analytics',
      count: '150',
      icon: BookOpen,
      gradient: 'from-purple-500 to-purple-600',
      bgGradient: 'from-purple-50 to-purple-100',
    },
    {
      title: 'Regulations',
      description: 'Latest updates and notifications',
      count: '220',
      icon: Shield,
      gradient: 'from-green-500 to-green-600',
      bgGradient: 'from-green-50 to-green-100',
    },
  ];

  const recentUpdates = [
    {
      title: 'New scholarship schemes announced for SC/ST students',
      date: '2 hours ago',
      type: 'Scheme',
      color: 'blue',
    },
    {
      title: 'National Education Policy 2020 - Implementation Guidelines',
      date: '5 hours ago',
      type: 'Policy',
      color: 'purple',
    },
    {
      title: 'PM USHA (Unnat Bharat Abhiyan) scheme for Higher Education',
      date: '1 day ago',
      type: 'Scheme',
      color: 'orange',
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="p-6 lg:p-8 max-w-7xl mx-auto">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
              <Sparkles className="w-7 h-7 text-white" />
            </div>
            <div className="flex-1">
              <h1 className="text-slate-900 text-xl sm:text-2xl font-semibold mb-2">
                Welcome to Smart Information Retrieval
              </h1>
              <p className="text-slate-600 text-base sm:text-lg">
                Search and access comprehensive educational policies, schemes, and documents powered by AI
              </p>
            </div>
          </div>
        </motion.div>

        {/* Search Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="p-8 lg:p-10 mb-8 shadow-xl border-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
            </div>

            <div className="max-w-4xl mx-auto relative z-10">
              <div className="text-center mb-8">
                <h2 className="text-white text-2xl font-semibold mb-2">Ask AI Your Query</h2>
                <p className="text-slate-300 text-lg">Get instant answers from thousands of educational documents</p>
              </div>

              <div className="flex items-center gap-3 bg-white rounded-xl p-2 shadow-xl">
                <Search className="w-5 h-5 text-slate-400 ml-4" />
                <input
                  type="text"
                  placeholder="Search for policies, schemes, regulations..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="flex-1 px-3 py-4 outline-none text-slate-700 placeholder:text-slate-400 text-lg"
                  aria-label="Search for educational documents"
                />
                <button 
                  onClick={() => setVoiceSearchOpen(true)}
                  className="p-3 hover:bg-slate-100 rounded-lg transition-all duration-200"
                  aria-label="Voice search"
                >
                  <Mic className="w-5 h-5 text-slate-600" />
                </button>
                <Button
                  onClick={handleSearch}
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-4 shadow-lg"
                >
                  <Sparkles className="w-5 h-5 mr-2" />
                  Search with AI
                </Button>
              </div>
              
              <VoiceSearchDialog 
                open={voiceSearchOpen}
                onClose={() => setVoiceSearchOpen(false)}
                onSearch={handleVoiceSearch}
              />
              
              {/* Advanced Filters */}
              <div className="flex flex-wrap gap-3 mt-6 justify-center">
                <Button variant="ghost" className="bg-white/10 hover:bg-white/20 text-white border-white/20 backdrop-blur-sm">
                  <Filter className="w-4 h-4 mr-2" />
                  All Years
                </Button>
                <Button variant="ghost" className="bg-white/10 hover:bg-white/20 text-white border-white/20 backdrop-blur-sm">
                  All Departments
                </Button>
                <Button variant="ghost" className="bg-white/10 hover:bg-white/20 text-white border-white/20 backdrop-blur-sm">
                  All Types
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Quick Access Cards */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-slate-900 text-xl font-semibold">Quick Access</h2>
            <Button variant="ghost" className="text-blue-600 hover:text-blue-700">
              View All
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6"
          >
            {quickCards.map((card) => {
              const Icon = card.icon;
              return (
                <motion.div key={card.title} variants={item}>
                  <Card 
                    onClick={() => onNavigate('results')}
                    className="p-4 sm:p-6 hover:shadow-xl transition-all duration-300 cursor-pointer border border-slate-200 bg-white group relative overflow-hidden"
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        onNavigate('results');
                      }
                    }}
                    aria-label={`Access ${card.title} documents`}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${card.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                    
                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-4">
                        <div className={`bg-gradient-to-br ${card.gradient} w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <Badge variant="secondary" className="text-sm px-2 py-1">
                          {card.count}
                        </Badge>
                      </div>
                      <h3 className="text-slate-900 font-semibold mb-2">{card.title}</h3>
                      <p className="text-slate-600 text-sm mb-3">{card.description}</p>
                      <div className="flex items-center text-xs text-slate-500">
                        <TrendingUp className="w-3 h-3 mr-1" />
                        Total Items
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Recent Updates */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Card className="p-6 lg:p-8 border border-slate-200 shadow-xl bg-white">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-md">
                <Clock className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-slate-900 text-xl font-semibold">Recent Updates</h2>
            </div>
            <div className="space-y-2">
              {recentUpdates.map((update, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  onClick={() => onNavigate('document')}
                  className="flex items-start gap-4 p-4 hover:bg-slate-50 rounded-xl transition-all duration-200 cursor-pointer group border-l-4 border-transparent hover:border-blue-500"
                >
                  <div className={`w-3 h-3 bg-gradient-to-br from-${update.color}-500 to-${update.color}-600 rounded-full mt-2 shadow-md group-hover:scale-125 transition-transform`} />
                  <div className="flex-1">
                    <p className="text-slate-900 mb-2 group-hover:text-blue-600 transition-colors font-medium">
                      {update.title}
                    </p>
                    <div className="flex items-center gap-3 text-sm">
                      <span className="text-slate-500">{update.date}</span>
                      <Badge className={`bg-${update.color}-100 text-${update.color}-700 hover:bg-${update.color}-100`}>
                        {update.type}
                      </Badge>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
