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
      "date": "소요기간 : 7일",
      "skill": "html , css , javascript",
      "desc": "기여도 100%",
      "icon": faTag,
      "vercel": "https://subway-tawny.vercel.app/",
      "github": "https://github.com/flysofts/subway",
      "type": "clone",

    },
    {
      "img": "library.PNG",
      "title": "CLONE",
      "date": "소요기간 : 14일",
      "skill": "html , css , javascript",
      "desc": "기여도 100%",
      "icon": faTag,
      "type": "clone",
    },
    {
      "img": "quiz.PNG",
      "title": "WEB APP",
      "date": "소요기간 : 3일",
      "skill": "react, tailwind",
      "desc": "기여도 100%",
      "icon": faTag,
      "type": "webapp",
      "vercel": "https://quiz-alpha-eight.vercel.app/",
      "github": "https://github.com/flysofts/quiz",
    },
    {
      "img": "festival.PNG",
      "title": "WEB APP",
      "date": "소요기간 : 7일",
      "skill": "react, Styled Components",
      "desc": "기여도 100%",
      "icon": faTag,
      "type": "webapp",
      "vercel": "https://festival-alpha.vercel.app/",
      "github": "https://github.com/flysofts/festival",
    },
    {
      "img": "parcel.PNG",
      "title": "WEB APP",
      "date": "소요기간 : 5일",
      "skill": "react, typescript, tailwind",
      "desc": "기여도 100%",
      "icon": faTag,
      "type": "webapp",
      "vercel": "https://delivery-inquiry.vercel.app/",
      "github": "https://github.com/flysofts/Delivery-inquiry",
    },
    {
      "img": "lucky.PNG",
      "title": "WEB APP",
      "date": "소요기간 : 3일",
      "skill": "nextjs, typescript, tailwind",
      "desc": "기여도 100%",
      "icon": faTag,
      "type": "webapp",
      "vercel": "https://lucky-delta-two.vercel.app/",
      "github": "https://github.com/flysofts/lucky",
    },
    {
      "img": "sql.PNG",
      "title": "WEB APP",
      "date": "소요기간 : 21일",
      "skill": "mysql, typescript, tailwind",
      "desc": "기여도 100%",
      "icon": faTag,
      "type": "webapp",
      "github": "https://github.com/flysofts/mysql",
    },

  ];

  const [filter, setFilter] = useState('');
  const filterData = content.filter((item) => {
    if (!filter) return true;
    return item.type === filter;
  })


  const contentCount = (type) => {
    return content.filter((item) => item.type === type).length;
  };


  const [activeButton, setActiveButton] = useState('');

  const Button = (filter) => {
    setFilter(filter);
    setActiveButton(filter);
  };

  const category = (text) => {
    return `cursor-pointer font-omyu bg-purple-300 border-2 dark:text-white px-6 py-1  ${activeButton === text ? 'bg-red-100' : 'text-gray-500'}`;
  };


  const link = (url) => {
    window.open(url, "_blank", "noopener, noreferrer")
  }
  return (
    <>
      <div name="WORK" className={`${darkMode ? 'dark' : ''}`}>
        <div className='dark:bg-neutral-600 dark:text-white'>
          <div className='max-w-7xl m-auto relative lg:pt-0 md:pt-0 pt-20 '>
            <div className='flex justify-center'>
              <div className='text-center'>
                <div className='text-center  w-52 text-6xl  pt-32 mb-24  font-bold font-omyu border-solid border-b-4 border-red-300 text-gray-500 dark:text-white dark:border-red-50'>Work</div>
              </div>
            </div>
            <div className='max-w-7xl flex justify-center items-center py-20 font-bold text-3xl max-sm:text-xl gap-5 '>
        <div className={category('')} onClick={() => Button('')}>ALL ({content.length})</div>
        <div className={category('webapp')} onClick={() => Button('webapp')}>PROJECT ({contentCount('webapp')})</div>
        <div className={category('clone')} onClick={() => Button('clone')}>CLONE ({contentCount('clone')})</div>
      </div>
            <ul className='flex flex-wrap md:justify-center basis-full gap-6 xl:justify-start'>
              {
                filterData.map((e, i) => {
                  return (
                    <>
                      <li key={i} className='max-sm:m-auto lg:basis-[32%] md:basis-[40%]  basis-11/12 group border shadow-md hover:scale-105'>
                        <img className='w-full h-72 cursor-pointer ' src={e.img} onClick={() => { link(e.vercel) }} />
                        <li className='font-bold pl-6 font-omyu text-xl mt-5 mb-2'>{e.date}</li>
                        <li className='font-bold pl-6 font-omyu text-xl mb-2'>사용스킬 : {e.skill}</li>
                        <li className='font-bold pl-6 font-omyu text-xl mb-5 relative'>{e.desc}
                          <FontAwesomeIcon icon={faGithub} onClick={() => { link(e.github) }} className='text-3xl absolute top-0 right-5 cursor-pointer  dark:text-white'/>
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