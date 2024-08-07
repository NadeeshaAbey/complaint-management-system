import React from 'react'
import ForgotPwd from '../components/ForgotPwd'
import './ForgotPwdPage.css'

function ForgotPwdPage() {
  return (
    <div className='forgotpwdpage'>
      <span className='text'>
        Complaints Management System
      </span>
      <hr/>
      <div className='login'>
        <ForgotPwd/>
      </div>
    </div>
  )
}

export default ForgotPwdPage