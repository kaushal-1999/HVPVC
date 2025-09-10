import React from 'react'
import '../components/adminInterface/admin.css'
import Header from '../components/adminInterface/Header/Header';
import Sidebar from '../components/adminInterface/sidebar/Sidebar';
import { Outlet } from 'react-router'

const AdminBase = () => {
    return (
        <div className='admin-container'>
            <Header />
            <div className='Admin-Wrapper'>
                <Sidebar />
                <div className='AdminContentArea'>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default AdminBase