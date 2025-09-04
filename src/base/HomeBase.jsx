import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../components/userInterfface/navbar/Navbar'
// import Footer from '../components/userInterfface/footer/footer'

const HomeBase = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      {/* <Footer /> */}
    </>
  )
}

export default HomeBase