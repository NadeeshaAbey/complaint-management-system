import React from 'react'
import ASidebar from '../components/ASidebar'
import './ADashboard.css'

export default function ADashboard() {
  return (
    <div className='all'>
    <ASidebar/>
     <div className="dashboard">

        
   
<div className="line"></div>
    <div className="dashboard-item dark-red1">Total Users</div>
    <div className="dashboard-item dark-yellow1">Total Categories</div>
      <div className="dashboard-item dark-red">Total Complaints</div>
      <div className="dashboard-item light-yellow">Pending Complaints</div>
      <div className="dashboard-item dark-yellow">Inprocess Complaints</div>
      <div className="dashboard-item dark-red">Closed Complaints</div>
      
    </div>

    </div>
  )
}
