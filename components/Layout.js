import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Layout = ({children}) => {
  return (
    <div className='min-h-screen'>
        <Header/>
        {children}
        <Footer/>
    </div>
  )
}

export default Layout