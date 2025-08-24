'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ClientOnly from './ClientOnly';

interface AnimatedWrapperProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
}

const AnimatedWrapper: React.FC<AnimatedWrapperProps> = ({
  children,
  delay = 0,
  direction = 'up',
}) => {
  // Initial animation values based on direction
  let initialX = 0;
  let initialY = 0;

  if (direction === 'up') initialY = 30;
  if (direction === 'down') initialY = -30;
  if (direction === 'left') initialX = 30;
  if (direction === 'right') initialX = -30;

  return (
    <ClientOnly>
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 0, x: initialX, y: initialY }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          exit={{ opacity: 0, x: -initialX, y: -initialY }}
          transition={{
            duration: 0.5,
            delay,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </ClientOnly>
  );
};

export default AnimatedWrapper;
