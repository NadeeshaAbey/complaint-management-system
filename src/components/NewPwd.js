import React from 'react'
import ChangeBtn from './ChangeBtn'
import './NewPwd.css'


function NewPwd() {
  return (
    <div className='newpwd'>
      
      
      
        <span className='text1'>New Password</span>
      
        
      
        <form action='' method='POST'>
          <label className='text2'>New Password</label><br/>
          <input type='password' className='newpassword' placeholder='Enter new password' required/><br/>

          <label className='text3'>Repeat Password</label><br/>
          <input type='password' className='repeatpassword' placeholder='Confirm the password' required/><br/>

          <ChangeBtn/>

          
        </form>
     
    </div>
  )
}

export default NewPwd