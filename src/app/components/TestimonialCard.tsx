'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FiStar } from 'react-icons/fi';

interface TestimonialCardProps {
  name: string;
  role: string;
  testimonial: string;
  rating: number;
  image: string;
  isActive: boolean;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  role,
  testimonial,
  rating,
  image,
  isActive
}) => {
  return (
    <motion.div 
      className={`
        absolute top-0 left-0 w-full h-full
        ${isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'}
      `}
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: isActive ? 1 : 0,
      }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-gray-800/90 backdrop-blur-lg border border-gray-700/50 rounded-2xl p-8 md:p-10 shadow-2xl h-full">
        <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center h-full">
          <div className="flex-shrink-0">
            <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-3 border-[#009245] shadow-lg shadow-[#009245]/30">
              {image ? (
                <img 
                  src={image} 
                  alt={`${name}'s profile`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // When image fails to load, hide it so fallback shows
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
              ) : null}
              {/* Colored initials as fallback */}
              <div className="w-full h-full bg-gradient-to-br from-[#009245] to-[#00b050] flex items-center justify-center text-white text-2xl font-bold shadow-inner">
                {name.charAt(0)}
              </div>
            </div>
          </div>
          
          <div className="flex-grow text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start mb-4">
              {[...Array(5)].map((_, i) => (
                <FiStar 
                  key={i} 
                  className={`w-5 h-5 ${i < rating ? 'fill-[#009245] text-[#009245]' : 'text-gray-600'}`} 
                />
              ))}
            </div>
            
            <blockquote className="text-gray-100 text-lg mb-6 italic leading-relaxed">
              "{testimonial}"
            </blockquote>
            
            <div>
              <h4 className="text-[#009245] font-bold text-lg">{name}</h4>
              <p className="text-gray-400 text-sm">{role}</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
