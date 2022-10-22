import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Card = ({posts}) => {
  return (
   <div>
     <div className='flex space-x-20 ml-24'>
     {posts && posts.map((post) => <Link href={`/Post_Details/${post.slug}`} key={post.slug}>
      <div className='h-fit cursor-pointer container bg-c1 shadow-xl rounded-xl mt-10 mb-10 w-72'>
       <Image src={post.image} height={200} width={310} className='rounded-t-lg'/>
       <div className='ml-5 mr-5'>
        <h3 className='text-black text-sm font-semibold bg-c4 w-fit px-2 py-px rounded-lg'>{post.category}</h3>
        <h3 className='text-c3 font-bold text-xl mb-2 mt-2'>{post.title}</h3>
        <p className='h-16 text-c2 font-semibold'>{post.excerpt}</p>
       </div>
   </div></Link>)}
      </div>
   </div>
  )
}

export default Card