import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5 } from "@fortawesome/free-solid-svg-icons"
import { useSelector } from 'react-redux'


function Skill() {
  const [showFrontEnd, setShowFrontEnd] = useState(false);
  
  const [showBackEnd, setshowBackEnd] = useState(false);
  const [showTools, setshowTools] = useState(false);
  const darkMode = useSelector(state => state.darkMode);
  const frontEnd = [
    {
      "img": "html.png",
      "text": "하이",
    },
    {
      "img": "css.png",
      "text": "하이",
    },
    {
      "img": "javascript.png",
      "text": "하이",
    },
    {
      "img": "logo192.png",
      "text": "하이",
    },
    {
      "img": "nextjs.png",
      "text": "하이",
    },
    {
      "img": "typescript.png",
      "text": "하이",
    }

  ]

  const backEnd = [
    {
      "img": "node.js.svg",
      "text": "안녕"
    },
    {
      "img": "mongoDB.svg",
      "text": "안녕"
    },
    {
      "img": "mysql.png",
      "text": "안녕"
    }

  ]

  const tools = [
    {
      "img": "github.svg",
      "text": "안녕"
    },
    {
      "img": "git.png",
      "text": "안녕"
    },
    {
      "img": "figma.png",
      "text": "안녕"
    },
    {
      "img": "notion.svg",
      "text": "안녕"
    }
  ]

  
  return (
    <>
      <div name="SKILL" className={` ${darkMode ? 'dark' : ''}`}>
        <div className='dark:bg-neutral-600'>
          <div className="text-center w-32 text-4xl  m-auto pt-32 mb-24 font-bold border-solid border-b-4 border-red-300 text-gray-500 dark:text-white dark:border-red-50">Skills</div>
          <div className='max-w-7xl m-auto flex items-center flex-wrap justify-between max-lg:flex-col'>
            <div className='w-40 h-40 border-solid border-8 border-indigo-400 rounded-full relative bg-white cursor-pointer' onClick={() => setShowFrontEnd(!showFrontEnd)} >
              <div className='absolute top-14 left-9 font-pretty text-lg' >Front-End</div>
            </div>
            {
              showFrontEnd && frontEnd.map((e, i) => {
                return (
                  <div className="relative group overflow-hidden" >
                    <img className='w-40 h-40 ' src={e.img}/>
                    <p className="absolute top-0 -left-full group-hover:left-0 opacity-50 transition-all duration-500 ease-in-out bg-black text-white w-40 h-40 m-auto rounded-xl pt-6 text-center">{e.text}</p>
                  </div>
                )
              })
            }
          </div>
          <div className='max-w-7xl m-auto flex items-center flex-wrap justify-between max-lg:flex-col mt-10'>
            <div className='w-40 h-40  border-solid border-8 border-indigo-400 rounded-full relative bg-white cursor-pointer' onClick={() => setshowBackEnd(!showBackEnd)}>
              <div className='absolute top-14 left-9 font-pretty text-lg'>Back-End</div>
            </div>
            {
              showBackEnd && backEnd.map((e, i) => {
                return (
                  <>
                    <div className='relative group overflow-hidden'>
                      <img className='w-40 h-40' src={e.img}  />
                      <p className="absolute top-0 -left-full group-hover:left-0 opacity-50 transition-all duration-500 ease-in-out bg-black text-white w-40 h-40 m-auto rounded-xl pt-6 text-center ">{e.text}</p>
                    </div>
                  </>
                )
              })
            }
          </div>
          <div className='max-w-7xl m-auto flex items-center flex-wrap justify-between max-lg:flex-col mt-10'>
            <div className='w-40 h-40  border-solid border-8 border-indigo-400 rounded-full relative bg-white cursor-pointer' onClick={() => setshowTools(!showTools)}>
              <div className='absolute top-14 left-12 font-pretty text-lg'>Tools</div>
            </div>
            {
              showTools && tools.map((e, i) => {
                return (
                  <>
                    <div className='relative group overflow-hidden'>
                      <img className='w-40 h-40' src={e.img} ></img>
                      <p className="absolute top-0 -left-full group-hover:left-0 opacity-50 transition-all duration-500 ease-in-out bg-black text-white w-40 h-40 m-auto rounded-xl pt-6 text-center">{e.text}</p>
                    </div>
                  </>
                )
              })
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Skill