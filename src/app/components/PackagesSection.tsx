'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PackageCard from './PackageCard';
import { 
  internetPackages, 
  cablePackages, 
  bundlePackages 
}from '../../data/cableData';

const PackagesSection = () => {
  const [activeTab, setActiveTab] = useState<'internet' | 'cable' | 'bundles'>('internet');

  const tabs = [
    { id: 'internet', label: 'Internet' },
    { id: 'cable', label: 'Cable TV' },
    { id: 'bundles', label: 'Bundles' },
  ];

  // Type definitions for packages
  type InternetPackage = {
    id: string;
    name: string;
    price: number;
    speed: string;
    features: string[];
    isPopular: boolean;
  };

  type CablePackage = {
    id: string;
    name: string;
    price: number;
    channels: number;
    features: string[];
    isPopular: boolean;
  };

  type BundlePackage = {
    id: string;
    name: string;
    price: number;
    speed: string;
    channels: number;
    features: string[];
    isPopular: boolean;
  };

  // Get packages based on active tab
  const getActivePackages = () => {
    switch (activeTab) {
      case 'internet':
        return internetPackages as InternetPackage[];
      case 'cable':
        return cablePackages as CablePackage[];
      case 'bundles':
        return bundlePackages as BundlePackage[];
      default:
        return internetPackages as InternetPackage[];
    }
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
            Our Packages
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Choose from our range of high-speed internet, premium TV, and value bundle packages.
          </p>
        </motion.div>

        {/* Tab selector */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-gray-100 dark:bg-gray-800 rounded-full p-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as 'internet' | 'cable' | 'bundles')}
                className={`relative px-6 py-2 rounded-full font-medium text-sm md:text-base transition-all ${
                  activeTab === tab.id
                    ? 'text-white'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                {activeTab === tab.id && (
                  <motion.span
                    layoutId="tab-pill"
                    className="absolute inset-0 bg-[#009245] rounded-full"
                    transition={{ type: 'spring', duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Packages grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {getActivePackages().map((pkg, index) => {
              // Type guard for the package type
              let speed = undefined;
              let channels = undefined;
              
              if (activeTab === 'internet' || activeTab === 'bundles') {
                speed = 'speed' in pkg ? pkg.speed : undefined;
              }
              
              if (activeTab === 'cable' || activeTab === 'bundles') {
                channels = 'channels' in pkg ? pkg.channels : undefined;
              }
              
              return (
                <PackageCard
                  key={pkg.id}
                  name={pkg.name}
                  price={pkg.price}
                  features={pkg.features}
                  isPopular={pkg.isPopular}
                  speed={speed}
                  channels={channels}
                />
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* View all packages button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <a
            href="/packages"
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
