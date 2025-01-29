import React from 'react';

const TransportSection = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-16 min-h-[600px] flex items-end"
      style={{
        backgroundImage: "url('https://kargonwp.websitelayout.net/wp-content/uploads/2024/12/slide-01.jpg')",
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative container mx-auto px-6">
        {/* Card Container Positioned at the Bottom */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-wrap justify-center gap-8">
          {/* Product Transport Card */}
          <div className="bg-white shadow-lg rounded-lg p-6 max-w-sm w-full md:w-auto">
            <div className="text-4xl font-bold text-gray-900 leading-tight">
              <span className="odometer" data-count="426">
                426
              </span>
            </div>
            <h5 className="text-lg font-medium text-gray-700 mt-2">Products Transport</h5>
          </div>

          {/* Toll-Free Call Card */}
          <div className="bg-white shadow-lg rounded-lg p-6 max-w-sm w-full md:w-auto">
            <div className="flex flex-col items-start">
              <small className="text-sm text-black uppercase">Toll Free Call</small>
              <h5 className="text-xl font-semibold text-gray-100 bg-red-600 px-4 py-2 rounded-lg">
              (302) 520-2246
              </h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransportSection;
