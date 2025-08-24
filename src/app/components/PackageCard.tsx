'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiCheck } from 'react-icons/fi';

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
      className="relative"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.7, 
        delay: delay,
        ease: [0.22, 1, 0.36, 1] 
      }}
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
          h-full overflow-hidden rounded-2xl backdrop-blur-lg
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
          <div className="mb-6">
            <h3 className={`text-2xl font-bold mb-1 ${isPopular ? 'text-[#009245]' : 'text-white'}`}>
              {name}
            </h3>
            <div className="flex items-end mb-4">
              <span className="text-3xl font-bold text-white">${price}</span>
              <span className="text-white/70 ml-1">/month</span>
            </div>
            
            {speed && (
              <div className="bg-white/10 rounded-lg p-3 mb-3">
                <div className="text-white/90 font-medium">Internet Speed</div>
                <div className="text-white text-xl font-bold">{speed}</div>
              </div>
            )}
            
            {channels && (
              <div className="bg-white/10 rounded-lg p-3 mb-3">
                <div className="text-white/90 font-medium">TV Channels</div>
                <div className="text-white text-xl font-bold">{channels}+ Channels</div>
              </div>
            )}
          </div>
          
          <div className="mb-8 flex-grow">
            <h4 className="text-white/90 font-medium mb-2">Package Includes:</h4>
            <ul className="space-y-2">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <FiCheck className="mt-1 mr-2 text-[#009245]" />
                  <span className="text-white/80">{feature}</span>
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
                    'bg-gradient-to-r from-[#009245] to-[#00b050] hover:shadow-lg hover:shadow-[#009245]/30' : 
                    'bg-gradient-to-r from-[#009245] to-[#00b050] hover:shadow-lg hover:shadow-[#009245]/30'
                  }
                `}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
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
