import React from 'react'
import DashboardLayout from '../../ComponentsDash/DashboardLayout'
import SearchBar from '../../ComponentsDash/SearchBar'
import Chart from '../../ComponentsDash/Chart'
import RecentArticle from '../../ComponentsDash/RecentArticle'
import RecentComment from '../../ComponentsDash/RecentComment'
import Stats from '../../ComponentsDash/Stats'
import SocialCards from '../../ComponentsDash/SocialCards'
import PiChart from '../../ComponentsDash/PiChart'
import styles from '../../styles/Dashboard.module.css'
import Post from '../../models/Post'
import Comment from '../../models/Comment'
import {getSession} from 'next-auth/react'
const mongoose = require('mongoose')

const Home = ({articles,comments}) => {
  return (
  <DashboardLayout>    
  <div className={styles.wrapper} > 
   <div className={styles.searchbar}><SearchBar/></div>
   <div className={styles.stats}><Stats/></div>
   <div className={styles.chart}><Chart/></div>
   <div className={styles.social}><SocialCards/></div>
   <div className={styles.comment}><RecentComment className='row-start-5' comments={comments}/></div>
   <div className={styles.article}><h3 className='font-bold text-2xl ml-2 mb-2'>Recent Articles</h3><RecentArticle className='row-start-6' articles={articles}/></div>
   <div className={styles.pie}><PiChart/></div>
  </div>
  </DashboardLayout>
  )
}

export default Home

export async function getServerSideProps(context){
  const session = await getSession(context);
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
    const articles = await Post.find().sort({_id:1}).limit(4); 
    const comments = await Comment.find().sort({_id:1}).limit(4);
    return {
      props: {articles: JSON.parse(JSON.stringify(articles)),comments:JSON.parse(JSON.stringify(comments))}
    }
  }
}