import { Award, Users, Target, Zap, Github, Mail, Globe, Heart, Sparkles, Code } from 'lucide-react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { motion } from 'motion/react';

export function About() {
  const features = [
    {
      icon: Zap,
      title: 'AI-Powered Search',
      description: 'Advanced natural language processing for intelligent document retrieval with high accuracy',
      gradient: 'from-yellow-500 to-orange-500',
    },
    {
      icon: Target,
      title: 'Smart Filtering',
      description: 'Multi-dimensional filtering by department, year, and document type for precise results',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Users,
      title: 'User-Friendly',
      description: 'Intuitive interface designed for easy navigation and accessibility for all users',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: Award,
      title: 'Verified Content',
      description: 'All documents are verified and sourced from official government channels',
      gradient: 'from-green-500 to-emerald-500',
    },
  ];

  const teamMembers = [
    { name: 'Rahul Kumar', role: 'Team Lead & Full Stack Developer', color: 'from-blue-500 to-blue-600' },
    { name: 'Priya Sharma', role: 'AI/ML Engineer', color: 'from-purple-500 to-purple-600' },
    { name: 'Amit Patel', role: 'Frontend Developer', color: 'from-orange-500 to-orange-600' },
    { name: 'Sneha Reddy', role: 'UI/UX Designer', color: 'from-pink-500 to-pink-600' },
    { name: 'Arjun Singh', role: 'Backend Developer', color: 'from-green-500 to-green-600' },
    { name: 'Kavya Iyer', role: 'Data Analyst', color: 'from-cyan-500 to-cyan-600' },
  ];

  const stats = [
    { value: '1,000+', label: 'Documents', gradient: 'from-blue-500 to-blue-600' },
    { value: '50+', label: 'Departments', gradient: 'from-purple-500 to-purple-600' },
    { value: '10K+', label: 'Users', gradient: 'from-orange-500 to-orange-600' },
    { value: '99.9%', label: 'Uptime', gradient: 'from-green-500 to-green-600' },
  ];

  const techStack = [
    'React',
    'TypeScript',
    'Tailwind CSS',
    'Motion',
    'Recharts',
    'Node.js',
    'Python',
    'TensorFlow',
    'NLP',
    'Cloud Services',
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-50">
      <div className="p-8 max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-6"
          >
            <div className="relative">
              <div className="w-24 h-24 bg-gradient-to-br from-[#002D62] via-[#003875] to-[#004080] rounded-3xl flex items-center justify-center mx-auto shadow-2xl shadow-blue-900/30">
                <Globe className="w-12 h-12 text-white" />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-[#F97316] to-[#ea6a0a] rounded-full flex items-center justify-center shadow-lg">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
            </div>
          </motion.div>
          <h1 className="text-[#002D62] mb-4">
            AI-Based Smart Information Retrieval System
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            Developed for Smart India Hackathon 2025 by passionate student innovators committed to revolutionizing educational information access
          </p>
          <div className="flex items-center justify-center gap-3 mt-6">
            <Badge className="bg-green-100 text-green-700 border-green-200 px-4 py-2">
              Live & Running
            </Badge>
            <Badge className="bg-blue-100 text-blue-700 border-blue-200 px-4 py-2">
              SIH 2025
            </Badge>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat) => (
            <motion.div key={stat.label} variants={item}>
              <Card className="p-7 text-center border-0 shadow-xl bg-white hover:shadow-2xl transition-all duration-300 group">
                <div className={`w-12 h-12 bg-gradient-to-br ${stat.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-[#002D62] mb-2">{stat.value}</h2>
                <p className="text-gray-600 text-sm">{stat.label}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card className="p-10 mb-16 border-0 shadow-2xl bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#F97316]/20 to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-br from-[#002D62]/20 to-transparent rounded-full blur-3xl" />
            
            <div className="max-w-4xl mx-auto text-center relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-[#002D62] to-[#004080] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-[#002D62] mb-6">Our Mission</h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                To revolutionize access to educational information by leveraging artificial intelligence 
                and modern web technologies. We aim to make government policies, schemes, and regulations 
                easily discoverable and accessible to students, educators, and administrators across India, 
                contributing to a more informed and empowered educational ecosystem that drives positive change.
              </p>
            </div>
          </Card>
        </motion.div>

        {/* Features */}
        <div className="mb-16">
          <h2 className="text-[#002D62] text-center mb-10">Key Features</h2>
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <motion.div key={feature.title} variants={item}>
                  <Card className="p-7 border-0 shadow-xl hover:shadow-2xl transition-all duration-300 h-full bg-white group">
                    <div className={`w-14 h-14 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Technology Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Card className="p-10 mb-16 border-0 shadow-xl bg-white">
            <div className="text-center mb-8">
              <div className="w-14 h-14 bg-gradient-to-br from-[#F97316] to-[#ea6a0a] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Code className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-[#002D62] mb-2">Technology Stack</h2>
              <p className="text-gray-600">Built with cutting-edge technologies</p>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.6 + index * 0.05 }}
                  className="px-6 py-3 bg-gradient-to-r from-[#002D62] to-[#004080] text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
                >
                  {tech}
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Team */}
        <div className="mb-16">
          <h2 className="text-[#002D62] text-center mb-10">Our Team</h2>
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {teamMembers.map((member) => (
              <motion.div key={member.name} variants={item}>
                <Card className="p-7 border-0 shadow-xl hover:shadow-2xl transition-all duration-300 text-center bg-white group">
                  <div className={`w-20 h-20 bg-gradient-to-br ${member.color} rounded-full flex items-center justify-center mx-auto mb-5 shadow-lg group-hover:scale-110 transition-transform`}>
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-gray-600 text-sm">{member.role}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <Card className="p-12 border-0 shadow-2xl bg-gradient-to-br from-[#002D62] via-[#003875] to-[#004080] text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#F97316]/20 rounded-full blur-3xl" />
            
            <div className="text-center max-w-2xl mx-auto relative z-10">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h2 className="mb-4">Get In Touch</h2>
              <p className="mb-8 text-white/90 text-lg">
                Have questions or feedback? We would love to hear from you!
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button className="bg-white text-[#002D62] hover:bg-gray-100 shadow-xl px-8 py-6">
                  <Mail className="w-5 h-5 mr-2" />
                  Email Us
                </Button>
                <Button className="bg-gradient-to-r from-[#F97316] to-[#ea6a0a] hover:from-[#ea6a0a] hover:to-[#F97316] text-white shadow-xl px-8 py-6">
                  <Github className="w-5 h-5 mr-2" />
                  View on GitHub
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Footer */}
        <div className="text-center mt-16 py-8 border-t border-gray-200">
          <p className="text-gray-600 flex items-center justify-center gap-2 mb-3">
            Built with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> for Smart India Hackathon 2025
          </p>
          <p className="text-gray-500 text-sm">
            Ministry of Education | Department of Higher Education
          </p>
        </div>
      </div>
    </div>
  );
}
