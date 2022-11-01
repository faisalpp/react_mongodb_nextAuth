import React, { useState,useEffect } from 'react'
import DeskPost from '../../ComponentsDesk/Post'
import MobilePost from '../../ComponentsMob/MobilePost'
import { isMobile } from 'react-device-detect'
import Post from '../../models/Post'
import Comment from '../../models/Comment'
import mongoose from 'mongoose'


const PostDetails = ({post,comments}) => {
  const [_isMobile,setIsMobile] = useState();

  useEffect(() => {
    setIsMobile(isMobile);
  }, [setIsMobile])
  
  
  return (
    <>
    {!_isMobile?<DeskPost post={post} comments={comments}/>:<MobilePost post={post} comments={comments}/>}
    </>
  )
}

export default PostDetails

export async function getServerSideProps(context){
  if (!mongoose.connections[0].readyState){
    await mongoose.connect(process.env.MONGO_URI)
  }
  let post = await Post.findOne({"slug": context.params.slug})
  let postId = post._id
  let comments = await Comment.find({"postId": postId})
  return {
    props: {post: JSON.parse(JSON.stringify(post)), comments: JSON.parse(JSON.stringify(comments))}
  }
}