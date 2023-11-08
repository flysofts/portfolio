import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


function Contact() {
  return (
    <>
    <div className='pt-24'>
    <p className='text-center w-32 text-4xl  m-auto mt-32 mb-24 font-bold border-solid border-b-4 border-red-300 text-gray-500'>Contact</p>
    <div>
      <div className='text-center mb-11'>
      <FontAwesomeIcon icon={faGithub} className='text-2xl mr-5'/> 
      <FontAwesomeIcon icon={faEnvelope} className='text-2xl'/> 
      </div>
      <div className='text-center text-xl'>&copy;2023 박지환. all rights reserved.</div>
    </div>
    </div>
    </>
  )
}

export default Contact