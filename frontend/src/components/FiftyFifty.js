import React from "react";

const FiftyFifty = () => {
  return (
    <section className="bg-gray-100 py-8">
      <div className="container mx-auto flex flex-wrap lg:flex-nowrap items-start gap-8 px-4">
        {/* Left Column (Text) */}
        <div className="flex-1">
          <div className="space-y-6">
            {/* Title and Description */}
            <div>
              {/* <h1 className="text-red-600 text-xl font-bold uppercase tracking-wide mb-2">
                01 _ More About Us
              </h1> */}
              <h2 className="text-black text-5xl font-extrabold leading-tight mb-4">
              Who We Are
              </h2>
            </div>
            {/* Features */}
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="text-blue-500 flex-shrink-0 mr-4">
                  <i className="ti-check text-2xl font-bold">&nbsp;</i>
                </div>
                <p className="text-black text-base">
                Welcome to <span className="font-bold">MY D.O.T. CABINET LLC</span>, your trusted partner in DOT compliance. With over a decade of experience in the transportation industry, we understand what it takes to keep your business running smoothly while meeting all Department of Transportation (DOT) regulations.
                </p>
              </div>
              <div className="flex items-start">
                <div className="text-blue-500 flex-shrink-0 mr-4">
                  <i className="ti-check text-2xl font-bold">&nbsp;</i>
                </div>
                <p className="text-black text-base">
                Founded in <span className="font-bold">January 2025</span>, our mission is to simplify compliance, ensuring your operations remain stress-free and fully compliant. Whether you're managing an established fleet or just starting out with a new DOT number, we provide the tools, expertise, and support to help you navigate every aspect of compliance with confidence.
                </p>
              </div>
              <div className="flex items-start">
                <div className="text-blue-500 flex-shrink-0 mr-4">
                  <i className="ti-check text-2xl font-bold">&nbsp;</i>
                </div>
                <p className="text-black text-base">
                At <span className="font-bold">MY D.O.T. CABINET LLC</span>, we specialize in comprehensive compliance solutions, including driver qualification files, vehicle maintenance records, audit preparation, and keeping your DOT number active. Our commitment is to help you stay <span className="font-bold">compliant, efficient, and focused on growth</span>.
                </p>
              </div>
            </div>
            {/* Buttons */}
            <div className="flex items-center gap-4">
              {/* About Company Button */}
              <a
                href="https://kargonwp.websitelayout.net/about-us/"
                className="px-6 py-2 bg-red-600 text-white text-sm font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
              >
                About Company
              </a>
              {/* <a
                href="https://kargonwp.websitelayout.net/about-us/"
                className="text-black text-sm font-semibold hover:text-blue-500"
              >
                How we work
              </a> */}
            </div>
          </div>
        </div>

        {/* Right Column (Image) */}
        <div className="flex-1 flex justify-center">
          <img
            src="https://kargonwp.websitelayout.net/wp-content/uploads/2024/12/about-04.jpg"
            alt="about-04"
            className="max-w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default FiftyFifty;
