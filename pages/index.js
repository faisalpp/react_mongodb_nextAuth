import Post from '../models/Post'
import mongoose from 'mongoose'
import Hero from '../components/Hero'
import Card from '../components/Card'

export default function Home({posts}) {
  return (
    <>
    <div className='bg-c1'>
     <Hero/>
     <Card posts={posts}/>
     </div> 
    </>
  )
}

export async function getServerSideProps(context){
  if (!mongoose.connections[0].readyState){
    await mongoose.connect(process.env.MONGO_URI)
  }
  let posts = await Post.find({"featured":'true'}) 
  return {
    props: {posts: JSON.parse(JSON.stringify(posts))}
  }
}