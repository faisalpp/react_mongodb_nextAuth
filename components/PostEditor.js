import React,{useState,useEffect} from 'react';
import {toast,ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import 'react-quill/dist/quill.snow.css'
import dynamic from 'next/dynamic';
const ReactQuill = dynamic(import('react-quill'), { ssr: false })
import * as Yup from 'yup'
import {Formik, Form, Field} from 'formik'
import FileBase64 from 'react-file-base64';
const jwt = require('jsonwebtoken')

const PostEditor = () => {
  const initialValues = {title:'',content: '',excerpt:''}
  
  const [category,setCategory] = useState('')
  const [isFeatured,setIsFeatured] = useState('')
  const [image,setImage] = useState('')
  
  const validationSchema = Yup.object ({
   title: Yup.string().required('Required'),
   excerpt: Yup.string().required('Required'),
   content: Yup.string().required('Required'),
  })

  const handleSubmit = async (values) => {
    const {title,content,excerpt} = values
    let getSlug = '';
    getSlug = title.toLowerCase().replaceAll(' ','_')
    const data = {title:title,excerpt:excerpt,content:content,image:image,category:category,isFeatured:isFeatured}
    let res = await fetch('http://localhost:3000/api/addPosts/',{
    method: 'POST', 
    headers:{
      'Content-Type':'application/json',
      'Accept':'application/json'
    },
    body: JSON.stringify(data)
    })
   const response = await res.json()
   if(response.success){
    toast.success('Post Created!',{
      position: 'top-left',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })
   }else {
    toast.error('All Fields Required!',{
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
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
     <Form className='flex flex-col space-y-5 items-center mt-10'>
      <div className='flex space-x-5 justify-center'>
      <Field className='border-2 border-blue-400 rounded-lg w-96 px-2' placeholder='Enter Post Title' name="title"/>
      <Field className='border-2 border-blue-400 rounded-lg w-96 px-2' placeholder='Enter Post Excerpt' name="excerpt"/>
      </div>
      <div className='flex space-x-5'>
       <FileBase64 multiple={false} onChange={(e)=>setImage(e.target.value)} onDone={({base64})=> setImage(base64)}/>
       <select onChange={(e)=>setCategory(e.target.value)}>
        <option>Category</option>
        <option>ReactJs</option>
        <option>Blog</option>
        <option>Libraries</option>
       </select>
       <select onChange={(e)=>setIsFeatured(e.target.value)}>
        <option>isFeatured</option>
        <option>True</option>
        <option>False</option>
       </select>
       </div>
     <Field name="content">
       {({ field }) => <ReactQuill className='w-3/4 bg-white border-2 border-blue-400' theme='snow' value={field.value} onChange={field.onChange(field.name)}/>}
     </Field>
     <button className='bg-blue-200 px-2 py-2 rounded-lg w-fit h-fit' type='submit'>Save Article</button>
    </Form>
    </Formik>
    </>
  )
}

export default PostEditor