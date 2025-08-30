'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiAward, FiHeart, FiTrendingUp, FiUsers, FiShield, FiZap } from 'react-icons/fi';
import PageTransitionWrapper from '../components/PageTransitionWrapper';
import Header from '../components/Header';
import MainFooter from '../components/MainFooter';
import FadeInSection from '../components/FadeInSection';
import AnimatedWrapper from '../components/AnimatedWrapper';
import { 
  aboutHero, 
  companyOverview, 
  coreValues, 
  companyTimeline, 
  leadershipTeam, 
  companyStats,
  callToAction
} from '../../data/aboutData';

// Icon mapping function for core values
const getIcon = (iconName: string) => {
  const iconMap: {[key: string]: React.ReactNode} = {
    'award': <FiAward className="w-8 h-8" />,
    'heart': <FiHeart className="w-8 h-8" />,
    'trending-up': <FiTrendingUp className="w-8 h-8" />,
    'users': <FiUsers className="w-8 h-8" />,
    'shield': <FiShield className="w-8 h-8" />,
    'zap': <FiZap className="w-8 h-8" />
  };
  return iconMap[iconName] || <FiAward className="w-8 h-8" />;
};

export default function AboutPage() {
  // Add logging to verify data is loaded
  useEffect(() => {
    console.log('About page data loaded:', {
      aboutHero,
      companyOverview,
      coreValues,
      companyTimeline,
      leadershipTeam,
      companyStats,
      callToAction
    });
  }, []);

  return (
    <PageTransitionWrapper>
      <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Header */}
        <Header />

        {/* Hero Section */}
        <section className="relative py-28 bg-gray-900 overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-20">
            <Image
              src={aboutHero.backgroundImage}
              alt="About Us Background"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/95 to-gray-900/80 z-0"></div>
          <div className="container mx-auto px-4 relative z-10">
            <AnimatedWrapper>
              <div className="text-center max-w-3xl mx-auto">
                <div className="inline-block p-3 rounded-full bg-green-500/20 mb-6">
                  <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">{aboutHero.title}</h1>
                <p className="text-xl text-gray-300 mb-8">
                  {aboutHero.subtitle}
                </p>
              </div>
            </AnimatedWrapper>
          </div>
        </section>

        {/* Company Overview Section */}
        <section className="py-20 px-4 bg-gray-900">
          <div className="container mx-auto max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <FadeInSection>
                <div className="relative rounded-xl overflow-hidden shadow-xl h-96">
                  <Image
                    src={companyOverview.logoImage}
                    alt="NPCN Company Logo"
                    fill
                    className="object-contain"
                  />
                </div>
              </FadeInSection>

              <FadeInSection>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">{companyOverview.title}</h2>
                {companyOverview.paragraphs.map((paragraph, index) => (
                  <p key={index} className="text-lg text-gray-300 mb-6">
                    {paragraph}
                  </p>
                ))}
                <div className="flex flex-wrap gap-4 mt-8">
                  {companyOverview.stats.map((stat, index) => (
                    <div key={index} className="flex items-center bg-green-900/30 px-4 py-2 rounded-full">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      <span className="text-green-400 font-medium">{stat.text}</span>
                    </div>
                  ))}
                </div>
              </FadeInSection>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 relative overflow-hidden">
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/3 via-transparent to-blue-900/3 pointer-events-none"></div>
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-green-500/2 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="container mx-auto max-w-7xl relative z-10">
            <FadeInSection>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">{coreValues.title}</h2>
                <p className="text-lg text-gray-300">
                  {coreValues.subtitle}
                </p>
              </div>
            </FadeInSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {coreValues.values.map((value, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-900/30 text-green-400 mb-6">
                    {getIcon(value.icon)}
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Timeline */}
        <section className="py-20 px-4 bg-gray-900">
          <div className="container mx-auto max-w-5xl">
            <FadeInSection>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">{companyTimeline.title}</h2>
                <p className="text-lg text-gray-300">
                  {companyTimeline.subtitle}
                </p>
              </div>
            </FadeInSection>

            <div className="relative border-l-4 border-gradient-to-b from-green-500 via-green-600 to-green-500 ml-4 md:ml-6 pl-8 space-y-16" style={{borderImage: 'linear-gradient(to bottom, #10b981, #059669, #10b981) 1'}}>
              {companyTimeline.events.map((event, index) => (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="absolute -left-[44px] md:-left-[46px] mt-1.5 w-8 h-8 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shadow-lg shadow-green-500/30">
                    <div className="w-3 h-3 rounded-full bg-white shadow-sm"></div>
                  </div>
                  <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-6 rounded-xl shadow-lg border border-green-500/30 relative overflow-hidden hover:border-green-500/50 transition-all duration-300">
                    {/* Top accent line */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-green-600"></div>
                    {/* Glow effect */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-green-500/10 rounded-full blur-xl"></div>
                    
                    <div className="relative z-10">
                      <span className="inline-block px-4 py-2 rounded-full text-sm bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold mb-3 shadow-lg">{event.year}</span>
                      <h3 className="text-xl font-bold mb-3 text-white">{event.title}</h3>
                      <p className="text-gray-300 leading-relaxed">{event.description}</p>
                    </div>
                    
                    {/* Bottom accent */}
                    <div className="absolute bottom-0 left-0 w-1/3 h-0.5 bg-gradient-to-r from-green-500/60 to-transparent"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 relative overflow-hidden">
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/3 via-transparent to-purple-900/3 pointer-events-none"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/2 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="container mx-auto max-w-7xl relative z-10">
            <FadeInSection>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">{leadershipTeam.title}</h2>
                <p className="text-lg text-gray-300">
                  {leadershipTeam.subtitle}
                </p>
              </div>
            </FadeInSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {leadershipTeam.members.map((member, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-800 rounded-xl overflow-hidden shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="relative h-64 bg-gray-700">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-1 text-white">{member.name}</h3>
                    <p className="text-green-400 font-medium mb-4">{member.position}</p>
                    <p className="text-gray-300">{member.bio}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-green-600 to-green-700 text-white">
          <div className="container mx-auto max-w-7xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {companyStats.stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                  <div className="text-green-100">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gray-900 text-center">
          <div className="container mx-auto max-w-3xl">
            <FadeInSection>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">{callToAction.title}</h2>
              <p className="text-lg text-gray-300 mb-8">
                {callToAction.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                {callToAction.buttons.map((button, index) => (
                  <motion.a
                    key={index}
                    href={button.link}
                    className={`px-8 py-4 rounded-full ${
                      button.primary
                        ? 'bg-green-600 hover:bg-green-700 text-white'
                        : 'bg-transparent border-2 border-green-500 text-green-400 hover:bg-green-500/10'
                    } font-bold shadow-lg hover:shadow-xl transition-all duration-300`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {button.text}
                  </motion.a>
                ))}
              </div>
            </FadeInSection>
          </div>
        </section>

        {/* Footer */}
        <MainFooter />
      </main>
    </PageTransitionWrapper>
  );
}
