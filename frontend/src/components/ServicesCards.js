'use client'
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ServiceCard from "./ServiceCard";

const ServicesCards = () => {
  const services = [
    {
      id: "01",
      title: "Warehousing",
      description: "It must be aligned within a firm to have the most efficient effect.",
      image: "https://kargonwp.websitelayout.net/wp-content/uploads/2024/12/service-11.jpg",
      icon: "https://kargonwp.websitelayout.net/wp-content/uploads/2024/12/icon-10.png",
      link: "https://kargonwp.websitelayout.net/service/warehousing/",
    },
    {
      id: "02",
      title: "Transportation",
      description: "Deliver goods efficiently with our optimized transportation services.",
      image: "https://kargonwp.websitelayout.net/wp-content/uploads/2024/12/service-12.jpg",
      icon: "https://kargonwp.websitelayout.net/wp-content/uploads/2024/12/icon-11.png",
      link: "https://kargonwp.websitelayout.net/service/transportation/",
    },
    {
      id: "03",
      title: "Inventory Management",
      description: "Keep track of stock levels with ease using our tools.",
      image: "https://kargonwp.websitelayout.net/wp-content/uploads/2024/12/service-13.jpg",
      icon: "https://kargonwp.websitelayout.net/wp-content/uploads/2024/12/icon-12.png",
      link: "https://kargonwp.websitelayout.net/service/inventory/",
    },
    {
      id: "04",
      title: "Packaging",
      description: "Ensure secure and professional packaging for your goods.",
      image: "https://kargonwp.websitelayout.net/wp-content/uploads/2024/12/service-14.jpg",
      icon: "https://kargonwp.websitelayout.net/wp-content/uploads/2024/12/icon-13.png",
      link: "https://kargonwp.websitelayout.net/service/packaging/",
    },
  ];

  const compliancePlans = [
    {
      id: "1",
      title: "Tier 1 Plan (Self-Service)",
      description:
        "Ideal for experienced users who prefer to manage their own compliance. Our system provides an organized digital storage space for documents, with automated reminders to keep you on track.",
      bgColor: "bg-blue-100",
    },
    {
      id: "2",
      title: "Tier 2 Plan (Moderate Support)",
      description:
        "Gain access to all necessary compliance forms, document storage, and automated alerts. This plan is designed for those who need structured tools to manage compliance effectively.",
      bgColor: "bg-green-100",
    },
    {
      id: "3",
      title: "Tier 3 Plan (Full Support)",
      description:
        "Perfect for newcomers or those seeking end-to-end compliance management. We provide personalized guidance, customer support for FMCSA-regulated documents, and periodic audits to ensure full compliance readiness.",
    },
  ];

  const driverManagementPlans = [
    {
      id: "01",
      title: "Tier 1",
      description: "Secure document storage and automated alerts. Users are responsible for uploading, tracking, and managing their own documents",
      image: "https://kargonwp.websitelayout.net/wp-content/uploads/2024/12/service-11.jpg",
      icon: "https://kargonwp.websitelayout.net/wp-content/uploads/2024/12/icon-10.png",
    },
    {
      id: "02",
      title: "Tier 2",
      description: "Includes all essential compliance documents alongside storage and alerts.",
      image: "https://fleetnetamerica.com/wp-content/uploads/sites/2/2017/07/Semi-Truck-Fact-scaled.jpg?w=1024",
      icon: "https://kargonwp.websitelayout.net/wp-content/uploads/2024/12/icon-10.png",
    },
    {
      id: "02",
      title: "Tier 2",
      description: "Comprehensive compliance management, including: o Consultation & Setup: Identify required filings and ensure compliance readiness.",
      image: "https://cdn.prod.website-files.com/5bcf95411e70df20404f914c/5f7c8dbfeaf31735e69d3f0d_Fleet%20Management%20Software-Blog-th-.jpg",
      icon: "https://kargonwp.websitelayout.net/wp-content/uploads/2024/12/icon-10.png",
    },
  ];

  return (
    <section className=" py-[60px] max-w-[1360px] m-auto">
      {/* Introductory Text */}
      <div className="max-w-[1360px] mx-auto px-4 text-center mb-10">
        <h1 className=" text-[38px] font-bold text-gray-900">Our Services</h1>
        <p className="mt-4 text-lg text-gray-700">
          We offer tailored DOT compliance solutions designed to meet the unique needs of every trucking business.
          Whether you're an experienced professional or new to the industry, we have a service level that suits you. 
          Every plan includes automated email, text, and call alerts to ensure that no deadline, renewal, or required 
          filing is ever missed.
        </p>
      </div>

      {/* DOT Compliance Plans as Cards */}
      <div className="container mx-auto px-4 mb-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4 text-center">DOT Compliance Plans</h2>
        <div className="flex flex-wrap -mx-4 justify-center">
          {compliancePlans.map((plan) => {
            const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

            return (
              <motion.div
                ref={ref}
                key={plan.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: inView ? 1 : 0 }}
                transition={{ duration: 0.8 }}
                className="w-full flex sm:w-1/2 lg:w-1/3 p-[15px] mb-8"
              >
                <div
                  className={`relative flex rounded-lg shadow-lg overflow-hidden p-[20px] bg-white group ${plan.bgColor}`}
                >
                  <div className="p-6">
                    <h5 className="text-xl font-bold text-gray-900 mb-2">{plan.title}</h5>
                    <p className="text-gray-700 text-sm">{plan.description}</p>
                  </div>
                  <div className="absolute top-6 right-6">
                    <span className="text-white text-xs px-3 py-1 bg-gray-800 rounded-full">{plan.id}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Driver Management Plans as Cards */}
      <div className="container mx-auto px-4 mb-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-[24px] text-center ">Driver Management Plans</h2>
        <div className="flex flex-wrap -mx-4 justify-center">
          {driverManagementPlans.map((plan) => {
            const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

            return (
              <motion.div
                ref={ref}
                key={plan.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: inView ? 1 : 0 }}
                transition={{ duration: 0.8 }}
                className="w-full flex sm:w-1/2 lg:w-1/3 p-[15px] mb-8"
              >
                <ServiceCard service={plan} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesCards;
