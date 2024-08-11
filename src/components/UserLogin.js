import React from 'react'
import './UserLogin.css'
import Button from './Button';
import { useNavigate } from 'react-router-dom';


function UserLogin() {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/forgot-pwd");
  };

  return (
    <div className='userlogin'>
      
      <span className='text1'>User Login</span>
      
      <form action='' method='POST'>
          <label className='text2'>Email</label><br/>
          <input type='email' className='email' placeholder='Enter email' required/><br/>

          <label className='text3'>Password</label><br/>
          <input type='password' className='password' placeholder='Enter password' required/><br/>

          <div className='remember'>
            <input type='checkbox' className='rememberme'/>
            <span className='text4'>Remember Me</span>
          </div>

          <Button to="/user-dashboard"/>

          <span className='text5' onClick={handleClick}>Forgot Password ?</span>
          
        </form>
     
    </div>
  )
}

export default UserLogin