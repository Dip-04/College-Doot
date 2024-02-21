import React, { useState, useEffect } from 'react';
import axios from 'axios';

const baseUrl = 'http://127.0.0.1:8000/api';

function Teacherregister() {
  const [teacherData, setTeacherData] = useState({
    "first_name": '',
    "last_name": '',
    'detail': '',
    "email": '',
    "password": '',
    'featured_img': null, // Changed default value to null for the file input
    "qulification": '',
    "mobile_no": '',
    "address": '',
    "status": ''
  });
  const Swal = require('sweetalert2')

  const handleChange = (event) => {
    setTeacherData({
      ...teacherData,
      [event.target.name]: event.target.value
    });
  };

  const handleFileChange = (event) => {
    setTeacherData({
      ...teacherData,
      [event.target.name]: event.target.files[0],
    });
  };

  console.log(teacherData);

  const submitform = async () => { // Made the function asynchronous
    const teacherFormData = new FormData();
    teacherFormData.append("first_name", teacherData.first_name);
    teacherFormData.append("last_name", teacherData.last_name);
    teacherFormData.append("detail", teacherData.detail); // Fixed the field name
    teacherFormData.append("password", teacherData.password);
    teacherFormData.append('featured_img', teacherData.featured_img);
    teacherFormData.append("email", teacherData.email);
    teacherFormData.append("qulification", teacherData.qulification);
    teacherFormData.append("mobile_no", teacherData.mobile_no);
    teacherFormData.append("address", teacherData.address);


    try {
      const response = await axios.post(baseUrl + '/teacher/', teacherFormData);
     
      setTeacherData({
        "first_name": '',
        "last_name": '',
        'detail': '', // Fixed the field name
        "email": '',
        "password": '',
        'featured_img': null, // Reset to null
        "qulification": '',
        "mobile_no": '',
        "address": '',
        "status": 'success',
      });

        Swal.fire({
          title: 'Registration Succesfully!!!!!!!',
          icon: 'success',
          toast: true,
          timer: 5000,
          position: 'top',
          timerProgressBar: true,
          showCancelButton: false,
        }); 
        window.location.href = '/teacher-login/';

      
    } catch (error) {
      console.error(error); // Use console.error for errors
      setTeacherData({ 'status': 'error' });
    }
  };

  const teacherLoginStatus = localStorage.getItem('teacherLoginStatus');
  if (teacherLoginStatus === 'true') {
    window.location.href = '/teacher-dashboard/';
  }

  useEffect(() => {
    document.title = 'Teacher Register';
  }, []);
    return(
        <div className="container mt-4">
            <div className="row">
                <div className="col-6 offset-3">
                  {teacherData.status==='success' && <p className='text-succes'>Thanks for Registration</p>}
                  {!teacherData.status==='error' && <p className='text-danger'>Something wrong happened</p>}

                    <div className="card">
                        <h5 className="card-header">Teacher Register</h5>
                        <div className="card-body">
      <form>
  <div className="mb-3">
    <label  className="form-label">First Name</label>
    <input value={teacherData.first_name} onChange={handleChange} name="first_name" type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <label className="form-label">Last Name</label>
    <input value={teacherData.last_name} onChange={handleChange}  name="last_name" type="text" className="form-control" id="exampleInputEmail2" aria-describedby="emailHelp"/>
    <label className="form-label">Detail</label>
    <textarea value={teacherData.detail} onChange={handleChange}  name="detail" type="text" className="form-control" id="exampleInputEmail2" aria-describedby="emailHelp"/>
   
    <label className="form-label">Email Id</label>
    <input value={teacherData.email} onChange={handleChange}  name="email" type="email" className="form-control" id="exampleInputEmail3" aria-describedby="emailHelp"/>
    <div className="mb-3">
    <label  className="form-label">Password</label>
    <input value={teacherData.password} onChange={handleChange}  name="password" type="password" className="form-control" id="exampleInputPassword4"/>
  </div>
  <div className="col-12">
                  <label htmlFor="featured_img" className="form-label text-start col-sm-12">
                    Profile Image
                  </label>
                  <input
                    type="file"
                    name="featured_img"
                    onChange={handleFileChange}
                    className="form-control"
                    id="featured_img"
                  />
                </div>
  <label  className="form-label">Qulification </label>
    <input value={teacherData.qulification} onChange={handleChange}  name="qulification" type="username" className="form-control" id="exampleInputEmail5" aria-describedby="emailHelp"/>
    <label  className="form-label">Moblie No</label>
    <input value={teacherData.mobile_no} onChange={handleChange}  name="mobile_no" type="number" className="form-control" id="exampleInputEmail6" aria-describedby="emailHelp"/>
  
    <label  className="form-label">Address</label>
    <input value={teacherData.address} onChange={handleChange}  name="address" type="text" className="form-control" id="exampleInputEmail7" aria-describedby="emailHelp"/>
   </div>
 
 
  <button onClick={submitform} type="submit" className="btn btn-primary">Register</button>
</form></div></div></div></div></div>
    )
}
export default Teacherregister;