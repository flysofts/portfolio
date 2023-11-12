import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons"
import { Link } from 'react-scroll';

import { useDispatch, useSelector } from 'react-redux';
import { DarkMode } from '../redux/actions';





function Home() {

  const dispatch = useDispatch();
  const darkMode = useSelector(state => state.darkMode)

  const dark = () => {
    dispatch(DarkMode());
  }

  const Title = "Front-End Developer";
  const [mainTitle, setMainTitle] = useState('');
  const [count, setCount] = useState(0);




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
    <>

      <div name="HOME">
        <div className={`w-full h-screen ${darkMode ? 'dark' : ''}`} style={{ backgroundImage: "url(/background.jpg)", backgroundSize: "cover", backgroundRepeat: "no-repeat",  }}>
          <header className='w-full flex justify-between items-center pt-4 pb-4 pr-24 fixed  bg-opacity-25 z-30 pl-5 bg-stone-700 border-b-2 border-b-neutral-600 dark:bg-'>
            <li><Link to="HOME" smooth={true} className='text-white text-xl pl-64 font-pretty' href='#'>HAWN</Link></li>
            <nav className='pl-32 max-2xl:hidden'>
              <ul className='flex justify-between  gap-24 pr-24'>
                <li>
                  <Link to="ABOUT" smooth={true} className='text-white text-xl font-pretty' href='#'>ABOUT</Link>
                </li>
                <li>
                  <Link to="SKILL" smooth={true} className='text-white text-xl font-pretty' href='#'>SKILL</Link>
                </li>
                <li>
                  <Link to="WORK" smooth={true} className='text-white text-xl font-pretty' href='#'>WORK</Link>
                </li>
                <li>
                  <Link to="CONTACT" smooth={true} className='text-white text-xl font-pretty' href='#'>CONTACT</Link>
                </li>
              </ul>
            </nav>
            <FontAwesomeIcon
              icon={darkMode ? faSun : faMoon}
              className={`pr-16 absolute top-4 right-9 text-2xl ${darkMode ? 'text-white' : 'text-white'}`}
              onClick={dark}
            />
          </header>
          <p className='text-center text-white font-bold text-6xl pt-72'>{mainTitle}</p>
        </div>
      </div>
    </>
  )
}

export default Home