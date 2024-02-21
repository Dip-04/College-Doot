import React, { useState, useEffect } from 'react';
import axios from 'axios';

const baseUrl = 'http://127.0.0.1:8000/api';
function Login(){
  const [studentLoginData, setstudentLoginData] = useState({
    enrollment_no: '',
    password: '',
    status: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setstudentLoginData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const Swal = require('sweetalert2')

  const submitForm = async () => {
    const studentFormData = new FormData();
    studentFormData.append('enrollment_no', studentLoginData.enrollment_no);
    studentFormData.append('password', studentLoginData.password);
  
    try {
      const response = await axios.post(baseUrl + '/student-login/', studentFormData);
      if (response.data.bool === true) {
        localStorage.setItem('userLoginStatus', true);
        localStorage.setItem('studentId', response.data.student_id);
        Swal.fire({
          title: 'Login Succesfully!!!!!',
          icon: 'success',
          toast: true,
          timer: 5000,
          position: 'top',
          timerProgressBar: true,
          showCancelButton: false,
        }); 
        window.location.href = '/user-dashboard';
      } else {
        setstudentLoginData({ ...studentLoginData, status: 'error' }); // Set status to 'error'
      }
    } catch (error) {
      console.log(error);
      setstudentLoginData({ ...studentLoginData, status: 'error' }); // Set status to 'error'
    }
  };

  const userLoginStatus = localStorage.getItem('userLoginStatus');
  if (userLoginStatus === 'true') {
    window.location.href = '/user-dashboard';
  }

  useEffect(() => {
    document.title = 'Student Login';
  }, []);
    return(
        <div className="container mt-4">
            <div className="row">
                <div className="col-6 offset-3">
                {studentLoginData.status === 'success' && (
            <p className="text-success">Login Successfully</p>
          )}
          {studentLoginData.status === 'error' && (
            <p className="text-danger">Incorrect Email Id & Password!!! try again</p>
          )}
                    <div className="card">
                        <h5 className="card-header">Student Login</h5>
                        <div className="card-body">
      <form>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Enrollment No</label>
    <input  value={studentLoginData.enrollment_no}
                    onChange={handleChange}
                    name="enrollment_no"type="username" className="form-control" id="exampleInputEmail12" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
  
         <input
                      value={studentLoginData.password}
                      onChange={handleChange}
                      name="password"
                      type={showPassword ? "text" : "password"} // Toggle between "text" and "password"
                      className="form-control"
                      id="exampleInputPassword11"
                    />
                     <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={toggleShowPassword}
                >
                  {showPassword ? "Hide Password" : "Show Password"}
                </button>
  </div>
  <button onClick={submitForm} type="submit" className="btn btn-primary">Login</button>
</form></div></div></div></div></div>
    )
}
export default Login;