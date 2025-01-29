import React from 'react';

const ThreeTileCard = () => {
  const cardsData = [
    {
      number: '01',
      title: 'Delivery On Time',
      description: 'We understand the importance of timely delivery.',
      score: '98% Score',
    },
    {
      number: '02',
      title: 'Quality Products',
      description: 'Only the best products for our customers.',
      score: '95% Score',
    },
    {
      number: '03',
      title: 'Customer Satisfaction',
      description: 'We prioritize customer happiness above all.',
      score: '99% Score',
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-[60px]">
      {cardsData.map((card, index) => (
        <div key={index} className="flex justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:translate-y-2 transition-all duration-300 ease-in-out w-full max-w-xs">
            <div className="text-center">
              <span className="text-4xl font-extrabold text-gray-800">{card.number}</span>
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-xl font-semibold text-gray-800">{card.title}</h3>
              <p className="text-lg text-gray-600 mt-2">{card.description}</p>
              <p className="text-sm font-semibold text-blue-500 mt-4 border-b-2 border-blue-500 inline-block">{card.score}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ThreeTileCard;
