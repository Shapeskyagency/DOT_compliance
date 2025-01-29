import React from "react";

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
      bgColor: "bg-yellow-100",
    },
  ];

  const driverManagementPlans = [
    {
      id: "1",
      title: "Tier 1 Plan (Self-Service)",
      description:
        "Secure document storage and automated alerts. Users are responsible for uploading, tracking, and managing their own documents.",
      bgColor: "bg-red-100",
    },
    {
      id: "2",
      title: "Tier 2 Plan (Moderate Support)",
      description:
        "Includes all essential compliance documents alongside storage and alerts. Ensures efficient tracking and management with some assistance.",
      bgColor: "bg-purple-100",
    },
    {
      id: "3",
      title: "Tier 3 Plan (Full Support)",
      description:
        "Comprehensive compliance management, including consultation, document assistance, and ongoing support. We guide you through the entire process.",
      bgColor: "bg-orange-100",
    },
  ];

  return (
    <section className="bg-gray-100 py-10">
      {/* Introductory Text */}
      <div className="container mx-auto px-4 text-center mb-10">
        <h1 className="text-3xl font-bold text-gray-900">Our Services</h1>
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
          {compliancePlans.map((plan) => (
            <div key={plan.id} className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
              <div
                className={`relative rounded-lg shadow-lg overflow-hidden bg-white group ${plan.bgColor}`}
              >
                <div className="p-6">
                  <h5 className="text-xl font-bold text-gray-900 mb-2">{plan.title}</h5>
                  <p className="text-gray-700 text-sm">{plan.description}</p>
                </div>
                <div className="absolute top-6 right-6">
                  <span className="text-white text-xs px-3 py-1 bg-gray-800 rounded-full">{plan.id}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Driver Management Plans as Cards */}
      <div className="container mx-auto px-4 mb-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4 text-center">Driver Management Plans</h2>
        <div className="flex flex-wrap -mx-4 justify-center">
          {driverManagementPlans.map((plan) => (
            <div key={plan.id} className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
              <div
                className={`relative rounded-lg shadow-lg overflow-hidden bg-white group ${plan.bgColor}`}
              >
                <div className="p-6">
                  <h5 className="text-xl font-bold text-gray-900 mb-2">{plan.title}</h5>
                  <p className="text-gray-700 text-sm">{plan.description}</p>
                </div>
                <div className="absolute top-6 right-6">
                  <span className="text-white text-xs px-3 py-1 bg-gray-800 rounded-full">{plan.id}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Service Cards */}
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4 justify-center">
          {services.map((service) => (
            <div
              key={service.id}
              className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8"
              data-wow-delay="200ms"
            >
              <div className="relative rounded-lg shadow-lg overflow-hidden bg-white group">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex flex-col justify-between p-6 z-10">
                  <div>
                    <span className="text-white text-sm opacity-75">{service.id}</span>
                    <h5 className="text-xl font-bold text-white mt-2">
                      <a href={service.link} className="hover:text-blue-400">
                        {service.title}
                      </a>
                    </h5>
                  </div>
                  <div>
                    <p className="text-white text-sm mb-4">{service.description}</p>
                    <a
                      href={service.link}
                      className="text-blue-400 hover:text-white text-sm font-semibold"
                    >
                      Read More
                    </a>
                  </div>
                </div>
                <div className="absolute top-6 right-6">
                  <img
                    src={service.icon}
                    alt="icon"
                    className="w-12 h-12 group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesCards;
