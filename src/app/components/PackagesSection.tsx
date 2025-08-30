'use client';

import React from 'react';
import { motion } from 'framer-motion';
import PackageCard from './PackageCard';
import { homePlans } from '../../data/plansData';

const PackagesSection = () => {
  // Type definition for home plans packages
  type HomePlan = {
    id: string;
    name: string;
    price: number;
    speed: string;
    features: string[];
    isPopular: boolean;
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 shadow-xl shadow-gray-900/60 relative overflow-hidden">
      {/* Gradient overlay effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-900/5 via-transparent to-blue-900/5 pointer-events-none"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-500/3 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/3 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Internet Packages
          </h2>
          <p className="text-xl text-gray-300">
            Choose from our range of high-speed internet packages for reliable connectivity.
          </p>
        </motion.div>

        {/* Packages grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {homePlans.map((pkg: any, index: number) => (
            <PackageCard
              key={pkg.id}
              name={pkg.name}
              price={pkg.price}
              features={pkg.features}
              isPopular={pkg.isPopular}
              speed={pkg.speed}
              channels={undefined}
            />
          ))}
        </motion.div>

        {/* View all packages button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <a
            href="/plans"
            className="inline-flex items-center text-[#009245] hover:text-[#00b050] font-medium"
          >
            View all packages
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default PackagesSection;
