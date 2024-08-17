import React from 'react'
import ASidebar from '../components/ASidebar'
import './ADashboard.css'

export default function ADashboard() {
  return (
    <div className='all'>
    <ASidebar/>
     <div className="dashboard">

        
   
<div className="line"></div>
    <div className="dashboard-item dark-red1">Total Users
    <br/>
             <br/>
             <br/>
             <br/>
             <br/>
             
             <button name='view' value={'View Details'}>View Details</button>
    </div>
    <div className="dashboard-item dark-yellow1">Total Categories
    <br/>
             <br/>
             <br/>
             <br/>
             <br/>
             
             <button name='view' value={'View Details'}>View Details</button>
    </div>
      <div className="dashboard-item dark-red">Total Complaints
      <br/>
             <br/>
             <br/>
             <br/>
             <br/>
             
             <button name='view' value={'View Details'}>View Details</button>
      </div>
      <div className="dashboard-item light-yellow">Pending Complaints
      <br/>
             <br/>
             <br/>
             <br/>
             <br/>
             
             <button name='view' value={'View Details'}>View Details</button>
      </div>
      <div className="dashboard-item dark-yellow">Inprocess Complaints
      <br/>
             <br/>
             <br/>
             <br/>
             <br/>
             
             <button name='view' value={'View Details'}>View Details</button>
      </div>
      <div className="dashboard-item dark-red">Closed Complaints
      <br/>
             <br/>
             <br/>
             <br/>
             <br/>
             
             <button name='view' value={'View Details'}>View Details</button>
      </div>
      
    </div>

    </div>
  )
}
