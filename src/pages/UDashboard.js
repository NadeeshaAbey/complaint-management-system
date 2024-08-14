import React from 'react'
import './UDashboard.css'
import USidebar from '../components/USidebar'

export default function UDashboard() {
  return (
    <div className='Uall'>
        <USidebar/>
         <div className="dashboard1">
    
            
       
    <div className="line1"></div>
         
          <div className="dashboard-item1 dark-red">Total Complaints</div>
          <div className="dashboard-item1 light-yellow">Pending Complaints</div>
          <div className="dashboard-item1 dark-yellow">Inprocess Complaints</div>
          <div className="dashboard-item1 dark-red">Closed Complaints</div>
          
        </div>
        
    </div>
  )
}
