import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5 } from "@fortawesome/free-solid-svg-icons"
import { useSelector } from 'react-redux'


function Skill() {
  const darkMode = useSelector(state => state.darkMode);
  const [showFrontEnd, setShowFrontEnd] = useState(false);
  const [isView, setIsView] = useState(false);

  const [currentFrontEndIndex, setCurrentFrontEndIndex] = useState(0);
  const [currentBackEndIndex, setCurrentBackEndIndex] = useState(0);
  const [currentToolsIndex, setCurrentToolsIndex] = useState(0);
  const [showBackEnd, setshowBackEnd] = useState(false);
  const [showTools, setshowTools] = useState(false);
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

  useEffect(() => {
    if(showFrontEnd && currentFrontEndIndex < frontEnd.length) {
      const timeoutId = setTimeout(() => {
        setCurrentFrontEndIndex(currentFrontEndIndex + 1);
      }, 300);
      return () => clearTimeout(timeoutId);
    }
  }, [showFrontEnd, currentFrontEndIndex]);

  useEffect(() => {
    if(!showFrontEnd) {
      setCurrentFrontEndIndex(0);
    }
  }, [showFrontEnd]);

  useEffect(() => {
    if(showBackEnd && currentBackEndIndex < backEnd.length) {
      const timeoutId = setTimeout(() => {
        setCurrentBackEndIndex(currentBackEndIndex + 1);
      }, 300);
      return () => clearTimeout(timeoutId);
    }
  }, [showBackEnd, currentBackEndIndex]);
  
  useEffect(() => {
    if(!showBackEnd) {
      setCurrentBackEndIndex(0);
    }
  }, [showBackEnd]);
  
  useEffect(() => {
    if(showTools && currentToolsIndex < tools.length) {
      const timeoutId = setTimeout(() => {
        setCurrentToolsIndex(currentToolsIndex + 1);
      }, 300);
      return () => clearTimeout(timeoutId);
    }
  }, [showTools, currentToolsIndex]);
  
  useEffect(() => {
    if(!showTools) {
      setCurrentToolsIndex(0);
    }
  }, [showTools]);

  useEffect(()=>{
    const scrollEvent = ()=>{
        const rect = document.querySelector(".front").getBoundingClientRect();        
        if (rect.top <= window.innerHeight && rect.bottom >= 0){
           setIsView(true);
           setShowFrontEnd(true)   
        }
    }
    window.addEventListener("scroll", scrollEvent)
    scrollEvent();
    return () => {
        window.removeEventListener("scroll", scrollEvent)
    }
}, [])

  
  return (
    <>
      <div name="SKILL" className={` ${darkMode ? 'dark' : ''}`}>
        <div className='dark:bg-neutral-600'>        
          <div className="text-center w-52 text-6xl  m-auto pt-32 mb-24 font-bold font-omyu border-solid border-b-4 border-red-300 text-gray-500 dark:text-white dark:border-red-50">Skills</div>
          <div className='max-w-7xl m-auto flex flex-wrap gap-5 front'>
            <div className='w-40 h-40 border-solid border-8 border-indigo-400 rounded-full relative  bg-white cursor-pointer' onClick={() => setShowFrontEnd(!showFrontEnd)}>
              <div className='absolute top-14 left-8 font-omyu text-xl' >Front-End</div>
            </div>
            {
               showFrontEnd && frontEnd.slice(0, currentFrontEndIndex).map((e, i) => {
                return (
                  <div className="relative group overflow-hidden">
                    <img className='w-40 h-40 ' src={e.img}/>
                    <p className="absolute top-0 -left-full group-hover:left-0 opacity-50 transition-all duration-500 ease-in-out bg-black text-white w-40 h-40 m-auto rounded-xl pt-6 text-center">{e.text}</p>
                  </div>
                )
              })
            }
          </div>
          
          <div className='max-w-7xl m-auto flex flex-wrap gap-5 mt-10'>
            <div className='w-40 h-40  border-solid border-8 border-indigo-400 rounded-full relative bg-white cursor-pointer' onClick={() => setshowBackEnd(!showBackEnd)}>
              <div className='absolute top-14 left-8 font-omyu text-xl'>Back-End</div>
            </div>
            {
              showBackEnd && backEnd.slice(0, currentBackEndIndex).map((e, i) => {
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
          <div className='max-w-7xl m-auto flex flex-wrap gap-5 mt-10 pb-28'>
            <div className='w-40 h-40  border-solid border-8 border-indigo-400 rounded-full relative bg-white cursor-pointer' onClick={() => setshowTools(!showTools)}>
              <div className='absolute top-14 left-12 font-omyu text-xl'>Tools</div>
            </div>
            {
              showTools && tools.slice(0, currentToolsIndex).map((e, i) => {
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