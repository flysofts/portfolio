import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faCakeCandles, faIdCard, faSchool } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux'



function About() {

  const darkMode = useSelector(state => state.darkMode);

  const info = [
    {
      "icon": faIdCard,
      "title": "Name",
      "desc": "박지환"

    },
    {
      "icon": faEnvelope,
      "title": "Email",
      "desc": "ds4950@naver.com"
    },
    {
      "icon": faCakeCandles,
      "title": "Birth Date",
      "desc": "1996-06-24"
    },
    {
      "icon": faSchool,
      "title": "Study",
      "desc": "그린컴퓨터 아트학원",
      "desc2": "react를 활용한",
      "desc3": "프론트엔드 개발자양성",
      "desc4": "(SPA 프로젝트 개발) 900H"
    },
  ]

  return (
    <div name="ABOUT" className={`w-full ${darkMode ? 'dark' : ''}`}>
      <div className='dark:bg-neutral-600 dark:text-white'>
        <div className='text-center w-24 text-4xl lg:text-6xl lg:w-48 m-auto pt-32 font-bold border-solid border-b-4 border-red-300 text-gray-500 dark:text-white dark:border-red-50'>About</div>
        <div className='w-full flex flex-col lg:flex-row justify-center  m-auto pb-24'>
          <div>
            <p className='sm:text-sm md:text-lg text-center lg:text-3xl py-7 mt-24'>안녕하세요<span className='text-lg lg:text-2xl mx-2'>🖐</span> 저는 주니어 프론트 개발자 박지환입니다.</p>
            <p className='px-10 sm:text-sm md:text-lg text-center py-5 lg:text-3xl'>새로운 기술을 배우고 문제를 해결하여 원하는 것을 구현하였을때
              <p>성취감을 느끼고 모든일에 최선을 다합니다.</p>
              <p className=' font-bold'>중요한건 꺾이지않는 마음 !</p></p>
            <p className='sm:text-sm md:text-lg text-center lg:text-3xl'></p>
            <p className='sm:text-sm md:text-lg text-center lg:text-3xl py-10'>모든일에 두려움을 가지기보단 재미를 찾고 있습니다.
              <p>지속적인 학습으로 앞으로의 프론트 개발자의 길을 걷겠습니다.</p>
            </p>
            </div>
            <div>
            {
              info.map((e, i) => {
                return (
                  <div className='w-96 mx-auto shadow-lg rounded-xl flex py-8 mb-5 heartbeat  dark:shadow-black dark:bg-white dark:text-black ' style={{ animationDelay: `${i * 0.1}s` }}>
                      <FontAwesomeIcon className='text-2xl p-4' icon={e.icon} />
                      <div>
                        <p className='text-lg font-bold p-3'>{e.title}</p>
                        <p className='text-sm lg:text-lg p-3 '>{e.desc}
                          <p>{e.desc2}</p>
                          <p>{e.desc3}</p>
                          <p>{e.desc4}</p>
                        </p>
                      </div>      
                  </div>
                )
              })
            }
            </div>
            </div>
      </div>
    </div>

  )
}

export default About