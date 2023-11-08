import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { EffectCoverflow, Pagination , Autoplay} from 'swiper/modules';




function Work() {


  return (
    <>
    <div className='text-center w-32 text-4xl  m-auto mt-32 mb-24 font-bold border-solid border-b-4 border-red-300 text-gray-500'>WORK</div>
    <div className='max-w-7xl lg:max-w-full'>
    <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        autoplay={{delay:5000, disableOnInteraction:false}}
        slidesPerView={6}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
          
          
        }}
        
        pagination={true}
        modules={[Autoplay,EffectCoverflow, Pagination]}
        className="mySwiper"
      >  
        <SwiperSlide>
          <img  src="https://placeholder.com/400x400" />
        </SwiperSlide>
        <SwiperSlide>
          <img  src="https://placeholder.com/400x400" />
        </SwiperSlide>
        <SwiperSlide>
          <img  src="https://placeholder.com/400x400" />
        </SwiperSlide>
        <SwiperSlide>
          <img  src="https://placeholder.com/400x400" />
        </SwiperSlide>
        <SwiperSlide>
          <img  src="https://placeholder.com/400x400" />
        </SwiperSlide>
        <SwiperSlide>
          <img  src="https://placeholder.com/400x400" />
        </SwiperSlide>
             
      </Swiper>
      </div>
    </>
    
  )
}

export default Work