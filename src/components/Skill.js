import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5} from "@fortawesome/free-solid-svg-icons"

function Skill() {

  const frontEnd = [
    {
      "img":"html.png",
      
    },
    {
      "img":"css.png",
      
    },
    {
      "img":"javascript.png",
      
    },
    {
      "img":"logo192.png",
      
    },
    {
      "img":"nextjs.png"
    },
    {
      "img":"typescript.png"
    }
    
  ]

  const backEnd = [
    {
      "img":"nodejs.png"
    },
    {
      "img":"express.png"
    },
    {
      "img":"mysql.png"
    }
   
  ]

  const tools = [
    {
      "img":"github.png"
    },
    {
      "img":"git.png"
    },
    {
      "img":"vscode.png"
    }
  ]
  return (
    <>
    <div className='text-center w-32 text-4xl  m-auto mt-32 mb-24 font-bold border-solid border-b-4 border-red-300 text-gray-500'>SKILL</div>

    <div className='max-w-7xl m-auto flex items-center flex-wrap justify-between max-lg:flex-col'>
      <div className='w-36 h-36 border-solid border-8 border-indigo-400 rounded-full relative'>
        <div className='absolute top-12 left-7'>Front-End</div>
        </div>
      {
      frontEnd.map((e,i)=>{
        return (
          <>
          <div>
          <img  src={e.img} width={150} height={150} />     
          </div>
          </>
        )
      })}
      </div>
      <div className='max-w-7xl m-auto flex items-center flex-wrap justify-between max-lg:flex-col mt-10'>
      <div className='w-36 h-36 border-solid border-8 border-indigo-400 rounded-full relative'>
        <div className='absolute top-12 left-7'>Back-End</div>
        </div>
        {
          backEnd.map((e,i)=>{
            return(
              <>
              <div>
                <img src={e.img} width={150} height={150}></img>
              </div>
              </>
            )
          })
        }       
      </div>
      <div className='max-w-7xl m-auto flex items-center flex-wrap justify-between max-lg:flex-col mt-10'>
      <div className='w-36 h-36 border-solid border-8 border-indigo-400 rounded-full relative'>
      <div className='absolute top-12 left-10'>Tools</div>
      </div>
        {
          tools.map((e,i)=>{
            return(
              <>
              <div>
                <img src={e.img} width={150} height={150}></img>
              </div>
              </>
            )
          })
        }   
        </div>    

    </>
  )
}

export default Skill