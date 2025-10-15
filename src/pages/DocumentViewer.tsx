import { useState } from 'react';
import { Sparkles, Download, Printer, Share2, ZoomIn, ZoomOut, Bookmark } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Progress } from '../components/ui/progress';
import { motion } from 'motion/react';

export function DocumentViewer() {
  const [loading, setLoading] = useState(false);
  const [showSummary, setShowSummary] = useState(false);

  const handleGetSummary = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setShowSummary(true);
    }, 2000);
  };

  const documentText = `NATIONAL EDUCATION POLICY 2020

EXECUTIVE SUMMARY

The National Education Policy 2020 is the first education policy of the 21st century and replaces the thirty-four year old National Policy on Education (NPE), 1986. Built on the foundational pillars of Access, Equity, Quality, Affordability and Accountability, this policy is aligned to the 2030 Agenda for Sustainable Development and aims to transform India into a vibrant knowledge society and global knowledge superpower by making both school and college education more holistic, flexible, multidisciplinary, suited to 21st century needs and aimed at bringing out the unique capabilities of each student.

KEY HIGHLIGHTS

1. SCHOOL EDUCATION
The policy proposes a new pedagogical and curricular structure of 5+3+3+4 covering ages 3-18, replacing the 10+2 structure. This will bring early childhood education (ECE) into the mainstream education system.

2. HIGHER EDUCATION
Undergraduate degrees will be of 3 or 4 years with multiple exit options and appropriate certifications. Academic Bank of Credits to facilitate student mobility between institutions.

3. VOCATIONAL EDUCATION
Integration of vocational education starting from Class 6 with internships. At least 50% of learners should have exposure to vocational education by 2025.

4. MEDIUM OF INSTRUCTION
Wherever possible, the medium of instruction until at least Grade 5 will be the home language/mother tongue/local language/regional language.

5. TEACHER EDUCATION
By 2030, the minimum degree qualification for teaching will be a 4-year integrated B.Ed. degree.

IMPLEMENTATION TIMELINE

The policy aims to be implemented in phases:
- Short term goals: 2020-2025
- Medium term goals: 2025-2030  
- Long term goals: 2030-2040

FINANCIAL COMMITMENT

The policy reaffirms the commitment to invest 6% of GDP in education sector, with increased investment in teacher education and educational research.

CONCLUSION

The National Education Policy 2020 represents a comprehensive framework for elementary education to higher education as well as vocational training in both rural and urban India. The policy aims to transform the education system by 2040 into one that contributes to sustainable livelihoods and economic independence of all citizens.`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-50">
      <div className="p-8 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between mb-8"
        >
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-[#002D62]">Document Viewer</h1>
              <Badge className="bg-green-100 text-green-700 border-green-200">
                Verified
              </Badge>
            </div>
            <p className="text-gray-600">National Education Policy (NEP) 2020</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="icon" className="hover:bg-blue-50">
              <ZoomIn className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="icon" className="hover:bg-blue-50">
              <ZoomOut className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="icon" className="hover:bg-blue-50">
              <Bookmark className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="icon" className="hover:bg-blue-50">
              <Download className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="icon" className="hover:bg-blue-50">
              <Printer className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="icon" className="hover:bg-blue-50">
              <Share2 className="w-4 h-4" />
            </Button>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Document Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2"
          >
            <Card className="p-10 border-0 shadow-2xl bg-white min-h-[700px]">
              <div className="prose max-w-none">
                <div className="whitespace-pre-wrap text-gray-700 leading-relaxed">
                  {documentText}
                </div>
              </div>
            </Card>
          </motion.div>

          {/* AI Insights Panel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-1"
          >
            <Card className="p-7 border-0 shadow-2xl bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 sticky top-24">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-[#F97316] to-[#ea6a0a] rounded-xl flex items-center justify-center shadow-lg shadow-orange-500/30">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-[#002D62]">AI Insights</h2>
              </div>

              {!showSummary && !loading && (
                <div className="text-center py-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#002D62] to-[#004080] rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-blue-900/30 animate-pulse">
                    <Sparkles className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-gray-900 mb-3">AI-Powered Analysis</h3>
                  <p className="text-gray-600 mb-8 text-sm leading-relaxed">
                    Get comprehensive AI-powered summary and key insights from this document in seconds
                  </p>
                  <Button
                    onClick={handleGetSummary}
                    className="bg-gradient-to-r from-[#F97316] to-[#ea6a0a] hover:from-[#ea6a0a] hover:to-[#F97316] text-white w-full py-6 shadow-lg shadow-orange-500/30"
                  >
                    <Sparkles className="w-5 h-5 mr-2" />
                    Generate AI Summary
                  </Button>
                </div>
              )}

              {loading && (
                <div className="text-center py-16">
                  <div className="relative w-20 h-20 mx-auto mb-6">
                    <div className="absolute inset-0 border-4 border-[#F97316]/20 rounded-full" />
                    <div className="absolute inset-0 border-4 border-[#F97316] border-t-transparent rounded-full animate-spin" />
                    <div className="absolute inset-2 bg-gradient-to-br from-[#F97316] to-[#ea6a0a] rounded-full flex items-center justify-center">
                      <Sparkles className="w-8 h-8 text-white animate-pulse" />
                    </div>
                  </div>
                  <p className="text-gray-700 font-medium mb-2">Analyzing document...</p>
                  <p className="text-gray-500 text-sm mb-4">AI is processing the content</p>
                  <Progress value={65} className="h-2" />
                </div>
              )}

              {showSummary && !loading && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-4"
                >
                  <div className="p-5 bg-white rounded-2xl shadow-sm border border-purple-100">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                        <Sparkles className="w-4 h-4 text-white" />
                      </div>
                      <h3 className="text-sm text-[#002D62] font-semibold">Quick Summary</h3>
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      NEP 2020 introduces a new 5+3+3+4 curricular structure, emphasizes early
                      childhood education, promotes vocational training from Class 6, and aims for 6%
                      GDP investment in education by 2040.
                    </p>
                  </div>

                  <div className="p-5 bg-white rounded-2xl shadow-sm border border-blue-100">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                        <Sparkles className="w-4 h-4 text-white" />
                      </div>
                      <h3 className="text-sm text-[#002D62] font-semibold">Key Points</h3>
                    </div>
                    <ul className="space-y-3 text-sm text-gray-700">
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-gradient-to-br from-[#F97316] to-[#ea6a0a] rounded-full mt-1.5 flex-shrink-0" />
                        <span>New 5+3+3+4 structure replacing 10+2</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-gradient-to-br from-[#F97316] to-[#ea6a0a] rounded-full mt-1.5 flex-shrink-0" />
                        <span>Flexible degree programs with multiple exit options</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-gradient-to-br from-[#F97316] to-[#ea6a0a] rounded-full mt-1.5 flex-shrink-0" />
                        <span>50% vocational education exposure by 2025</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-gradient-to-br from-[#F97316] to-[#ea6a0a] rounded-full mt-1.5 flex-shrink-0" />
                        <span>Mother tongue instruction till Grade 5</span>
                      </li>
                    </ul>
                  </div>

                  <div className="p-5 bg-white rounded-2xl shadow-sm border border-green-100">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                        <Sparkles className="w-4 h-4 text-white" />
                      </div>
                      <h3 className="text-sm text-[#002D62] font-semibold">Implementation</h3>
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      Phased implementation with goals set for 2025, 2030, and 2040. Requires 6% GDP
                      investment commitment.
                    </p>
                  </div>

                  <div className="p-5 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border border-green-200">
                    <h3 className="text-sm text-green-800 font-semibold mb-3">AI Confidence Score</h3>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="flex-1 h-3 bg-white rounded-full overflow-hidden shadow-inner">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: '95%' }}
                          transition={{ duration: 1, delay: 0.5 }}
                          className="h-full bg-gradient-to-r from-green-500 to-green-600"
                        />
                      </div>
                      <span className="font-semibold text-green-700">95%</span>
                    </div>
                    <p className="text-xs text-green-600">High accuracy analysis</p>
                  </div>

                  <Button
                    variant="outline"
                    onClick={() => setShowSummary(false)}
                    className="w-full border-gray-300 hover:bg-gray-50"
                  >
                    Generate New Summary
                  </Button>
                </motion.div>
              )}
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
