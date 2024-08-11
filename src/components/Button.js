import React from 'react'
import './Button.css'
import { useNavigate } from 'react-router-dom'



function Button({to}) {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to);
  };

  return (
    <div>
        <button className='button' onClick={handleClick}>Sign In</button>
    </div>
  )
}

export default Button