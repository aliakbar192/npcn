'use client';

import React from 'react';
import { motion } from 'framer-motion';
import PackageCard from './PackageCard';
import { internetPackages } from '../../data/cableData';

const PackagesSection = () => {
  // Type definition for internet packages
  type InternetPackage = {
    id: string;
    name: string;
    price: number;
    speed: string;
    features: string[];
    isPopular: boolean;
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-green-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Internet Packages
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
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
          {internetPackages.map((pkg, index) => (
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
