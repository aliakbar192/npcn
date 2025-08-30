'use client';

import React, { useState } from 'react';
import { coverageAreas } from '../../data/coverageData';
import PageTransitionWrapper from '../components/PageTransitionWrapper';
import Header from '../components/Header';
import MainFooter from '../components/MainFooter';
import FadeInSection from '../components/FadeInSection';

export default function CoveragePage() {
  const [selectedArea, setSelectedArea] = useState('');
  const [selectedSubarea, setSelectedSubarea] = useState('');
  const [showAvailability, setShowAvailability] = useState(false);

  const handleAreaChange = (areaId: string) => {
    setSelectedArea(areaId);
    setSelectedSubarea('');
    setShowAvailability(false);
  };

  const handleSubareaChange = (subarea: string) => {
    setSelectedSubarea(subarea);
    setShowAvailability(true);
  };

  const getSelectedAreaData = () => {
    return coverageAreas.find(area => area.id === selectedArea);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'text-green-500';
      case 'expanding':
        return 'text-yellow-500';
      case 'planned':
        return 'text-blue-500';
      default:
        return 'text-gray-500';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active':
        return '✅';
      case 'expanding':
        return '🔄';
      case 'planned':
        return '📅';
      default:
        return '❓';
    }
  };

  return (
    <PageTransitionWrapper>
      <main className="min-h-screen bg-gray-900">
        {/* Header */}
        <Header />
        
        {/* Coverage Content */}
        <section className="py-24 px-4">
          <div className="container mx-auto max-w-6xl">
            <FadeInSection>
              <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                  Service Coverage Areas
                </h1>
                <p className="text-xl text-gray-400 mb-8">
                  Check if NPCN services are available in your area
                </p>
              </div>
            </FadeInSection>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Area Selector */}
              <FadeInSection delay={0.2}>
                <div className="bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-700">
                  <h2 className="text-2xl font-bold mb-6 text-white">
                    Check Your Area
                  </h2>
                  
                  {/* Area Dropdown */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Select Your Area
                    </label>
                    <select
                      value={selectedArea}
                      onChange={(e) => handleAreaChange(e.target.value)}
                      className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-[#009245] focus:border-transparent"
                    >
                      <option value="">Select an area...</option>
                      {coverageAreas.map((area) => (
                        <option key={area.id} value={area.id}>
                          {area.name} {getStatusIcon(area.status)}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Subarea Dropdown */}
                  {selectedArea && (
                    <div className="mb-6">
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Select Your Specific Location
                      </label>
                      <select
                        value={selectedSubarea}
                        onChange={(e) => handleSubareaChange(e.target.value)}
                        className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-[#009245] focus:border-transparent"
                      >
                        <option value="">Select a location...</option>
                        {getSelectedAreaData()?.subareas.map((subarea, index) => (
                          <option key={index} value={subarea}>
                            {subarea}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}

                  {/* Availability Result */}
                  {showAvailability && selectedArea && selectedSubarea && (
                    <div className="mt-6 p-4 bg-gray-700 rounded-lg border border-gray-600">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-lg font-semibold text-white">
                          Service Availability
                        </h3>
                        <span className={`text-2xl ${getStatusColor(getSelectedAreaData()?.status || '')}`}>
                          {getStatusIcon(getSelectedAreaData()?.status || '')}
                        </span>
                      </div>
                      <p className="text-gray-300 mb-3">
                        <strong>Area:</strong> {getSelectedAreaData()?.name}<br />
                        <strong>Location:</strong> {selectedSubarea}<br />
                        <strong>Status:</strong> 
                        <span className={`ml-2 ${getStatusColor(getSelectedAreaData()?.status || '')}`}>
                          {getSelectedAreaData()?.status === 'active' ? 'Available Now' :
                           getSelectedAreaData()?.status === 'expanding' ? 'Expanding Soon' :
                           'Planned for Future'}
                        </span>
                      </p>
                      <p className="text-gray-400 text-sm">
                        {getSelectedAreaData()?.description}
                      </p>
                      
                      {getSelectedAreaData()?.status === 'active' && (
                        <div className="mt-4">
                          <a
                            href="/contact"
                            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#009245] to-[#00b050] hover:from-[#008a40] hover:to-[#00a048] text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
                          >
                            Get Connected Now
                          </a>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </FadeInSection>

              {/* Map Section */}
              <FadeInSection delay={0.4}>
                <div className="bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-700">
                  <h2 className="text-2xl font-bold mb-6 text-white">
                    Coverage Map
                  </h2>
                  
                  {/* Placeholder Map */}
                  <div className="bg-gray-700 rounded-lg p-8 text-center min-h-[300px] flex flex-col justify-center items-center border border-gray-600">
                    <div className="text-6xl mb-4">🗺️</div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Interactive Map Coming Soon
                    </h3>
                    <p className="text-gray-400 mb-4">
                      We're working on an interactive map to show our coverage areas in detail.
                    </p>
                    <div className="text-left w-full max-w-md">
                      <p className="text-sm text-gray-300 mb-2">
                        📍 <strong>Main Office:</strong> Allama Iqbal Colony, Faisalabad
                      </p>
                      <p className="text-sm text-gray-300 mb-2">
                        🌐 <strong>Primary Coverage:</strong> Faisalabad City
                      </p>
                      <p className="text-sm text-gray-300">
                        📞 <strong>Contact:</strong> 0300-0999050
                      </p>
                    </div>
                  </div>
                </div>
              </FadeInSection>
            </div>

            {/* Coverage Areas Overview */}
            <FadeInSection delay={0.6}>
              <div className="mt-12">
                <h2 className="text-3xl font-bold mb-8 text-white text-center">
                  All Coverage Areas
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {coverageAreas.map((area, index) => (
                    <div
                      key={area.id}
                      className="bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-bold text-white">{area.name}</h3>
                        <span className="text-2xl">
                          {getStatusIcon(area.status)}
                        </span>
                      </div>
                      
                      <p className="text-gray-400 text-sm mb-4">
                        {area.description}
                      </p>
                      
                      <div className="mb-4">
                        <p className="text-sm font-medium text-gray-300 mb-2">
                          Locations ({area.subareas.length}):
                        </p>
                        <div className="flex flex-wrap gap-1">
                          {area.subareas.slice(0, 3).map((subarea, idx) => (
                            <span
                              key={idx}
                              className="inline-block bg-gray-700 text-gray-300 text-xs px-2 py-1 rounded"
                            >
                              {subarea}
                            </span>
                          ))}
                          {area.subareas.length > 3 && (
                            <span className="inline-block bg-gray-700 text-gray-300 text-xs px-2 py-1 rounded">
                              +{area.subareas.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className={`text-sm font-medium ${getStatusColor(area.status)}`}>
                          {area.status === 'active' ? 'Available Now' :
                           area.status === 'expanding' ? 'Expanding' :
                           'Planned'}
                        </span>
                        
                        {area.status === 'active' && (
                          <a
                            href="/contact"
                            className="text-[#009245] hover:text-[#00b050] text-sm font-medium transition-colors"
                          >
                            Get Service →
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInSection>

            {/* Contact Section */}
            <FadeInSection delay={0.8}>
              <div className="mt-12 bg-gray-800 rounded-2xl p-8 text-center shadow-xl border border-gray-700">
                <h3 className="text-2xl font-bold mb-4 text-white">
                  Don't See Your Area?
                </h3>
                <p className="text-gray-400 mb-6">
                  We're constantly expanding our network. Contact us to inquire about service availability in your location or to request coverage in your area.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-[#009245] to-[#00b050] hover:from-[#008a40] hover:to-[#00a048] text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
                  >
                    Contact Us
                  </a>
                  <a
                    href="tel:0300-0999050"
                    className="inline-flex items-center justify-center px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
                  >
                    📞 Call Now
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
