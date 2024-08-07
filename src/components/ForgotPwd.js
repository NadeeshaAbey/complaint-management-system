import React from 'react'
import ContinueBtn from './ContinueBtn'
import './ForgotPwd.css'

function ForgotPwd() {
  return (
    <div className='forgotpwd'>
      
      
      
        <span className='text1'>Forgot Password</span>
      
        
      
        <form action='' method='POST'>
          <label className='text2'>Email</label><br/>
          <input type='text' className='email' placeholder='Enter your email' required/><br/>

          
          <ContinueBtn/>
          
          
        </form>
        
    </div>
  )
}

export default ForgotPwd