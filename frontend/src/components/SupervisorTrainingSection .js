'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SupervisorTrainingSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section
      className="bg-[#151B3B] py-20"
      ref={ref} // Attach the intersection observer to this section
    >
      <div className="container mx-auto px-4 max-w-[1360px] m-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <motion.div
            className="text-white space-y-6"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -100 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
              Drug and Alcohol Supervisor Training
            </h2>
            <p className="text-lg text-gray-300 max-w-xl">
              Equip supervisors with essential skills to identify and address substance
              misuse in the workplace with Reasonable Suspicion Supervisor Training.
            </p>
            <button className="bg-[#D84A2F] hover:bg-[#C43D24] text-white px-8 py-3 rounded-full font-medium transition-colors duration-200">
              Enroll Today
            </button>
          </motion.div>

          {/* Right Content */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 100 }}
            transition={{ duration: 1 }}
          >
            <div className="bg-gradient-to-r from-blue-900/20 to-blue-900/10 rounded-lg overflow-hidden">
              <img
                src="https://dotcompliancegroup.com/nitropack_static/wlTeUOshYNRcymuPBlqQsbPdvGzreJEI/assets/images/optimized/rev-c1bcdea/dotcompliancegroup.com/wp-content/uploads/2024/11/DOT-Alcohol-Supervisor-Training.jpg"
                alt="Supervisor Training"
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
                <h3 className="text-white text-2xl font-bold">
                  Enroll in Drug and Alcohol Supervisor Training
                </h3>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SupervisorTrainingSection;
