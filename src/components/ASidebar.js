import React from 'react'
import './ASidebar.css'
import user from '../assests/user.png';
import home from '../assests/home.png'
import query from '../assests/report.png'
import history from '../assests/folder.png'
//import pwd from '../assests/key.png'
import manage from '../assests/user-profile.png'
import { useNavigate } from "react-router-dom";

export default function ASidebar() {
  const navigate = useNavigate();
  return (
    <div className='all'>
        <div className="sidebar">
            <br/>
            <br/>
      <button className="sidebar-item">
      <img src={user} alt=""></img>
        My Profile</button>
      <br/>
      <br/>
      <br/>
      <button className="sidebar-item active" onClick={()=>navigate("/admin-dashboard")}>
      <img src={home} alt=""></img>
        Dashboard</button>
      <br/>
      <br/>
      <br/>
      <button className="sidebar-item">
      <img src={query} alt=""></img>
        Add Category</button>
      <br/>
      <br/>
      <br/>
      <button className="sidebar-item">
      <img src={history} alt=""></img>
         Manage <br></br>Complaints </button>
      <br/>
      <br/>
      <br/>
      <button className="sidebar-item">
      <img src={manage} alt=""></img>
         Manage<br/> Users</button>
      <br/>
      <br/>
      <br/>

     {/*<button className="sidebar-item">
      <img src={pwd} alt=""></img>
        Change <br/>Password</button> */}

    </div>
    </div>
  )
}

  

