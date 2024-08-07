import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

function Footer() {
    return (
        <div className="Footer">
            <div className="address content">
                <FaLocationDot className="location-icon" size={20}/>
                <span className="text">
                    student Affairs Branch<br/>
                    University of Ruhuna,<br/>
                    Matara,<br/>
                    Sri Lanka
                </span>
            </div>
            <div className="phone content">
                <BsFillTelephoneFill className="phone-icon" size={18} />
                <span className="text">
                    1234567890
                </span>
            </div>
            <div className="email content">
                <IoMdMail className="email-icon" size={22} />
                <span className="text">
                    ...ruh.ac.lk
                </span>
            </div>
        </div>
    );
}

export default Footer;