import Post from '../models/Post'
import mongoose from 'mongoose'
import Hero from '../components/Hero'
import Card from '../components/Card'

export default function Home({react,ui}) {
  return (
    <>
    <div className='bg-c1'>
     <Hero/>
     <h3 className='ml-24 text-2xl font-bold mt-10 text-c3'>Learn ReactJs</h3>
     <div className='grid grid-cols-3 mt-10 mb-10'>
     {react ? react.map((rpost) => <Card key={rpost.slug} title={rpost.title} excerpt={rpost.excerpt} image={rpost.image} slug={rpost.slug} category={rpost.category} msg='Learn ReactJs'/>):<div className='flex justify-center text-red-500 font-bold'><h3>Oops! Somthing Went Wrong</h3></div>}
     </div>
     <h3 className='ml-24 text-2xl font-bold mt-10 text-c3'>New Design's</h3>
     <div className='grid grid-cols-3 mt-10 mb-10'>
     {ui ? ui.map((upost) => <Card key={upost.slug} title={upost.title} excerpt={upost.excerpt} image={upost.image} slug={upost.slug} category={upost.category}/>):<div className='flex justify-center text-red-500 font-bold'><h3>Oops! Somthing Went Wrong</h3></div>}
     </div>
     </div> 
    </>
  )
}

export async function getServerSideProps(context){
  if (!mongoose.connections[0].readyState){
    await mongoose.connect(process.env.MONGO_URI)
  }
  let react = await Post.find({"category":'ReactJs'}).sort({_id:1}).limit(3); 
  let ui = await Post.find({"category":'UiDesigns'}).sort({_id:1}).limit(3); 
  return {
    props: {react: JSON.parse(JSON.stringify(react)),ui: JSON.parse(JSON.stringify(ui))}
  }
}