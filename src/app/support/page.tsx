'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiSearch, FiArrowRight, FiCheck } from 'react-icons/fi';
import { motion } from 'framer-motion';

import { faqs } from '../../data/supportData';
import { supportHero, contactMethods, supportCategories } from '../../data/supportData';
import PageTransitionWrapper from '../components/PageTransitionWrapper';
import Header from '../components/Header';
import AnimatedWrapper from '../components/AnimatedWrapper';
import FadeInSection from '../components/FadeInSection';
import FAQAccordion from '../components/FAQAccordion';
import MainFooter from '../components/MainFooter';
import SupportContact from '../components/SupportContact';

export default function SupportPage() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <PageTransitionWrapper>
      <main className="min-h-screen bg-gray-900">
        {/* Header */}
        <Header />
        
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/support-hero.jpg"
              alt="Support Hero"
              fill
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              className="opacity-20"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900"></div>
          </div>
          
          <div className="container mx-auto max-w-4xl relative z-10">
            <AnimatedWrapper>
              <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">{supportHero.title}</h1>
                <p className="text-xl text-gray-300 mb-8">
                  {supportHero.subtitle}
                </p>
                
                <div className="max-w-2xl mx-auto relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <FiSearch className="text-gray-500" />
                  </div>
                  <input
                    type="text"
                    placeholder={supportHero.searchPlaceholder}
                    className="w-full pl-12 pr-4 py-4 rounded-full border border-gray-700 bg-gray-800 text-white shadow-md focus:outline-none focus:ring-2 focus:ring-[#009245] transition-colors"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <button className="absolute inset-y-0 right-0 px-6 rounded-r-full bg-gradient-to-r from-[#009245] to-[#00b050] text-white font-medium transition-colors">
                    Search
                  </button>
                </div>
              </div>
            </AnimatedWrapper>
          </div>
        </section>
        
        {/* Contact Methods */}
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-6xl">
            <FadeInSection>
              <h2 className="text-3xl font-bold mb-8 text-center text-white">How Can We Help You?</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
                {contactMethods.map((method) => (
                  <SupportContact
                    key={method.id}
                    id={method.id}
                    title={method.title}
                    description={method.description}
                    icon={method.icon}
                    value={method.value}
                    availabilityText={method.availabilityText}
                    action={method.action}
                    actionText={method.actionText}
                  />
                ))}
              </div>
            </FadeInSection>
          </div>
        </section>
        
        {/* Support Categories */}
        <section className="py-12 px-4 bg-gray-800">
          <div className="container mx-auto max-w-6xl">
            <FadeInSection>
              <h2 className="text-3xl font-bold mb-8 text-center text-white">Support Categories</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                {supportCategories.map((category) => (
                  <div 
                    key={category.id} 
                    className="bg-gray-700 rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-lg hover:border-[#00b050]/30"
                  >
                    <h3 className="text-2xl font-bold mb-2 text-[#00b050]">{category.title}</h3>
                    <p className="text-gray-400 mb-4">{category.description}</p>
                    
                    <ul className="space-y-2">
                      {category.items.map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="inline-flex items-center justify-center w-5 h-5 bg-[#00b050]/10 rounded-full mr-3 mt-1">
                            <FiCheck className="text-[#00b050] text-sm" />
                          </span>
                          <span className="text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="mt-6">
                      <Link
                        href={`/support/${category.id}`}
                        className="inline-flex items-center text-[#00b050] font-medium hover:underline"
                      >
                        View all {category.title.toLowerCase()} topics
                        <FiArrowRight className="ml-2" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </FadeInSection>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-12 px-4 bg-gray-900">
          <div className="container mx-auto max-w-4xl">
            <FadeInSection>
              <h2 className="text-3xl font-bold mb-8 text-center text-white">Frequently Asked Questions</h2>
              
              <div className="bg-gray-800 rounded-xl shadow-md p-8 mt-8">
                <FAQAccordion items={faqs} />
                
                <div className="mt-8 text-center">
                  <Link
                    href="/faqs"
                    className="inline-flex items-center text-[#00b050] font-medium hover:underline"
                  >
                    View all FAQs
                    <FiArrowRight className="ml-2" />
                  </Link>
                </div>
              </div>
            </FadeInSection>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <FadeInSection>
              <div className="bg-gradient-to-r from-[#009245] to-[#00b050] rounded-xl shadow-lg overflow-hidden">
                <div className="p-8 md:p-12 text-center">
                  <h2 className="text-3xl font-bold mb-4 text-white">Still Need Help?</h2>
                  <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                    Our support team is available 24/7 to assist you with any questions or issues you may have.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link 
                      href="/contact" 
                      className="inline-flex items-center justify-center px-6 py-3 bg-white text-[#009245] font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
                    >
                      Contact Support
                    </Link>
                    <Link 
                      href="tel:+18888888888" 
                      className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white hover:bg-white/10 font-medium rounded-lg transition-all duration-200"
                    >
                      Call Now
                    </Link>
                  </div>
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
