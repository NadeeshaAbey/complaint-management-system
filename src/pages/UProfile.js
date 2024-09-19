import React from 'react'
import './UProfile.css';
import USidebar from '../components/USidebar'
import Propic from '../assests/profilepic.png'
import Key from '../assests/key.png'
import { useState } from 'react';


function UProfile() {

  const [userData, setUserData] = useState({
    profilePicture: '',
    userName: '',
    fullName: '',
    email: '',
    contactNo: '',
    faculty: ''
  });

  return (
    <div className='profile'>
        <USidebar/>
      <div className="pro">
        <div className='line2'></div>  

        <div className="profile-details">
        <h2>Profile Details</h2>
        <div className="profile-picture">
          <img 
            src={userData.profilePicture  || Propic }
            alt="User Profile" 
            className="profile-img"
          />
          <p><b>{userData.userName || 'User Name'}</b></p>
        </div>
        <div className="details">
          <p>Full Name: {userData.fullName}</p>
          <p>Email: {userData.email}</p>
          <p>Contact No: {userData.contactNo}</p>
          <p>Faculty: {userData.faculty}</p>
        </div>
        <button className="change-password-button">
        <img 
            src={Key}
            alt="Key" 
            className="key"
          /> change password
        </button>
        </div> 
      </div>     
    </div>
  )
}

export default UProfile