'use client';

import React, { useEffect, useState } from 'react';
import PageTransitionWrapper from '../components/PageTransitionWrapper';
import Header from '../components/Header';
import MainFooter from '../components/MainFooter';
import FadeInSection from '../components/FadeInSection';

// Client-side only component to avoid hydration errors
const ContactForm = () => {
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  if (!isClient) {
    return (
      <div className="space-y-5 min-h-[400px] flex items-center justify-center">
        <p className="text-gray-500">Loading form...</p>
      </div>
    );
  }
  
  return (
    <form className="space-y-6 relative z-10">
      <div className="group">
        <label className="block text-sm font-medium mb-2 text-gray-300 group-hover:text-[#009245] transition-colors duration-200">Name</label>
        <div className="relative overflow-hidden rounded-lg">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 group-hover:text-[#009245] transition-all duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <input 
            type="text" 
            className="w-full pl-10 px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-[#009245] focus:border-[#009245] bg-gray-700 text-white transition-all duration-200 hover:border-[#009245]"
            placeholder="Your name"
          />
          <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#009245] to-[#00b050] group-hover:w-full transition-all duration-300"></div>
        </div>
      </div>
      <div className="group">
        <label className="block text-sm font-medium mb-2 text-gray-300 group-hover:text-[#009245] transition-colors duration-200">Message</label>
        <div className="relative overflow-hidden rounded-lg">
          <div className="absolute top-3 left-3 flex items-start pointer-events-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 group-hover:text-[#009245] transition-all duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
          </div>
          <textarea 
            rows={5}
            className="w-full pl-10 px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-[#009245] focus:border-[#009245] bg-gray-700 text-white transition-all duration-200 hover:border-[#009245]"
            placeholder="Your message"
          ></textarea>
          <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#009245] to-[#00b050] group-hover:w-full transition-all duration-300"></div>
        </div>
      </div>
      <button 
        type="submit"
        className="w-full px-6 py-4 bg-gradient-to-r from-[#009245] to-[#00b050] hover:from-[#008a40] hover:to-[#00a048] text-white font-medium rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
        Send Message
      </button>
    </form>
  );
};

export default function ContactPage() {
  return (
    <PageTransitionWrapper>
      <main className="min-h-screen bg-gray-900">
        {/* Header */}
        <Header />
        
        {/* Contact Content */}
        <section className="py-24 px-4 bg-gray-900 relative">
          <div className="container mx-auto max-w-5xl">
            <FadeInSection>
              <div className="text-center mb-16">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#009245] to-[#00b050] relative">
                  Contact Us
                  <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-[#009245] to-[#00b050] rounded-full"></span>
                </h1>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto mt-8">
                  Get in touch with our team for any inquiries or assistance. We're here to help!
                </p>
              </div>
              
              <div className="bg-gray-800 p-8 md:p-10 rounded-3xl shadow-2xl border border-gray-700 backdrop-blur-sm bg-opacity-90 relative overflow-hidden">
                <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-600 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-bl from-gray-700/50 to-gray-800/50"></div>
                    <div className="relative z-10">
                      <h2 className="text-2xl font-bold mb-6 text-white flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-[#009245]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                        </svg>
                        Send us a message
                      </h2>
                      <ContactForm />
                    </div>
                  </div>
                  
                  <div className="space-y-8">
                    <h2 className="text-2xl font-bold mb-6 text-white flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-[#009245]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      Contact Information
                    </h2>
                    
                    {/* Phone & Address Card */}
                    <div className="bg-gray-800 rounded-2xl p-7 shadow-xl border border-gray-600 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-tl from-[#009245]/15 to-[#00b050]/20"></div>
                      <div className="relative z-10">
                        <p className="text-gray-400 mb-4">
                          Contact us via phone or visit our office
                        </p>
                        
                        {/* Phone Information */}
                        <div className="mb-4 bg-gray-700 p-4 rounded-xl border border-gray-600">
                          <div className="flex items-center mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#00b050] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            <p className="font-medium text-[#00b050]">Phone</p>
                          </div>
                          <p className="font-medium text-white ml-7">0300-0999050</p>
                          <p className="text-sm text-gray-400 ml-7">Available: Monday - Sunday, 9AM - 9PM</p>
                        </div>

                        {/* Address Information */}
                        <div className="mb-6 bg-gray-700 p-4 rounded-xl border border-gray-600">
                          <div className="flex items-center mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#00b050] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <p className="font-medium text-[#00b050]">Location</p>
                          </div>
                          <p className="font-medium text-white ml-7">
                            P-442, Shop No. 2, F-Block,<br />
                            Allama Iqbal Colony, Faisalabad
                          </p>
                          <p className="text-sm text-gray-400 ml-7 mt-1">Office Hours: Monday - Sunday, 9AM - 9PM</p>
                        </div>

                        {/* Action Buttons */}
                        <div className="grid grid-cols-2 gap-3">
                          <a 
                            href="tel:+923000999050" 
                            className="inline-flex items-center justify-center px-4 py-3 bg-gradient-to-r from-[#009245] to-[#00b050] hover:from-[#008a40] hover:to-[#00a048] text-white font-medium rounded-xl shadow-md hover:shadow-lg transition-all duration-200 group"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 group-hover:rotate-12 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            Call Now
                          </a>
                          <a 
                            href="https://maps.google.com/?q=P-442+Shop+No.+2+F-Block+Allama+Iqbal+Colony+Faisalabad" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center px-4 py-3 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white font-medium rounded-xl shadow-md hover:shadow-lg transition-all duration-200 group"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 group-hover:animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            Get Directions
                          </a>
                        </div>
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
