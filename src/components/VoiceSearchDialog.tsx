import { useState, useEffect } from 'react';
import { Mic, X, Volume2 } from 'lucide-react';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from './ui/dialog';
import { Button } from './ui/button';
import { motion } from 'motion/react';

interface VoiceSearchDialogProps {
  open: boolean;
  onClose: () => void;
  onSearch: (query: string) => void;
}

export function VoiceSearchDialog({ open, onClose, onSearch }: VoiceSearchDialogProps) {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');

  useEffect(() => {
    if (open) {
      setIsListening(true);
      // Simulate voice listening
      setTimeout(() => {
        setTranscript('Tell me about National Education Policy 2020');
      }, 2000);
    } else {
      setIsListening(false);
      setTranscript('');
    }
  }, [open]);

  const handleSearch = () => {
    if (transcript) {
      onSearch(transcript);
      onClose();
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md border-0 shadow-2xl p-0 overflow-hidden">
        {/* Hidden accessibility elements */}
        <DialogTitle className="sr-only">Voice Search</DialogTitle>
        <DialogDescription className="sr-only">
          Use your voice to search for policies, schemes, and regulations. Speak clearly when the microphone is listening.
        </DialogDescription>
        
        <div className="bg-gradient-to-br from-[#0A192F] via-[#112240] to-[#112240] p-8 text-white relative overflow-hidden">
          {/* Background Animation */}
          <div className="absolute inset-0">
            {isListening && (
              <>
                <motion.div
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 0.1, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/10 rounded-full blur-3xl"
                />
                <motion.div
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.2, 0.05, 0.2],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-white/5 rounded-full blur-3xl"
                />
              </>
            )}
          </div>

          {/* Content */}
          <div className="relative z-10 text-center">
            {/* Microphone Icon */}
            <div className="mb-6">
              <motion.div
                animate={isListening ? {
                  scale: [1, 1.1, 1],
                } : {}}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-24 h-24 mx-auto bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border-4 border-white/20 shadow-2xl"
              >
                <Mic className="w-12 h-12 text-white" />
              </motion.div>
            </div>

            {/* Status */}
            <h3 className="text-white mb-2">
              {isListening ? 'Listening...' : 'Voice Search'}
            </h3>
            <p className="text-white/70 mb-6">
              {isListening ? 'Speak your query clearly' : 'Click to start voice search'}
            </p>

            {/* Waveform Animation */}
            {isListening && (
              <div className="flex items-center justify-center gap-1 mb-6 h-12">
                {[...Array(20)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      height: ['20%', '100%', '20%'],
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      delay: i * 0.05,
                      ease: "easeInOut"
                    }}
                    className="w-1 bg-white/60 rounded-full"
                  />
                ))}
              </div>
            )}

            {/* Transcript */}
            {transcript && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-4 mb-6 border border-white/20"
              >
                <div className="flex items-start gap-3">
                  <Volume2 className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <p className="text-white text-left">{transcript}</p>
                </div>
              </motion.div>
            )}

            {/* Actions */}
            <div className="flex gap-3 justify-center">
              {transcript ? (
                <>
                  <Button
                    onClick={() => setTranscript('')}
                    variant="outline"
                    className="bg-white/10 hover:bg-white/20 text-white border-white/20"
                  >
                    Try Again
                  </Button>
                  <Button
                    onClick={handleSearch}
                  className="bg-white text-[#0A192F] hover:bg-white/90"
                  >
                    Search Now
                  </Button>
                </>
              ) : (
                <Button
                  onClick={onClose}
                  variant="outline"
                  className="bg-white/10 hover:bg-white/20 text-white border-white/20"
                >
                  Cancel
                </Button>
              )}
            </div>

            {/* Tips */}
            <div className="mt-6 pt-6 border-t border-white/20">
              <p className="text-white/50 text-sm">
                💡 Try: "Show me NEP 2020" or "Latest scholarship schemes"
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
