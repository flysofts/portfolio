import React from 'react'

function About() {
  return (
    <div className='pt-24 w-full '>
      <div>
        <p className='text-center w-32 text-4xl  m-auto mt-32 mb-24 font-bold border-solid border-b-4 border-red-300 text-gray-500'>About</p>
        <div className='max-w-7xl flex flex-wrap justify-center lg:flex-nowrap m-auto'>
          <img  src='http://placeholder.com/480x480'/>
        <div className='border-4 rounded-xl p-6 mt-10 mx-20'>
          <p className='mb-12 text-4xl max-lg:text-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, iusto.</p>
          <p className='text-justify max-lg:mr-10 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt nostrum inventore harum tenetur ducimus rem sit, ab rerum perferendis ipsam fugiat minus ipsum. Sit distinctio officiis omnis assumenda aliquid fuga qui dicta debitis, exercitationem dolor nesciunt sed perferendis accusantium modi.</p>
        </div>
        </div>
      </div>
    </div>

  )
}

export default About