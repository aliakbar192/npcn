'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimationControls } from 'framer-motion';
import FadeInSection from './FadeInSection';
import ClientOnly from './ClientOnly';
import Button from './Button';
import Link from 'next/link';
import Image from 'next/image';
import { FiArrowRight, FiPlay, FiCheck, FiStar, FiWifi, FiMonitor, FiRadio } from 'react-icons/fi';

const Hero = () => {
  const controls = useAnimationControls();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  return (
    <ClientOnly>
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        ref={ref}
      >
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute w-full h-full bg-gray-50 dark:bg-gray-900 z-[-2]" />
          
          <motion.div 
            className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-[#009245]/30 to-[#00b050]/30 rounded-full translate-x-1/3 -translate-y-1/3 blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.3, 0.5],
              rotate: [0, 15, 0]
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            style={{ filter: 'blur(100px)' }}
          />
          
          <motion.div 
            className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-gradient-to-tr from-[#F08C00]/20 to-[#FFA94D]/20 rounded-full -translate-x-1/3 translate-y-1/3 blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.4, 0.2, 0.4],
              rotate: [0, -15, 0]
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            style={{ filter: 'blur(100px)' }}
          />
          
          <motion.div 
            className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[#009245]/20 to-[#00b050]/20 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            style={{ filter: 'blur(80px)' }}
          />
          
          {/* Grid Background Pattern */}
          <div className="absolute inset-0 z-[-1] opacity-10">
            <div className="absolute inset-0 bg-[radial-gradient(#009245_1px,transparent_1px)] bg-[length:20px_20px]" />
          </div>
        </div>
        
        {/* Floating Animation Elements */}
        <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
          {/* WiFi Signal Icon */}
          <motion.div
            className="absolute text-[#009245] w-10 h-10 rounded-full bg-white/10 flex items-center justify-center"
            style={{ top: '20%', left: '15%' }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.7, 1, 0.7],
              rotate: [0, 10, 0]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            <FiWifi size={24} />
          </motion.div>
          
          {/* TV/Monitor Icon */}
          <motion.div
            className="absolute text-[#00b050] w-12 h-12 rounded-full bg-white/10 flex items-center justify-center"
            style={{ top: '70%', left: '20%' }}
            animate={{
              y: [0, 20, 0],
              opacity: [0.8, 1, 0.8],
              rotate: [0, -5, 0]
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              repeatType: "reverse",
              delay: 1
            }}
          >
            <FiMonitor size={26} />
          </motion.div>
          
          {/* Radio/Signal Icon */}
          <motion.div
            className="absolute text-[#FFA94D] w-10 h-10 rounded-full bg-white/10 flex items-center justify-center"
            style={{ top: '30%', right: '15%' }}
            animate={{
              y: [0, 15, 0],
              opacity: [0.7, 1, 0.7],
              rotate: [0, -8, 0]
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              repeatType: "reverse",
              delay: 2
            }}
          >
            <FiRadio size={22} />
          </motion.div>
          
          {/* Connection Lines */}
          <svg className="absolute inset-0 w-full h-full z-[-1]" xmlns="http://www.w3.org/2000/svg">
            <motion.path 
              d="M200,200 C300,280 500,100 700,400" 
              stroke="#009245" 
              strokeWidth="1" 
              strokeDasharray="5,5" 
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.2 }}
              transition={{ duration: 5, repeat: Infinity, repeatType: "loop" }}
            />
            <motion.path 
              d="M800,300 C600,350 300,250 200,600" 
              stroke="#00b050" 
              strokeWidth="1" 
              strokeDasharray="5,5" 
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.2 }}
              transition={{ duration: 6, delay: 1, repeat: Infinity, repeatType: "loop" }}
            />
          </svg>
        </div>

        <div className="container relative z-10 px-4 sm:px-6 py-20">
          {/* Company Logo and NPCN branding on top */}
          <motion.div 
            className="flex justify-center mb-16"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center">
              <div className="relative w-16 h-16 mr-4 flex items-center justify-center bg-[#009245] text-white font-bold rounded-2xl overflow-hidden shadow-lg">
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-3xl font-bold"
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
              </div>
              <div className="flex flex-col">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#009245] to-[#00b050] text-4xl font-bold tracking-wide">NPCN</span>
                <span className="text-lg text-[#333333] dark:text-gray-400">Connecting World</span>
              </div>
            </div>
          </motion.div>
          
          <div className="text-center max-w-4xl mx-auto">
            {/* Main Headline with fade-in animation */}
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1]
                  }
                }
              }}
              initial="hidden"
              animate={controls}
            >
              Connecting You to 
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-[#009245] to-[#00b050] dark:from-[#00b050] dark:to-[#009245]">
                the World
              </span>
            </motion.h1>
            
            {/* Subtext tagline */}
            <motion.p 
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: 0.2,
                    duration: 0.6
                  }
                }
              }}
              initial="hidden"
              animate={controls}
            >
              Experience reliable internet and cable services that keep you connected to what matters most, whenever you need it.
            </motion.p>
            
            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-wrap justify-center gap-6 mb-16"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    delay: 0.4,
                    staggerChildren: 0.1
                  }
                }
              }}
              initial="hidden"
              animate={controls}
            >
              {/* View Packages Button */}
              <motion.div
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0, 146, 69, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="relative group"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#009245] to-[#00b050] rounded-full blur opacity-30 group-hover:opacity-80 transition duration-1000 group-hover:duration-200"></div>
                <Link 
                  href="/plans"
                  className="relative flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#009245] to-[#00b050] hover:from-[#00b050] hover:to-[#009245] text-white text-lg font-medium rounded-full shadow-lg transition-all duration-200"
                >
                  View Packages
                  <FiArrowRight className="ml-1" />
                </Link>
              </motion.div>
              
              {/* Contact Us Button */}
              <motion.div
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(240, 140, 0, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="relative group"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#F08C00] to-[#FFA94D] rounded-full blur opacity-30 group-hover:opacity-70 transition duration-1000 group-hover:duration-200"></div>
                <Link 
                  href="/contact"
                  className="relative flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#F08C00] to-[#FFA94D] hover:from-[#FFA94D] hover:to-[#F08C00] text-white text-lg font-medium rounded-full shadow-lg transition-all duration-200"
                >
                  Contact Us
                  <FiArrowRight className="ml-1" />
                </Link>
              </motion.div>
            </motion.div>
            
            {/* Trust Indicators */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.6, duration: 0.6 }
                }
              }}
              initial="hidden"
              animate={controls}
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
            >
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map(i => (
                  <div 
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-white dark:border-gray-900 overflow-hidden bg-gradient-to-br from-[#009245] to-[#00b050] flex items-center justify-center text-white text-xs font-medium"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
                <div className="w-10 h-10 rounded-full border-2 border-white dark:border-gray-900 bg-[#009245]/10 dark:bg-gray-800 flex items-center justify-center text-[#009245] dark:text-[#00b050] text-xs font-bold">
                  +2k
                </div>
              </div>
              
              <div className="flex flex-col items-center sm:items-start">
                <div className="flex items-center text-amber-500">
                  <FiStar className="fill-current" />
                  <FiStar className="fill-current" />
                  <FiStar className="fill-current" />
                  <FiStar className="fill-current" />
                  <FiStar className="fill-current" />
                  <span className="ml-2 text-gray-700 dark:text-gray-300 font-medium">4.9</span>
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-400">Trusted by thousands of satisfied customers</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </ClientOnly>
  );
};

export default Hero;
