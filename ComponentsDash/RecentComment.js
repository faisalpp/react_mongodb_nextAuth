import React from 'react'
import Image from 'next/image'

const RecentComment = ({comments}) => {
  return (
    <div className='bg-white ml-5 rounded-lg mt-5 h-fit w-60 px-2 py-2'>
      <h3 className='text-center font-bold'>Recent Comments</h3>
      
      {comments && comments.map((comment) => <div key={comment._id} className='flex  space-x-2 bg-gray-100 px-2 py-2 rounded-lg mb-2'>
        <div><Image className='rounded-lg' src={`${comment.photoUrl}`} height={30} width={30}/></div>
       <div className='flex flex-col'>  
        <h6 className='text-sm'>{comment.name} Has Commented</h6>
        <h6 className='text-sm truncate'>{comment.comment}...</h6>
       </div>
      </div>)}
      
      
    </div>
  )
}

export default RecentComment
