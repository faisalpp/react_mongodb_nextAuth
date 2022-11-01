import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {signIn, signOut, useSession} from 'next-auth/react'
import {useRouter} from 'next/router'

const Header = () => {
  const {data:session,status} = useSession();
  const [show,setShow] = useState(false);      
  const router =  useRouter();

  return (
     <div className='flex items-center bg-c1 shadow-md mb-2 p-3'>
      <div className='flex flex-col items-center w-52'>
       <h3 className='text-c3 text-2xl'>REACTIAN</h3>
       <h3 className='text-c3'>Design With Code</h3>
      </div>
      <div className='flex justify-end space-x-5 w-full font-semibold'>
       <div className='flex lg:space-x-10 sm:space-x-5 items-center'>
        <Link href={'/'}><h3 className='text-c4 hover:border-b-2 hover:border-c3 hover:text-c3 hover:py-0.5 cursor-pointer'>Home</h3></Link>
        <Link href={'/Categories/ReactJs'} ><h3 className='text-c4 active:text-c2 hover:border-b-2 hover:border-c3 hover:text-c3 hover:py-0.5 cursor-pointer'>ReactJs</h3></Link>
        <Link href={"/Categories/UiDesigns"} ><h3 className='text-c4 hover:border-b-2 hover:border-c3 hover:text-c3 hover:py-0.5 cursor-pointer'>UI Design&apos;s</h3></Link>
        <Link href={'/Contact'}><h3 className='text-c4 hover:border-b-2 hover:border-c3 hover:text-c3 hover:py-0.5 cursor-pointer'>Contact</h3></Link>
       </div>
      
      <div className='flex items-center space-x-2'>
         {status === 'unauthenticated' ? <Link href={'/api/auth/signin'}><a onClick={e => {e.preventDefault; signIn()}} className='bg-c3 hover:bg-c2 text-white rounded-lg px-3 py-2 font-semibold cursor-pointer' >Login</a></Link>:null}
      </div>
      
      <div>{status == 'authenticated' ? <button onClick={()=> setShow(true)} className='flex items-center hover:bg-c1 h-12 w-12 rounded-full cursor-pointer mr-2'><Image alt='user_img' src={`${session.user.image}`} className="rounded-full" height={40} width={40}/></button>:null}</div>
      {show && <div onMouseLeave={()=>setShow(false)} className="flex flex-col px-4 py-2 text-center text-sm h-52 w-60 bg-white rounded-lg border-2 border-c4 z-10 absolute mt-16">
        <div><Image className='rounded-full' src={session.user.image} height={60} width={60}/></div>
        <h3 className='text-c2 font-bold text-xl mb-2 '>{session.user.name}</h3>
        <h3 className='text-c3 font-bold text-xs mb-3 '>{session.user.email}</h3>
        <button onClick={()=> {signOut('github');router.redirect('/')}}><h3 className=" text-c4 text-lg hover:text-c3 cursor-pointer hover:underline">Sign Out</h3></button>
      </div>}
      
      </div>
      </div>
  )
}

export default Header