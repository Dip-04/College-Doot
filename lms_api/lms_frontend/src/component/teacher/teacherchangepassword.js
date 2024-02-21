
import React, { useState, useEffect } from 'react';
import Teachersidebar from './teachersidebar';
import axios from 'axios';
import { useParams } from "react-router-dom";
import Swal from 'sweetalert2';

const baseUrl = 'http://127.0.0.1:8000/api';
function TeacherChangepassword(){
  const teacherId = localStorage.getItem('teacherId');
  const [teacherData, setTeacherData] = useState({
   
    password: '',
   
  });
  const handleChange = (event) => {
    setTeacherData({
      ...teacherData,
      [event.target.name]: event.target.value,
    });
  };
  const submitform = async () => {
    const teacherFormData = new FormData();
   
    teacherFormData.append("password", teacherData.password);
   

    try {
      const response = await axios.post(baseUrl + '/teacher/change-password/' + teacherId+'/', teacherFormData);
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
      window.location.href = '/teacher-logout';

    } catch (error) {
      console.error(error);
      setTeacherData({ status: 'error' });
    }
  };

  const teacherLoginStatus = localStorage.getItem('teacherLoginStatus');
  if (teacherLoginStatus !== 'true') {
    window.location.href = '/teacher-login';
  }

  useEffect(() => {
    document.title = 'Teacher Password Change';
  }, []);

    return(
        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
           <Teachersidebar/></aside>
    <section className="col-md-9">
        <div className="card">
            <h5 className="card-header">Change Password</h5>
            <div className="card-body">
            <div class="mb-3 row">
    <label for="staticEmail" class="col-sm-2 col-form-label">New Password</label>
    <div class="col-sm-10">
      <input onChange={handleChange} value={teacherData.password} name='password' type="text" readonly class="form-control" id="staticEmail"/>
    </div>
  </div>
   
<button onClick={submitform} className=" btn btn-primary">Update</button>  </div> </div> </section>
            </div></div>
    )
}
export default TeacherChangepassword;