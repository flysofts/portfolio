import { useState } from 'react';
import { useSelector } from 'react-redux'


function Skill() {
  const darkMode = useSelector(state => state.darkMode);
  


  const skills = [
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

  const skill = [
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
          <div className="text-center w-52 text-6xl  m-auto pt-32 mb-24 font-bold  text-black dark:text-white">Skills</div>
          <div className='max-w-7xl mx-auto flex justify-center items-start gap-12 flex-wrap'>
            <div className='md:flex gap-12 md:basis-10/12'>
              {
                skills.map((e, i) => {
                  return (
                    <div className='relative group mb-16'>
                      <img  className='w-24 h-24 lg:w-28 lg:h-28 ' src={e.img} alt={`Skill ${i}`}/>
                      <p className="absolute -bottom-14 opacity-0 group-hover:opacity-100 dark:text-white">{e.text}</p>
                    </div>
                  )
                })
              }
            </div>
            <div className='md:flex gap-12 md:basis-10/12'>
              
              {
                skill.map((e, i) => {
                  return (
                    <div className='relative group mb-16'>
                      <img  className='w-24 h-24 lg:w-28 lg:h-28 ' src={e.img} alt={`Skill ${i}`}/>
                      <p className="absolute -bottom-8 opacity-0 group-hover:opacity-100 dark:text-white">{e.text}</p>
                    </div>
                  )
                })
              }
            </div>
            <div className='md:flex gap-12 md:basis-10/12'>
              {
                tools.map((e, i) => {
                  return (
                    <div className='relative group mb-16'>
                    <img className='w-24 h-24 lg:w-28 lg:h-28' src={e.img} alt={`Skill ${i}`}/>
                    <span className='absolute -bottom-8 opacity-0 group-hover:opacity-100 dark:text-white'>{e.text}</span>
                    </div>
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