import React from 'react'
import {GiShadowFollower} from 'react-icons/gi'
import {MdArticle} from 'react-icons/md'
import {AiFillHeart} from 'react-icons/ai'
import {BsBarChartFill} from 'react-icons/bs'
import Card from './Card'

const Stats = () => {
  return (
    <div className='flex flex-row ml-2 space-x-10 mt-5'>
      <Card icon={<GiShadowFollower className='text-blue-500 text-xl'/>} numbers='44k' bg='blue' title='Followers'/>    
      <Card icon={<MdArticle className='text-blue-500 text-xl'/>} numbers='44k' bg='blue' title='Posts'/>    
      <Card icon={<AiFillHeart className='text-red-500 text-xl'/>} numbers='44k' bg='red' title='Likes'/>    
      <Card icon={<BsBarChartFill className='text-blue-500 text-xl'/>} numbers='44k' bg='blue' title='Shared'/>    
    </div>
  )
}

export default Stats