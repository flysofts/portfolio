import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faCakeCandles, faIdCard, faHouseChimney, faSchool } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'



function About() {

  const darkMode = useSelector(state => state.darkMode);
  const [isView, setIsView] = useState(false);
  const [showText, setShowText] = useState(false);
  
  const info = [
    {
      "icon": faIdCard,
      "title": "Name",
      "desc": "박지환"
      
    },
    {
      "icon": faEnvelope,
      "title": "Email",
      "desc": "ds4950@naver.com"
    },
    {
      "icon": faCakeCandles,
      "title": "Birth Date",
      "desc": "1996-06-24"
    },
    {
      "icon": faSchool,
      "title": "Study",
      "desc": "그린컴퓨터 아트학원",
      "desc2": "react를 활용한",
      "desc3": "프론트엔드 개발자양성",
      "desc4": "(SPA 프로젝트 개발) 900H"
    },
  ]
    useEffect(()=>{
      const scrollEvent = ()=>{
          const rect = document.querySelector(".text").getBoundingClientRect();        
          if (rect.top <= window.innerHeight && rect.bottom >= 0){
             setIsView(true);
             setShowText(true); 
          }
      }
      window.addEventListener("scroll", scrollEvent)
      scrollEvent();
      return () => {
          window.removeEventListener("scroll", scrollEvent)
      };
  }, []);


  return (
    <div name="ABOUT" className={`w-full ${darkMode ? 'dark' : ''}`}>
      <div className='dark:bg-neutral-600 dark:text-white'>
        <div className='text-center w-52 text-6xl  m-auto pt-32 mb-24 font-bold font-omyu border-solid border-b-4 border-red-300 text-gray-500 dark:text-white dark:border-red-50'>About</div>
        <div className='max-w-7xl flex flex-wrap justify-center lg:flex-nowrap m-auto pb-40'>
          <div>
            <p className='sm:text-sm md:text-lg text-center lg:text-3xl py-7 font-omyu'>안녕하세요<span className='text-2xl mx-2'>🖐</span> 주니어 프론트 개발자 박지환입니다.</p>
            
            <p className='px-10 sm:text-sm md:text-lg text-center lg:text-3xl font-omyu in_text text'>   저는 새로운 기술을 배우고 문제를 해결하여 원하는 것을 구현하였을때 성취감을 느끼고 모든일에 최선을 다합니다.
            <p className=' font-bold'>중요한건 꺾이지않는 마음 !</p></p>
            <p className='sm:text-sm md:text-lg text-center lg:text-3xl  font-omyu'></p>
            <p className='sm:text-sm md:text-lg text-center lg:text-3xl py-10 font-omyu'>새로운 기술을 배울때에 두려움을 가지기보단 재미를 찾고 있습니다.</p>
            <p className='sm:text-sm md:text-lg text-center lg:text-3xl font-omyu'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quisquam dolor molestiae odio! Labore deserunt eum ducimus non minus est?</p>
          </div>
          <div>
            {
              info.map((e,i)=>{
                return(
                  <div className=' shadow-lg rounded-xl py-5 lg:px-20 lg:mx-20  mb-5 heartbeat  md:px-56 sm:px-44 max-sm:px-32 dark:shadow-black dark:bg-white dark:text-black ' style={{animationDelay: `${i * 0.1}s`}}>
                    <div>
                    <FontAwesomeIcon className='absolute top-7 left-4 text-2xl' icon={e.icon} />
                    <div> 
                    <p className='text-2xl font-bold pb-3 font-pretty max-sm:text-base font-omyu'>{e.title}</p>
                    <p className='text-xl font-pretty max-sm:text-xs font-omyu'>{e.desc}
                    <p>{e.desc2}</p>
                    <p>{e.desc3}</p>
                    <p>{e.desc4}</p>
                    </p>
                    </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>

  )
}

export default About