import React, { useState ,useEffect, useContext} from 'react'
import {toast,ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Image from 'next/image'
import mongoose from 'mongoose'
import Post from '../../models/Post'
import Comment  from '../../models/Comment'
import parser from 'html-react-parser'
import {Formik,Form,Field} from 'formik'
const jwt = require('jsonwebtoken')
import { useSession } from 'next-auth/react'
import * as Yup from 'yup'
import UserContext from '../../context/UserContext'

const PostDetails = ({post, comments}) => {
  const content = parser(post.content)
  const a = useContext(UserContext)
  const [user,setUser] = useState({name:'',email:'',comment:'',photoUrl:'',postId:''})
  const [isUser,setIsUser] = useState(false)
  const initialValues = {comment:''}

  const validationSchema = Yup.object ({
    comment: Yup.string().required('Required'),
   })

   const handleSubmit = async (values) => {
     const {comment} = values
     const getToken = localStorage.getItem('token')
     if(getToken){
      const {name,email,image} = jwt.verify(getToken,'jwtsecret')
      setIsUser(true)
      setUser({...user,name:name,email:email,comment:comment,photoUrl:image,postId:post._id})
     }else{
     const {data:session,status} = useSession();
     setUser({name:session.name,email:session.email,comment:comment,photoUrl:session.image,postId:post._id})
     }
     let res = await fetch('http://localhost:3000/api/addComments/',{
    method: 'POST', 
    headers:{
      'Content-Type':'application/json',
      'Accept':'application/json'
    },
    body: JSON.stringify(user)
    })
   const response = await res.json()
   if(response.success){
    toast.success('Comment Posted!',{
      position: 'top-left',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })
   }else {
    toast.error('Something Went Wrong!',{
      position: 'top-left',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })
   }
    }  
   
  return (
   <>
   <ToastContainer position='top-left' autoClose={2000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover/>
    <div>
    <div className='flex flex-col rounded-xl ml-20 mr-20 mt-10 mb-10'>
        <div className='flex justify-center'><Image src={post.image} height={500} width={800}/></div>
     <div className='rounded-b-xl'>
        <h3 className='flex flex-col text-center mt-5 font-bold text-4xl'>{post.title}</h3>
        <div className='ml-10 mt-10'>
         {content}
        </div>
     </div>
    </div>
    <div className="rounded-xl ml-20 mb-10 p-5 w-fit rounded-t-lg">
     <h3 className='text-xl mb-5 ml-2 font-bold'>{comments.length} Comment's</h3>
     
     {a.state.isToken && <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
      <Form className='border-2 border-c2 rounded-lg px-2 py-2 mb-2 w-full'>
       <Field name="comment" className='w-full border-2 border-b-c2 border-l-transparent border-r-transparent border-t-transparent mb-2' placeholder="Say Something..."/>
       <div className='flex justify-end'><button type="submit" className='bg-c4 hover:bg-c3 w-16 h-8 rounded-lg text-white'>Send</button></div>
      </Form>
     </Formik>}

        {comments.map((comment)=> <div key={comment._id} className='mb-8 border-b-2 border-gray-200'>
        <div className='flex items-center'><Image className='rounded-full' src={`${comment.photoUrl}`} height={30} width={30} />
        <h3 className='ml-3 text-c1'>{comment.name}</h3>
        <h3 className='ml-3 text-c1'>{comment.createdAt}</h3>
        </div>
        <p className='ml-5 mt-3 mb-5 text-gray-500'>{comment.comment}</p>
        </div>)}

     </div>
    </div>
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