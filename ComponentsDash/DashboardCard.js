import React from 'react'

const DashboardCard = ({title,number,icon}) => {
  return (
    <div className='bg-gradient-to-r from-c2 to-c3 flex flex-col items-center ml-10 space-y-2 rounded-xl h-28 w-60 px-5 py-2 cursor-pointer'>
     <h3 className='text-c1 font-bold text-3xl'>{title}</h3>
      <div className='flex items-center space-x-2'>
       <span className='text-c1 text-3xl'>{number}</span>
       {icon}
      </div>
    </div>
  )
}

export default DashboardCard