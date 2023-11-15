import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faCakeCandles, faIdCard, faSchool, faHouseChimney } from '@fortawesome/free-solid-svg-icons';
import React from 'react'
import { useSelector } from 'react-redux'



function About() {

  const darkMode = useSelector(state => state.darkMode);
  

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
      "icon": faHouseChimney,
      "title": "Home",
      "desc": "대구 달서구"
    },
    
  ] 

  return (
    <div name="ABOUT" className={`w-full ${darkMode ? 'dark' : ''}`}>
      <div className='dark:bg-neutral-600 dark:text-white'>
        <div className='text-center w-52 text-6xl  m-auto pt-32 mb-24 font-bold font-omyu border-solid border-b-4 border-red-300 text-gray-500 dark:text-white dark:border-red-50'>About</div>
        <div className='max-w-7xl flex flex-wrap justify-center lg:flex-nowrap m-auto pb-40'>
          <div>
            <p className='sm:text-sm md:text-lg text-center lg:text-3xl pt-20 font-omyu '>중요한건 <span className=' font-bold border-b-4 border-red-300'>꺾이지않는 마음</span> 새로운 기술을 배우고 문제를 해결하여 원하는 것을 구현하였을때 성취감을 좋아합니다.</p>
            <p className='sm:text-sm md:text-lg text-center lg:text-3xl py-20 font-omyu'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, numquam.</p>
          </div>
          <div className=''>
            {
              info.map((e,i)=>{
                return(
                  <div className='shadow-lg rounded-xl py-5 px-20  mx-20 mb-5 heartbeat dark:shadow-black dark:bg-white dark:text-black ' style={{animationDelay: `${i * 0.1}s`}}>
                    <div>
                    <FontAwesomeIcon className='absolute top-7 left-4 text-2xl' icon={e.icon} />
                    <div>
                    <p className='text-2xl font-bold pb-3 font-pretty max-sm:text-base font-omyu'>{e.title}</p>
                    <p className='text-xl  font-pretty max-sm:text-xs font-omyu'>{e.desc}</p>
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