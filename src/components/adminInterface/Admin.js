import React from 'react'
import './admin.css'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'

const Admin = () => {
  return (
    <div className='admin-container'>

      <Header />

      <div className='Admin-Wrapper'>
        <div className='sidebar'><Sidebar/></div>
          
        <div>
        </div>
      </div>
    </div>
  )
}

export default Admin