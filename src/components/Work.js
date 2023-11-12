import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import {Pagination , Autoplay} from 'swiper/modules';
import { useSelector } from 'react-redux'



function Work() {

  const darkMode = useSelector(state => state.darkMode);

  return (
    <>
    <div name="WORK" className={`${darkMode ? 'dark' : ''}`}>
      <div className='dark:bg-neutral-600'>
    <div className='text-center w-32 text-4xl  m-auto pt-32 mb-24 font-bold border-solid border-b-4 border-red-300 text-gray-500 dark:text-white dark:border-red-50'>Work</div>
    <div className='max-w-7xl lg:m-auto pb-10'>
    <Swiper
         slidesPerView={3}
         spaceBetween={30}
         pagination={{
           clickable: true,
         }}
         modules={[Pagination , Autoplay]}
         autoplay={{delay:5000, disableOnInteraction:false}}
         loop={true}
         className="mySwiper"
      >  
        <SwiperSlide>
          <img  src="https://placeholder.com/400x600" />
        </SwiperSlide>
        <SwiperSlide>
          <img  src="https://placeholder.com/400x600" />
        </SwiperSlide>
        <SwiperSlide>
          <img  src="https://placeholder.com/400x600" />
        </SwiperSlide>
        <SwiperSlide>
          <img  src="https://placeholder.com/400x600" />
        </SwiperSlide>
        <SwiperSlide>
          <img  src="https://placeholder.com/400x600" />
        </SwiperSlide>
        <SwiperSlide>
          <img  src="https://placeholder.com/400x600" />
        </SwiperSlide>
             
      </Swiper>
      </div>
      </div>
      </div>
    </>
    
  )
}

export default Work