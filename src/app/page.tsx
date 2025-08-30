import React from 'react';

import { services } from '../data/servicesData';
import PageTransitionWrapper from './components/PageTransitionWrapper';
import Header from './components/Header';
import ModernHero from './components/ModernHero';
import ServiceCard from './components/ServiceCard';
import USPSection from './components/USPSection';
import PackagesSection from './components/PackagesSection';
import TestimonialsSection from './components/TestimonialsSection';
import CTASection from './components/CTASection';
import MainFooter from './components/MainFooter';

export default function Home() {
  return (
    <PageTransitionWrapper>
      <main className="min-h-screen overflow-x-hidden">
      {/* Header */}
      <Header />
      
      {/* Hero Section */}
      <ModernHero />
      
      {/* Services Section */}
      <section className="py-16 md:py-24 bg-gray-900 shadow-2xl shadow-gray-900/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-300">
              Discover our range of connectivity solutions designed to keep you connected to what matters most.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard 
                key={service.id}
                title={service.title}
                description={service.description}
                icon={service.icon}
                link={service.link}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* USP Section */}
      <USPSection />
      
      {/* Packages Section */}
      <PackagesSection />
      
      {/* Testimonials Section */}
      <TestimonialsSection />
      
      {/* CTA Section */}
      <CTASection />
      
      {/* Footer */}
      <MainFooter />
    </main>
    </PageTransitionWrapper>
  );
}
