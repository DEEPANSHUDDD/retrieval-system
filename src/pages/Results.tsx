import { Download, Eye, CheckCircle, FileEdit, Star, Clock, Building2, SlidersHorizontal } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { motion } from 'motion/react';

interface ResultsProps {
  onNavigate: (page: string) => void;
}

export function Results({ onNavigate }: ResultsProps) {
  const results = [
    {
      title: 'National Education Policy (NEP) 2020',
      source: 'Ministry of Education',
      date: '7/29/2020',
      summary:
        'The National Education Policy 2020 is the first education policy of the 21st century and aims to address the many growing developmental imperatives of our country.',
      tags: ['Verified', 'Policy'],
      department: 'Ministry of Education',
      rating: 4.8,
      views: '15.4K',
    },
    {
      title: 'PM USHA (Unnat Bharat Abhiyan Scheme for Higher Education)',
      source: 'Department of Higher Education',
      date: '11/5/2023',
      summary:
        'A flagship scheme to enhance quality and access in higher education institutions across India.',
      tags: ['Verified', 'Scheme'],
      department: 'Department of Higher Education',
      rating: 4.5,
      views: '12.3K',
    },
    {
      title: 'UGC Guidelines for Online and Distance Learning 2023',
      source: 'University Grants Commission',
      date: '3/15/2023',
      summary:
        'Comprehensive guidelines for universities to implement online and distance learning programs with quality assurance.',
      tags: ['Verified', 'Guideline'],
      department: 'University Grants Commission',
      rating: 4.6,
      views: '9.8K',
    },
    {
      title: 'Samagra Shiksha Scheme 2.0',
      source: 'Ministry of Education',
      date: '8/4/2021',
      summary:
        'An overarching program for the school education sector extending from pre-school to class 12.',
      tags: ['Draft', 'Scheme'],
      department: 'Ministry of Education',
      rating: 4.3,
      views: '8.6K',
    },
    {
      title: 'SWAYAM Online Learning Platform - Annual Report 2024',
      source: 'Ministry of Education',
      date: '1/10/2024',
      summary:
        'Annual report showcasing the impact and reach of SWAYAM platform with over 2.5 million learners.',
      tags: ['Verified', 'Report'],
      department: 'Ministry of Education',
      rating: 4.7,
      views: '7.2K',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-slate-50/30 to-gray-50">
      <div className="p-8 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-[#002D62] mb-2 flex items-center gap-3">
                Search Results
                <Badge className="bg-green-100 text-green-700 border-green-200">
                  {results.length} documents found
                </Badge>
              </h1>
              <p className="text-gray-600">Most relevant results for your query</p>
            </div>
          </div>

          {/* Filters */}
          <Card className="p-5 border-0 shadow-lg bg-white">
            <div className="flex items-center gap-3 flex-wrap">
              <div className="flex items-center gap-2 text-gray-700">
                <SlidersHorizontal className="w-5 h-5" />
                <span className="font-medium">Filters:</span>
              </div>
              <select className="px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm shadow-sm hover:border-gray-300 transition-colors">
                <option>Relevance</option>
                <option>Date (Newest)</option>
                <option>Date (Oldest)</option>
                <option>Title (A-Z)</option>
                <option>Most Viewed</option>
              </select>
              <select className="px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm shadow-sm hover:border-gray-300 transition-colors">
                <option>All Types</option>
                <option>Policy</option>
                <option>Scheme</option>
                <option>Report</option>
                <option>Guideline</option>
              </select>
              <select className="px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm shadow-sm hover:border-gray-300 transition-colors">
                <option>All Departments</option>
                <option>Ministry of Education</option>
                <option>Department of Higher Education</option>
                <option>UGC</option>
              </select>
            </div>
          </Card>
        </motion.div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 gap-6">
          {results.map((result, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-7 hover:shadow-2xl transition-all duration-300 border-0 bg-white group relative overflow-hidden">
                {/* Gradient Accent */}
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#334155] to-[#475569] opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="flex items-start gap-6">
                  {/* Icon */}
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#0A192F] to-[#334155] rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-slate-900/20 group-hover:scale-110 transition-transform">
                      <FileEdit className="w-8 h-8 text-white" />
                    </div>
                    {result.tags.includes('Verified') && (
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center shadow-md">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h3 className="text-gray-900 mb-3 group-hover:text-[#002D62] transition-colors">
                          {result.title}
                        </h3>
                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                          <span className="flex items-center gap-1">
                            <Building2 className="w-4 h-4" />
                            {result.source}
                          </span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {result.date}
                          </span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <Eye className="w-4 h-4" />
                            {result.views} views
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 ml-4 bg-yellow-50 px-3 py-1.5 rounded-xl">
                        <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                        <span className="font-semibold text-yellow-700">{result.rating}</span>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-5 leading-relaxed">{result.summary}</p>

                    {/* Tags */}
                    <div className="flex flex-wrap items-center gap-2 mb-5">
                      {result.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant={tag === 'Verified' ? 'default' : 'secondary'}
                          className={
                            tag === 'Verified'
                              ? 'bg-green-100 text-green-700 hover:bg-green-100 border-green-200'
                              : tag === 'Draft'
                              ? 'bg-slate-100 text-slate-700 hover:bg-slate-100 border-slate-200'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-100'
                          }
                        >
                          {tag === 'Verified' && <CheckCircle className="w-3 h-3 mr-1" />}
                          {tag}
                        </Badge>
                      ))}
                      <Badge variant="outline" className="text-xs border-[#002D62] text-[#002D62]">
                        <Building2 className="w-3 h-3 mr-1" />
                        {result.department}
                      </Badge>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-3">
                      <Button
                        onClick={() => onNavigate('document')}
                        className="bg-gradient-to-r from-[#0A192F] to-[#334155] hover:from-[#1e293b] hover:to-[#0A192F] text-white shadow-lg shadow-slate-900/20"
                      >
                        <Eye className="w-4 h-4 mr-2" />
                        View Document
                      </Button>
                      <Button variant="outline" className="border-gray-300 hover:bg-gray-50">
                        <Download className="w-4 h-4 mr-2" />
                        Download PDF
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Related Documents Sidebar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Card className="p-7 mt-8 border-0 shadow-xl bg-gradient-to-br from-slate-50 to-gray-50">
            <h3 className="text-[#0A192F] mb-5 flex items-center gap-2">
              <Star className="w-5 h-5 text-[#334155]" />
              Related Documents
            </h3>
            <div className="space-y-3">
              {[
                'National Education Policy (NEP) 2020',
                'PM USHA Scheme for Higher Education',
                'UGC Guidelines for Online Learning 2023',
              ].map((doc, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-4 bg-white rounded-xl hover:shadow-lg transition-all cursor-pointer group border border-gray-100"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-[#334155] to-[#475569] rounded-lg flex items-center justify-center flex-shrink-0 shadow-md">
                    <FileEdit className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-sm text-gray-700 flex-1 group-hover:text-[#002D62] transition-colors">
                    {doc}
                  </span>
                  <Eye className="w-4 h-4 text-gray-400 group-hover:text-[#334155] transition-colors" />
                </div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
