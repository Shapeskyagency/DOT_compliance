import React from 'react';

const Testimonials = () => {
  return (
    <section className="relative bg-gray-100 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Heading Section */}
          <div>
            <span className="text-primary text-sm uppercase font-bold tracking-wide block mb-4">
              03 _ What people ask
            </span>
            <h2 className="text-4xl font-extrabold leading-tight text-gray-900">
              What our clients say about us
            </h2>
          </div>

          {/* Testimonials Section */}
          <div className="lg:col-span-2">
            <div className="space-y-8">
              {/* Testimonial 1 */}
              <div className="flex items-center">
                <div className="flex-shrink-0 mr-6">
                  <img
                    src="https://kargonwp.websitelayout.net/wp-content/uploads/2024/12/avatar-05.jpg"
                    alt="Dennis Bulger"
                    className="w-20 h-20 rounded-full"
                  />
                </div>
                <div>
                  <p className="text-gray-700 mb-4">
                    It fits our needs perfectly. I am completely blown away.
                    Very easy to use. Nice work on your cargo. Thanks cargo!
                    Cargo has got everything I need.
                  </p>
                  <h4 className="text-gray-900 font-bold uppercase">
                    Dennis Bulger
                  </h4>
                  <span className="text-sm text-gray-500 uppercase">
                    Crew Supervisor
                  </span>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="flex items-center">
                <div className="flex-shrink-0 mr-6">
                  <img
                    src="https://kargonwp.websitelayout.net/wp-content/uploads/2024/12/avatar-06.jpg"
                    alt="John Horrocks"
                    className="w-20 h-20 rounded-full"
                  />
                </div>
                <div>
                  <p className="text-gray-700 mb-4">
                    I love your system. I have gotten at least 50 times the
                    value from cargo. We have no regrets! I will recommend you
                    to my colleagues.
                  </p>
                  <h4 className="text-gray-900 font-bold uppercase">
                    John Horrocks
                  </h4>
                  <span className="text-sm text-gray-500 uppercase">
                    Loadmaster
                  </span>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="flex items-center">
                <div className="flex-shrink-0 mr-6">
                  <img
                    src="https://kargonwp.websitelayout.net/wp-content/uploads/2024/12/avatar-07.jpg"
                    alt="Kristin Dixon"
                    className="w-20 h-20 rounded-full"
                  />
                </div>
                <div>
                  <p className="text-gray-700 mb-4">
                    It really saves me time and effort. Cargo is exactly what
                    our business has been lacking. I will let my mum know about
                    this, she could really make use of cargo!
                  </p>
                  <h4 className="text-gray-900 font-bold uppercase">
                    Kristin Dixon
                  </h4>
                  <span className="text-sm text-gray-500 uppercase">
                    Relations Specialist
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
