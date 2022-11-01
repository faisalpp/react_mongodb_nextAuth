import React from 'react'
import {Formik,Form,Field} from 'formik'
import * as Yup from 'yup'
import {toast,ToastContainer} from 'react-toastify'
import { IoIosArrowForward } from 'react-icons/io'
import 'react-toastify/dist/ReactToastify.css'

const Contact = () => {
    const initialValues = {name:'',email:'',message: ''}

    const validationSchema = Yup.object ({
      name: Yup.string().required('Required'),
      email: Yup.string().required('Required'),
      message: Yup.string().required('Required'),
     })
     
    const handleSubmit = async (values) => {
      console.log(WEB_URL)
      const data = await fetch(`${process.env.WEB_URL}/api/sendMsg`,{
        method:'POST',
        headers:{
          'Content-Type':'application/json',
        },
        body: JSON.stringify(values)
      })
      const response = await data.json()
      if(response.success){
        toast.success('Message Recieved!',{
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
    <div className='flex items-center mt-2 ml-2 border-2 border-gray-300 w-fit rounded-full px-2'><h3 className='text-c3'>Home</h3><IoIosArrowForward className='text-c2'/><h3 className='text-c3'>Contact</h3></div>
    <div className='flex justify-center w-full h-screen items-center rounded-md'>      
      <div className='flex space-y-10 bg-c1 shadow-2xl rounded-xl p-10 flex-col w-fit h-fit'>
      <h3 className='text-c2 font-bold text-3xl text-center'>Message Me</h3>
      <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
      <Form className='flex flex-col'>
        <Field name="name" className='w-60 h-10 px-2 rounded-lg mb-10 border-2  border-gray-300' placeholder="Name"/>
        <Field name="email" className='w-60 h-10 px-2 rounded-lg mb-10 border-2  border-gray-300' placeholder="Email"/>
        <Field name="message">
          {({field}) => <textarea value={field.value} onChange={field.onChange(field.name) } className='w-60 px-2 rounded-lg border-2 bordewr-gray-300 h-32' placeholder="Enter Your Message"/>}
        </Field>
        <button type='submit' className='bg-c2 text-c1 font-semibold mt-10 rounded-xl p-2 text-xl'>Send Message</button>
      </Form>
     </Formik>
     </div>
    
    </div>
    </>
    )
  }

export default Contact