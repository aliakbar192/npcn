'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  FiCheck, 
  FiZap, 
  FiHeadphones, 
  FiFileText, 
  FiDollarSign, 
  FiTool 
} from 'react-icons/fi';
import { usp } from '../../data/cableData';

const USPSection = () => {
  // Function to get the appropriate icon based on the icon string
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'check':
        return <FiCheck className="w-6 h-6 text-[#009245]" />;
      case 'zap':
        return <FiZap className="w-6 h-6 text-[#009245]" />;
      case 'headphones':
        return <FiHeadphones className="w-6 h-6 text-[#009245]" />;
      case 'file':
        return <FiFileText className="w-6 h-6 text-[#009245]" />;
      case 'dollar':
        return <FiDollarSign className="w-6 h-6 text-[#009245]" />;
      case 'tool':
        return <FiTool className="w-6 h-6 text-[#009245]" />;
      default:
        return <FiCheck className="w-6 h-6 text-[#009245]" />;
    }
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Why Choose NPCN for Your Connectivity Needs
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            We provide industry-leading internet and cable services with unmatched reliability.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {usp.map((item, index) => (
            <motion.div
              key={item.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 flex"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)' }}
            >
              <div className="mr-4 bg-green-50 dark:bg-green-900/30 rounded-full p-3 self-start">
                {getIcon(item.icon)}
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default USPSection;
