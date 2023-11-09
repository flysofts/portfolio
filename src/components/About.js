import React from 'react'

function About() {
  return (
    <div className='pt-24 w-full '>
      <div>
        <p className='text-center w-32 text-4xl  m-auto mt-32 mb-24 font-bold border-solid border-b-4 border-red-300 text-gray-500'>About</p>
        <div className='max-w-7xl flex flex-wrap justify-center lg:flex-nowrap m-auto'>
          <div className='flex-row'>

          <p className='sm:text-sm md:text-lg text-center lg:text-3xl mt-20'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quisquam numquam</p>
          <p className='sm:text-sm md:text-lg text-center lg:text-3xl mt-20'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, numquam.</p>
          </div>
          <div className=''>
        <div className='border-4 rounded-xl py-10 px-16  mx-20 mb-5'>
          <p>NAME</p>
          <p>박지환</p>
        </div>
        <div className='border-4 rounded-xl py-10 px-16  mx-20 mb-5'>
          <p>EMAIL</p>
          <p>ds4950@naver.com</p>
        </div>
        <div className='border-4 rounded-xl py-10 px-16  mx-20 mb-5'>
          <p>lorem</p>
          <p>lorem</p>
        </div>
        <div className='border-4 rounded-xl py-10 px-16  mx-20 mb-5'>
          <p>lorem</p>
          <p>lorem</p>
        </div>
        </div>
        </div>
      </div>
    </div>

  )
}

export default About