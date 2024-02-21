import React, { useState, useEffect } from 'react';
import axios from 'axios';

const baseUrl = 'http://127.0.0.1:8000/api';

function Teacherlogin() {
  const [teacherLoginData, setTeacherLoginData] = useState({
    email: '',
    password: '',
    status: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setTeacherLoginData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const Swal = require('sweetalert2')

  const submitForm = async () => {
    const teacherFormData = new FormData();
    teacherFormData.append('email', teacherLoginData.email);
    teacherFormData.append('password', teacherLoginData.password);
  
    try {
      const response = await axios.post(baseUrl + '/teacher-login', teacherFormData);
      if (response.data.bool === true) {
        localStorage.setItem('teacherLoginStatus', true);
        localStorage.setItem('teacherId', response.data.teacher_id);
        Swal.fire({
          title: 'Login Succesfully!!!!!',
          icon: 'success',
          toast: true,
          timer: 5000,
          position: 'top',
          timerProgressBar: true,
          showCancelButton: false,
        }); 
        window.location.href = '/teacher-dashboard';
      } else {
        setTeacherLoginData({ ...teacherLoginData, status: 'error' }); // Set status to 'error'
      }
    } catch (error) {
      console.log(error);
      setTeacherLoginData({ ...teacherLoginData, status: 'error' }); // Set status to 'error'
    }
  };

  const teacherLoginStatus = localStorage.getItem('teacherLoginStatus');
  if (teacherLoginStatus === 'true') {
    window.location.href = '/teacher-dashboard';
  }

  useEffect(() => {
    document.title = 'Teacher Login';
  }, []);

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-6 offset-3">
          {teacherLoginData.status === 'success' && (
            <p className="text-success">Login Successfully</p>
          )}
          {teacherLoginData.status === 'error' && (
            <p className="text-danger">Incorrect Email Id & Password!!! try again</p>
          )}

          <div className="card">
            <h5 className="card-header">Teacher Login</h5>
            <div className="card-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email ID
                  </label>
                  <input
                    value={teacherLoginData.email}
                    onChange={handleChange}
                    name="email"
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Password
                  </label>
                  <input
                      value={teacherLoginData.password}
                      onChange={handleChange}
                      name="password"
                      type={showPassword ? "text" : "password"} // Toggle between "text" and "password"
                      className="form-control"
                      id="exampleInputPassword1"
                    />
                     <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={toggleShowPassword}
                >
                  {showPassword ? "Hide Password" : "Show Password"}
                </button>
                </div>

                <button onClick={submitForm} type="button" className="btn btn-primary">
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Teacherlogin;
