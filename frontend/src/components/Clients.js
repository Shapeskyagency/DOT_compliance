import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Swiper core styles
import "swiper/css/autoplay"; // Autoplay styles
import { Autoplay } from "swiper/modules"; // Swiper autoplay module

function Clients() {
  const clients = [
    { name: "Client 06", image: "images/homepage-7/client/client-06.png" },
    { name: "Client 05", image: "images/homepage-7/client/client-05.png" },
    { name: "Client 04", image: "images/homepage-7/client/client-04.png" },
    { name: "Client 03", image: "images/homepage-7/client/client-03.png" },
    { name: "Client 02", image: "images/homepage-7/client/client-02.png" },
    { name: "Client 01", image: "images/homepage-7/client/client-01.png" },
  ];

  return (
    <section className="client-section-seven pbmit-bg-color-blackish">
      <div className="container">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          loop={true}
          slidesPerView={5}
          spaceBetween={30}
          breakpoints={{
            320: { slidesPerView: 2 },
            480: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
          }}
        >
          {clients.map((client, index) => (
            <SwiperSlide key={index}>
              <div className="pbmit-client-logo-tooltip" data-tooltip={client.name}>
                <div className="pbmit-clientbox-style-1">
                  <span className="pbmit-item-thumbnail">
                    <span className="pbmit-item-thumbnail-inner">
                      <img src={client.image} className="img-fluid" alt={client.name} />
                    </span>
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Clients;
