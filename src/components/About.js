import React from 'react'
import { useSelector } from 'react-redux'


function About() {

  const darkMode = useSelector(state => state.darkMode);
  const info = [
    {
      "title": "NAME",
      "desc": "박지환"
    },
    {
      "title": "EMAIL",
      "desc": "ds4950@naver.com"
    },
    {
      "title": "NAME",
      "desc": "lorem"
    },
    {
      "title": "NAME",
      "desc": "lorem"
    }
  ] 

  return (
    <div name="ABOUT" className={`w-full ${darkMode ? 'dark' : ''}`}>
      <div className='dark:bg-neutral-600 dark:text-white'>
        <div className='text-center w-32 text-4xl  m-auto pt-32 mb-24 font-bold border-solid border-b-4 border-red-300 text-gray-500 dark:text-white dark:border-red-50'>About</div>
        <div className='max-w-7xl flex flex-wrap justify-center lg:flex-nowrap m-auto'>
          <div className='flex-row'>

            <p className='sm:text-sm md:text-lg text-center lg:text-3xl mt-20 font-pretty'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, numquam.</p>
            <p className='sm:text-sm md:text-lg text-center lg:text-3xl mt-40 font-pretty'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, numquam.</p>
          </div>
          <div>
            {
              info.map((e,i)=>{
                return(
                  <div className='border-4 rounded-xl py-10 px-16  mx-20 mb-5 heartbeat'>
                    <p className='text-2xl font-bold pb-3 font-pretty'>{e.title}</p>
                    <p className='text-lg font-bold font-pretty'>{e.desc}</p>
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