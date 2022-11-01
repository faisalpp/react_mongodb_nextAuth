import React from 'react'
import Image from 'next/image'
import {Formik,Form,Field} from 'formik'
import * as Yup from 'yup'
import {toast,ToastContainer} from 'react-toastify'
import { IoIosArrowForward } from 'react-icons/io'

const MobileContact = () => {
  const initialValues = {email:'',message: ''}
  
  const validationSchema = Yup.object ({
    email: Yup.string().required('Required'),
    message: Yup.string().required('Required'),
   })

  const handleSubmit = (values) => {
    const data = fetch(`${process.env.WEB_URL}`+'/api/sendMsg',{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
      },
      body: JSON.stringify(values)
    })
    const response = data.json()
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
  <div className='w-full flex justify-center mt-5'><Image src={'/contact.png'} height={150} width={150}/></div>
  <div className='grid lg:grid-cols-8 grid-cols-1 w-10 lg:h-full lg:w-fit lg:rounded-lg lg:ml-10 lg:mr-10 lg:col-start-1 lg:col-end-2 lg:mt-28'>
   <div className='col-start-5 col-end-8'>
   <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
    <Form className='flex flex-col space-y-5 h-96 w-full lg:shadow-lg p-10 lg:rounded-xl'>
     <h3 className='text-c2 font-bold text-3xl text-center'>Message Me</h3>
     <Field name='email' className="rounded-xl border-2 border-c2 px-2 text-lg lg:w-1/2 sm:w-fit" placeholder="Enter Email"/>
     <Field name='message'>{({field}) => <textarea className="rounded-xl border-2 border-c2 px-2 text-lg h-32 lg:w-96" placeholder="Enter Message" value={field.value} onChange={field.onChange(field.name)}/>}</Field>
     <button type='submit' className='bg-c4 rounded-lg w-fit h-fit px-5 py-2 font-bold'>SEND</button>
    </Form>
   </Formik>
   </div> 
  </div>
  </>
  )
}

export default MobileContact