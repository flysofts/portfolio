import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons"
import { Link } from 'react-scroll';


const Title = "Front-End Developer";

function Home() {

  const [mainTitle, setMainTitle] = useState('');
  const [count, setCount] = useState(0);
  useEffect(() => {
    const typingInterval = setInterval(() => {
      setMainTitle((prevTitleValue) => {
        let result = prevTitleValue ? prevTitleValue + Title[count] : Title[0];
        setCount(count + 1);

        if (count >= Title.length) {
          setCount(0);
          setMainTitle('');
        }

        return result;
      });
    }, 200);

    return () => {
      clearInterval(typingInterval);
    };
  });
  return (
    <>
    <div>
      <div className='w-full  h-screen' style={{ backgroundImage: "url(/background.jpg)" , backgroundSize: "cover" , backgroundRepeat: "no-repeat",backgroundAttachment: 'fixed'}}>
        <header className='w-full flex justify-between items-center pt-5 pb-3 fixed bg-stone-700 bg-opacity-25 pl-5'>
               <li><a className='text-white '>JIHAWN</a></li>
          <nav className='pl-32 max-lg:hidden'>
            <ul className='flex justify-between  gap-44 pr-24'>
              <li>
                <Link to="About" smooth={true} className='text-white'>ABOUT</Link>
              </li>
              <li>
                <Link smooth to="/#Skill" className='text-white'>SKILL</Link>
              </li>
              <li>
                <a className='text-white' href='#'>WORK</a>
              </li>
              <li>
                <a className='text-white' href='#'>CONTACT</a>
              </li>
            </ul>
          </nav>
          <FontAwesomeIcon icon={faMoon} className='text-white pr-16 text-2xl' />
        </header>
        <p className='text-center text-white font-bold text-6xl pt-72'>{mainTitle}</p>
      </div>
      </div>
    </>
  )
}

export default Home