"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const FiftyFifty = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section ref={ref} className="bg-gray-100 py-[60px]">
      <div className="max-w-[1360px] mx-auto flex flex-wrap lg:flex-nowrap items-start gap-8 px-4">
        {/* Left Column (Text) */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="space-y-6">
            <div>
              <h2 className="text-[#0f313a] text-5xl font-extrabold  mb-4 leading-snug">
                Let you Know <br /> Who? We Are
              </h2>
            </div>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="text-blue-500 flex-shrink-0 ">
                  <i className="ti-check text-2xl font-bold">&nbsp;</i>
                </div>
                <p className="text-black text-base">
                  Welcome to <span className="font-bold">MY D.O.T. CABINET LLC</span>, your trusted partner in DOT compliance. With over a decade of experience in the transportation industry, we understand what it takes to keep your business running smoothly while meeting all Department of Transportation (DOT) regulations.
                </p>
              </div>
              <div className="flex items-start">
                <div className="text-blue-500 flex-shrink-0 ">
                  <i className="ti-check text-2xl font-bold">&nbsp;</i>
                </div>
                <p className="text-black text-base">
                  Founded in <span className="font-bold">January 2025</span>, our mission is to simplify compliance, ensuring your operations remain stress-free and fully compliant. Whether you're managing an established fleet or just starting out with a new DOT number, we provide the tools, expertise, and support to help you navigate every aspect of compliance with confidence.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <a href="https://kargonwp.websitelayout.net/about-us/" className="text-cta px-6 py-4 bg-red-600 text-white text-sm font-semibold rounded-sm shadow-md hover:bg-blue-600 transition duration-300">
                About Company
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Column (Image) */}
        <motion.div
          className="flex-1 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <img
            src="https://img.freepik.com/premium-photo/smart-fleet-management-system-visualized-with-connected-trucks-digital-network_867452-39478.jpg"
            alt="about-04"
            className="max-w-full h-auto rounded-lg shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default FiftyFifty;
