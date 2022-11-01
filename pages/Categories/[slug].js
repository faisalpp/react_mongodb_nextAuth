import React from 'react'
import Card from '../../ComponentsDesk/Card'
import mongoose from 'mongoose'
import Post from '../../models/Post'
import { IoIosArrowForward } from 'react-icons/io'

const Categories = ({posts,slug}) => {
  return (
    <>
    <div className='flex items-center mt-2 ml-2 border-2 border-gray-300 w-fit rounded-full px-2'><h3 className='text-c3'>Home</h3><IoIosArrowForward className='text-c2'/><h3 className='text-c3'>{slug}</h3></div>
    <div className='grid lg:grid-cols-4 sm:grid-cols-1 mt-10 mb-10'>
     {posts.map((post) => <Card key={post._id} title={post.title} excerpt={post.excerpt} category={post.category} image={post.image} slug={post.slug}/>)}
    </div>
    </>
  )
}

export default Categories

export async function getServerSideProps(context){
   if (!mongoose.connections[0].readyState){
      await mongoose.connect(process.env.MONGO_URI)
    }
    let slug= context.params.slug;
    let posts = await Post.find({"category": context.params.slug})
    return {
      props: {posts: JSON.parse(JSON.stringify(posts)),slug: slug}
    }
  }