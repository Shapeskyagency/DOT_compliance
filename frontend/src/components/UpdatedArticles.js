import React from 'react';

const UpdatedArticles = () => {
  return (
    <section className="relative py-12">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-8">
          <span className="text-primary text-lg uppercase font-bold mb-1 block">04 _ blog & news</span>
          <h2 className="text-4xl font-extrabold mb-4">Updated Articles</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Blog 1 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="relative">
              <img src="https://kargonwp.websitelayout.net/wp-content/uploads/2024/12/blog-01.jpg" alt="The advantages of a digital supply strategy" className="w-full h-64 object-cover" />
              <div className="absolute top-3 left-3 bg-blue-600 text-white px-3 py-1 text-xs rounded-md">Logistic</div>
            </div>
            <div className="p-4">
              <h4 className="text-xl font-semibold mb-3">
                <a href="https://kargonwp.websitelayout.net/the-advantages-of-a-digital-supply-strategy/" className="text-gray-900 hover:text-blue-600">The advantages of a digital supply strategy</a>
              </h4>
              <p className="text-sm text-gray-600 mb-3">Lorem Ipsum is simply dummy text of the printing and typesetting...</p>
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-400">December 10, 2024</span>
                <div className="flex items-center text-primary">
                  <i className="fa-regular fa-message mr-2"></i>
                  <span className="text-sm font-semibold">1</span>
                </div>
              </div>
            </div>
          </div>

          {/* Blog 2 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="relative">
              <img src="https://kargonwp.websitelayout.net/wp-content/uploads/2024/12/blog-02.jpg" alt="How will you know success when it shows up?" className="w-full h-64 object-cover" />
              <div className="absolute top-3 left-3 bg-green-600 text-white px-3 py-1 text-xs rounded-md">Business</div>
            </div>
            <div className="p-4">
              <h4 className="text-xl font-semibold mb-3">
                <a href="https://kargonwp.websitelayout.net/how-will-you-know-success-when-it-show-up/" className="text-gray-900 hover:text-green-600">How will you know success when it shows up?</a>
              </h4>
              <p className="text-sm text-gray-600 mb-3">Lorem Ipsum is simply dummy text of the printing and typesetting...</p>
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-400">December 10, 2024</span>
                <div className="flex items-center text-primary">
                  <i className="fa-regular fa-message mr-2"></i>
                  <span className="text-sm font-semibold">0</span>
                </div>
              </div>
            </div>
          </div>

          {/* Blog 3 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="relative">
              <img src="https://kargonwp.websitelayout.net/wp-content/uploads/2024/12/blog-03.jpg" alt="We carefully handle the valuable goods" className="w-full h-64 object-cover" />
              <div className="absolute top-3 left-3 bg-yellow-600 text-white px-3 py-1 text-xs rounded-md">Goods</div>
            </div>
            <div className="p-4">
              <h4 className="text-xl font-semibold mb-3">
                <a href="https://kargonwp.websitelayout.net/we-carefully-handle-the-valueable-goods/" className="text-gray-900 hover:text-yellow-600">We carefully handle the valuable goods</a>
              </h4>
              <p className="text-sm text-gray-600 mb-3">Lorem Ipsum is simply dummy text of the printing and typesetting...</p>
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-400">December 10, 2024</span>
                <div className="flex items-center text-primary">
                  <i className="fa-regular fa-message mr-2"></i>
                  <span className="text-sm font-semibold">0</span>
                </div>
              </div>
            </div>
          </div>

          {/* Blog 4 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="relative">
              <img src="https://kargonwp.websitelayout.net/wp-content/uploads/2024/12/blog-04.jpg" alt="Green logistics solutions for a greener future" className="w-full h-64 object-cover" />
              <div className="absolute top-3 left-3 bg-red-600 text-white px-3 py-1 text-xs rounded-md">Agency</div>
            </div>
            <div className="p-4">
              <h4 className="text-xl font-semibold mb-3">
                <a href="https://kargonwp.websitelayout.net/green-logistics-solutions-for-a-greener-future/" className="text-gray-900 hover:text-red-600">Green logistics solutions for a greener future</a>
              </h4>
              <p className="text-sm text-gray-600 mb-3">Lorem Ipsum is simply dummy text of the printing and typesetting...</p>
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-400">December 10, 2024</span>
                <div className="flex items-center text-primary">
                  <i className="fa-regular fa-message mr-2"></i>
                  <span className="text-sm font-semibold">0</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpdatedArticles;