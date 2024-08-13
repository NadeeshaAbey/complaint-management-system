import React from 'react'
import './Button.css'
import { useNavigate } from 'react-router-dom'

function ChangeBtn() {

  const navigate = useNavigate();

  return (
    <div>
        <button className='button' onClick={()=>navigate("/")}>Change</button>
    </div>
  )
}

export default ChangeBtn