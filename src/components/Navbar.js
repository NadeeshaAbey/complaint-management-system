import React, {useState} from "react";
import Logo from "../assests/logo.png";
import { NavLink, Link } from "react-router-dom";

function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);
    return(
        <div className="Navbar">
            <Link to="/" style={{textDecoration : 'none'}}>
                <div className="logo-text">
                    <div className="logo">
                        <img src={Logo} alt="Logo" />
                    </div>
                    <div className="text">
                        Complaint Management<br />System
                        
                    </div>
                </div>
            </Link>
            <div className="menu" onClick={() => {
                setMenuOpen(!menuOpen);
            }}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className="navlinks">
                <ul className={menuOpen ? "open" : ""}>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about-us">About Us</NavLink></li>
                    <li><NavLink to="/contact-us">Contact Us</NavLink></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;