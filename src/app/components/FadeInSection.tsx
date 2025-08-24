'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import ClientOnly from './ClientOnly';

interface FadeInSectionProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  className?: string;
}

const FadeInSection: React.FC<FadeInSectionProps> = ({ 
  children, 
  delay = 0, 
  direction = 'up',
  className = '' 
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  // Set initial position based on direction
  let initialX = 0;
  let initialY = 0;
  
  if (direction === 'up') initialY = 40;
  if (direction === 'down') initialY = -40;
  if (direction === 'left') initialX = 40;
  if (direction === 'right') initialX = -40;

  return (
    <ClientOnly>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: initialX, y: initialY }}
        animate={
          isInView 
            ? { opacity: 1, x: 0, y: 0, transition: { duration: 0.6, delay } } 
            : { opacity: 0, x: initialX, y: initialY }
        }
        className={className}
      >
        {children}
      </motion.div>
    </ClientOnly>
  );
};

export default FadeInSection;
