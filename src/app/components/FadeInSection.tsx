'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

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
  const [hasMounted, setHasMounted] = useState(false);
  
  useEffect(() => {
    setHasMounted(true);
  }, []);
  
  // Set initial position based on direction
  let initialX = 0;
  let initialY = 0;
  
  if (direction === 'up') initialY = 40;
  if (direction === 'down') initialY = -40;
  if (direction === 'left') initialX = 40;
  if (direction === 'right') initialX = -40;

  // Show content immediately before animation when component mounts
  if (!hasMounted) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: initialX, y: initialY }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FadeInSection;
