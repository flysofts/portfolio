import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import React from 'react'
import { useSelector } from 'react-redux'


function About() {

  const darkMode = useSelector(state => state.darkMode);
  

  const info = [
    {
      "icon": faUser,
      "title": "NAME",
      "desc": "박지환"
      
    },
    {
      "icon": faEnvelope,
      "title": "EMAIL",
      "desc": "ds4950@naver.com"
    },
    {
      "icon": faUser,
      "title": "NAME",
      "desc": "fdaffdsfsdfsdafdsaf"
    },
    {
      "icon": faUser,
      "title": "NAME",
      "desc": "lorem"
    }
  ] 

  return (
    <div name="ABOUT" className={`w-full ${darkMode ? 'dark' : ''}`}>
      <div className='dark:bg-neutral-600 dark:text-white'>
        <div className='text-center w-32 text-4xl  m-auto pt-32 mb-24 font-bold border-solid border-b-4 border-red-300 text-gray-500 dark:text-white dark:border-red-50'>About</div>
        <div className='max-w-7xl flex flex-wrap justify-center lg:flex-nowrap m-auto '>
          <div>
            <p className='sm:text-sm md:text-lg text-center lg:text-3xl pt-20 font-pretty '>Lorem ipsum dolor sit amet <span className='border-gradient-bottom font-bold'>consectetur </span>adipisicing elit. Voluptatibus, numquam.</p>
            <p className='sm:text-sm md:text-lg text-center lg:text-3xl py-20 font-pretty'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, numquam.</p>
          </div>
          <div className=''>
            {
              info.map((e,i)=>{
                return(
                  <div className='shadow-lg rounded-xl py-5 px-14  mx-20 mb-5 heartbeat dark:shadow-black dark:bg-white dark:text-black ' style={{animationDelay: `${i * 0.1}s`}}>
                    <div>
                    <FontAwesomeIcon className='absolute top-7 left-4' icon={e.icon} />
                    <div>
                    <p className='text-xl font-bold pb-3 font-pretty max-sm:text-base'>{e.title}</p>
                    <p className='text-lg  font-pretty max-sm:text-xs'>{e.desc}</p>
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