import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import { useSelector } from 'react-redux'



function Work() {

  const darkMode = useSelector(state => state.darkMode);
  const content = [
    {
      "img": "https://placeholder.com/400x400",
      "title": "CLONE",
      "type": "clone",
    },
    {
      "img": "https://placeholder.com/400x400",
      "title": "CLONE",
      "type": "clone",
    },
    {
      "img": "https://placeholder.com/400x400",
      "title": "CLONE",
      "type": "clone",
    },
    {
      "img": "https://placeholder.com/400x400",
      "title": "WEB APP",
      "type": "webapp",
    },
    {
      "img": "https://placeholder.com/400x400",
      "title": "WEB APP",
      "type": "webapp",
    },
    {
      "img": "https://placeholder.com/400x400",
      "title": "WEB APP",
      "type": "webapp",
    },
    {
      "img": "https://placeholder.com/400x400",
      "title": "WEB APP",
      "type": "webapp",
    },
    {
      "img": "https://placeholder.com/400x400",
      "title": "WEB APP",
      "type": "webapp",
    }
  ];

  const [filter, setFilter] = useState('');
  const filterData = content.filter((item) => {
    if (!filter) return true;
    return item.type === filter;
  })

  const [active, setActive] = useState('');
  const activeFilter = (filter) => {
    setActive(filter);
  }


  return (
    <>
      <div name="WORK" className={`${darkMode ? 'dark' : ''}`}>
        <div className='dark:bg-neutral-600 dark:text-white'>
          <div className='max-w-7xl m-auto relative lg:pt-0 md:pt-0 pt-20'>
            <div className='flex justify-center'>
              <div className='text-center'>
                <div className='text-center w-32 text-4xl  m-auto pt-32 mb-24 font-bold border-solid border-b-4 border-red-300 text-gray-500 dark:text-white dark:border-red-50'>Work</div>
              </div>
            </div>
            <div className='flex justify-center py-20'>
              <div className='cursor-pointer' onClick={() => {setFilter(""); activeFilter(""); }}>전체</div>
              <div className='cursor-pointer' onClick={() => {setFilter("webapp"); activeFilter("webapp"); }}>개인 프로젝트</div>
              <div className='cursor-pointer' onClick={() => {setFilter("clone"); activeFilter("clone"); }}>클론</div>
            </div>
            <ul className='flex flex-wrap m-auto md:justify-center gap-5 lg:justify-start'>
              {
                filterData.map((e, i) =>{
                  return (
                    <>
                      <li key={i} className='lg:basis-[32%] md:basis-[40%] basis-full cursor-pointer group border shadow-md'>
                          <img className='w-full'src={e.img}/>      
                      </li>
                    </>
                  );
                })
              }
            </ul>
          </div>

        </div>
      </div>
    </>

  )
}

export default Work