import React from 'react'

const SocialCard = ({name,icon,numbers,bgColor}) => {
  return (
    <div className='flex items-center space-x-5 mt-4'>
      <div className={`h-fit w-fit bg-${bgColor}-200 px-2 py-2 rounded-lg`}>{icon}</div>
      <h3 className='text-gray-400'>{name}</h3>
      <h3 className='font-bold'>{numbers}</h3>
    </div>
  )
}

export default SocialCard