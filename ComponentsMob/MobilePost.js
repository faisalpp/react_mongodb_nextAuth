import React, { useState,useEffect } from 'react'
import {toast,ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Image from 'next/image'
import parser from 'html-react-parser'
import Moment from 'react-moment'
import {Formik,Form,Field} from 'formik'
import * as Yup from 'yup'
import {useSession} from 'next-auth/react'
import {AiFillLike} from 'react-icons/ai'
import {IoIosArrowForward,IoMdSend} from 'react-icons/io'
import { isMobile } from 'react-device-detect'

const MobilePost = ({post, comments}) => {
  const {data:session,status} = useSession()
  const content = parser(post.content)
  const initialValues = {comment:''}
  const [_isMobile,setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(isMobile)
  }, [setIsMobile,isMobile])
  

  const commentBinder = (name,email,image,comment,id) => {
   const value = {name:name,email:email,image:image,comment:comment,postId:id}
   return value
  }

  const validationSchema = Yup.object ({
    comment: Yup.string().required('Required'),
   })
  
   const handleSubmit = async (values) => {
    const value = commentBinder(session.user.name,session.user.email,session.user.image,values.comment,post._id);
    const data = await fetch(`${process.env.WEB_URL}`+'api/addComments',{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
      },
      body: JSON.stringify(value)
    })
    const response = await data.json();
    if(response.success){
      toast.success('Comment Recieved!',{
        position: 'top-left',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })      
    }else {
      toast.success('Something Went Wrong!',{
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
    <div className='flex flex-col ml-2 w-fit'>
   <div className='flex mt-2 mb-2 border-2 items-center border-gray-300 w-fit rounded-full px-2 text-xs'><h3 className='text-c3'>Home</h3><IoIosArrowForward className='text-c2'/><h3 className='text-c3'>PostDetails</h3><IoIosArrowForward className='text-c2'/><h3 className='text-c3'>{post.title}</h3></div>
     <div className='flex items-center space-x-2 text-gray-500 mb-5 text-sm mt-2'><Moment format="DD MMMM YYYY">{post.createdAt}</Moment><div className='bg-red-500 w-3 h-3 rounded-full'></div><h3>{post.category}</h3></div>
       <div className='font-bold text-xl mb-5'>{post.title}</div>
       <div className='flex w-full h-fit justify-center'><Image className='rounded-2xl' src={post.image} height={200} width={250}/></div>
       <div className='text-md w-fit first-letter:text-5xl border-b-2 border-gray-300 py-10 ml-2 mr-2'>{content}</div>
    
    <div id="comments" className="w-full mt-12">
     <h3 className='text-2xl font-bold mb-5'>{comments.length} Comment&apos;s</h3>
      
     {session ? <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
      <Form className='border-2 border-gray-300 rounded-lg px-2 py-2 w-fit h-fit'>
      <div className='flex space-x-2 w-full'>
        <Field name="comment" className='w-full px-2' placeholder="Say Something..."/>
        {!_isMobile ? <button type="submit" className='flex items-center bg-c4 w-fit h-fit rounded-lg text-white px-2 py-px'>Send</button>
        :<div className='flex items-center bg-c4 w-fit h-fit rounded-lg text-white px-2 py-px'><button type="submit" >Send</button><IoMdSend/></div>}
      </div>
      </Form>
     </Formik>:null}

      {comments.map((comment)=> <div key={comment._id} className='mt-5 mb-8 border-b-2 border-gray-200 '>
        <div className='flex items-center'><Image alt='user_img' className='rounded-full' src={`${comment.image}`} height={40} width={40} />
        <h3 className='ml-3 text-c2 overflow-hidden'>{comment.name}</h3>
        </div>
         <p className='ml-12 text-gray-600'>{comment.comment}</p>
         <div className='flex items-center ml-12 mt-2 mb-2 space-x-5'> 
         <div className='flex border-2 rounded-xl px-2 bg-gray-100'><AiFillLike className='text-c4 text-sm hover:text-c2 cursor-pointer'/><h3 className='text-xs'>13k</h3></div>
         <div className='flex border-2 rounded-xl px-2 bg-gray-100'><Moment className='text-xs' fromNow>{comment.createdAt}</Moment></div>
         </div>
        </div>)}

     </div>
    </div>
    </>
  )
}

export default MobilePost

