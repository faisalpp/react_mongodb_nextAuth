import React from 'react'
import {BsThreeDotsVertical,BsFillGridFill} from 'react-icons/bs'
import {MdArticle,MdCreate} from 'react-icons/md'
import {useSession} from 'next-auth/react'
import Link from 'next/link'

const DashboardMenu = () => {
  return (
    <div className='bg-c1 h-96 w-40 py-2 px-2'>
      <div className='flex flex-row justify-center'><h3 className='font-bold text-c2 text-2xl'>BLOG</h3></div>
      <div className='flex flex-col items-center space-y-4'>
        <BsThreeDotsVertical className='text-c2 mt-5'/>
        <Link href={'/Dashboard/Home'}><div className='flex items-center space-x-3 py-2 px-2 bg-gray-100 rounded-lg hover:rounded-lg group hover:bg-c2 cursor-pointer w-full'>
          <BsFillGridFill className=' text-gray-500 group-hover:text-white'/><h3 className=' text-gray-500 group-hover:text-white'>Dashboard</h3>
        </div></Link>
        <Link href={'/Dashboard/ViewPosts'}><div className='flex items-center space-x-3 py-2 px-2 bg-gray-100 rounded-lg hover:rounded-lg group hover:bg-c2  cursor-pointer w-full '>
          <MdArticle className=' text-gray-500 group-hover:text-white'/><h3 className=' text-gray-500 group-hover:text-white'>All Posts</h3>
        </div></Link>
        <Link href={'/Dashboard/CreatePost'}><div className='flex items-center space-x-3 py-2 px-2 bg-gray-100 rounded-lg hover:rounded-lg group hover:bg-c2  cursor-pointer w-full '>
          <MdCreate className=' text-gray-500 group-hover:text-white'/><h3 className=' text-gray-500 group-hover:text-white'>Write Posts</h3>
        </div></Link>
      </div>
    </div>
  )
}

export default DashboardMenu