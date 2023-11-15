import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUp, faComments, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux'



function Contact() {

  const darkMode = useSelector(state => state.darkMode);
  const [btnActive, setBtnActive] = useState(false);
  const Topscroll = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }
  useEffect(() => {
    const Button = () => {
      const scrollY = window.scrollY;
      if (scrollY > 350) {
        setBtnActive(true);
      } else {
        setBtnActive(false);
      }
    };

    window.addEventListener("scroll", Button)
    return () => {
      window.removeEventListener("scroll", Button)
    }
  }, [])

  return (
    <>
      <div name="CONTACT" className={`w-full ${darkMode ? 'dark' : ''}`}>
        <div className='dark:bg-neutral-600 dark:text-white'>
          <div className='pt-24'>
            <p className='text-center w-52 text-6xl  m-auto mt-32 mb-48 font-bold font-omyu border-solid border-b-4 border-red-300 text-gray-500 dark:text-white dark:border-red-50 '>Contact</p>
            <div>
              <div className='flex justify-center pb-10 gap-10'>
                <a href='https://github.com/flysofts' target='_blank'>
                  <FontAwesomeIcon icon={faGithub} className='text-4xl mr-5 dark:text-white' />
                </a>
                <a href='mailto:ds4950@naver.com' target='_blank' rel='noopener noreferrer'>
                  <FontAwesomeIcon icon={faEnvelope} className='text-4xl mr-5 dark:text-white' />
                </a>
                <a href="https://open.kakao.com/o/sUXFD3Rf" target='_blank'>
                  <FontAwesomeIcon icon={faComments} className='text-4xl dark:text-white' />
                </a>
              </div>
              <p className='text-center text-xl pb-10'>저의 포트폴리오를 봐주셔서 감사합니다.</p>
              <div className='relative'>

                <div className=' text-center text-xl font-pretty mt-20 text-white bg-black dark:bg-neutral-700'>&copy;2023 PARKJIHAWN. all rights reserved.</div>
                {
                  btnActive &&
                  <>
                    <div onClick={Topscroll}><FontAwesomeIcon icon={faArrowUp} className='fixed right-16 bottom-20  w-6 h-6 px-3 py-3 rounded-full border-2 cursor-pointer dark:border-0 dark:bg-red-100 dark:text-black' /></div>
                  </>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


export default Contact