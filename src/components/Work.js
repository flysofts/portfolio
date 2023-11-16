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
      "img": "subway.png",
      "title": "CLONE",
      "date" : "소요기간 : 7일",
      "skill" : "html , css , javascript",
      "desc" : "기여도 100%",
      "type": "clone",
    },
    {
      "img": "library.png",
      "title": "CLONE",
      "date" : "소요기간 : 14일",
      "skill" : "html , css , javascript",
      "desc" : "기여도 100%",
      "type": "clone",
    },
    {
      "img": "quiz.png",
      "title": "WEB APP",
      "date" : "소요기간 : 3일",
      "skill" : "react, tailwind",
      "desc" : "기여도 100%",
      "type": "webapp",
    },
    {
      "img": "festival.png",
      "title": "WEB APP",
      "date" : "소요기간 : 7일",
      "skill" : "react, Styled Components",
      "desc" : "기여도 100%",
      "type": "webapp",
    },
    {
      "img": "parcel.png",
      "title": "WEB APP",
      "date" : "소요기간 : 5일",
      "skill" : "react, typescript, tailwind",
      "desc" : "기여도 100%",
      "type": "webapp",
    },
    
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
                <div className='text-center  w-52 text-6xl  pt-32 mb-24  font-bold font-omyu border-solid border-b-4 border-red-300 text-gray-500 dark:text-white dark:border-red-50'>Work</div>
              </div>
            </div>
            <div className='max-w-7xl flex justify-center items-center py-20 font-bold text-3xl h-2 gap-14'>
              <div className='cursor-pointer  font-omyu bg-purple-300 hover:text-red-200 border-2 dark:text-white text-gray-500 px-6'onClick={() => {setFilter(""); activeFilter(""); }}>ALL</div>
              <div className='cursor-pointer  bg-purple-300 text-gray-500 font-omyu dark:text-white hover:text-red-200 border-2 px-6' onClick={() => {setFilter("webapp"); activeFilter("webapp"); }}>PROJECT</div>
              <div className='cursor-pointer font-omyu bg-purple-300 text-gray-500 dark:text-white hover:text-red-200 border-2 px-6' onClick={() => {setFilter("clone"); activeFilter("clone"); }}>CLONE</div>
            </div>
            <ul className='flex flex-wrap m-auto md:justify-center gap-6 xl:justify-start'>
              {
                filterData.map((e, i) =>{
                  return (
                    <>
                      <li key={i} className='lg:basis-[32%] md:basis-[40%] basis-full cursor-pointer group border shadow-md'>
                          <img className='w-full h-72'src={e.img}/>
                          <p className='font-bold pl-6 font-omyu text-xl pt-5 '>{e.date}</p> 
                          <p className='font-bold pl-6 font-omyu text-xl'>사용스킬 : {e.skill}</p>
                          <p className='font-bold pl-6 font-omyu text-xl'>{e.desc}</p>      
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