import React, { useState, useEffect } from 'react';
import axios from 'axios';

const baseUrl = 'http://127.0.0.1:8000/api';

function VerifyTeacher() {
  const [teacherData, setteacherData] = useState({
    otp_digit: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setteacherData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const Swal = require('sweetalert2')

  const submitForm = async () => {
    const teacherFormData = new FormData();
    teacherFormData.append('otp_digit', teacherData.otp_digit);
  
    try {
      const response = await axios.post(baseUrl + '/verify-teacher', teacherFormData);
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
        setteacherData({ ...teacherData, status: 'error' }); // Set status to 'error'
      }
    } catch (error) {
      console.log(error);
      setteacherData({ ...teacherData, status: 'error' }); // Set status to 'error'
    }
  };

  const teacherLoginStatus = localStorage.getItem('teacherLoginStatus');
  if (teacherLoginStatus === 'true') {
    window.location.href = '/teacher-dashboard';
  }

  useEffect(() => {
    document.title = 'Verify Teacher ';
  }, []);

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-6 offset-3">
         

          <div className="card">
            <h5 className="card-header">Enter 6 Digit OTP</h5>
            <div className="card-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    OTP
                  </label>
                  <input
                    value={teacherData.otp_digit}
                    onChange={handleChange}
                    name="otp_digit"
                    type="number"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
               </div>

                <button onClick={submitForm} type="button" className="btn btn-primary">
                  Verify
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VerifyTeacher;
