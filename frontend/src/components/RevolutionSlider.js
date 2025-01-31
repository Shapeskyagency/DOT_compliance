import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import Link from 'next/link';

export default function RevolutionSlider() {
 
  return (
<>
<Swiper
      spaceBetween={0}
      slidesPerView={1}
      effect='fade'
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <div className='position-relative pbmit-slider-area'>
        <img src="revolution/images/slider-6-01.jpg" alt="slider-1" />
        <div className='slider-img-Logo'>
        <img src="revolution/images/slider-6-img.png" alt="slider-1" className="" />
          <h1 className='mb-2'>Focused on Your <br/> DOT Compliance Needs</h1>
            <p>Ensuring Full Compliance with FMCSA Standards</p>
            <Link href={''} className='btn-role'> CONSULTATION <i className='fa fa-arrow'></i>  </Link>
        </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper>
</>
  );
}
