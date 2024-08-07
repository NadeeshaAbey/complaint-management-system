import React from "react";
import Background from "../assests/background.png";
import "./Homepage.css"
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


function Homepage() {

  const navigate = useNavigate();

  return (
    <div className="Homepage">

      <Navbar/>
      <div className="homepage-content">
        <img src={Background} alt="Background" />
        <div className="text">
          <span>Welcome to</span>
          <h1>Complaint Management System</h1>
        </div>
        <div className="buttons">
          <button onClick={()=>navigate("/admin-login-page")}>Admin</button>
          <button onClick={()=>navigate("/user-login-page")}>User</button>
        </div>
      </div>
      <Footer/>
     
    </div>
  )
}

export default Homepage;
