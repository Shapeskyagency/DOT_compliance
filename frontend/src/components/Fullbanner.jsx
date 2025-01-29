'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Fullbanner({ bgImg }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div
      className="bg-cover"
      style={{ backgroundImage: `url(${bgImg})` }}
      ref={ref} // Attach the intersection observer here
    >
      <div className="container text-center mx-auto px-4 py-16">
        <motion.h1
          className="text-white text-4xl font-bold"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -50 }}
          transition={{ duration: 1 }}
        >
          Your Trusted Partner in DOT Compliance
        </motion.h1>
        <motion.p
          className="text-white text-lg mt-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -30 }}
          transition={{ duration: 1 }}
        >
          Let us handle compliance so you can focus on growing your business.
        </motion.p>
        <motion.button
          className="butn-style3 mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 1 }}
        >
          CALL NOW
        </motion.button>
      </div>
    </div>
  );
}

export default Fullbanner;