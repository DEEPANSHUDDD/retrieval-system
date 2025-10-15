import { useState } from 'react';
import { Send, Bot, User, MessageCircle, Mail, BookOpen, Sparkles } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { motion } from 'motion/react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: string;
}

export function Support() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: 'Hello! I am your AI assistant for the Smart Information Retrieval System. How can I help you today?',
      sender: 'bot',
      timestamp: '10:30 AM',
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const newMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages([...messages, newMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate bot response
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: getBotResponse(inputValue),
        sender: 'bot',
        timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const getBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('nep') || lowerMessage.includes('policy')) {
      return 'The National Education Policy (NEP) 2020 is available in our database. You can access it from the Dashboard or use the search feature. Would you like me to guide you to it?';
    } else if (lowerMessage.includes('search') || lowerMessage.includes('find')) {
      return 'To search for documents, use the search bar on the Dashboard page. You can filter by year, department, and document type. What specific document are you looking for?';
    } else if (lowerMessage.includes('help') || lowerMessage.includes('how')) {
      return 'I can help you with:\n- Finding educational policies and schemes\n- Navigating the system\n- Understanding document formats\n- Technical support\n\nWhat would you like to know more about?';
    } else {
      return 'Thank you for your question. I am here to help you navigate the Smart Information Retrieval System. Could you please provide more details about what you are looking for?';
    }
  };

  const quickQuestions = [
    { text: 'How do I search for policies?', icon: '🔍' },
    { text: 'What is NEP 2020?', icon: '📚' },
    { text: 'How to download documents?', icon: '⬇️' },
    { text: 'System usage guide', icon: '📖' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-50">
      <div className="p-8 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 bg-gradient-to-br from-[#F97316] to-[#ea6a0a] rounded-2xl flex items-center justify-center shadow-lg shadow-orange-500/20">
              <MessageCircle className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-[#002D62]">Support & Help</h1>
          </div>
          <p className="text-gray-600">Chat with our AI assistant for instant help 24/7</p>
        </motion.div>

        {/* Chat Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="border-0 shadow-2xl overflow-hidden bg-white">
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-[#002D62] to-[#004080] p-5 flex items-center gap-3">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-[#F97316] to-[#ea6a0a] rounded-full flex items-center justify-center shadow-lg">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-400 rounded-full border-2 border-[#002D62]" />
              </div>
              <div>
                <h3 className="text-white font-semibold">AI Assistant</h3>
                <p className="text-white/70 text-sm flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  Online
                </p>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="h-[500px] overflow-y-auto p-6 bg-gradient-to-b from-gray-50 to-white">
              <div className="space-y-4">
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex gap-3 ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    {message.sender === 'bot' && (
                      <div className="w-10 h-10 bg-gradient-to-br from-[#002D62] to-[#004080] rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                        <Bot className="w-5 h-5 text-white" />
                      </div>
                    )}
                    
                    <div
                      className={`max-w-[70%] ${
                        message.sender === 'user'
                          ? 'bg-gradient-to-br from-[#002D62] to-[#004080] text-white shadow-lg shadow-blue-900/20'
                          : 'bg-white text-gray-900 shadow-md border border-gray-100'
                      } rounded-2xl px-5 py-3.5`}
                    >
                      <p className="text-sm leading-relaxed whitespace-pre-line">{message.text}</p>
                      <p
                        className={`text-xs mt-2 ${
                          message.sender === 'user' ? 'text-white/70' : 'text-gray-500'
                        }`}
                      >
                        {message.timestamp}
                      </p>
                    </div>

                    {message.sender === 'user' && (
                      <div className="w-10 h-10 bg-gradient-to-br from-[#F97316] to-[#ea6a0a] rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                        <User className="w-5 h-5 text-white" />
                      </div>
                    )}
                  </motion.div>
                ))}

                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex gap-3 justify-start"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-[#002D62] to-[#004080] rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                      <Bot className="w-5 h-5 text-white" />
                    </div>
                    <div className="bg-white rounded-2xl px-5 py-3.5 shadow-md border border-gray-100">
                      <div className="flex gap-1">
                        <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                        <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                        <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>

            {/* Quick Questions */}
            {messages.length === 1 && (
              <div className="px-6 py-5 bg-gradient-to-r from-blue-50 to-purple-50 border-t border-gray-100">
                <p className="text-sm text-gray-700 font-medium mb-3 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#F97316]" />
                  Quick questions to get started:
                </p>
                <div className="flex flex-wrap gap-2">
                  {quickQuestions.map((question) => (
                    <button
                      key={question.text}
                      onClick={() => setInputValue(question.text)}
                      className="px-4 py-2.5 bg-white hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 border border-gray-200 hover:border-[#F97316] text-[#002D62] rounded-xl text-sm transition-all duration-200 shadow-sm hover:shadow-md flex items-center gap-2"
                    >
                      <span>{question.icon}</span>
                      <span>{question.text}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input Area */}
            <div className="p-6 bg-white border-t border-gray-200">
              <div className="flex gap-3">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Type your message..."
                  className="flex-1 border-gray-300 focus:border-[#002D62] focus:ring-[#002D62] py-6 px-5 rounded-xl"
                />
                <Button
                  onClick={handleSend}
                  disabled={!inputValue.trim()}
                  className="bg-gradient-to-r from-[#F97316] to-[#ea6a0a] hover:from-[#ea6a0a] hover:to-[#F97316] text-white px-8 shadow-lg shadow-orange-500/30 disabled:opacity-50"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send
                </Button>
              </div>
              <p className="text-xs text-gray-500 mt-3 flex items-center gap-1">
                <span>Press Enter to send • Powered by AI</span>
              </p>
            </div>
          </Card>
        </motion.div>

        {/* Help Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="p-7 border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-white group">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform">
                <Bot className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-gray-900 mb-3">AI Assistant</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Get instant answers from our AI-powered chatbot available 24/7 to help you navigate the system
              </p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card className="p-7 border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-white group">
              <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform">
                <Mail className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-gray-900 mb-3">Email Support</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Contact us at support@sih2025.gov.in for detailed assistance and technical support
              </p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Card className="p-7 border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-white group">
              <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform">
                <BookOpen className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-gray-900 mb-3">User Guide</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Access comprehensive documentation and tutorials to make the most of the system
              </p>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
