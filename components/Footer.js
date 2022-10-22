import React from 'react'
import {FaFacebook, FaGitSquare, FaInstagram, FaTwitter} from 'react-icons/fa'

const Footer = () => {
  return (
    <div  className="bg-c4 sticky top-full p-2">
    <div className="grid grid-cols-8 bg-c5">
     <div className='flex flex-col items-center w-36'>
       <h3 className='text-c2 text-2xl'>REACTIAN</h3>
       <h3 className='text-c2 text-xs'>Design With Code</h3>
      </div>
     <div className='flex items-center col-start-4 col-end-6'><h3 className='text-c2 text-center text-sm'>Copyright &copy; 2022 Reactian.com</h3></div>
     <div className='text-c2 col-start-8 col-end-8 flex items-center space-x-3 text-xl'>
      <FaFacebook/>
      <FaTwitter/>
      <FaInstagram/>
      <FaGitSquare/>
     </div>
    </div>
    </div>
  )
}

export default Footer