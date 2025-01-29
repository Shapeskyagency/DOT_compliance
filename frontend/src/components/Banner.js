"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";

// Animation Variants
const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
};

// Reusable Slide Component
const Slide = ({ image, titleLine1, titleLine2 }) => {
  return (
    <div
      className="relative bg-center flex items-center justify-center h-screen bg-[length:120%]"
      style={{ backgroundImage: `url(${image})` }}
    >
      {/* Black overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="container text-left ml-[100px] relative z-10">
        <motion.h1
          className="text-white capitalize text-7xl md:display-1 font-extrabold mb-4 text-left whitespace-pre-line"
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          {titleLine1}
        </motion.h1>
        <motion.h1
          className="text-white capitalize text-7xl md:display-1 font-extrabold mb-8 text-left whitespace-pre-line"
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          {titleLine2}
        </motion.h1>
        <motion.a
          href="#"
          className="butn-style3 hover:bg-red-700 inline-block px-6 py-3 bg-red-600 text-white font-bold uppercase rounded-lg"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          CALL NOW
        </motion.a>
      </div>
    </div>
  );
};

const Banner = () => {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      loop={true}
      navigation={true}
      modules={[Navigation]}
    >
      <SwiperSlide>
        <Slide
          image="https://kargonwp.websitelayout.net/wp-content/uploads/2024/12/slide-01.jpg"
          titleLine1="your trusted partner in"
          titleLine2="DOT compliance"
        />
      </SwiperSlide>

      {/* <SwiperSlide>
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
      </SwiperSlide> */}
    </Swiper>
  );
};

export default Banner;
