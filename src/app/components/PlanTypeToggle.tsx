'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FiHome, FiBriefcase } from 'react-icons/fi';

interface PlanTypeToggleProps {
  selectedType: 'Home' | 'Business';
  onChange: (type: 'Home' | 'Business') => void;
}

const PlanTypeToggle: React.FC<PlanTypeToggleProps> = ({
  selectedType,
  onChange
}) => {
  return (
    <div className="flex justify-center mb-6">
      <motion.div 
        className="relative bg-gradient-to-r from-green-950/40 to-emerald-950/40 rounded-xl shadow-lg p-1 border border-green-500/20 backdrop-blur-sm max-w-xs w-full"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Glow effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl blur-lg opacity-30 -z-10" />
        <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500/30 to-emerald-500/30 rounded-xl blur-sm opacity-30 -z-10" />
        
        <div className="grid grid-cols-2 gap-2 w-full">
          <motion.button
            onClick={() => {
              console.log('Clicked Home');
              onChange('Home');
            }}
            className={`relative py-2 px-4 rounded-lg text-center transition-all duration-300 overflow-hidden`}
            whileHover={{ scale: selectedType !== 'Home' ? 1.02 : 1 }}
            whileTap={{ scale: 0.98 }}
          >
            {selectedType === 'Home' && (
              <motion.div
                layoutId="activePlanTab"
                className="absolute inset-0 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 shadow-md"
                initial={false}
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <div className="relative z-10 flex flex-col items-center justify-center space-y-1">
              <div className={`p-2 rounded-full ${selectedType === 'Home' ? 'bg-white/20' : 'bg-green-900/20'} transition-colors duration-300`}>
                <FiHome className={`w-4 h-4 ${selectedType === 'Home' ? 'text-white' : 'text-green-400'}`} />
              </div>
              <span className={`font-semibold text-sm ${selectedType === 'Home' ? 'text-white' : 'text-green-400'}`}>Home</span>
            </div>
          </motion.button>
          
          <motion.button
            onClick={() => {
              console.log('Clicked Business');
              onChange('Business');
            }}
            className={`relative py-2 px-4 rounded-lg text-center transition-all duration-300 overflow-hidden`}
            whileHover={{ scale: selectedType !== 'Business' ? 1.02 : 1 }}
            whileTap={{ scale: 0.98 }}
          >
            {selectedType === 'Business' && (
              <motion.div
                layoutId="activePlanTab"
                className="absolute inset-0 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 shadow-md"
                initial={false}
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <div className="relative z-10 flex flex-col items-center justify-center space-y-1">
              <div className={`p-2 rounded-full ${selectedType === 'Business' ? 'bg-white/20' : 'bg-green-900/20'} transition-colors duration-300`}>
                <FiBriefcase className={`w-4 h-4 ${selectedType === 'Business' ? 'text-white' : 'text-green-400'}`} />
              </div>
              <span className={`font-semibold text-sm ${selectedType === 'Business' ? 'text-white' : 'text-green-400'}`}>Business</span>
            </div>
          </motion.button>
        </div>
        
        {/* Floating particles for visual effect - smaller and more subtle */}
        <div className="absolute top-0 left-1/4 w-1 h-1 rounded-full bg-green-400/40 blur-sm" style={{ animation: 'float 10s ease-in-out infinite' }} />
        <div className="absolute bottom-0 right-1/4 w-1.5 h-1.5 rounded-full bg-emerald-400/40 blur-sm" style={{ animation: 'float 15s ease-in-out infinite reverse' }} />
        <div className="absolute top-1/2 right-1/4 w-1 h-1 rounded-full bg-green-300/30 blur-sm" style={{ animation: 'float 8s ease-in-out infinite' }} />
      </motion.div>
      
      {/* Add keyframes for floating animation */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          25% { transform: translateY(-5px) translateX(3px); }
          50% { transform: translateY(3px) translateX(5px); }
          75% { transform: translateY(5px) translateX(-3px); }
        }
      `}</style>
    </div>
  );
};

export default PlanTypeToggle;
