import React from 'react'
import logo from '../assets/logo.png';
const Loader = () => {
  return (
    <div className=' w-full h-[100vh] flex items-center justify-center bg-[#112046] fixed top-0 bottom-0 right-0 left-0  z-50'> 
     <img src={logo} alt="" className='preloaderImg  w-36 md:w-52 ' />
    </div>
  )
}

export default Loader