import React from 'react'
import Image from 'next/image'

const MobileHero = () => {
  return (
  <div className='flex flex-col w-full mt-5 shadow-md py-2'> 
   <p className='text-center text-3xl w-full '>Learn ReactJs</p>
   <span className='text-center text-c4 text-xl'>Easy Way!</span>
   <p className='text-gray-400 text-center text-md w-full' >Doller Ismet mint margata</p>
   <div className='flex w-full justify-center' ><Image src={'/illust.png'} height={170} width={200}/></div>
  </div>
  )
}

export default MobileHero