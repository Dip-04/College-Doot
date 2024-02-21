import React, { useState, useEffect } from 'react';
import Sidebar from "./sidebar";
import axios from 'axios';
import { useParams } from "react-router-dom";
import Swal from 'sweetalert2';

const baseUrl = 'http://127.0.0.1:8000/api';

function StudentChangepassword() {
  const studentId = localStorage.getItem('studentId');
  const [studentData, setstudentData] = useState({
   
    password: '',
   
  });
const handleChange = (event) => {
  setstudentData({
    ...studentData,
    [event.target.name]: event.target.value,
  });
};

  const submitform = async () => {
    const studentFormData = new FormData();
   
    studentFormData.append("password", studentData.password);
   

    try {
      const response = await axios.post(baseUrl + '/student/change-password/' + studentId+'/', studentFormData);
      console.log('Update successful', response.data);

      Swal.fire({
        title: 'Update Successfully!!!!!!!',
        icon: 'success',
        toast: true,
        timer: 5000,
        position: 'top',
        timerProgressBar: true,
        showCancelButton: false,
      });
      window.location.href = '/student-logout';

    } catch (error) {
      console.error(error);
      setstudentData({ status: 'error' });
    }
  };

  useEffect(() => {
    document.title = 'Student Password Change';
  }, []);

  return (
    <div className="container mt-4">
      <div className="row">
        <aside className="col-md-3">
          <Sidebar />
        </aside>
        <section className="col-md-9">
          <div className="card">
            <h5 className="card-header">Change Password</h5>
            <div className="card-body">
              <div className="mb-3 row">
                <label htmlFor="staticEmail" className="col-sm-2 col-form-label">
                  New Password
                </label>
                <div className="col-sm-10">
                <input onChange={handleChange} value={studentData.password} name='password' type="text" readonly class="form-control" id="staticEmail"/>

                </div>
              </div>

              <button onClick={submitform} className="btn btn-primary">
                Update
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default StudentChangepassword;
