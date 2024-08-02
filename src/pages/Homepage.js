import React from "react";
import Background from "../assests/background.png";
import "./Homepage.css"


function Homepage() {
  return (
    <div className="Homepage">
     
      <div className="homepage-content">
        <img src={Background} alt="Background" />
        <div className="text">
          <span>Welcome to</span>
          <h1>Complaint Management System</h1>
        </div>
        <div className="buttons">
          <button>Admin</button>
          <button>User</button>
        </div>
      </div>
      
     
    </div>
  );
}

export default Homepage;
