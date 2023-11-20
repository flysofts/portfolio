import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'


function Skill() {
  const darkMode = useSelector(state => state.darkMode);
  const [showFrontEnd, setShowFrontEnd] = useState(false);
  const [showBackEnd, setshowBackEnd] = useState(false);
  const [showTools, setshowTools] = useState(false);
  const [isView, setIsView] = useState(false);

  const [currentFrontEndIndex, setCurrentFrontEndIndex] = useState(0);
  const [currentBackEndIndex, setCurrentBackEndIndex] = useState(0);
  const [currentToolsIndex, setCurrentToolsIndex] = useState(0);
  
  
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

  useEffect(() => {
    if(showFrontEnd && currentFrontEndIndex < frontEnd.length) {
      const timeoutId = setTimeout(() => {
        setCurrentFrontEndIndex(currentFrontEndIndex + 1);
      }, 500);
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
      }, 500);
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
      }, 500);
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

useEffect(()=>{
  const scrollEvent = ()=>{
      const rect = document.querySelector(".backend").getBoundingClientRect();        
      if (rect.top <= window.innerHeight && rect.bottom >= 0){
         setIsView(true);
         setshowBackEnd(true)   
      }
  }
  window.addEventListener("scroll", scrollEvent)
  scrollEvent();
  return () => {
      window.removeEventListener("scroll", scrollEvent)
  }
}, [])

useEffect(()=>{
  const scrollEvent = ()=>{
      const rect = document.querySelector(".tools").getBoundingClientRect();        
      if (rect.top <= window.innerHeight && rect.bottom >= 0){
         setIsView(true);
         setshowTools(true)   
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
        <div className='dark:bg-neutral-600  '>        
          <div className="text-center w-52 text-6xl  m-auto pt-32 mb-24 font-bold font-omyu border-solid border-b-4 border-red-300 text-gray-500 dark:text-white dark:border-red-50">Skills</div>


          <div className='max-w-7xl m-auto  max-xl:flex max-xl:max-w-2xl'>
          <div className=' m-auto flex max-xl:flex-col  mt-10 front'>
            <div className='w-32 h-32 mb-10 border-solid border-8 border-indigo-400 rounded-full  relative bg-white cursor-pointer' onClick={() => setShowFrontEnd(!showFrontEnd)}>
              <div className='absolute top-10 left-6 font-omyu text-lg' >Front-End</div>
            </div>
            {
               showFrontEnd && frontEnd.slice(0, currentFrontEndIndex).map((e, i) => {
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
            <div className='w-32 h-32 mb-10 border-solid border-8 border-indigo-400 rounded-full  relative bg-white cursor-pointer' onClick={() => setshowBackEnd(!showBackEnd)}>
              <div className='absolute top-10 left-6 font-omyu text-lg '>Back-End</div>
            </div>
            {
              showBackEnd && backEnd.slice(0, currentBackEndIndex).map((e, i) => {
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
            <div className='w-32 h-32 mb-10 border-solid border-8 border-indigo-400 rounded-full relative bg-white cursor-pointer' onClick={() => setshowTools(!showTools)}>
              <div className='absolute top-10 left-9 font-omyu text-lg'>Tools</div>
            </div>
            {
              showTools && tools.slice(0, currentToolsIndex).map((e, i) => {
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