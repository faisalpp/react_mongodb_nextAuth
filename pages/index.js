import Post from '../models/Post'
import mongoose from 'mongoose'
import Hero from '../ComponentsDesk/Hero'
import Card from '../ComponentsDesk/Card'
import React,{useState,useEffect} from 'react'
import MobileHero from '../ComponentsMob/MobileHero'
import { isMobile } from 'react-device-detect'

export default function Home({react,ui}) {
  const [_isMobile,setMobile] = useState(false)
  
  useEffect(() => {
    setMobile(isMobile)
  }, [setMobile,isMobile])
  
  return (
     <div className='w-full'>
     {_isMobile ? <MobileHero/> : <Hero/>}
     <h3 className='ml-24 text-2xl font-bold mt-10 text-c3'>Learn ReactJs</h3>
     <div className='grid lg:grid-cols-4 sm:grid-cols-1 mt-10 mb-10'>
     {react ? react.map((rpost) => <Card key={rpost._id} title={rpost.title} excerpt={rpost.excerpt} image={rpost.image} slug={rpost.slug} category={rpost.category} msg='Learn ReactJs'/>):<div className='flex justify-center text-red-500 font-bold'><h3>Oops! Somthing Went Wrong</h3></div>}
     </div>
     <h3 className='ml-24 text-2xl font-bold mt-10 text-c3'>New Design&apos;s</h3>
     <div className='grid lg:grid-cols-4 sm:grid-cols-1 mt-10 mb-10'>
     {ui ? ui.map((upost) => <Card key={upost._id} title={upost.title} excerpt={upost.excerpt} image={upost.image} slug={upost.slug} category={upost.category}/>):<div className='flex justify-center text-red-500 font-bold'><h3>Oops! Somthing Went Wrong</h3></div>}
     </div>
    </div> 
  )
}

export async function getServerSideProps(context){
  if (!mongoose.connections[0].readyState){
    await mongoose.connect(process.env.MONGO_URI)
  }
  let react = await Post.find({"category":'ReactJs'}).sort({_id:1}).limit(4); 
  let ui = await Post.find({"category":'UiDesigns'}).sort({_id:1}).limit(4); 
  return {
    props: {react: JSON.parse(JSON.stringify(react)),ui: JSON.parse(JSON.stringify(ui))}
  }
}