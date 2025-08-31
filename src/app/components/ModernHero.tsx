'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useAnimationControls } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import Image from 'next/image';
import { FiArrowRight, FiWifi, FiServer, FiMonitor, FiDatabase, FiCheck, FiMap } from 'react-icons/fi';
import { RiSignalTowerFill } from 'react-icons/ri';

const ModernHero = () => {
  const controls = useAnimationControls();
  const { ref, inView } = useInView({ 
    triggerOnce: true,
    threshold: 0.1 
  });
  
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [inView, controls]);

  // Wire path data for SVG animations
  const wirePaths = [
    "M0,100 C150,150 250,50 400,150 C550,250 650,50 800,100",
    "M0,200 C100,100 300,250 500,150 C700,50 800,200 1000,150",
    "M100,0 C200,200 400,100 300,300 C200,500 400,400 500,600",
    "M800,50 C700,150 600,100 500,250 C400,400 300,350 200,450"
  ];

  // Connection nodes positions
  const nodes = [
    { x: 100, y: 100, delay: 0 },
    { x: 300, y: 150, delay: 1 },
    { x: 500, y: 100, delay: 0.5 },
    { x: 200, y: 250, delay: 1.5 },
    { x: 650, y: 200, delay: 0.8 },
    { x: 750, y: 300, delay: 1.2 },
    { x: 400, y: 300, delay: 0.3 },
  ];

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      ref={ref}
    >
      {/* Dark Navy to Black Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a192f] to-[#050d1a] -z-10" />
      
      {/* Network Grid Overlay */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[length:24px_24px] -z-10" />
      
      {/* Animated Wire Connections */}
      <div className="absolute inset-0 overflow-hidden -z-5 pointer-events-none">
        <svg className="w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
          {wirePaths.map((path, index) => (
            <motion.path
              key={index}
              d={path}
              stroke={index % 2 === 0 ? "#3b82f6" : "#f97316"}
              strokeWidth="1"
              strokeDasharray="5,5"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ 
                pathLength: 1, 
                opacity: [0, 0.8, 0.2],
                strokeWidth: [1, 2, 1],
              }}
              transition={{ 
                duration: 8 + index * 2, 
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
                times: [0, 0.5, 1]
              }}
            />
          ))}
          
          {/* Connection Nodes/Points */}
          {nodes.map((node, index) => (
            <motion.circle
              key={index}
              cx={node.x}
              cy={node.y}
              r={4}
              fill={index % 3 === 0 ? "#3b82f6" : (index % 3 === 1 ? "#f97316" : "#10b981")}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: [0.8, 1.5, 0.8], 
                opacity: [0.2, 0.8, 0.2],
                filter: ["drop-shadow(0 0 2px currentColor)", "drop-shadow(0 0 8px currentColor)", "drop-shadow(0 0 2px currentColor)"]
              }}
              transition={{
                duration: 4,
                delay: node.delay,
                repeat: Infinity,
                repeatType: "loop"
              }}
            />
          ))}
        </svg>
      </div>
      
      {/* Floating Technology Icons with Parallax Effect */}
      <div className="absolute inset-0 overflow-hidden -z-5 pointer-events-none">
        {/* Computer/Laptop Device 1 */}
        <motion.div
          className="absolute"
          style={{ left: '10%', top: '30%', width: 60, height: 60 }}
          animate={{
            y: [-10, 10, -10],
            x: [5, -5, 5],
            scale: [1, 1.05, 1],
            opacity: [0.7, 0.9, 0.7],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        >
          <div className="relative">
            <div className="w-16 h-12 bg-gray-800 rounded-md border border-gray-700 shadow-lg flex items-center justify-center">
              <div className="w-14 h-10 bg-blue-500/20 rounded-sm flex items-center justify-center">
                <FiMonitor size={20} className="text-blue-400" />
              </div>
            </div>
            <div className="w-8 h-2 bg-gray-700 mx-auto rounded-b-sm"></div>
            <div className="w-4 h-1 bg-gray-600 mx-auto rounded-b-sm"></div>
            <motion.div 
              className="absolute -right-5 -top-3 text-blue-400"
              animate={{
                opacity: [0.4, 1, 0.4],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            >
              <FiWifi size={18} />
            </motion.div>
          </div>
        </motion.div>
        
        {/* Server/Router */}
        <motion.div
          className="absolute"
          style={{ right: '15%', top: '25%', width: 60, height: 80 }}
          animate={{
            y: [10, -10, 10],
            x: [-5, 5, -5],
            scale: [1, 1.05, 1],
            opacity: [0.7, 0.9, 0.7],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: 1
          }}
        >
          <div className="relative">
            <div className="w-14 h-16 bg-gray-800 rounded-md border border-gray-700 shadow-lg flex flex-col justify-center items-center gap-2">
              <div className="w-10 h-2 bg-green-500/50 rounded-sm"></div>
              <div className="w-10 h-2 bg-blue-500/50 rounded-sm"></div>
              <div className="w-10 h-2 bg-yellow-500/50 rounded-sm"></div>
              <div className="w-10 h-2 bg-red-500/50 rounded-sm"></div>
            </div>
            <motion.div 
              className="absolute -left-12 top-3 w-12 h-[1px] bg-gradient-to-l from-blue-500 to-blue-500/0"
              animate={{
                opacity: [0.3, 1, 0.3],
                width: [8, 12, 8],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />
            <motion.div 
              className="absolute -right-12 bottom-3 w-12 h-[1px] bg-gradient-to-r from-blue-500 to-blue-500/0"
              animate={{
                opacity: [0.3, 1, 0.3],
                width: [8, 12, 8],
              }}
              transition={{
                duration: 2,
                delay: 1,
                repeat: Infinity,
              }}
            />
          </div>
        </motion.div>
        
        {/* Tablet Device */}
        <motion.div
          className="absolute"
          style={{ left: '22%', bottom: '20%', width: 50, height: 60 }}
          animate={{
            y: [-5, 5, -5],
            x: [3, -3, 3],
            rotate: [0, 2, 0],
            opacity: [0.7, 0.9, 0.7],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: 2
          }}
        >
          <div className="relative">
            <div className="w-12 h-16 bg-gray-800 rounded-lg border border-gray-700 shadow-lg flex items-center justify-center">
              <div className="w-10 h-14 bg-green-500/20 rounded-sm"></div>
            </div>
            <motion.div 
              className="absolute -right-5 -top-3 text-green-400"
              animate={{
                opacity: [0.4, 1, 0.4],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: 1,
              }}
            >
              <FiWifi size={14} />
            </motion.div>
          </div>
        </motion.div>
        
        {/* Smartphone Device */}
        <motion.div
          className="absolute"
          style={{ right: '25%', bottom: '28%', width: 40, height: 70 }}
          animate={{
            y: [5, -5, 5],
            x: [-2, 2, -2],
            rotate: [0, -3, 0],
            opacity: [0.7, 0.9, 0.7],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: 0.5
          }}
        >
          <div className="relative">
            <div className="w-8 h-14 bg-gray-800 rounded-lg border border-gray-700 shadow-lg flex items-center justify-center">
              <div className="w-7 h-12 bg-blue-500/20 rounded-sm"></div>
            </div>
            <motion.div 
              className="absolute -left-5 -top-3 text-blue-400"
              animate={{
                opacity: [0.4, 1, 0.4],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: 2,
              }}
            >
              <FiWifi size={14} />
            </motion.div>
          </div>
        </motion.div>
        
        {/* Signal Tower */}
        <motion.div
          className="absolute"
          style={{ left: '80%', top: '15%', width: 60, height: 80 }}
          animate={{
            y: [-8, 8, -8],
            x: [4, -4, 4],
            opacity: [0.7, 0.9, 0.7],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: 1.5
          }}
        >
          <div className="relative flex flex-col items-center">
            <div className="h-16 w-[2px] bg-gray-600"></div>
            <div className="w-10 h-[2px] bg-gray-600 -mt-2"></div>
            <div className="mt-1">
              <RiSignalTowerFill size={30} className="text-orange-500" />
            </div>
            <motion.div 
              className="absolute -top-4 left-1/2 transform -translate-x-1/2"
              animate={{
                opacity: [0, 1, 0],
                scale: [0.5, 1.5, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            >
              <div className="w-12 h-12 rounded-full border-2 border-orange-500/30"></div>
            </motion.div>
            <motion.div 
              className="absolute -top-4 left-1/2 transform -translate-x-1/2"
              animate={{
                opacity: [0, 1, 0],
                scale: [0.5, 2, 0.5],
              }}
              transition={{
                duration: 3,
                delay: 0.5,
                repeat: Infinity,
              }}
            >
              <div className="w-12 h-12 rounded-full border-2 border-orange-500/20"></div>
            </motion.div>
          </div>
        </motion.div>

        {/* Internet Cloud */}
        <motion.div
          className="absolute"
          style={{ left: '50%', top: '15%', width: 80, height: 50 }}
          animate={{
            y: [-5, 5, -5],
            scale: [1, 1.05, 1],
            opacity: [0.6, 0.8, 0.6],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        >
          <div className="relative">
            <div className="w-20 h-12 bg-gradient-to-br from-blue-500/30 to-blue-600/20 rounded-full shadow-lg flex items-center justify-center">
              <FiDatabase size={16} className="text-blue-300 mr-1" />
              <span className="text-blue-200 text-xs">Internet</span>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Additional Connection Wires */}
      <div className="absolute inset-0 overflow-hidden -z-6 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          {/* Connection from Signal Tower to Internet Cloud */}
          <motion.path 
            d="M800,150 C720,130 650,120 580,140" 
            stroke="#f97316" 
            strokeWidth="1.5" 
            fill="none"
            strokeDasharray="3,3"
            animate={{
              strokeDashoffset: [0, -30],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          
          {/* Connection from Internet Cloud to Server */}
          <motion.path 
            d="M550,150 C500,160 450,180 400,160" 
            stroke="#3b82f6" 
            strokeWidth="1.5" 
            fill="none"
            strokeDasharray="3,3"
            animate={{
              strokeDashoffset: [0, -30],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
              delay: 0.3,
            }}
          />
          
          {/* Connection from Server to PC */}
          <motion.path 
            d="M380,220 C320,240 250,260 200,240" 
            stroke="#3b82f6" 
            strokeWidth="1.5" 
            fill="none"
            strokeDasharray="3,3"
            animate={{
              strokeDashoffset: [0, -30],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
              delay: 0.6,
            }}
          />
          
          {/* Connection from Server to Phone */}
          <motion.path 
            d="M400,220 C450,250 480,350 520,370" 
            stroke="#3b82f6" 
            strokeWidth="1.5" 
            fill="none"
            strokeDasharray="3,3"
            animate={{
              strokeDashoffset: [0, -30],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
              delay: 0.9,
            }}
          />
          
          {/* Connection from Server to Tablet */}
          <motion.path 
            d="M380,250 C330,300 280,350 230,380" 
            stroke="#3b82f6" 
            strokeWidth="1.5" 
            fill="none"
            strokeDasharray="3,3"
            animate={{
              strokeDashoffset: [0, -30],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
              delay: 1.2,
            }}
          />
          
          {/* Additional wireless connections showing the network */}
          <motion.path 
            d="M200,240 C150,220 120,280 90,270" 
            stroke="#10b981" 
            strokeWidth="1" 
            fill="none"
            strokeDasharray="5,5"
            animate={{
              strokeDashoffset: [0, -30],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
              delay: 0.4,
            }}
          />
          
          <motion.path 
            d="M520,370 C570,360 600,330 650,350" 
            stroke="#10b981" 
            strokeWidth="1" 
            fill="none"
            strokeDasharray="5,5"
            animate={{
              strokeDashoffset: [0, -30],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
              delay: 1.1,
            }}
          />
          
          <motion.path 
            d="M230,380 C190,430 210,480 250,500" 
            stroke="#10b981" 
            strokeWidth="1" 
            fill="none"
            strokeDasharray="5,5"
            animate={{
              strokeDashoffset: [0, -30],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
              delay: 0.7,
            }}
          />
        </svg>
        
        {/* Connection data packets moving along paths */}
        <motion.div
          className="absolute"
          style={{ left: '60%', top: '14%' }}
          animate={{
            left: ['60%', '50%'],
            top: ['14%', '15%'],
            opacity: [1, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div className="w-1.5 h-1.5 rounded-full bg-orange-500 shadow-[0_0_5px_#f97316]"></div>
        </motion.div>
        
        <motion.div
          className="absolute"
          style={{ left: '50%', top: '15%' }}
          animate={{
            left: ['50%', '40%'],
            top: ['15%', '16%'],
            opacity: [1, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
            delay: 0.3
          }}
        >
          <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_5px_#3b82f6]"></div>
        </motion.div>
        
        <motion.div
          className="absolute"
          style={{ left: '38%', top: '22%' }}
          animate={{
            left: ['38%', '20%'],
            top: ['22%', '24%'],
            opacity: [1, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
            delay: 0.6
          }}
        >
          <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_5px_#3b82f6]"></div>
        </motion.div>
        
        <motion.div
          className="absolute"
          style={{ left: '40%', top: '22%' }}
          animate={{
            left: ['40%', '52%'],
            top: ['22%', '37%'],
            opacity: [1, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
            delay: 0.9
          }}
        >
          <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_5px_#3b82f6]"></div>
        </motion.div>
        
        <motion.div
          className="absolute"
          style={{ left: '38%', top: '25%' }}
          animate={{
            left: ['38%', '23%'],
            top: ['25%', '38%'],
            opacity: [1, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
            delay: 1.2
          }}
        >
          <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_5px_#3b82f6]"></div>
        </motion.div>
      </div>
      
      {/* Content Container */}
      <div className="container mx-auto px-4 relative z-10 py-12">
        <div className="max-w-5xl mx-auto text-center">
          {/* NPCN Logo */}
          {/* <motion.div 
            className="flex justify-center mb-10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col items-center">
              <div className="relative w-32 h-32 mb-3">
                <Image
                  src="/images/logos/npcn-logo.png"
                  alt="NPCN Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <span className="text-white text-sm">Connecting World</span>
            </div>
          </motion.div> */}
          
          {/* Main Headline with fade-in and upward animation */}
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 text-white leading-tight"
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
            Experience <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#009245] to-[#00b050]">
              Lightning-Fast
            </span> <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
              Connectivity
            </span>
          </motion.h1>
          
          {/* Feature badges */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-6"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  delay: 0.2,
                  duration: 0.6,
                  staggerChildren: 0.1
                }
              }
            }}
            initial="hidden"
            animate={controls}
          >
            <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full flex items-center">
              <span className="text-[#009245] mr-2">✓</span>
              <span className="text-white text-sm">Ultra-Fast Fiber</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full flex items-center">
              <span className="text-[#009245] mr-2">✓</span>
              <span className="text-white text-sm">99.9% Uptime</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full flex items-center">
              <span className="text-[#009245] mr-2">✓</span>
              <span className="text-white text-sm">24/7 Support</span>
            </div>
          </motion.div>
          
          {/* Subtext with smooth fade-in */}
          <motion.p 
            className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  delay: 0.3,
                  duration: 0.6
                }
              }
            }}
            initial="hidden"
            animate={controls}
          >
            Connect your home and business with seamless reliability. 
            Stream, game, and work without interruptions or lag.
          </motion.p>
          
          {/* CTA Buttons with hover effects */}
          <motion.div 
            className="flex flex-wrap justify-center gap-6 mb-16"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  delay: 0.5,
                  staggerChildren: 0.1
                }
              }
            }}
            initial="hidden"
            animate={controls}
          >
            {/* View Packages Button - Green Gradient with Hover Glow */}
            <motion.div
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 25px rgba(0, 146, 69, 0.6)" 
              }}
              whileTap={{ scale: 0.95 }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#009245] to-[#00b050] rounded-full blur opacity-30 group-hover:opacity-90 transition duration-1000 group-hover:duration-200"></div>
              <Link 
                href="/plans"
                className="relative flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#009245] to-[#00b050] hover:from-[#00b050] hover:to-[#009245] text-white text-lg font-medium rounded-full shadow-lg transition-all duration-200"
              >
                Explore Our Plans
                <FiArrowRight className="ml-1" />
              </Link>
            </motion.div>
          </motion.div>
          
          {/* NPCN Tagline */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { delay: 0.7, duration: 0.6 }
              }
            }}
            initial="hidden"
            animate={controls}
            className="text-center"
          >
            <p className="text-gray-400 text-sm md:text-base">Empowering Your Digital Life with Fast, Reliable Connections</p>
            
            {/* Speed indicator */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.9, ease: "easeOut" }}
              className="bg-white/5 backdrop-blur-md p-3 rounded-2xl inline-block mt-4"
            >
              <div className="flex items-center gap-3">
                <div className="flex items-center">
                  <motion.div 
                    className="h-2 w-2 rounded-full bg-[#009245]"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                  <motion.div 
                    className="h-2 w-6 ml-1 rounded-full bg-gradient-to-r from-[#009245] to-transparent"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                </div>
                <span className="text-sm text-gray-300">Up to <span className="text-white font-bold">1 Gbps</span> available in select areas</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ModernHero;
