'use client';

import React from 'react';
import PageTransitionWrapper from '../components/PageTransitionWrapper';
import Header from '../components/Header';
import MainFooter from '../components/MainFooter';
import FadeInSection from '../components/FadeInSection';

export default function ContactPage() {
  return (
    <PageTransitionWrapper>
      <main className="min-h-screen">
        {/* Header */}
        <Header />
        
        {/* Contact Content */}
        <section className="py-24 px-4">
          <div className="container mx-auto max-w-4xl">
            <FadeInSection>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-12">
                Get in touch with our team for any inquiries or assistance.
              </p>
              
              <div className="bg-white dark:bg-gray-800 p-10 rounded-xl shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Send us a message</h2>
                    <form className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium mb-1">Name</label>
                        <input 
                          type="text" 
                          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#009245] focus:border-[#009245] bg-white dark:bg-gray-700"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">Email</label>
                        <input 
                          type="email" 
                          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#009245] focus:border-[#009245] bg-white dark:bg-gray-700"
                          placeholder="Your email"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">Message</label>
                        <textarea 
                          rows={5}
                          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#009245] focus:border-[#009245] bg-white dark:bg-gray-700"
                          placeholder="Your message"
                        ></textarea>
                      </div>
                      <button 
                        type="submit"
                        className="px-6 py-3 bg-gradient-to-r from-[#009245] to-[#00b050] hover:from-[#008a40] hover:to-[#00a048] text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
                      >
                        Send Message
                      </button>
                    </form>
                  </div>
                  
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-lg font-semibold">Address</h3>
                        <p className="text-gray-600 dark:text-gray-400">
                          123 Business Avenue<br />
                          City, Country
                        </p>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">Email</h3>
                        <p className="text-gray-600 dark:text-gray-400">
                          info@ranacompany.com
                        </p>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">Phone</h3>
                        <p className="text-gray-600 dark:text-gray-400">
                          +1 (555) 123-4567
                        </p>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">Hours</h3>
                        <p className="text-gray-600 dark:text-gray-400">
                          Monday - Friday: 9AM - 5PM<br />
                          Saturday - Sunday: Closed
                        </p>
                      </div>
                    </div>
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
