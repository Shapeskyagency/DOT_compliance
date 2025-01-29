'use client'
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const LogisticsWorkflow = () => {
  const steps = [
    {
      id: "01",
      title: "Time-Saving",
      description: "Let us handle compliance so you can focus on growing your business.",
      image: "https://kargonwp.websitelayout.net/wp-content/uploads/2024/12/process-01.jpg",
      delay: "200ms",
    },
    {
      id: "02",
      title: "Expert Guidance",
      description: "Work with knowledgeable professionals who understand FMCSA regulations.",
      image: "https://kargonwp.websitelayout.net/wp-content/uploads/2024/12/process-02.jpg",
      delay: "300ms",
    },
    {
      id: "03",
      title: "Stress-Free Audits",
      description: "Stay prepared with organized, easily accessible files.",
      image: "https://kargonwp.websitelayout.net/wp-content/uploads/2024/12/process-03.jpg",
      delay: "400ms",
    },
    {
      id: "04",
      title: "Customizable Services",
      description: "Select the exact level of service that fits your needs—no unnecessary extras.",
      image: "https://kargonwp.websitelayout.net/wp-content/uploads/2024/12/process-04.jpg",
      delay: "500ms",
    },
  ];

  return (
    <section className="bg-gray-100 py-16">
      <div className="text-center mb-12">
        <span className="text-blue-500 text-sm uppercase font-semibold tracking-wider">
          02 _ Work Process
        </span>
        <h2 className="text-3xl text-red-600 font-bold mt-2">Why Choose MY D.O.T. CABINET LLC?</h2>
      </div>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <WorkflowStep key={step.id} step={step} />
          ))}
        </div>
      </div>
    </section>
  );
};

const WorkflowStep = ({ step }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.5, // Trigger when 50% of the element is in view
  });

  return (
    <motion.div
      ref={ref}
      className="text-center bg-white shadow-lg rounded-lg p-6 group transition-transform duration-300 hover:scale-105"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
      transition={{
        delay: parseInt(step.delay) / 1000,
        duration: 1,
        ease: "easeOut",
      }}
    >
      <div className="relative mb-6">
        <img
          src={step.image}
          alt={step.title}
          className="w-full h-48 object-cover rounded-lg mx-auto"
        />
        <span className="absolute -bottom-3 -right-3 w-10 h-10 flex items-center justify-center bg-blue-500 text-white rounded-full font-bold">
          {step.id}
        </span>
      </div>
      <h3 className="text-lg font-bold mb-2 text-[#000]">{step.title}</h3>
      <p className="text-gray-600 text-sm">{step.description}</p>
    </motion.div>
  );
};

export default LogisticsWorkflow;
