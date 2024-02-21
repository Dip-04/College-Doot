
import React, { useState, useEffect } from 'react';
import Teachersidebar from './teachersidebar';
import axios from 'axios';
import { useParams } from "react-router-dom";
import Swal from 'sweetalert2';

const baseUrl = 'http://127.0.0.1:8000/api';

function TeacherProfilesetting() {
  const teacherId = localStorage.getItem('teacherId');
  const [teacherData, setTeacherData] = useState({
    first_name: '',
    last_name: '',
    detail: '', // Fixed field name
    email: '',
    password: '',
    featured_img: null,
    qulification: '', // Fixed field name
    mobile_no: '',
    address: '',
    status: '',
    pre_img: '', // Fixed field name
  });

  // Removed duplicate declaration of Swal
  // const Swal = require('sweetalert2');

  const handleChange = (event) => {
    setTeacherData({
      ...teacherData,
      [event.target.name]: event.target.value,
    });
  };

  const handleFileChange = (event) => {
    setTeacherData({
      ...teacherData,
      [event.target.name]: event.target.files[0],
    });
  };

  useEffect(() => {
    axios
      .get(baseUrl + '/teacher/' + teacherId) // Fixed the URL
      .then((response) => {
        setTeacherData({
          ...teacherData, // Preserve existing data
          first_name: response.data.first_name,
          last_name: response.data.last_name,
          detail: response.data.detail,
          email: response.data.email,
          password: response.data.password,
          pre_img: response.data.featured_img, // Fixed field name
          qulification: response.data.qulification,
          mobile_no: response.data.mobile_no,
          address: response.data.address,
          featured_img: '', // Set featured_img to an empty string
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }, [teacherId]);

  const submitform = async () => {
    const teacherFormData = new FormData();
    teacherFormData.append("first_name", teacherData.first_name);
    teacherFormData.append("last_name", teacherData.last_name);
    teacherFormData.append("detail", teacherData.detail); // Fixed field name
    teacherFormData.append("password", teacherData.password);
    teacherFormData.append('featured_img', teacherData.featured_img);
    teacherFormData.append("email", teacherData.email);
    teacherFormData.append("qulification", teacherData.qulification);
    teacherFormData.append("mobile_no", teacherData.mobile_no);
    teacherFormData.append("address", teacherData.address);

    try {
      const response = await axios.put(baseUrl + '/teacher/' + teacherId+'/', teacherFormData);
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
    document.title = 'Teacher profile setting';
  }, []);

    return(
        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
           <Teachersidebar/></aside>
           <section className="col-md-9">
          <div className="card">
            <h5 className="card-header text-start">Profile Setting</h5>
            <div className="card-body">
              <form className="row g-3" >
                <div className="mb-3">
  <div className="mb-3">
    <label  className="form-label">First Name</label>
    <input value={teacherData.first_name} onChange={handleChange} name="first_name" type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <label className="form-label">Last Name</label>
    <input value={teacherData.last_name} onChange={handleChange}  name="last_name" type="text" className="form-control" id="exampleInputEmail2" aria-describedby="emailHelp"/>
    <label className="form-label">Detail</label>
    <textarea value={teacherData.detail} onChange={handleChange}  name="detail" type="text" className="form-control" id="exampleInputEmail2" aria-describedby="emailHelp"/>
   
    <label className="form-label">Email Id</label>
    <input value={teacherData.email} onChange={handleChange}  name="email" type="email" className="form-control" id="exampleInputEmail3" aria-describedby="emailHelp"/>
    
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
 
 
  <button onClick={submitform} type="submit" className="btn btn-primary">Update</button>
  </div>
              </form>
            </div>
          </div>
        </section>
      </div>
      </div>


    )
}
export default TeacherProfilesetting;