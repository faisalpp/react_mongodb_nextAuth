import React from 'react'
import Card from '../../components/Card'
import mongoose from 'mongoose'
import Post from '../../models/Post'

const Categories = ({posts,slug}) => {
  return (
    <div className='bg-c1'>
     <div className='flex justify-center'>
      <h3 className='text-c3 font-bold text-2xl mt-5'>{slug}</h3>
     </div>
     <Card posts={posts}/>
    </div>
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