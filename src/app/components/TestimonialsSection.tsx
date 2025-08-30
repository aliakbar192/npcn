'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TestimonialCard from './TestimonialCard';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { testimonials } from '../../data/homeData';

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="py-16 md:py-24 relative bg-gray-900 shadow-xl shadow-gray-900/60">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#009245]/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#333333]/5 rounded-full translate-x-1/3 translate-y-1/3" />

      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-300">
            Don't just take our word for it. Hear from the people who experience our service every day.
          </p>
        </motion.div>

        {/* Testimonials carousel - simplified structure */}
        <div className="max-w-4xl mx-auto">
          {/* Card container with fixed height */}
          <div className="relative h-[400px] md:h-[300px] mb-10">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.id}
                name={testimonial.name}
                role={testimonial.role}
                testimonial={testimonial.testimonial}
                rating={testimonial.rating}
                image={`/dummy-avatar-${index + 1}.png`}
                isActive={index === activeIndex}
              />
            ))}
          </div>

          {/* Navigation and indicators in a separate container */}
          <div className="flex flex-col items-center">
            {/* Navigation arrows */}
            <div className="flex justify-center gap-4 mb-6">
              <motion.button
                onClick={handlePrev}
                className="bg-gray-700 hover:bg-[#009245] hover:text-white text-gray-200 p-3 rounded-full shadow-lg border border-gray-600 hover:border-[#009245] transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiChevronLeft className="w-6 h-6" />
              </motion.button>
              
              <motion.button
                onClick={handleNext}
                className="bg-gray-700 hover:bg-[#009245] hover:text-white text-gray-200 p-3 rounded-full shadow-lg border border-gray-600 hover:border-[#009245] transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiChevronRight className="w-6 h-6" />
              </motion.button>
            </div>

            {/* Indicator dots */}
            <div className="flex justify-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    index === activeIndex
                      ? 'bg-[#009245] w-8'
                      : 'bg-gray-600'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
