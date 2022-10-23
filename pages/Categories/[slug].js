import React from 'react'
import Card from '../../components/Card'
import mongoose from 'mongoose'
import Post from '../../models/Post'

const Categories = ({posts}) => {
  return (
    <div className='grid grid-cols-3 mt-10 mb-10'>
     {posts.map((post,index) => <Card key={post.title} title={post.title} excerpt={post.excerpt} category={post.category} image={post.image} slug={post.slug}/>)}
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