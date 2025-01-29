import React from 'react'

function ServiceCard({service}) {
  return (
    <div
    key={service.id}
    className="w-full   px-4 mb-8"
    data-wow-delay="3000ms"
  >
    <div className="relative rounded-lg shadow-lg overflow-hidden bg-white group">
      <img
        src={service.image}
        alt={service.title}
        className="w-full h-56 object-cover group-hover:scale-125 transition duration-[3000ms] ease-out"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition-opacity duration-3000"></div>
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
          <p className="text-white text-sm mb-4">{service.description.slice(0,50)}...</p>
          {/* <a
            href={service.link}
            className="text-blue-400 hover:text-white text-sm font-semibold"
          >
            Read More
          </a> */}
        </div>
      </div>
      <div className="absolute top-6 right-6">
        <img
          src={service.icon}
          alt="icon"
          className="w-12 h-12 group-hover:scale-110 transition duration-700 ease-in-out"
        />
      </div>
    </div>
  </div>
  )
}

export default ServiceCard