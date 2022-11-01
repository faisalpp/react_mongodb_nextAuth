import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Card = ({slug,image,category,title,excerpt,uid}) => {
  return (
    <div key={uid} className='flex flex-row space-x-20 justify-center mb-10'>
     <Link href={`/Post_Details/${slug}`} >
      <div className='h-fit cursor-pointer bg-c1 shadow-xl rounded-xl w-60'>
       <Image alt='post_img' src={image} height={200} width={310} className='rounded-t-lg'/>
       <div className='ml-5 mr-5'>
        <h3 className='text-c4 text-xs font-semibold border-2 border-c4 w-fit h-fit px-2 rounded-xl'>{category}</h3>
        <h3 className='text-c2 font-bold text-md mb-2 mt-px'>{title}</h3>
        <p className='h-12 text-c3 font-semibold text-xs'>{excerpt}</p>
       </div>
   </div></Link>
   </div>
  )
}

export default Card