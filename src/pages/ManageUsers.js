import React, { useState } from 'react';
import './ManageUsers.css'
import ASidebar from '../components/ASidebar';

export default function ManageUsers() {
  const [formData, setFormData] = useState({
    fname: '',
    faculty: 'none',
    index: '',
    email: '',
    pwd: '',
    conpwd: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className='all1'>
      <ASidebar/>
      <div className="dashboard">
        <div className="line"></div>
        <div className="topic2">Manage Users</div>
        <div className='form2'>
          <form name="form2" method="POST" onSubmit={handleSubmit}>
            <table className='table2'>
              <tbody>
                <tr>
                  <td><label htmlFor='fname'><b>Full Name</b></label></td>
                  <td className='data'colSpan="2">
                    <input
                      type='text'
                      id='fname'
                      name='fname'
                      value={formData.fname}
                      onChange={handleInputChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td><label htmlFor='faculty'><b>Faculty</b></label></td>
                  <td className='data'colSpan="2">
                    <select
                      id='faculty'
                      name='faculty'
                      value={formData.faculty}
                      onChange={handleInputChange}
                    >
                      <option value="none"></option>
                      <option value="science">Faculty of Science</option>
                      <option value="eng">Faculty of Engineering</option>
                      <option value="med">Faculty of Medicine</option>
                      <option value="agry">Faculty of Agriculture</option>
                      <option value="management">Faculty of Management and Finance</option>
                      <option value="social-science">Faculty of Humanities and Social Science</option>
                      <option value="tec">Faculty of Technology</option>
                      <option value="allied-health">Faculty of Allied Health Science</option>
                      <option value="fisheries">Faculty of Fisheries and Marine Sciences and Technology</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td><label htmlFor='index'><b>Index No</b></label></td>
                  <td className='data'colSpan="2">
                    <input
                      type='text'
                      id='index'
                      name='index'
                      value={formData.index}
                      onChange={handleInputChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td><label htmlFor='email'><b>Email</b></label></td>
                  <td className='data' colSpan="2">
                    <input
                      type='email'
                      id='email'
                      name='email'
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td><label htmlFor='pwd'><b>Password</b></label></td>
                  <td className='data'colSpan="2">
                    <input
                      type='password'
                      id='pwd'
                      name='pwd'
                      value={formData.pwd}
                      onChange={handleInputChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td><label htmlFor='conpwd'><b>Confirm Password</b></label></td>
                  <td className='data'colSpan="2">
                    <input
                      type='password'
                      id='conpwd'
                      name='conpwd'
                      value={formData.conpwd}
                      onChange={handleInputChange}
                    />
                  </td>
                </tr>
                <br/>
                <tr>
                  <td colSpan="2">
                    <input type='submit' value='Add Users' />
                  </td>
                  <td >
                    <input type='submit' value='View User Details' />
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
