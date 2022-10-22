import React from 'react'

const About = () => {
 return (
 <div className='grid grid-cols-4 mt-20'>
  <div className='flex flex-col bg-white h-auto w-96 shadow-xl rounded-lg ml-24'>
   <h3 className='text-center text-c3 font-bold text-2xl mt-5'>Message Me</h3>
   <div className='flex flex-col'>
    <input className='self-center text-xl border-2 border-c4 rounded-md px-2 py-2 mt-5 w-80' type='text' placeholder="Email"/>
    <textarea className='self-center text-xl border-2 border-c4 rounded-md px-2 py-2 mt-5 w-80 h-48' type='text' placeholder="Write Message Here..."></textarea>
    <div className='bg-c2 hover:bg-c3 w-fit self-center px-4 py-2 rounded-lg text-white font-bold mb-5 mt-10 cursor-pointer'>
      <h3>Submit Message</h3>
    </div>
    </div>
  </div>
  <div className='col-start-3 bg-white shadow-2xl w-96 h-auto p-5 ml-20'>
    <h3 className='text-center font-bold text-2xl mt-5 mb-5 '>About Me</h3>
    <p className='text-c4 font-semibold'>I am a full stack web developer. I can build responsive and beautifull websites for both personal and business purposes. This website is also part of my work. Please feel free to give your opinion about my website and also visit my portfolio to see more amazing works.</p>
    <div className='bg-gradient-to-l bg-c4 hover:from-c4 hover:to-c3 w-fit px-4 py-2 rounded-lg text-white font-bold mt-10 mx-32 cursor-pointer'>Portfolio</div>
  </div>
 </div>
  )
}

export default About