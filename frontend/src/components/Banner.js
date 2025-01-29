"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

// Reusable Slide Component
const Slide = ({ image, titleLine1, titleLine2 }) => {
  return (
    <div
      className="relative bg-cover bg-center flex items-center justify-center h-screen bg-[length:120%]"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      {/* Black overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="container text-left ml-[100px] relative z-10">
        <h1 className="text-white text-7xl md:text-8xl font-extrabold mb-8 text-left whitespace-pre-line">
          {titleLine1}
          <br />
          {titleLine2}
        </h1>
        <a
          href="#"
          className="inline-block py-3 px-6 bg-red-500 text-white rounded-lg text-xl font-semibold transition-colors hover:bg-red-700"
        >
          Get Started
        </a>
      </div>
    </div>
  );
};

const Banner = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      loop={true}
      navigation={true}
      modules={[Navigation]}
      onSlideChange={() => console.log("Slide changed")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <Slide
          image="https://kargonwp.websitelayout.net/wp-content/uploads/2024/12/slide-01.jpg"
          titleLine1="Reliable & Express"
          titleLine2="Logistics Solutions"
        />
      </SwiperSlide>

      <SwiperSlide>
        <Slide
          image="https://kargonwp.websitelayout.net/wp-content/uploads/2024/12/slide-02.jpg"
          titleLine1="Transport your"
          titleLine2="cargo everywhere"
        />
      </SwiperSlide>

      <SwiperSlide>
        <Slide
          image="https://kargonwp.websitelayout.net/wp-content/uploads/2024/12/slide-03.jpg"
          titleLine1="Provide simple"
          titleLine2="warehousing"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
