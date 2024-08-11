import React from 'react'
import './Button'
import { useNavigate } from 'react-router-dom'

function ContinueBtn() {

  const navigate = useNavigate();

  return (
    <div>
        <button className='button' onClick={()=>navigate("/new-pwd-page")}>Continue</button>
    </div>
  )
}

export default ContinueBtn