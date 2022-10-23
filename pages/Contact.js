import React from 'react'
import Image from 'next/image'
import {Formik,Form,Field} from 'formik'


const About = () => {
  const initialValues = {title:'',content: '',excerpt:''}
   
  return (
  <div className='grid lg:grid-cols-8 grid-cols-1 h-full w-fit rounded-lg ml-10 mr-10 col-start-1 col-end-2 mt-28'>
   <div className='col-start-1 col-end-4'><Image src={'/contact.png'} height={400} width={400}/></div>
   <div className='col-start-5 col-end-8'>
   <Formik>
    <Form className='flex flex-col space-y-5 h-96 w-full shadow-lg p-10 rounded-xl'>
     <h3 className='text-c2 font-bold text-3xl text-center'>Message Me</h3>
     <Field className="rounded-xl border-2 border-c2 px-2 text-lg w-1/2" placeholder="Enter Email"/>
     <textarea className="rounded-xl border-2 border-c2 px-2 text-lg h-32 w-96" placeholder="Enter Email"/>
     <button className='bg-c4 rounded-lg w-fit h-fit px-5 py-2 font-bold'>SEND</button>
    </Form>
   </Formik>
   </div> 
  </div>
  )
}

export default About