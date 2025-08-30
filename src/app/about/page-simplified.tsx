'use client';

import React from 'react';
import Image from 'next/image';
import Header from '../components/Header';
import MainFooter from '../components/MainFooter';
import FadeInSection from '../components/FadeInSection';
import { 
  aboutHero, 
  companyOverview, 
  coreValues, 
  companyTimeline, 
  leadershipTeam, 
  companyStats,
  callToAction
} from '../../data/aboutData';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative py-28 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="/images/internet-bg.jpg" // Fallback image
            alt="About Us Background"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/95 to-gray-900/80 z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
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
        </div>
      </section>

      {/* Company Overview Section */}
      <section className="py-20 px-4 bg-white dark:bg-gray-800">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-xl overflow-hidden shadow-xl h-96">
              <Image
                src="/images/logos/npcn-logo.png"
                alt="NPCN Company Logo"
                fill
                className="object-contain"
              />
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">Connecting Communities, Empowering Lives</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">Founded in 2010, NPCN began with a simple mission: to provide fast, reliable internet connectivity to underserved communities. What started as a small regional provider has grown into a trusted name in high-speed internet solutions across the country.</p>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">Today, we serve thousands of residential and business customers, delivering fiber-optic connectivity that empowers homes, businesses, and entire communities to thrive in the digital age.</p>
              <div className="flex flex-wrap gap-4 mt-8">
                <div className="flex items-center bg-green-50 dark:bg-green-900/30 px-4 py-2 rounded-full">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  <span className="text-green-700 dark:text-green-400 font-medium">15+ Years Experience</span>
                </div>
                <div className="flex items-center bg-green-50 dark:bg-green-900/30 px-4 py-2 rounded-full">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  <span className="text-green-700 dark:text-green-400 font-medium">20,000+ Happy Customers</span>
                </div>
                <div className="flex items-center bg-green-50 dark:bg-green-900/30 px-4 py-2 rounded-full">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  <span className="text-green-700 dark:text-green-400 font-medium">99.9% Uptime Guarantee</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">Our Core Values</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">These principles guide every decision we make and service we provide.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400 mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Excellence</h3>
              <p className="text-gray-700 dark:text-gray-300">We strive for excellence in every aspect of our service, from network performance to customer support.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400 mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Customer First</h3>
              <p className="text-gray-700 dark:text-gray-300">Our customers are at the heart of everything we do. Their needs drive our innovations and improvements.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400 mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Innovation</h3>
              <p className="text-gray-700 dark:text-gray-300">We continuously invest in the latest technologies to provide cutting-edge connectivity solutions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 bg-white dark:bg-gray-800">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">Our Leadership Team</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Meet the experienced professionals guiding our company forward
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg">
              <div className="relative h-64 bg-gray-200 dark:bg-gray-700">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                <Image
                  src="/images/team/ceo.jpg"
                  alt="CEO"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1 text-gray-900 dark:text-white">Ahmed Khan</h3>
                <p className="text-green-600 dark:text-green-400 font-medium mb-4">Chief Executive Officer</p>
                <p className="text-gray-700 dark:text-gray-300">With over 20 years of experience in telecommunications, Ahmed leads our company vision and strategy.</p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg">
              <div className="relative h-64 bg-gray-200 dark:bg-gray-700">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                <Image
                  src="/images/team/cto.jpg"
                  alt="CTO"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1 text-gray-900 dark:text-white">Sarah Ahmed</h3>
                <p className="text-green-600 dark:text-green-400 font-medium mb-4">Chief Technology Officer</p>
                <p className="text-gray-700 dark:text-gray-300">Sarah oversees our network infrastructure and technology innovations, ensuring we stay ahead of the curve.</p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg">
              <div className="relative h-64 bg-gray-200 dark:bg-gray-700">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                <Image
                  src="/images/team/coo.jpg"
                  alt="COO"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1 text-gray-900 dark:text-white">Kamran Ali</h3>
                <p className="text-green-600 dark:text-green-400 font-medium mb-4">Chief Operations Officer</p>
                <p className="text-gray-700 dark:text-gray-300">Kamran ensures our day-to-day operations run smoothly, focusing on customer satisfaction and service quality.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900 text-center">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">Ready to Experience Better Internet?</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
            Join thousands of satisfied customers who enjoy our reliable, high-speed internet services every day.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/contact"
              className="px-8 py-4 rounded-full bg-green-600 hover:bg-green-700 text-white font-bold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Contact Us
            </a>
            <a
              href="/plans"
              className="px-8 py-4 rounded-full bg-transparent border-2 border-green-500 text-green-600 dark:text-green-400 hover:bg-green-500/10 font-bold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              View Plans
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <MainFooter />
    </main>
  );
}
