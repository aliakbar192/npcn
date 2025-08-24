'use client';

import React from 'react';

import { faqs } from '../../data/siteData';
import PageTransitionWrapper from '../components/PageTransitionWrapper';
import Header from '../components/Header';
import AnimatedWrapper from '../components/AnimatedWrapper';
import FadeInSection from '../components/FadeInSection';
import FAQAccordion from '../components/FAQAccordion';
import MainFooter from '../components/MainFooter';

export default function SupportPage() {
  return (
    <PageTransitionWrapper>
      <main className="min-h-screen">
        {/* Header */}
        <Header />
        
        {/* Support Content */}
        <section className="py-24 px-4">
          <div className="container mx-auto max-w-4xl">
            <AnimatedWrapper>
              <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Support & FAQs</h1>
                <p className="text-xl text-gray-600 dark:text-gray-400">
                  Get the help you need with our comprehensive support resources.
                </p>
              </div>
            </AnimatedWrapper>
            
            <div className="my-12 max-w-3xl mx-auto">
              <FadeInSection>
                <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
                <FAQAccordion items={faqs} />
              </FadeInSection>
              
              <FadeInSection delay={0.2}>
                <div className="mt-12 p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
                  <h3 className="text-2xl font-bold mb-4">Need more help?</h3>
                  <p className="mb-6 text-gray-600 dark:text-gray-400">
                    Our support team is available 24/7 to assist you with any questions or issues.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a 
                      href="/contact" 
                      className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-[#009245] to-[#00b050] hover:from-[#008a40] hover:to-[#00a048] text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
                    >
                      Contact Support
                    </a>
                    <a 
                      href="mailto:support@ranacompany.com" 
                      className="inline-flex items-center justify-center px-6 py-3 border-2 border-gray-300 dark:border-gray-700 hover:border-[#009245] dark:hover:border-[#009245] text-gray-700 dark:text-gray-300 hover:text-[#009245] dark:hover:text-[#00b050] font-medium rounded-lg transition-all duration-200"
                    >
                      Email Us
                    </a>
                  </div>
                </div>
              </FadeInSection>
              
              <FadeInSection delay={0.3}>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-700">
                    <h3 className="text-xl font-bold mb-3">Phone Support</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-2">
                      Call us directly for immediate assistance
                    </p>
                    <p className="text-lg font-medium text-[#009245]">+1 (555) 123-4567</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                      Available Monday-Friday, 9AM-5PM
                    </p>
                  </div>
                  
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-700">
                    <h3 className="text-xl font-bold mb-3">Live Chat</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Chat with our support team in real-time
                    </p>
                    <button className="px-4 py-2 bg-[#009245] text-white rounded-lg hover:bg-[#008a40] transition-colors">
                      Start Chat
                    </button>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                      Available 24/7
                    </p>
                  </div>
                </div>
              </FadeInSection>
            </div>
          </div>
        </section>
        
        {/* Footer */}
        <MainFooter />
      </main>
    </PageTransitionWrapper>
  );
}
