import React from 'react'
import DashboardLayout from '../../components/DashboardLayout'
import AllArticles from '../../dashboard_components/AllArticles'
import Post from '../../models/Post'
import {getSession} from 'next-auth/react'

const mongoose = require('mongoose')

const ViewPosts = ({articles}) => {

  return (
    <DashboardLayout>
    <div className='flex flex-col w-full h-screen bg-gray-200'>
    <h3 className='text-3xl font-bold text-center'>All Posts</h3>
    <div className='flex mt-5 w-3/4 self-center'>
     <AllArticles articles={articles}/>
    </div>
    </div>
    </DashboardLayout>
  )
}

export default ViewPosts
export async function getServerSideProps(context){
  const session = await getSession(context)
  if(!session){
    return {
      redirect: {
        destination: '/unauthenticated',
        permanent: false,
      }
    }
   }else if(session && session.user.email == 'muhammadfaisal522@gmail.com'){
    if (!mongoose.connections[0].readyState){
      await mongoose.connect(process.env.MONGO_URI)
    }
    const articles = await Post.find()
    return {
      props: {articles: JSON.parse(JSON.stringify(articles))}
    } 
   }
}