import React from 'react'
import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
  return (
    <>
      <div className=' w-full h-15 bg-gray-400'>
        <nav className='fixed top-0 left-0 w-full p-4  ' >
          <ul className='flex flex-row gap-x-4 float-end mr-20 '>
            <li>home</li>
            <li>login</li>
            <li>register</li>
          </ul>
        </nav>
      </div>
      <div className='flex justify-center h-screen'>
        <div className='bg-red-400  w-full' ><Outlet /> </div>
        <div className=" w-full bg-[url('/images/loginpageImg.jpg')] bg-cover bg-center"></div>
      </div>
    </>
  )
}

export default AuthLayout