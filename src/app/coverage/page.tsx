'use client';

import React from 'react';

import { coverageAreas } from '../../data/siteData';
import PageTransitionWrapper from '../components/PageTransitionWrapper';
import Header from '../components/Header';
import MainFooter from '../components/MainFooter';
import FadeInSection from '../components/FadeInSection';

export default function CoveragePage() {
  return (
    <PageTransitionWrapper>
      <main className="min-h-screen">
        {/* Header */}
        <Header />
        
        {/* Coverage Content */}
        <section className="py-24 px-4">
          <div className="container mx-auto max-w-4xl">
            <FadeInSection>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Coverage Areas</h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-12">
                Learn about the regions and countries where our services are available.
              </p>
              
              <div className="bg-white dark:bg-gray-800 p-10 rounded-xl shadow-lg">
                <div className="space-y-10">
                  {coverageAreas.map((area, index) => (
                    <FadeInSection key={index} delay={index * 0.1}>
                      <div className="border-b border-gray-200 dark:border-gray-700 pb-8 last:border-0 last:pb-0">
                        <h2 className="text-2xl font-bold mb-4">{area.region}</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                          {area.countries.map((country, idx) => (
                            <div 
                              key={idx} 
                              className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg text-center"
                            >
                              {country}
                            </div>
                          ))}
                        </div>
                      </div>
                    </FadeInSection>
                  ))}
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <h3 className="text-xl font-bold mb-3">Don't see your location?</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    We're constantly expanding our coverage. Contact us to inquire about availability in your area.
                  </p>
                  <a 
                    href="/contact" 
                    className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#009245] to-[#00b050] hover:from-[#008a40] hover:to-[#00a048] text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
                  >
                    Contact Us
                  </a>
                </div>
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
