import React from 'react'
import { FaFacebook,FaTwitter,FaInstagram,FaGitSquare } from 'react-icons/fa'

const MobileFooter = () => {
  return (
    <div className='sticky w-full'>
    <div className='flex flex-row  text-c1 text-3xl space-x-10 items-center bg-c2 w-full h-fit py-4'>
     <h3 className='flex font-bold ml-2'>Reactian</h3>
      <div className='flex space-x-5 text-xl'>
      <FaFacebook/>
      <FaTwitter/>
      <FaInstagram/>
      <FaGitSquare/>
      </div>
    </div>
    </div>
  )
}

export default MobileFooter