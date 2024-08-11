import React from 'react'
import './AdminLogin.css'
import Button from './Button';

function AdminLogin() {
  return (
    <div className='adminlogin'>
      
      
      
        <span className='text1'>Admin Login</span>
      
        
      
        <form action='' method='POST'>
          <label className='text2'>Email</label><br/>
          <input type='text' className='email' placeholder='Enter email' required/><br/>

          <label className='text3'>Password</label><br/>
          <input type='password' className='password' placeholder='Enter password' required/><br/>

          <div className='remember'>
            <input type='checkbox' className='rememberme'/>
            <span className='text4'>Remember Me</span>
          </div>

          <Button/>

          <span className='text5'>Forgot Password ?</span>
          
        </form>
     
    </div>
  )
}

export default AdminLogin