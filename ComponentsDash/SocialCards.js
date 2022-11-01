import React from 'react'
import {FaFacebook,FaTwitter,FaWhatsapp} from 'react-icons/fa'
import SocialCard from '../ComponentsDash/SocialCard'

const SocialCards = () => {
  return (
  <div className='bg-white rounded-lg mt-5 ml-5 h-fit w-fit px-4 py-4'>
   <h3 className='font-bold'>Top Social Media Trends</h3>    
    <SocialCard name='Facebook' numbers='45k' bgColor='blue' icon={<FaFacebook className='text-blue-500 text-xl'/>}/>    
    <SocialCard name='Twitter' numbers='45k' bgColor='blue' icon={<FaTwitter className='text-blue-500 text-xl'/>}/>    
    <SocialCard name='WhatsApp' numbers='45k' bgColor='orange' icon={<FaWhatsapp className='text-green-500 text-xl'/>}/>    
  </div>
  )
}

export default SocialCards