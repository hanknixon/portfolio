import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, PhoneOff, X } from 'lucide-react';

export const EasterEggCall = () => {
  const [callState, setCallState] = useState<'idle' | 'ringing' | 'answered' | 'dismissed'>('idle');
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (hasTriggered) return;
      
      // Check if user has scrolled to the bottom of the page (within 50px)
      const isAtBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 50;
      
      if (isAtBottom) {
        setHasTriggered(true);
        // Add a slight delay before ringing so it feels natural when they hit the footer
        setTimeout(() => setCallState('ringing'), 800);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasTriggered]);

  // Disable body scroll when modal is active
  useEffect(() => {
    if (callState === 'ringing' || callState === 'answered') {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [callState]);

  return (
    <AnimatePresence>
      {/* Dark Overlay Backdrop */}
      {(callState === 'ringing' || callState === 'answered') && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[9998]"
        />
      )}

      {callState === 'ringing' && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: "-40%", x: "-50%" }}
          animate={{ opacity: 1, scale: 1, y: "-50%", x: "-50%" }}
          exit={{ opacity: 0, scale: 0.9, y: "-40%", x: "-50%" }}
          className="fixed top-1/2 left-1/2 z-[9999] flex flex-col items-center gap-3 w-[90%] max-w-[450px]"
        >
          {/* Incoming Call Pill */}
          <div className="w-full bg-[#1c1c1e] border border-gray-800 shadow-2xl rounded-full p-3 pr-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="relative">
                <img 
                  src="/images/portfolio_picture.jpg" 
                  alt="Hank Nixon" 
                  className="w-12 h-12 rounded-full object-cover border border-gray-700"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-gray-400 text-xs font-medium uppercase tracking-wider">Incoming call</span>
                <span className="text-white font-semibold text-lg leading-tight">Hank Nixon</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button 
                onClick={() => setCallState('dismissed')}
                className="w-10 h-10 rounded-full bg-red-500 hover:bg-red-600 flex items-center justify-center transition-transform active:scale-90 shadow-lg shadow-red-500/20"
              >
                <PhoneOff size={18} className="text-white" />
              </button>
              <button 
                onClick={() => setCallState('answered')}
                className="w-10 h-10 rounded-full bg-green-500 hover:bg-green-600 flex items-center justify-center transition-transform active:scale-90 shadow-lg shadow-green-500/20 animate-bounce"
              >
                <Phone size={18} className="text-white fill-white" />
              </button>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center"
          >
            <p className="text-gray-400 text-xs font-medium px-4">
              Don't worry, it's not a real phone call. Just a fun easter egg 😆 Go ahead take the call!
            </p>
          </motion.div>
        </motion.div>
      )}

      {callState === 'answered' && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: "-40%", x: "-50%" }}
          animate={{ opacity: 1, scale: 1, y: "-50%", x: "-50%" }}
          exit={{ opacity: 0, scale: 0.9, y: "-40%", x: "-50%" }}
          className="fixed top-1/2 left-1/2 z-[9999] w-[90%] max-w-[400px] flex flex-col items-center gap-4"
        >
          <div className="bg-[#1c1c1e] border border-gray-800 shadow-2xl rounded-3xl p-6 text-center relative overflow-hidden">
            {/* Subtle background glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-green-500/10 blur-2xl pointer-events-none" />
            
            <p className="text-gray-300 text-sm leading-relaxed relative z-10">
              Hey there! I see you're enjoying my portfolio. I'm currently open to opportunities so please feel free to reach out to me at 
              <a href="mailto:hank.enixon@gmail.com" className="text-white block mt-2 text-base font-bold hover:text-green-400 hover:underline transition-colors">
                hank.enixon@gmail.com
              </a>
            </p>
          </div>
          
          <button 
            onClick={() => setCallState('dismissed')}
            className="w-12 h-12 rounded-full bg-red-500 hover:bg-red-600 flex items-center justify-center transition-transform active:scale-90 shadow-lg shadow-red-500/20"
          >
            <X size={24} className="text-white" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
