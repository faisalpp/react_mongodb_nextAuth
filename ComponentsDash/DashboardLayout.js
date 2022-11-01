import React from 'react'
import DashboardMenu from './DashboardMenu'

const DashboardLayout = ({children}) => {
  return (
    <>
    <div className='flex flex-row w-full h-full'>
    <DashboardMenu/>
    {children}
    </div>
    </>
  )
}

export default DashboardLayout