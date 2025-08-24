'use client';

import React from 'react';
import Header from '../../src/components/Header';
import MainFooter from '../../src/components/MainFooter';
import PageTransitionWrapper from '../../src/components/PageTransitionWrapper';
import FadeInSection from '../../src/components/FadeInSection';

export default function AboutPage() {
  return (
    <PageTransitionWrapper>
      <main className="min-h-screen">
        {/* Header */}
        <Header />
        
        {/* About Content */}
        <section className="py-24 px-4">
          <div className="container mx-auto max-w-4xl">
            <FadeInSection>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-12">
                Learn more about our company, mission, and values.
              </p>
              
              <div className="bg-white dark:bg-gray-800 p-10 rounded-xl shadow-lg">
                <div className="prose dark:prose-invert max-w-none">
                  <h2>Our Story</h2>
                  <p>
                    Founded in 2020, NPCN has been on a mission to provide exceptional services and solutions to businesses of all sizes. 
                    What started as a small team with big dreams has now grown into a respected company with clients across the globe.
                  </p>
                  
                  <h2>Our Mission</h2>
                  <p>
                    Our mission is to empower businesses with innovative solutions that drive growth, improve efficiency, and deliver exceptional 
                    customer experiences. We believe in building lasting partnerships based on trust, reliability, and continuous improvement.
                  </p>
                  
                  <h2>Our Values</h2>
                  <ul>
                    <li><strong>Excellence:</strong> We strive for excellence in everything we do.</li>
                    <li><strong>Innovation:</strong> We embrace new ideas and technologies to stay ahead.</li>
                    <li><strong>Integrity:</strong> We conduct business with honesty and transparency.</li>
                    <li><strong>Customer Focus:</strong> We put our customers at the center of all decisions.</li>
                    <li><strong>Teamwork:</strong> We believe in the power of collaboration and collective intelligence.</li>
                  </ul>
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
