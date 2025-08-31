'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from 'react-icons/fi';

const MainFooter = () => {
  const footerLinks = [
    {
      title: 'Services',
      links: [
        { name: 'Internet Plans', href: '/plans' },
        { name: 'Business Solutions', href: '/plans' },
        { name: 'Coverage Areas', href: '/coverage' },
        { name: 'All Services', href: '/services' }
      ]
    },
    {
      title: 'Support',
      links: [
        { name: 'Help Center', href: '/support' },
        { name: 'Contact Us', href: '/contact' },
        { name: 'FAQs', href: '/support' },
        { name: 'Check Coverage', href: '/coverage' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Our Services', href: '/services' },
        { name: 'Service Areas', href: '/coverage' },
        { name: 'Contact', href: '/contact' }
      ]
    }
  ];
  
  const socialLinks = [
    { icon: <FiFacebook />, href: 'https://facebook.com/npcnfaisalabad' },
    { icon: <FiTwitter />, href: 'https://twitter.com/npcnfaisalabad' },
    { icon: <FiInstagram />, href: 'https://instagram.com/npcnfaisalabad' },
    { icon: <FiLinkedin />, href: 'https://linkedin.com/company/npcnfaisalabad' }
  ];

  return (
    <footer className="bg-gradient-to-b from-[#1a1b4e] to-[#0d0e29] text-white relative overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[length:20px_20px]" />
      </div>
      
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <div className="mb-6">
              <Link href="/" className="inline-block">
                <div className="flex items-center">
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
                </div>
              </Link>
            </div>
            
            <p className="text-white/70 mb-6 max-w-sm">
              New Pakistan Cable Network (NPCN) provides high-speed internet solutions to homes and businesses. We're committed to connecting you to the digital world with reliability and excellence.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center">
                <FiPhone className="text-[#009245] mr-3" />
                <span className="text-white/80">0300-0999050</span>
              </div>
              <div className="flex items-center">
                <FiMail className="text-[#009245] mr-3" />
                <span className="text-white/80">npcn.org.pk@gmail.com</span>
              </div>
              <div className="flex items-start">
                <FiMapPin className="text-[#009245] mr-3 mt-1" />
                <span className="text-white/80">P-442, Shop No. 2, F-Block,<br />Allama Iqbal Colony, Faisalabad</span>
              </div>
            </div>
          </div>
          
          {footerLinks.map((column, idx) => (
            <div key={idx}>
              <h3 className="text-lg font-bold mb-4 text-[#009245]">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <Link 
                      href={link.href}
                      className="text-white/70 hover:text-white transition-colors duration-200 inline-block py-1"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <div className="text-white/60 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} New Pakistan Cable Network (NPCN). All rights reserved.
          </div>
          
          <div className="flex space-x-4">
            {socialLinks.map((link, idx) => (
              <motion.a
                key={idx}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#009245] hover:text-white transition-colors duration-300"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MainFooter;
