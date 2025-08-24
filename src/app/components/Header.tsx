'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { FiChevronDown, FiHome, FiPackage, FiServer, FiMap, FiHeadphones, FiInfo, FiMail, FiArrowRight } from 'react-icons/fi';
import { Disclosure, Transition } from '@headlessui/react';
import classNames from 'classnames';

// Menu items for navigation
const menuItems = [
  { name: 'Home', path: '/', icon: <FiHome className="mr-2" /> },
  { name: 'Plans', path: '/plans', icon: <FiPackage className="mr-2" /> },
  { name: 'Services', path: '/services', icon: <FiServer className="mr-2" /> },
  { name: 'Coverage', path: '/coverage', icon: <FiMap className="mr-2" /> },
  { name: 'Support', path: '/support', icon: <FiHeadphones className="mr-2" /> },
  { name: 'About', path: '/about', icon: <FiInfo className="mr-2" /> },
  { name: 'Contact', path: '/contact', icon: <FiMail className="mr-2" /> }
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className="sticky top-0 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div 
        className={classNames(
          "transition-all duration-300 backdrop-blur-md", 
          scrolled ? "bg-white/80 shadow-lg dark:bg-gray-900/90" : "bg-white dark:bg-gray-900"
        )}
      >
        <div className="container-fluid px-4 sm:px-6 md:px-12 lg:px-20 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <motion.div
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Link href="/" className="flex items-center">
                {/* <div className="relative w-10 h-10 sm:w-12 sm:h-12 mr-2 sm:mr-3 flex items-center justify-center bg-[#009245] text-white font-bold rounded-lg overflow-hidden">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    N
                  </motion.div>
                  <motion.div 
                    className="absolute inset-0 bg-white mix-blend-overlay opacity-20"
                    animate={{ 
                      opacity: [0.2, 0.3, 0.2],
                      rotate: [0, 5, 0]
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity,
                      repeatType: "reverse" 
                    }}
                  />
                </div> */}
                <img
                  src="/images/logos/NPCN LOGO.png"
                  alt="Logo"
                  className="h-12 w-auto sm:h-12 mr-1 sm:mr-1 object-contain"
                />

                <img
                  src="/images/logos/NPCN LOGO (1).png"
                  alt="Logo"
                  className="h-12 w-auto sm:h-12 mr-1 sm:mr-1 object-contain"
                />
                <div className="flex flex-col">
                  {/* <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#009245] to-[#00b050] text-xl sm:text-2xl font-bold tracking-wide">NPCN</span> */}
                  {/* <span className="text-[10px] sm:text-xs text-[#333333] dark:text-gray-400">Connecting World</span> */}
                </div>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-1">
              {menuItems.map((item) => {
                const isActive = pathname === item.path;
                return (
                  <motion.div key={item.name} whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
                    <Link
                      href={item.path}
                      className={classNames(
                        "flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
                        isActive 
                          ? "bg-gradient-to-r from-[#009245] to-[#00b050] text-white shadow-md" 
                          : "text-[#333333] dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                      )}
                    >
                      {item.icon}
                      {item.name}
                    </Link>
                  </motion.div>
                );
              })}
              <motion.div 
                className="ml-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/get-started"
                  className="flex items-center px-6 py-2 bg-gradient-to-r from-[#009245] to-[#00b050] text-white rounded-full text-sm font-medium shadow-md hover:shadow-lg transition-all duration-200"
                >
                  Get Started
                </Link>
              </motion.div>
            </div>

            {/* Mobile Navigation Button */}
            <button
              aria-label="open menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <div className="flex flex-col items-center justify-center w-6 h-6">
                <motion.span 
                  className="block w-5 h-0.5 bg-gray-700 dark:bg-gray-300 rounded-full transition-all"
                  animate={{ rotate: mobileMenuOpen ? 45 : 0, y: mobileMenuOpen ? 2 : 0 }}
                  transition={{ duration: 0.2 }}
                />
                <motion.span 
                  className="block w-5 h-0.5 bg-gray-700 dark:bg-gray-300 rounded-full my-1 transition-all"
                  animate={{ opacity: mobileMenuOpen ? 0 : 1, x: mobileMenuOpen ? 10 : 0 }}
                  transition={{ duration: 0.2 }}
                />
                <motion.span 
                  className="block w-5 h-0.5 bg-gray-700 dark:bg-gray-300 rounded-full transition-all"
                  animate={{ rotate: mobileMenuOpen ? -45 : 0, y: mobileMenuOpen ? -2 : 0 }}
                  transition={{ duration: 0.2 }}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <motion.div 
                className="bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 shadow-lg rounded-b-2xl mx-4 mb-4 overflow-hidden"
                variants={{
                  hidden: { opacity: 0, y: -10 },
                  show: { opacity: 1, y: 0 }
                }}
                initial="hidden"
                animate="show"
              >
                <div className="p-4 divide-y divide-gray-100 dark:divide-gray-800">
                  {menuItems.map((item, index) => {
                    const isActive = pathname === item.path;
                    return (
                      <motion.div 
                        key={item.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <Link
                          href={item.path}
                          className={classNames(
                            "flex items-center py-3 px-4 rounded-xl my-1 transition-all duration-200",
                            isActive 
                              ? "bg-gradient-to-r from-[#009245] to-[#00b050] text-white" 
                              : "text-[#333333] dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                          )}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <div className={classNames(
                            "w-8 h-8 flex items-center justify-center rounded-full mr-3",
                            isActive 
                              ? "bg-white/20" 
                              : "bg-gray-100 dark:bg-gray-700 text-[#009245] dark:text-[#00b050]"
                          )}>
                            {item.icon}
                          </div>
                          <span className="font-medium">{item.name}</span>
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>
                
                <div className="p-4 bg-gradient-to-r from-[#009245] to-[#00b050]">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link 
                      href="/get-started"
                      className="flex items-center justify-center w-full px-4 py-3 bg-white rounded-xl text-[#009245] font-medium shadow-md hover:shadow-lg transition-all duration-200"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Get Started
                      <FiArrowRight className="ml-2" />
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;
