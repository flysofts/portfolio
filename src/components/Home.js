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

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 892);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  

  return (
    <div name="HOME">
      <div className={`xl:max-w-full md:max-w-7xl sm:max-w-3xl h-screen  ${darkMode ? 'dark' : ''}`} style={{ backgroundImage: "url(/background3.jpg)",backgroundPosition: "center", backgroundSize: "cover",  backgroundRepeat: "no-repeat" }}>
        <header className='w-full flex justify-between items-center pt-4 pb-4 pr-24 fixed bg-white z-30 pl-5  border-b-2 border-gray-200 dark:bg-neutral-800 dark:border-0'>
          <li><Link to="HOME" smooth={true} className='text-xl font-pretty cursor-pointer hover:border-b-2 hover:border-black dark:text-white dark:border-white'>HWAN</Link></li>
          {isMobile ? (
            <>
              <FontAwesomeIcon
                 icon={isButton ? faBurger : faBars}
                className='pr-16 absolute top-4 -right-10 text-2xl text-black dark:text-white cursor-pointer'
                onClick={() => setIsButton(!isButton)}
              />
              {isButton && (
                <nav  className='absolute top-14 right-0  w-full h-52 border-b-4 border-gray-200 bg-white dark:bg-neutral-800  p-5 '>
                  <ul className='flex flex-col items-center gap-5 '>
                    <li><Link to="ABOUT" smooth={true} className=' text-xl text-center font-pretty dark:text-white hover:border-b-2 hover:border-white cursor-pointer'>About</Link></li>
                    <li><Link to="SKILL" smooth={true} className=' text-xl font-pretty dark:text-white  hover:border-b-2 hover:border-white cursor-pointer'>Skills</Link></li>
                    <li><Link to="WORK" smooth={true} className=' text-xl font-pretty dark:text-white  hover:border-b-2 hover:border-white cursor-pointer'>Work</Link></li>
                    <li><Link to="CONTACT" smooth={true} className=' text-xl font-pretty dark:text-white  hover:border-b-2 hover:border-white cursor-pointer'>Contact</Link></li>
                  </ul>
                </nav>
              )}
            </>
          ) : (
            <nav className='pl-32'>
              <ul className='flex justify-between gap-24 pr-24'>
                <li><Link to="ABOUT" smooth={true} className='text-xl font-pretty cursor-pointer hover:border-b-2 hover:border-black dark:text-white dark:border-white'>About</Link></li>
                <li><Link to="SKILL" smooth={true} className=' text-xl font-pretty cursor-pointer hover:border-b-2 hover:border-black dark:text-white dark:border-white'>Skills</Link></li>
                <li><Link to="WORK" smooth={true} className=' text-xl font-pretty cursor-pointer hover:border-b-2 hover:border-black dark:text-white dark:border-white'>Work</Link></li>
                <li><Link to="CONTACT" smooth={true} className=' text-xl font-pretty cursor-pointer hover:border-b-2 hover:border-black dark:text-white dark:border-white'>Contact</Link></li>
              </ul>
            </nav>
          )}
          <FontAwesomeIcon
            icon={darkMode ? faSun : faMoon}
            className={`absolute top-4 right-20 text-2xl cursor-pointer ${darkMode ? 'text-white' : 'text-black'}`}
            onClick={dark}
          />
        </header>
        <p className='text-center text-white font-bold text-7xl pt-96 font-pretty max-md:text-4xl'>{mainTitle}</p>
      </div>
    </div>
  );
}

export default Home;