import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5} from "@fortawesome/free-solid-svg-icons"

function Skill() {

  const item = [
    {
      "img":"html.png",
      "text":"1"
    },
    {
      "img":"css.png",
      "text":"2"
    },
    {
      "img":"javascript.png",
      "text":"3"
    },
    {
      "img":"logo192.png",
      "text":"4"
    },
    {
      "img":"html.png",
      "text":"1"
    },
    {
      "img":"css.png",
      "text":"2"
    },
    {
      "img":"javascript.png",
      "text":"3"
    },
    {
      "img":"logo192.png",
      "text":"4"
    },
    
  ]

  return (
    <>
    <div className='text-center w-32 text-4xl  m-auto mt-32 mb-24 font-bold border-solid border-b-4 border-red-300 text-gray-500'>SKILL</div>
    <div className='max-w-7xl m-auto flex justify-around'>{
      item.map((e,i)=>{
        return (
          <>
          <div>
          <img src={e.img} width={100} height={100} />
          {e.text}
          </div>
          </>
        )
      })}</div>
    </>
  )
}

export default Skill