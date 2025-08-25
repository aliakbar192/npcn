'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiCheck } from 'react-icons/fi';
import './custom-scrollbar.css';

interface PackageCardProps {
  name: string;
  price: number;
  speed?: string;
  channels?: number;
  features: string[];
  isPopular?: boolean;
  delay?: number;
}

const PackageCard: React.FC<PackageCardProps> = ({
  name,
  price,
  speed,
  channels,
  features,
  isPopular = false,
  delay = 0
}) => {
  return (
    <motion.div
      className={`relative w-full ${isPopular ? 'z-10' : 'z-0'}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      animate={isPopular ? { y: [0, -8, 0] } : {}}
      transition={{ 
        duration: 0.7, 
        delay: delay,
        ease: [0.22, 1, 0.36, 1],
        y: isPopular ? { 
          repeat: Infinity, 
          duration: 3, 
          ease: "easeInOut" 
        } : {},
        scale: { duration: 0.3 }
      }}
      whileHover={{ scale: 1.02, y: -5 }}
      whileTap={{ scale: 0.98 }}
    >
      {isPopular && (
        <div className="absolute top-0 left-0 right-0 flex justify-center z-30">
          <div className="bg-gradient-to-r from-[#009245] to-[#00b050] text-white text-sm font-bold py-1 px-4 rounded-full shadow-md -mt-3">
            MOST POPULAR
          </div>
        </div>
      )}
      <div 
        className={`
          h-[550px] overflow-hidden rounded-2xl backdrop-blur-lg flex flex-col
          ${isPopular ? 
            'bg-gradient-to-b from-white/15 to-white/5 border-2 border-[#009245]/50' : 
            'bg-white/10 border border-white/10'
          }
        `}
      >
        <motion.div
          className="p-6 flex flex-col h-full"
          whileHover={{ y: -5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="mb-4 h-[140px] overflow-hidden">
            <h3 className={`text-2xl font-bold mb-1 ${isPopular ? 'text-[#009245]' : 'text-white'}`}>
              {name}
            </h3>
            <div className="flex items-end mb-2">
              <span className="text-3xl font-bold text-white">PKR {price.toLocaleString()}</span>
              <span className="text-white/70 ml-1">/month</span>
            </div>
            
            {speed && (
              <div className="bg-white/10 rounded-lg p-2 mb-2 mt-2">
                <div className="text-white/90 text-sm font-medium">Internet Speed</div>
                <div className="text-white text-lg font-bold">{speed}</div>
              </div>
            )}
            
            {channels && (
              <div className="bg-white/10 rounded-lg p-2 mb-2">
                <div className="text-white/90 text-sm font-medium">TV Channels</div>
                <div className="text-white text-lg font-bold">{channels}+ Channels</div>
              </div>
            )}
          </div>
          
          <div className="mb-4 h-[250px] overflow-y-auto custom-scrollbar">
            <h4 className="text-white/90 font-medium mb-2">Package Includes:</h4>
            <ul className="space-y-3">
              {features.slice(0, 7).map((feature, index) => (
                <li key={index} className="flex items-start">
                  <FiCheck className="mt-1 mr-2 text-[#009245] flex-shrink-0" />
                  <span className="text-white/80 text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="mt-auto">
            <Link href="/signup">
              <motion.button 
                className={`
                  w-full py-3 px-6 rounded-lg font-medium text-white transition-all duration-300
                  ${isPopular ? 
                    'bg-gradient-to-r from-[#009245] to-[#00b050] hover:shadow-lg hover:shadow-[#009245]/30 relative overflow-hidden' : 
                    'bg-gradient-to-r from-[#009245] to-[#00b050] hover:shadow-lg hover:shadow-[#009245]/30'
                  }
                `}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                {isPopular && (
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                    initial={{ x: '-100%' }}
                    animate={{ x: '100%' }}
                    transition={{ 
                      repeat: Infinity, 
                      duration: 1.5, 
                      ease: "easeInOut",
                      repeatDelay: 0.5
                    }}
                  />
                )}
                Get Started
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
      
      {/* Glowing effect for popular package */}
      {isPopular && (
        <div className="absolute -inset-1 bg-gradient-to-r from-[#009245] to-[#00b050] rounded-2xl blur-lg opacity-30 -z-10" />
      )}
    </motion.div>
  );
};

export default PackageCard;
