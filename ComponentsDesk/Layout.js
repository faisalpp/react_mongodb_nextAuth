import React, { useState,useEffect } from 'react'
import Header from '../ComponentsDesk/Header'
import Footer from '../ComponentsDesk/Footer'
import MobileHeader from '../ComponentsMob/MobileHeader'
import MobileFooter from '../ComponentsMob/MobileFooter'
import { isMobile } from 'react-device-detect'

const Layout = ({children}) => {
  const [_isMobile,setMobile] = useState(false)
  
  useEffect(() => {
    setMobile(isMobile)
  }, [setMobile,isMobile])
  

  return (
    <> 
      {_isMobile ? <MobileHeader/>:<Header/>}
      <div style={{"min-height":"100vh"}}>{children}</div>
      {_isMobile ? <MobileFooter/>:<Footer/>}
    </>
  )
}

export default Layout
