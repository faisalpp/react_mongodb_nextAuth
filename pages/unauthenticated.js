import React from 'react'
import {FaHome} from 'react-icons/fa'

const unauthenticated = () => {
  return (
    <>
    <div className='flex flex-col items-center h-full w-full'>
      <div className='flex w-10/12 h-fit mb-3 space-x-2'>
       <div className='bg-gradient-to-r from-c1 to-c4 w-1/2 h-10 text-c1'>hg</div>
        <h3 className='font-bold text-c4 text-2xl'>404</h3>
       <div className='bg-gradient-to-r from-c4 to-c1 w-1/2 h-10 text-c4'>hg</div>
      </div>
      <div className='flex flex-col text-center space-y-5 h-fit'>
       <h3 className='font-bold text-5xl'>Page Not Found</h3>
       <h3 className='text-slate-400 text-lg font-semibold'>Sorry, We could&apos;t find the Page</h3>
      <div className='flex items-center bg-c4 self-center w-fit h-fit px-3 py-3 text-c1 text-lg font-bold rounded-lg space-x-3 cursor-pointer hover:bg-c3'><FaHome className='text-2xl'/><h3>Navigate To Home</h3></div>
      </div>
    </div>
    </>
  )
}

export default unauthenticated