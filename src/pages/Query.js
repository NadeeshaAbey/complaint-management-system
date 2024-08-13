import React, { useState } from 'react';
import './Query.css'
import USidebar from '../components/USidebar';

export default function Query({ addComplaint }) {
  const [formData, setFormData] = useState({
    complaintNo: '',
    category: '',
    nature: '',
    details: '',
    status: ''
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formData.complaintNo ||
      !formData.category ||
      !formData.nature ||
      !formData.details ||
      !formData.status
    ) {
      alert('Please fill in all fields');
      return;
    }
    addComplaint(formData);
    setFormData({
      complaintNo: '',
      category: '',
      nature: '',
      details: '',
      status: ''
    });
  };

  return (
    <div className='all'>
  <USidebar/>
     <div className="dashboard">

        
   
<div className="line"></div>
     
      <div className="topic">Add Query</div>
    <div className='from1'>
      <form name="form1" method="POST" onSubmit={handleSubmit}>
        <table className='table1'>
          <tbody>
            <tr>
              <td><label htmlFor='cno'><b>Complaint Number</b></label></td>
              <td className='data'>
                <input
                  type='number'
                  id='cno'
                  name='complaintNo'
                  value={formData.complaintNo}
                  onChange={handleInputChange}
                />
              </td>
            </tr>
            <tr>
              <td><label htmlFor='category'><b>Category</b></label></td>
              <td className='data'>
                <select
                  id='category'
                  name='category'
                  value={formData.category}
                  onChange={handleInputChange}
                >
                  <option value="none"></option>
                  <option value="academic_issues">Academic Issues</option>
                  <option value="administrative">Administrative Issues</option>
                  <option value="facility">Facilities and Services</option>
                  <option value="behavior">Student Conduct and Behavior</option>
                  <option value="health_issues">Health and Safety</option>
                  <option value="financial_issues">Financial Matters</option>
                  <option value="support">Student Support Services</option>
                </select>
              </td>
            </tr>
            <tr>
              <td><label htmlFor='nature'><b>Nature of the Complaint</b></label></td>
              <td className='data'>
                <input
                  type='text'
                  id='nature'
                  name='nature'
                  value={formData.nature}
                  onChange={handleInputChange}
                />
              </td>
            </tr>
            <tr>
              <td><label htmlFor='details'><b>Complaint Details</b></label></td>
              <td className='data'>
                <textarea
                  id='details'
                  name='details'
                  value={formData.details}
                  onChange={handleInputChange}
                ></textarea>
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                <input type='submit' value='Submit' />
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
    </div>
    </div>
  );
}