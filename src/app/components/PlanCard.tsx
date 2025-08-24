'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { plans } from '../../data/siteData';

interface PlanCardProps {
  plan: typeof plans[0];
}

const PlanCard: React.FC<PlanCardProps> = ({ plan }) => {
  return (
    <motion.div 
      className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden border-2 ${
        plan.isPopular ? 'border-blue-500' : 'border-transparent'
      }`}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      {plan.isPopular && (
        <div className="bg-blue-500 text-white text-center py-2 font-medium">
          Most Popular
        </div>
      )}
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{plan.name}</h3>
        
        <div className="mt-4 mb-6">
          <span className="text-4xl font-bold text-gray-900 dark:text-white">${plan.price}</span>
          <span className="text-gray-500 dark:text-gray-400">/{plan.billingPeriod}</span>
        </div>
        
        <ul className="space-y-3 mb-6">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <svg
                className="h-5 w-5 text-green-500 shrink-0 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-gray-600 dark:text-gray-300">{feature}</span>
            </li>
          ))}
        </ul>
        
        <button
          className={`w-full py-3 px-4 rounded-md font-medium transition-colors ${
            plan.isPopular
              ? 'bg-blue-600 hover:bg-blue-700 text-white'
              : 'bg-gray-200 hover:bg-gray-300 text-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white'
          }`}
        >
          Get Started
        </button>
      </div>
    </motion.div>
  );
};

export default PlanCard;
