'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface BillingToggleProps {
  options: string[];
  selectedOption: string;
  onChange: (option: string) => void;
}

const BillingToggle: React.FC<BillingToggleProps> = ({
  options,
  selectedOption,
  onChange
}) => {
  return (
    <div className="flex justify-center mb-12">
      <div className="bg-gray-900 rounded-xl shadow-lg p-2 border border-gray-800">
        <div className="grid grid-cols-3 gap-2 w-full max-w-xl">
          {options.map((option) => (
            <button
              key={option}
              onClick={() => onChange(option)}
              className={`relative py-3 px-4 rounded-lg text-center transition-all duration-300 ${
                selectedOption === option
                  ? 'text-white shadow-md'
                  : 'text-gray-400 hover:text-gray-300 hover:bg-gray-800'
              }`}
            >
              {selectedOption === option && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 rounded-lg bg-gradient-to-r from-green-600 to-green-500"
                  initial={false}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <div className="relative z-10 flex flex-col items-center">
                {/* Icons */}
                {option === 'Internet' && (
                  <svg className="w-5 h-5 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                  </svg>
                )}
                {option === 'Cable' && (
                  <svg className="w-5 h-5 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                )}
                {option === 'Bundle' && (
                  <svg className="w-5 h-5 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                )}
                <span className="font-medium">{option}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BillingToggle;
