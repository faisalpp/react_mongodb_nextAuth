import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Card = ({slug,image,category,title,excerpt,key}) => {
  return (
    <div key={key} className='flex flex-row space-x-20 justify-center mb-10'>
     <Link href={`/Post_Details/${slug}`} >
      <div className='h-fit cursor-pointer container bg-c1 shadow-xl rounded-xl w-72'>
       <Image src={image} height={200} width={310} className='rounded-t-lg'/>
       <div className='ml-5 mr-5'>
        <h3 className='text-c2 text-xs font-bold border-2 border-c2 w-fit px-2 py-px rounded-xl'>{category}</h3>
        <h3 className='text-c2 font-bold text-xl mb-2 mt-2'>{title}</h3>
        <p className='h-16 text-c3 font-semibold'>{excerpt}</p>
       </div>
   </div></Link>
   </div>
  )
}

export default Card