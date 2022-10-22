import React from 'react'

const unauthenticated = () => {
  return (
    <div className='flex justify-center'>
        <div className='mt-10'><h2 className='font-bold text-3xl'>You'r not authenticated to view this page</h2></div>
    </div>
  )
}

export default unauthenticated