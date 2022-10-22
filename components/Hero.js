import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
   <div className='flex justify-center'>
   <div className='flex w-fit bg-c1 h-auto shadow-lg'>
    <div className='mt-10 ml-10 mr-5'>
     <p className='text-6xl w-82 '>Learn ReactJs</p>
     <span className='text-c4 text-6xl ml-5'>Easy Way!</span>
     <p className='w-96 mt-5 text-c3 font-semibold'>Want to Learn ReactJs, Feel Free to Exolore Our Tutorial's and Learn both Front End and Backend Web Developing.</p>
     <button className='text-c1 font-semibold text-sm bg-gradient-to-tr from-c2 to-c3 hover:bg-gradient-to-sr hover:from-c2 hover:to-c4 mt-5 hover:bg-c3 rounded-lg px-4 py-2'>Explore Blog</button>
    </div>
    <Image src={'/illust.png'} height={400} width={600}/>
   </div>
   </div>
  )
}

export default Hero