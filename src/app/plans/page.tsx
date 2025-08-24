'use client';

import React from 'react';

import { plans } from '../../data/siteData';
import PageTransitionWrapper from '../components/PageTransitionWrapper';
import AnimatedWrapper from '../components/AnimatedWrapper';
import FadeInSection from '../components/FadeInSection';
import PlanCard from '../components/PlanCard';
import MainFooter from '../components/MainFooter';
import Header from '../components/Header';

export default function PlansPage() {
  return (
    <PageTransitionWrapper>
      <main className="min-h-screen">
        {/* Header */}
        <Header />
        
        {/* Plans Section */}
        <section className="py-24 px-4">
          <div className="container mx-auto">
            <AnimatedWrapper>
              <div className="text-center max-w-4xl mx-auto mb-12">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Plans</h1>
                <p className="text-xl text-gray-600 dark:text-gray-400">
                  Choose the perfect plan for your needs. We offer flexible options for every budget.
                </p>
              </div>
            </AnimatedWrapper>
            
            <div className="my-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {plans.map((plan, index) => (
                  <FadeInSection key={plan.id} delay={index * 0.1}>
                    <PlanCard plan={plan} />
                  </FadeInSection>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Footer */}
        <MainFooter />
      </main>
    </PageTransitionWrapper>
  );
}
