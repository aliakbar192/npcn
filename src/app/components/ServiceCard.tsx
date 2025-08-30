'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiArrowRight, FiPackage, FiServer, FiShield, FiCloud, FiDatabase, FiAward, FiSettings, FiSmartphone, FiWifi, FiHeadphones, FiBriefcase } from 'react-icons/fi';
import ClientOnly from './ClientOnly';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  link?: string;
  index?: number;
}

const iconMap: Record<string, React.ReactNode> = {
  package: <FiPackage className="w-6 h-6" />,
  server: <FiServer className="w-6 h-6" />,
  shield: <FiShield className="w-6 h-6" />,
  cloud: <FiCloud className="w-6 h-6" />,
  database: <FiDatabase className="w-6 h-6" />,
  award: <FiAward className="w-6 h-6" />,
  settings: <FiSettings className="w-6 h-6" />,
  smartphone: <FiSmartphone className="w-6 h-6" />,
  internet: <FiWifi className="w-6 h-6" />,
  support: <FiHeadphones className="w-6 h-6" />,
  business: <FiBriefcase className="w-6 h-6" />,
};

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, link, index }) => {
  // Get icon from map or use a default
  const iconElement = iconMap[icon.toLowerCase()] || <div className="text-2xl">{icon.charAt(0).toUpperCase()}</div>;
  
  return (
    <ClientOnly>
      <motion.div
        className="relative group h-full"
        whileHover={{ y: -8 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.5,
          ease: "easeOut",
          delay: index ? index * 0.1 : 0,
          y: {
            duration: 0.3,
            ease: "easeOut"
          }
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#009245] to-[#00b050] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl group-hover:blur-xl transform scale-95 group-hover:scale-105" />
        
        <div className="h-full bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-700 group-hover:border-green-500">
          <div className="p-6 flex flex-col h-full">
            <div className="mb-6">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-green-900/30 text-green-400 mb-4 group-hover:scale-110 transition-transform duration-300 border border-green-700/50">
                {iconElement}
              </div>
              <h3 className="text-xl font-bold mb-2 text-white group-hover:text-green-400 transition-colors duration-300">{title}</h3>
              <p className="text-gray-300">{description}</p>
            </div>
            
            <div className="mt-auto pt-4 border-t border-gray-700">
              <Link 
                href={link || `/services/${title.toLowerCase().replace(/\s+/g, '-')}`}
                className="inline-flex items-center text-green-400 font-medium group/link hover:text-green-300"
              >
                Learn more 
                <motion.span 
                  className="ml-1 inline-block"
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <FiArrowRight />
                </motion.span>
              </Link>
            </div>
          </div>
          
          <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-green-400/20 to-[#009245]/20 -translate-y-1/2 translate-x-1/2 rounded-full blur-2xl transform scale-0 group-hover:scale-100 transition-all duration-700 opacity-0 group-hover:opacity-100" />
        </div>
      </motion.div>
    </ClientOnly>
  );
};

export default ServiceCard;
