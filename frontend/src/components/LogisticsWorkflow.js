import React from "react";

const LogisticsWorkflow = () => {
  const steps = [
    {
      id: "01",
      title: "Order Processing",
      description: "The logistics process begins with the receipt of customer orders.",
      image: "https://kargonwp.websitelayout.net/wp-content/uploads/2024/12/process-01.jpg",
      delay: "200ms",
    },
    {
      id: "02",
      title: "Warehousing",
      description: "Goods that are ready for shipment are stored in warehouses or storage facilities.",
      image: "https://kargonwp.websitelayout.net/wp-content/uploads/2024/12/process-02.jpg",
      delay: "300ms",
    },
    {
      id: "03",
      title: "Order Tracking",
      description: "Real-time tracking systems are used to monitor the movement of shipments.",
      image: "https://kargonwp.websitelayout.net/wp-content/uploads/2024/12/process-03.jpg",
      delay: "400ms",
    },
    {
      id: "04",
      title: "Product Delivery",
      description: "In the final stage of logistics, products are delivered to the customer.",
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
        <h2 className="text-3xl font-bold mt-2">Logistics Workflow</h2>
      </div>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div
              key={step.id}
              className="text-center bg-white shadow-lg rounded-lg p-6 group transition-transform duration-300 hover:scale-105"
              data-wow-delay={step.delay}
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
              <h3 className="text-lg font-bold mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogisticsWorkflow;
