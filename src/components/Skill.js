import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'


function Skill() {
  const darkMode = useSelector(state => state.darkMode);
  

  
  const frontEnd = [
    {
      "img": "html.png",
      "text": "text",
    },
    {
      "img": "css.png",
      "text": "text",
    },
    {
      "img": "javascript.png",
      "text": "text",
    },
    {
      "img": "logo192.png",
      "text": "text",
    },
    {
      "img": "nextjs.png",
      "text": "text",
    },
    {
      "img": "typescript.png",
      "text": "text",
    }

  ]

  const backEnd = [
    {
      "img": "node.js.svg",
      "text": "text",
    },
    {
      "img": "mongoDB.svg",
      "text": "text",
    },
    {
      "img": "mysql.png",
      "text": "text",
    }

  ]

  const tools = [
    {
      "img": "github.svg",
      "text": "text",
    },
    {
      "img": "git.png",
      "text": "text",
    },
    {
      "img": "figma.png",
      "text": "text",
    },
    {
      "img": "notion.svg",
      "text": "text",
    }
  ]

  return (
    <>
      <div name="SKILL" className={` ${darkMode ? 'dark' : ''}`}>
        <div className='dark:bg-neutral-600  '>        
          <div className="text-center w-52 text-6xl  m-auto pt-32 mb-24 font-bold border-solid border-b-4 border-red-300 text-gray-500 dark:text-white dark:border-red-50">Skills</div>


          <div className='max-w-7xl m-auto max-xl:flex max-xl:max-w-2xl'>
          <div className=' m-auto flex max-xl:flex-col mt-10 front'>
            <div className='w-32 h-32 mb-10 border-solid border-8 border-indigo-400 rounded-full  relative bg-white cursor-pointer'> 
              <div className='absolute top-10 left-6 text-lg' >Front-End</div>
            </div>
            {
               frontEnd.map((e, i) => {
                return (
                  <div className="relative group overflow-hidden">
                    <img className='w-32 h-32' src={e.img}/>
                    <p className="absolute top-0 -left-full group-hover:left-0 opacity-50 transition-all duration-500 ease-in-out bg-black text-white w-32 h-32 m-auto text-lg rounded-xl pt-6 text-center">{e.text}</p>
                  </div>
                )
              })
            }
          </div>
          <div className=' m-auto flex max-xl:flex-col mt-10 backend'>
            <div className='w-32 h-32 mb-10 border-solid border-8 border-indigo-400 rounded-full  relative bg-white cursor-pointer'>
              <div className='absolute top-10 left-6 text-lg '>Back-End</div>
            </div>
            {
              backEnd.map((e, i) => {
                return (
                  <>
                    <div className='relative group overflow-hidden'>
                      <img className='w-32 h-32' src={e.img}  />
                      <p className="absolute top-0 -left-full group-hover:left-0 opacity-50 transition-all duration-500 ease-in-out bg-black text-white w-32 h-32 m-auto rounded-xl pt-6 text-center ">{e.text}</p>
                    </div>
                  </>
                )
              })
            }
          </div>
          <div className=' m-auto flex max-xl:flex-col tools mt-10 pb-28'>
            <div className='w-32 h-32 mb-10 border-solid border-8 border-indigo-400 rounded-full relative bg-white cursor-pointer' >
              <div className='absolute top-10 left-9 text-lg'>Tools</div>
            </div>
            {
              tools.map((e, i) => {
                return (
                  <>
                    <div className='relative group overflow-hidden'>
                      <img className='w-32 h-32' src={e.img} ></img>
                      <p className="absolute top-0 -left-full group-hover:left-0 opacity-50 transition-all duration-500 ease-in-out bg-black text-white w-32 h-32 m-auto rounded-xl pt-6 text-center">{e.text}</p>
                    </div>
                  </>
                )
              })
            }
          </div>

          </div>  
        </div>
      </div>
    </>
  )
}

export default Skill