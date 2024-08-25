import React from 'react'
import './UDashboard.css'
import USidebar from '../components/USidebar'

export default function UDashboard() {
  return (
    <div className='all'>
        <USidebar/>
         <div className="dashboard">
    
            
       
        <div className="line"></div>
         
          <div className="dashboard-item dark-red">Total Complaints
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <button name='view'>View Details</button>
          </div>
          <div className="dashboard-item light-yellow">Pending Complaints
          <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <button name='view'>View Details</button>
          </div>
          <div className="dashboard-item dark-yellow">Inprocess Complaints
          <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <button name='view'>View Details</button>
          </div>
          <div className="dashboard-item dark-red">Closed Complaints
          <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <button name='view'>View Details</button>
          </div>
          
        </div>
        
    </div>
  )
}
