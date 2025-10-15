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
      gradient: 'from-[#0A192F] to-[#112240]',
      bgGradient: 'from-gray-50 to-gray-100',
    },
    {
      title: 'Schemes',
      description: 'Educational schemes and programs',
      count: '280',
      icon: Lightbulb,
      gradient: 'from-[#0A192F] to-[#112240]',
      bgGradient: 'from-gray-50 to-gray-100',
    },
    {
      title: 'Reports',
      description: 'Detailed reports and analytics',
      count: '150',
      icon: BookOpen,
      gradient: 'from-[#0A192F] to-[#112240]',
      bgGradient: 'from-gray-50 to-gray-100',
    },
    {
      title: 'Regulations',
      description: 'Latest updates and notifications',
      count: '220',
      icon: Shield,
      gradient: 'from-[#0A192F] to-[#112240]',
      bgGradient: 'from-gray-50 to-gray-100',
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100/30 to-gray-50">
      <div className="p-8 max-w-7xl mx-auto">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 bg-gradient-to-br from-[#0A192F] to-[#112240] rounded-2xl flex items-center justify-center shadow-lg shadow-black/10">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-[#0A192F] flex items-center gap-2">
                Welcome to Smart Information Retrieval
              </h1>
              <p className="text-gray-600">
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
          <Card className="p-10 mb-10 shadow-2xl border-0 bg-gradient-to-br from-[#0A192F] via-[#112240] to-[#112240] relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
            </div>

            <div className="max-w-4xl mx-auto relative z-10">
              <div className="text-center mb-6">
                <h2 className="text-white mb-2">Ask AI Your Query</h2>
                <p className="text-white/80">Get instant answers from thousands of educational documents</p>
              </div>

              <div className="flex items-center gap-3 bg-white rounded-2xl p-2.5 shadow-2xl">
                <Search className="w-6 h-6 text-gray-400 ml-4" />
                <input
                  type="text"
                  placeholder="Search for policies, schemes, regulations..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="flex-1 px-3 py-4 outline-none text-gray-700 placeholder:text-gray-400"
                />
                <button 
                  onClick={() => setVoiceSearchOpen(true)}
                  className="p-3 hover:bg-gray-100 rounded-xl transition-all duration-200"
                >
                  <Mic className="w-5 h-5 text-gray-600" />
                </button>
                <Button
                  onClick={handleSearch}
                  className="bg-gradient-to-r from-[#0A192F] to-[#112240] hover:from-[#112240] hover:to-[#0A192F] text-white px-8 py-6 shadow-lg shadow-black/20"
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
        <div className="mb-10">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-[#0A192F]">Quick Access</h2>
            <Button variant="ghost" className="text-[#0A192F] hover:text-[#112240]">
              View All
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {quickCards.map((card) => {
              const Icon = card.icon;
              return (
                <motion.div key={card.title} variants={item}>
                  <Card 
                    onClick={() => onNavigate('results')}
                    className="p-6 hover:shadow-2xl transition-all duration-300 cursor-pointer border-0 bg-white group relative overflow-hidden"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${card.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                    
                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-4">
                        <div className={`bg-gradient-to-br ${card.gradient} w-14 h-14 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                          <Icon className="w-7 h-7 text-white" />
                        </div>
                        <Badge variant="secondary" className="text-lg px-3">
                          {card.count}
                        </Badge>
                      </div>
                      <h3 className="text-gray-900 mb-2">{card.title}</h3>
                      <p className="text-gray-500 text-sm mb-3">{card.description}</p>
                      <div className="flex items-center text-xs text-gray-400">
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
          <Card className="p-8 border-0 shadow-xl bg-white">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-[#0A192F] to-[#112240] rounded-xl flex items-center justify-center shadow-md">
                <Clock className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-[#0A192F]">Recent Updates</h2>
            </div>
            <div className="space-y-1">
              {recentUpdates.map((update, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  onClick={() => onNavigate('document')}
                  className="flex items-start gap-4 p-5 hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100/30 rounded-2xl transition-all duration-200 cursor-pointer group border-l-4 border-transparent hover:border-[#0A192F]"
                >
                  <div className={`w-3 h-3 bg-gradient-to-br from-[#0A192F] to-[#112240] rounded-full mt-2 shadow-md group-hover:scale-125 transition-transform`} />
                  <div className="flex-1">
                    <p className="text-gray-900 mb-2 group-hover:text-[#0A192F] transition-colors">
                      {update.title}
                    </p>
                    <div className="flex items-center gap-3 text-sm">
                      <span className="text-gray-500">{update.date}</span>
                      <Badge className={`bg-gray-100 text-gray-700 hover:bg-gray-100`}>
                        {update.type}
                      </Badge>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
