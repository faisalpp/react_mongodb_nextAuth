import React, { useState,useRef,useEffect } from 'react'
import {signIn, signOut, useSession} from 'next-auth/react'
import {AiOutlineClose, AiOutlineMenu, AiFillHome, AiFillPhone, AiOutlineLogin} from 'react-icons/ai'
import { FaReact } from 'react-icons/fa'
import Link from 'next/link'
import Image from 'next/image'

const MobileHeader = () => {
  const {data:session,status} = useSession();
  const [show,setShow] = useState(false);      

  return (
    <>
    <div className='flex items-center w-full shadow-md px-2 py-2 mt-2 rounded-md'>
      <h3 className='text-md font-bold text-c2'>REACTIAN</h3>
      {!show ? <div className='flex w-full justify-end text-xl mr-px text-c2'><AiOutlineMenu onClick={()=> setShow(true)}/></div>
      :<div onClick={()=> setShow(false)} className='flex w-full justify-end text-xl text-c2'><AiOutlineClose onClick={()=> setShow(true)}/></div>}
    </div>
    {show ? <div className='flex justify-end'>
     <div className='absolute z-10 bg-c1 shadow-xl text-c4 py-4 rounded-b-xl font-bold text-lg w-44'>
      {session ? 
         <div className='flex flex-col'>
         <div><Image className='rounded-full' src={session.user.image} height={50} width={50}/></div>
         <h3 className='text-sm'>{session.user.name}</h3>
         <h3 className='text-xs'>{session.user.email}</h3>
         <button onClick={()=> signOut()}>SignOut</button>
         </div>
       : 
        <div>
          <div className='flex flex-row items-center justify-center'>
           <div className='flex flex-col space-y-2 items-center text-xl mr-2'>
            <AiFillHome/>
            <FaReact/>
            <h3 className='font-bold'>D</h3>
            <AiFillPhone/>
            <AiOutlineLogin/>
           </div>
           <div className='flex flex-col text-xl items-center space-y-px'>
            <Link href={'/'}><h3>Home</h3></Link>
            <Link href={'/Categories/ReactJs'}><h3>ReactJs</h3></Link>
            <Link href={'/Categories/UiDesigns'}><h3>UiDesigns</h3></Link>
            <Link href={'/Contact'} ><h3>Contact</h3></Link>
            <button onClick={(e) => {e.preventDefault();signIn()}}>Login</button>
           </div>
          </div>
        </div>  }
    </div>
    </div>:null}
    </>
  )
}

export default MobileHeader