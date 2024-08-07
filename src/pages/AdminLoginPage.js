import React from 'react'
import AdminLogin from '../components/AdminLogin'
import './AdminLoginPage.css'

function AdminLoginPage() {
  return (
    <div className='adminloginpage'>
      <span className='text'>
        Complaints Management System
      </span>
      <hr/>
      <div className='login'>
        <AdminLogin/>
      </div>
    </div>
  )
}

export default AdminLoginPage