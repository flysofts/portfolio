import React from 'react'

function About() {
  return (
    <div className='pt-24 w-full '>
      <div>
        <p className='text-center w-32 m-auto font-bold mb-20 text-4xl border-solid border-b-4 border-red-300'>ABOUT</p>
        <div className='max-w-7xl flex justify-center m-auto max-lg:flex-wrap'>
          <img src='http://placeholder.com/480x480'/>
        <div className='pl-24'>
          <p className='mb-12 text-4xl max-lg:text-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, iusto.</p>
          <p className='text-justify max-lg:mr-10 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt nostrum inventore harum tenetur ducimus rem sit, ab rerum perferendis ipsam fugiat minus ipsum. Sit distinctio officiis omnis assumenda aliquid fuga qui dicta debitis, exercitationem dolor nesciunt sed perferendis accusantium modi.</p>
        </div>
        </div>
      </div>
    </div>

  )
}

export default About