import React, { useState, useEffect } from 'react';
import axios from 'axios';

const baseUrl = 'http://127.0.0.1:8000/api';
function Register(){
  const [studentData, setstudentData] = useState({
    "first_name": '',
    "last_name": '',
    'rollno': '',
    "email": '',
    "password": '',
    'featured_img': null, // Changed default value to null for the file input
    "enrollment_no": '',
    "mobile_no": '',
    "department": '',
    'division':'',
    "status": ''
  });

  const handleChange = (event) => {
    setstudentData({
      ...studentData,
      [event.target.name]: event.target.value
    });
  };

  const handleFileChange = (event) => {
    setstudentData({
      ...studentData,
      [event.target.name]: event.target.files[0],
    });
  };
  const Swal = require('sweetalert2')

  console.log(studentData);

  const submitform = async () => { // Made the function asynchronous
    const studentFormData = new FormData();
    studentFormData.append("first_name", studentData.first_name);
    studentFormData.append("last_name", studentData.last_name);
    studentFormData.append("rollno", studentData.rollno); // Fixed the field name
    studentFormData.append("password", studentData.password);
    studentFormData.append('featured_img', studentData.featured_img);
    studentFormData.append("email", studentData.email);
    studentFormData.append("department", studentData.department);
    studentFormData.append("mobile_no", studentData.mobile_no);
    studentFormData.append("division", studentData.division);
    studentFormData.append("enrollment_no", studentData.enrollment_no);


    try {
      const response = await axios.post(baseUrl + '/student/', studentFormData);
      setstudentData({
        "first_name": '',
        "last_name": '',
        'rollno': '',
        "email": '',
        "password": '',
        'featured_img': null, // Changed default value to null for the file input
        "enrollment_no": '',
        "mobile_no": '',
        "department": '',
        'division':'',
        "status": 'success',
      });
      console.log('Registration successful', response.data);
        Swal.fire({
          title: 'Registration Succesfully!!!!!',
          icon: 'success',
          toast: true,
          timer: 5000,
          position: 'top',
          timerProgressBar: true,
          showCancelButton: false,
        }); 
      
      
    } catch (error) {
      console.error(error); // Use console.error for errors
      setstudentData({ 'status': 'error' });
    }
  };

  const userLoginStatus = localStorage.getItem('userLoginStatus');
  if (userLoginStatus === 'true') {
    window.location.href = '/user-dashboard';
  }

  useEffect(() => {
    document.title = 'Student Register';
  }, []);
    return(
        <div className="container mt-4">
            <div className="row">
                <div className="col-6 offset-3">
                    <div className="card">
                        <h5 className="card-header">Student Register</h5>
                        <div className="card-body">
      <form>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">First Name</label>
    <input type="text"  name="first_name" onChange={handleChange} className="form-control" id="exampleInputEmail12" aria-describedby="emailHelp"/>
    <label for="exampleInputEmail1"  className="form-label">Last Name</label>
    <input type="text" name="last_name" onChange={handleChange} className="form-control" id="exampleInputEmail13" aria-describedby="emailHelp"/>
    <label for="exampleInputEmail1" className="form-label">Roll No</label>
    <input type="text" name="rollno" onChange={handleChange} className="form-control" id="exampleInputEmail14" aria-describedby="emailHelp"/>
    <label for="exampleInputEmail1" className="form-label">Enrollment no</label>
    <input type="username" name="enrollment_no" onChange={handleChange} className="form-control" id="exampleInputEmail15" aria-describedby="emailHelp"/>
    <label for="exampleInputEmail1" className="form-label">Email Id</label>
    <input type="email" name="email" onChange={handleChange} className="form-control" id="exampleInputEmail16" aria-describedby="emailHelp"/>
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
                <label for="exampleInputEmail1" className="form-label">Department</label>
    <input type="text" name="department" onChange={handleChange} className="form-control" id="exampleInputEmail17" aria-describedby="emailHelp"/>
   <label  className="form-label">Moblie No</label>
    <input value={studentData.mobile_no} onChange={handleChange}  name="mobile_no" type="number" className="form-control" id="exampleInputEmail69" aria-describedby="emailHelp"/>
  
    <label for="exampleInputEmail1" className="form-label">Division</label>
    <input type="TEXT" name="division" onChange={handleChange} className="form-control" id="exampleInputEmail18" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" name="password" onChange={handleChange} className="form-control" id="exampleInputPassword110"/>
  </div>
 
  <button  onClick={submitform}
  type="submit" className="btn btn-primary">Register</button>
</form></div></div></div></div></div>
    )
}
export default Register;