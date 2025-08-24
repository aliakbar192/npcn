'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Footer = () => {
  // Current year for copyright
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-12 mt-12">
      <div className="container-fluid">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h6 className="text-gray-800 dark:text-white font-bold text-lg mb-4 flex items-center">
                <img
                  src="/images/logos/NPCN LOGO.png"
                  alt="Logo"
                  className="h-12 w-auto sm:h-12 mr-2 sm:mr-3 object-contain"
                />

                <img
                  src="/images/logos/NPCN LOGO (1).png"
                  alt="Logo"
                  className="h-12 w-auto sm:h-12 mr-2 sm:mr-3 object-contain"
                />
              </h6>
              <p className="text-gray-600 dark:text-gray-300 mb-4 max-w-xs">
                Connecting the world with reliable internet and cable solutions since 2015.
              </p>

              {/* Social Media Icons */}
              <div className="flex space-x-4 mt-4">
                {['Facebook', 'Twitter', 'Instagram', 'LinkedIn'].map((social) => (
                  <button
                    key={social}
                    aria-label={social}
                    className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 p-2"
                  >
                    <span className="sr-only">{social}</span>
                    {/* Placeholder for social icons */}
                    <div className="w-5 h-5 rounded-full bg-current"></div>
                  </button>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h6 className="text-gray-800 dark:text-white font-bold text-lg mb-4">
                Quick Links
              </h6>
              <ul className="space-y-2">
                {['Home', 'Plans', 'Services', 'Coverage'].map((item) => (
                  <li key={item}>
                    <Link
                      href={`/${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`}
                      className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Contact Info */}
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h6 className="text-gray-800 dark:text-white font-bold text-lg mb-4">
                Contact Us
              </h6>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-start space-x-2">
                  <span>📍</span>
                  <span>123 Business Avenue, City, Country</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span>📞</span>
                  <span>+1 (555) 123-4567</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span>✉️</span>
                  <span>info@npcn.com</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-700">
          <p className="text-center text-gray-600 dark:text-gray-400 text-sm">
            © {currentYear} NPCN. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
