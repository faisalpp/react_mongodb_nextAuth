import React,{useState, useEffect} from 'react'
import MobileContact from '../ComponentsMob/MobileContact'
import DeskContact from '../ComponentsDesk/Contact'
import { isMobile } from 'react-device-detect'

const Contact = () => {
  
  const [_isMobile,setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(isMobile)
  }, [isMobile,setIsMobile])
  
  
  return (
    <>
    {_isMobile ? <MobileContact/>:<DeskContact/>}
    </>
  )
}

export default Contact