import React from 'react'
import DashboardLayout from '../../components/DashboardLayout'
import PostEditor from '../../components/PostEditor'
import {getSession} from 'next-auth/react'

const CreatePost = ({session}) => {
  

  return (
    <DashboardLayout>
    <div className='bg-gray-100 w-full'>
    <div className='flex flex-row justify-center'><h3 className='font-bold text-3xl'>Create Post</h3></div>
      <PostEditor session={session}/>
    </div>
    </DashboardLayout>
  )
}

export default CreatePost

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
     return {
      props: {session: session}
     }
   }
}