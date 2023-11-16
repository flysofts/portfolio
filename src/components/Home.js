import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun, faBars, faBurger } from "@fortawesome/free-solid-svg-icons"
import { Link } from 'react-scroll';

import { useDispatch, useSelector } from 'react-redux';
import { DarkMode } from '../redux/actions';


function Home() {
  const dispatch = useDispatch();
  const darkMode = useSelector(state => state.darkMode);

  const dark = () => {
    dispatch(DarkMode());
  };

  const Title = "Front-End Developer";
  const [mainTitle, setMainTitle] = useState('');
  const [count, setCount] = useState(0);
  const [isButton, setIsButton] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 892);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 892);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  useEffect(() => {
    if (count < Title.length) {
      const typingTimeout = setTimeout(() => {
        setMainTitle((prevTitleValue) => {
          return prevTitleValue + Title[count];
        });
        setCount(count + 1);
      }, 200);

      return () => {
        clearTimeout(typingTimeout);
      };
    }
  }, [count]);

  return (
    <div name="HOME">
      <div className={`xl:max-w-full md:max-w-7xl sm:max-w-3xl  h-screen  ${darkMode ? 'dark' : ''}`} style={{ backgroundImage: "url(/background3.jpg)",backgroundPosition: "center", backgroundSize: "cover",  backgroundRepeat: "no-repeat" }}>
        <header className='w-full flex justify-between items-center pt-4 pb-4 pr-24 fixed  z-30 pl-5 bg-white  border-b-2 dark:bg-neutral-800'>
          <li><Link to="HOME" smooth={true} className='text-xl font-pretty cursor-pointer hover:border-b-2 hover:border-black dark:text-white dark:border-white'>HAWN</Link></li>
          {isMobile ? (
            <>
              <FontAwesomeIcon
                 icon={isButton ? faBurger : faBars}
                className='pr-16 absolute top-4 -right-10 text-2xl text-black dark:text-white'
                onClick={() => setIsButton(!isButton)}
              />
              {isButton && (
                <nav  className='absolute top-14 right-0 cursor-pointer w-full h-52 bg-stone-700 bg-opacity-25 text-black p-5'>
                  <ul className='flex flex-col items-center gap-5'>
                    <li><Link to="ABOUT" smooth={true} className='text-white text-xl text-center font-pretty hover:border-b-2 '>ABOUT</Link></li>
                    <li><Link to="SKILL" smooth={true} className='text-white text-xl font-pretty hover:border-b-2 '>SKILL</Link></li>
                    <li><Link to="WORK" smooth={true} className='text-white text-xl font-pretty hover:border-b-2 '>WORK</Link></li>
                    <li><Link to="CONTACT" smooth={true} className='text-white text-xl font-pretty hover:border-b-2 '>CONTACT</Link></li>
                  </ul>
                </nav>
              )}
            </>
          ) : (
            <nav className='pl-32'>
              <ul className='flex justify-between gap-24 pr-24'>
                <li><Link to="ABOUT" smooth={true} className='text-xl font-pretty cursor-pointer hover:border-b-2 hover:border-black dark:text-white dark:border-white'>ABOUT</Link></li>
                <li><Link to="SKILL" smooth={true} className=' text-xl font-pretty cursor-pointer hover:border-b-2 hover:border-black dark:text-white dark:border-white'>SKILL</Link></li>
                <li><Link to="WORK" smooth={true} className=' text-xl font-pretty cursor-pointer hover:border-b-2 hover:border-black dark:text-white dark:border-white'>WORK</Link></li>
                <li><Link to="CONTACT" smooth={true} className=' text-xl font-pretty cursor-pointer hover:border-b-2 hover:border-black dark:text-white dark:border-white'>CONTACT</Link></li>
              </ul>
            </nav>
          )}
          <FontAwesomeIcon
            icon={darkMode ? faSun : faMoon}
            className={`absolute top-4 right-20 text-2xl cursor-pointer ${darkMode ? 'text-white' : 'text-black'}`}
            onClick={dark}
          />
        </header>
        <p className='text-center text-white font-bold text-6xl pt-72 font-pretty max-md:text-5xl'>{mainTitle}</p>
      </div>
    </div>
  );
}

export default Home;