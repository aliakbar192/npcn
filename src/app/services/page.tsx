'use client';

import React from 'react';

import { services } from '../../data/siteData';
import PageTransitionWrapper from '../components/PageTransitionWrapper';
import Header from '../components/Header';
import AnimatedWrapper from '../components/AnimatedWrapper';
import FadeInSection from '../components/FadeInSection';
import MainFooter from '../components/MainFooter';
import ServiceCard from '../components/ServiceCard';

export default function ServicesPage() {
  return (
    <PageTransitionWrapper>
      <main className="min-h-screen">
        {/* Header */}
        <Header />
        
        {/* Services Content */}
        <section className="py-24 px-4">
          <div className="container mx-auto">
            <AnimatedWrapper>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
                <p className="text-xl text-gray-600 dark:text-gray-400">
                  Discover the range of services we offer to help your business thrive.
                </p>
              </div>
            </AnimatedWrapper>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mt-12">
              {services.map((service, index) => (
                <FadeInSection key={service.id} delay={index * 0.1}>
                  <ServiceCard 
                    title={service.title} 
                    description={service.description} 
                    icon={service.icon} 
                  />
                </FadeInSection>
              ))}
            </div>
          </div>
        </section>
        
        {/* Footer */}
        <MainFooter />
      </main>
    </PageTransitionWrapper>
  );
}
