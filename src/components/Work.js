import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import { useSelector } from 'react-redux'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faTag } from '@fortawesome/free-solid-svg-icons';


function Work() {

  const darkMode = useSelector(state => state.darkMode);
  const content = [
    {
      "img": "subway.PNG",
      "title": "CLONE",
      "date" : "소요기간 : 7일",
      "skill" : "html , css , javascript",
      "desc" : "기여도 100%",
      "icon": faTag,
      "vercel":"https://subway-tawny.vercel.app/",
      "github":"https://github.com/flysofts/subway",
      "type": "clone",
      
    },
    {
      "img": "library.PNG",
      "title": "CLONE",
      "date" : "소요기간 : 14일",
      "skill" : "html , css , javascript",
      "desc" : "기여도 100%",
      "icon": faTag,
      "type": "clone",
    },
    {
      "img": "quiz.PNG",
      "title": "WEB APP",
      "date" : "소요기간 : 3일",
      "skill" : "react, tailwind",
      "desc" : "기여도 100%",
      "icon": faTag,
      "type": "webapp",
      "vercel": "https://quiz-jet-two.vercel.app/",
      "github": "https://github.com/flysofts/Delivery-inquiry",
    },
    {
      "img": "festival.PNG",
      "title": "WEB APP",
      "date" : "소요기간 : 7일",
      "skill" : "react, Styled Components",
      "desc" : "기여도 100%",
      "icon": faTag,
      "type": "webapp",
    },
    {
      "img": "parcel.PNG",
      "title": "WEB APP",
      "date" : "소요기간 : 5일",
      "skill" : "react, typescript, tailwind",
      "desc" : "기여도 100%",
      "icon": faTag,
      "type": "webapp",
      "vercel": "https://delivery-inquiry.vercel.app/",
      "github": "https://github.com/flysofts/Delivery-inquiry",
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
  const link = (url) => {
    window.open(url, "_blank", "noopener, noreferrer")
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
            <div className='max-w-7xl flex justify-center items-center py-20 font-bold text-3xl h-2 gap-5'>
              <div className='cursor-pointer  font-omyu bg-purple-300 hover:text-red-200 border-2 dark:text-white text-gray-500 px-6'onClick={() => {setFilter(""); activeFilter(""); }}>ALL</div>
              <div className='cursor-pointer  bg-purple-300 text-gray-500 font-omyu dark:text-white hover:text-red-200 border-2 px-6' onClick={() => {setFilter("webapp"); activeFilter("webapp"); }}>PROJECT</div>
              <div className='cursor-pointer font-omyu bg-purple-300 text-gray-500 dark:text-white hover:text-red-200 border-2 px-6' onClick={() => {setFilter("clone"); activeFilter("clone"); }}>CLONE</div>
            </div>
            <ul className='flex flex-wrap md:justify-center basis-full gap-6 xl:justify-start'>
              {
                filterData.map((e, i) =>{
                  return (
                    <>
                      <li key={i} className='lg:basis-[32%] md:basis-[40%] basis-full cursor-pointer group border shadow-md hover:scale-105'>
                          <img className='w-full h-72'src={e.img} onClick={()=>{link(e.vercel)}}/>
                          <li className='font-bold pl-6 font-omyu text-xl mt-5 mb-2'>{e.date}</li> 
                          <li className='font-bold pl-6 font-omyu text-xl mb-2'>사용스킬 : {e.skill}</li>
                          <li className='font-bold pl-6 font-omyu text-xl mb-5 '>{e.desc}
                          <FontAwesomeIcon icon={faGithub} onClick={()=>{link(e.github)}} className='text-xl ml-60 cursor-pointer mx-4   dark:text-white'/>
                         
                          </li>      
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