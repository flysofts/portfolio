import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon} from "@fortawesome/free-solid-svg-icons"



const Title = "Front-End Developer";

function Home() {

const [mainTitle, setMainTitle] = useState('');
const [count, setCount] = useState(0);
  useEffect(() =>{
    const typingInterval = setInterval(() =>{
      setMainTitle((prevTitleValue)=>{
        let result = prevTitleValue ? prevTitleValue + Title[count] : Title[0];
        setCount(count + 1);
  
        if (count >= Title.length){
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
    <div className='max-w-full h-screen'style={{ backgroundImage: "url(/background.jpg)"}}>
    <header className='w-full flex justify-end items-center pt-5 pb-3 fixed bg-stone-700 bg-opacity-25'>
      <div className= 'text-white cursor-pointer absolute top-15 left-1/4 '> JIHAWN </div>
      <nav>
        <ul className='flex justify-between relative gap-14 pr-24 '>
        <li className='inline-block '><a className='text-white'href='#'>ABOUT</a></li>
        <li><a className='text-white' href='#'>SKILL</a></li>
        <li><a className='text-white' href='#'>WORK</a></li>
        <li><a className='text-white' href='#'>CONTACT</a></li>       
        </ul>       
      </nav>
      <FontAwesomeIcon icon={faMoon} className='text-white pr-16 text-2xl'/>
    </header>
  <p className='text-center text-white font-bold text-6xl pt-72'>{mainTitle}</p>
</div>
    
    </>
  )
}

export default Home