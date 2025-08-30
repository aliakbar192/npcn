'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { homePlans, businessPlans } from '../../data/plansData';
import PageTransitionWrapper from '../components/PageTransitionWrapper';
import AnimatedWrapper from '../components/AnimatedWrapper';
import PlanTypeToggle from '../components/PlanTypeToggle';
import PackageCard from '../components/PackageCard';
import MainFooter from '../components/MainFooter';
import Header from '../components/Header';
import { FiHome, FiBriefcase } from 'react-icons/fi';

// Type definitions
type HomePlan = typeof homePlans[0];
type BusinessPlan = typeof businessPlans[0];
type Plan = HomePlan | BusinessPlan;

export default function PlansPage() {
  const [planType, setPlanType] = useState<'Home' | 'Business'>('Home');
  const [isChanging, setIsChanging] = useState(false);
  
  // Handle plan type change with debouncing
  const handlePlanTypeChange = (type: 'Home' | 'Business') => {
    if (type !== planType) {
      console.log('Changing to:', type);
      setIsChanging(true);
      setTimeout(() => {
        setPlanType(type);
        setIsChanging(false);
      }, 300); // Short delay for smoother transition
    }
  };
  
  // Get the current plans based on the selected plan type
  const currentPlans = planType === 'Home' 
    ? homePlans || [] 
    : businessPlans || [];

  // Get the appropriate icon based on the plan type
  const icon = planType === 'Home' ? (
    <FiHome className="w-12 h-12 mb-4 text-[#009245]" />
  ) : (
    <FiBriefcase className="w-12 h-12 mb-4 text-[#009245]" />
  );

  // Get the appropriate heading based on the plan type
  const heading = planType === 'Home' ? 'Home Internet Plans' : 'Business Internet Solutions';
  
  // Get the appropriate description based on the plan type
  const description = planType === 'Home' 
    ? "Perfect connectivity solutions for your home. Stream, game, and browse with our reliable internet plans."
    : "Powerful internet solutions designed for businesses of all sizes. Stay connected with reliable, high-speed internet.";

  return (
    <PageTransitionWrapper>
      <main className="min-h-screen bg-gray-900">
        {/* Header */}
        <Header />
        
        {/* Plans Section */}
        <section id="plans" className="py-12 px-4 bg-gradient-to-b from-gray-900 to-black">
          <div className="container mx-auto">
            <AnimatedWrapper>
              <div className="text-center max-w-4xl mx-auto mb-6">
                <motion.div 
                  className="inline-block mb-2"
                  initial={{ scale: 0, rotate: -45 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: "spring", stiffness: 200, damping: 10 }}
                >
                  {icon}
                </motion.div>
                <motion.h2 
                  className="text-2xl md:text-3xl font-bold mb-3 text-white"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-300">
                    {heading}
                  </span>
                </motion.h2>
                <motion.p 
                  className="text-base text-gray-400"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  {description}
                </motion.p>
              </div>
            </AnimatedWrapper>
            
            {/* Choose Plan Type Heading */}
            <div className="text-center mb-4">
              <motion.h3 
                className="text-lg md:text-xl font-medium text-green-400"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                Choose Your Plan Type
              </motion.h3>
              <motion.div 
                className="w-16 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto mt-1 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: 64 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              />
            </div>
            
            {/* Plan Type Toggle */}
            <PlanTypeToggle 
              selectedType={planType} 
              onChange={handlePlanTypeChange} 
            />
            
            {/* Plan Cards */}
            <div className="my-6">
              {isChanging ? (
                <div className="h-[550px] flex items-center justify-center">
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ 
                      duration: 1, 
                      repeat: Infinity, 
                      ease: "linear" 
                    }}
                    className="w-8 h-8 border-2 border-green-500 border-t-transparent rounded-full"
                  />
                </div>
              ) : (
                <motion.div 
                  className="grid grid-cols-1 md:grid-cols-3 gap-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {currentPlans.map((plan: any, index: number) => (
                    <motion.div
                      key={`${planType}-${plan.id}`}
                      className="h-full"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                    >
                      <PackageCard
                        key={`card-${planType}-${plan.id}`}
                        name={plan.name}
                        price={plan.price}
                        speed={plan.speed}
                        features={plan.features}
                        isPopular={plan.isPopular}
                        delay={index * 0.1}
                      />
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-green-800 to-green-900 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience Better Connectivity?</h2>
              <p className="text-xl mb-8">
                {planType === 'Home' 
                  ? 'Join thousands of satisfied customers who have switched to NPCN for their home internet needs.'
                  : 'Empower your business with NPCN\'s reliable, high-performance internet solutions.'}
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <motion.a 
                  href="/contact" 
                  className="px-8 py-4 rounded-full bg-white text-green-800 font-bold shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Sales
                </motion.a>
                <motion.a 
                  href="/coverage" 
                  className="px-8 py-4 rounded-full bg-transparent border-2 border-white text-white font-bold hover:bg-white/10 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Check Availability
                </motion.a>
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
