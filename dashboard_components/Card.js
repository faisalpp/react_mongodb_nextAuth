import React from 'react'

const Card = ({icon,numbers,title,bg}) => {
  return (
    <div className='flex items-center px-4 py-2 space-x-4 bg-white h-20 w-fit rounded-lg'>
    <div className={`px-2 py-2 rounded-lg bg-${bg}-200`}>{icon}</div>
     <div className='flex flex-col ml-2'>
      <h3 className='text-xl font-bold'>{numbers}</h3>
      <h3 className='text-gray-400 text-sm'>{title}</h3>
     </div>  
   </div>
  )
}

export default Card 