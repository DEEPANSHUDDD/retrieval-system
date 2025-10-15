import { TrendingUp, Users, FileText, Search, Download, Activity, BarChart3 } from 'lucide-react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { motion } from 'motion/react';
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Area,
  AreaChart,
} from 'recharts';

export function Analytics() {
  const statsCards = [
    {
      title: 'Total Documents',
      value: '1,247',
      change: '+12%',
      icon: FileText,
      gradient: 'from-[#0A192F] to-[#112240]',
      bgGradient: 'from-gray-50 to-gray-100',
    },
    {
      title: 'Total Searches',
      value: '26,600',
      change: '+18%',
      icon: Search,
      gradient: 'from-[#0A192F] to-[#112240]',
      bgGradient: 'from-gray-50 to-gray-100',
    },
    {
      title: 'Active Users',
      value: '3,420',
      change: '+8%',
      icon: Users,
      gradient: 'from-[#0A192F] to-[#112240]',
      bgGradient: 'from-gray-50 to-gray-100',
    },
    {
      title: 'Success Rate',
      value: '94.2%',
      change: '+2.1%',
      icon: TrendingUp,
      gradient: 'from-[#0A192F] to-[#112240]',
      bgGradient: 'from-gray-50 to-gray-100',
    },
  ];

  const documentUsageData = [
    { month: 'Jan', documents: 4500 },
    { month: 'Feb', documents: 3200 },
    { month: 'Mar', documents: 2800 },
    { month: 'Apr', documents: 1800 },
    { month: 'May', documents: 1600 },
  ];

  const searchTrendsData = [
    { month: 'Jan', searches: 3200, users: 2100 },
    { month: 'Feb', searches: 3800, users: 2400 },
    { month: 'Mar', searches: 4200, users: 2800 },
    { month: 'Apr', searches: 5200, users: 3400 },
    { month: 'May', searches: 5800, users: 3900 },
  ];

  const departmentData = [
    { name: 'Higher Education', value: 35, color: '#0A192F' },
    { name: 'School Education', value: 28, color: '#112240' },
    { name: 'Vocational Training', value: 20, color: '#334155' },
    { name: 'Research & Innovation', value: 17, color: '#10b981' },
  ];

  const topPolicies = [
    { name: 'NEP 2020', views: 15420 },
    { name: 'PM USHA Scheme', views: 12350 },
    { name: 'UGC Guidelines 2023', views: 9870 },
    { name: 'Samagra Shiksha', views: 8640 },
    { name: 'SWAYAM Platform', views: 7230 },
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
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between mb-8"
        >
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 bg-gradient-to-br from-[#0A192F] to-[#112240] rounded-2xl flex items-center justify-center shadow-lg shadow-black/10">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-[#0A192F]">Analytics & Insights</h1>
            </div>
            <p className="text-gray-600">System usage and performance metrics in real-time</p>
          </div>
          <Button className="bg-gradient-to-r from-[#0A192F] to-[#112240] hover:from-[#112240] hover:to-[#0A192F] text-white shadow-lg shadow-black/20">
            <Download className="w-4 h-4 mr-2" />
            Export Report
          </Button>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          {statsCards.map((stat) => {
            const Icon = stat.icon;
            return (
              <motion.div key={stat.title} variants={item}>
                <Card className="p-6 border-0 shadow-xl bg-white hover:shadow-2xl transition-all duration-300 group relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`bg-gradient-to-br ${stat.gradient} w-12 h-12 rounded-xl flex items-center justify-center shadow-lg`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-green-600 text-sm font-semibold bg-green-50 px-3 py-1 rounded-full">
                        {stat.change}
                      </span>
                    </div>
                    <p className="text-gray-500 text-sm mb-1">{stat.title}</p>
                    <h2 className="text-gray-900">{stat.value}</h2>
                    <div className="flex items-center gap-1 text-xs text-gray-400 mt-2">
                      <Activity className="w-3 h-3" />
                      from last month
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Charts Row 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Document Usage */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="p-7 border-0 shadow-xl bg-white">
              <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-[#0A192F] to-[#112240] rounded-xl flex items-center justify-center shadow-md">
                  <FileText className="w-5 h-5 text-white" />
                </div>
              <h3 className="text-[#0A192F]">Document Usage</h3>
              </div>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={documentUsageData}>
                  <defs>
                    <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#0A192F" stopOpacity={1} />
                      <stop offset="100%" stopColor="#112240" stopOpacity={1} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="month" stroke="#6b7280" />
                  <YAxis stroke="#6b7280" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#fff',
                      border: '1px solid #e5e7eb',
                      borderRadius: '12px',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                    }}
                  />
                  <Bar dataKey="documents" fill="url(#barGradient)" radius={[12, 12, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </Card>
          </motion.div>

          {/* Search Trends */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card className="p-7 border-0 shadow-xl bg-white">
              <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-[#0A192F] to-[#112240] rounded-xl flex items-center justify-center shadow-md">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
              <h3 className="text-[#0A192F]">Search Trends</h3>
              </div>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={searchTrendsData}>
                  <defs>
                    <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#0A192F" stopOpacity={0.8} />
                      <stop offset="100%" stopColor="#112240" stopOpacity={0.1} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="month" stroke="#6b7280" />
                  <YAxis stroke="#6b7280" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#fff',
                      border: '1px solid #e5e7eb',
                      borderRadius: '12px',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="searches"
                    stroke="#0A192F"
                    strokeWidth={3}
                    fill="url(#areaGradient)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </Card>
          </motion.div>
        </div>

        {/* Charts Row 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Top Departments */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Card className="p-7 border-0 shadow-xl bg-white">
              <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-[#0A192F] to-[#112240] rounded-xl flex items-center justify-center shadow-md">
                  <BarChart3 className="w-5 h-5 text-white" />
                </div>
              <h3 className="text-[#0A192F]">Top Departments</h3>
              </div>
              <div className="flex items-center justify-center">
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={departmentData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={(entry) => `${entry.name}: ${entry.value}%`}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                      stroke="none"
                    >
                      {departmentData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#fff',
                        border: '1px solid #e5e7eb',
                        borderRadius: '12px',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </Card>
          </motion.div>

          {/* Top Policies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Card className="p-7 border-0 shadow-xl bg-white">
              <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-[#0A192F] to-[#112240] rounded-xl flex items-center justify-center shadow-md">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
              <h3 className="text-[#0A192F]">Most Viewed Policies</h3>
              </div>
              <div className="space-y-4">
                {topPolicies.map((policy, index) => (
                  <motion.div
                    key={policy.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    className="flex items-center gap-4 p-3 hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100/30 rounded-xl transition-all group"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-[#0A192F] to-[#112240] text-white rounded-xl flex items-center justify-center text-sm font-semibold flex-shrink-0 shadow-md">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-900 text-sm mb-1.5 group-hover:text-[#0A192F] transition-colors">
                        {policy.name}
                      </p>
                      <div className="w-full bg-gray-100 rounded-full h-2.5 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${(policy.views / 15420) * 100}%` }}
                          transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                          className="bg-gradient-to-r from-[#0A192F] to-[#112240] h-2.5 rounded-full"
                        />
                      </div>
                    </div>
                    <span className="text-sm text-gray-600 flex-shrink-0 font-semibold">
                      {policy.views.toLocaleString()}
                    </span>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
