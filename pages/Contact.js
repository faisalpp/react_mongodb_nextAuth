import React from 'react'
import Image from 'next/image'
import {Formik,Form,Field} from 'formik'
import * as Yup from 'yup'
import {toast,ToastContainer} from 'react-toastify'

const About = () => {
  const initialValues = {email:'',message: ''}
  
  const validationSchema = Yup.object ({
    email: Yup.string().required('Required'),
    message: Yup.string().required('Required'),
   })

  const handleSubmit = (values) => {
    const data = fetch('http://localhost:3000/api/sendMsg',{
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
  <div className='grid lg:grid-cols-8 grid-cols-1 h-full w-fit rounded-lg ml-10 mr-10 col-start-1 col-end-2 mt-28'>
   <div className='col-start-1 col-end-4'><Image alt='contact' src={'/contact.png'} height={400} width={400}/></div>
   <div className='col-start-5 col-end-8'>
   <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
    <Form className='flex flex-col space-y-5 h-96 w-full shadow-lg p-10 rounded-xl'>
     <h3 className='text-c2 font-bold text-3xl text-center'>Message Me</h3>
     <Field name='email' className="rounded-xl border-2 border-c2 px-2 text-lg w-1/2" placeholder="Enter Email"/>
     <Field name='message'>{({field}) => <textarea className="rounded-xl border-2 border-c2 px-2 text-lg h-32 w-96" placeholder="Enter Email" value={field.value} onChange={field.onChange(field.name)}/>}</Field>
     <button type='submit' className='bg-c4 rounded-lg w-fit h-fit px-5 py-2 font-bold'>SEND</button>
    </Form>
   </Formik>
   </div> 
  </div>
  </>
  )
}

export default About