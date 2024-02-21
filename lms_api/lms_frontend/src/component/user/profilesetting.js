
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
import Swal from 'sweetalert2';
import Sidebar from "./sidebar";

const baseUrl = 'http://127.0.0.1:8000/api';

function Profilesetting(){
  const studentId = localStorage.getItem('studentId');

  const [studentData, setstudentData] = useState({
    first_name: '',
    last_name: '',
    rollno: '', // Fixed field name
    email: '',
    password: '',
    enrollment_no: '',
    featured_img: null,
    department: '', // Fixed field name
    mobile_no: '',
    division: '',
    status: '',
    pre_img: '', // Fixed field name
  });

  // Removed duplicate declaration of Swal
  // const Swal = require('sweetalert2');

  const handleChange = (event) => {
    setstudentData({
      ...studentData,
      [event.target.name]: event.target.value,
    });
  };

  const handleFileChange = (event) => {
    setstudentData({
      ...studentData,
      [event.target.name]: event.target.files[0],
    });
  };

  useEffect(() => {
    axios
      .get(baseUrl + '/student/' + studentId) // Fixed the URL
      .then((response) => {
        setstudentData({
          ...studentData, // Preserve existing data
          first_name: response.data.first_name,
          last_name: response.data.last_name,
          rollno: response.data.rollno,
          email: response.data.email,
          password: response.data.password,
          pre_img: response.data.featured_img, // Fixed field name
          department: response.data.department,
          mobile_no: response.data.mobile_no,
          division: response.data.division,
          enrollment_no: response.data.enrollment_no,
          featured_img: '', // Set featured_img to an empty string
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }, [studentId]);

  const submitform = async () => {
    const StudentFormData = new FormData();
    StudentFormData.append("first_name", studentData.first_name);
    StudentFormData.append("last_name", studentData.last_name);
    StudentFormData.append("rollno", studentData.rollno); // Fixed field name
    StudentFormData.append("password", studentData.password);
    StudentFormData.append('featured_img', studentData.featured_img);
    StudentFormData.append("email", studentData.email);
    StudentFormData.append("department", studentData.department);
    StudentFormData.append("mobile_no", studentData.mobile_no);
    StudentFormData.append("division", studentData.division);
    StudentFormData.append("enrollment_no", studentData.enrollment_no);


    try {
      const response = await axios.put(baseUrl + '/student/' + studentId+'/', StudentFormData);
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
      setstudentData({ status: 'error' });
    }
  };

  
  useEffect(() => {
    document.title = 'Student profile setting';
  }, []);
    return(
        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
           <Sidebar/></aside>
    <section className="col-md-9">
        <div className="card">
            <h5 className="card-header">Profile Setting</h5>
            <div className="card-body">
            <form className="row g-3" >
                <div className="mb-3">
  <div className="mb-3">
    <label  className="form-label">First Name</label>
    <input value={studentData.first_name} onChange={handleChange} name="first_name" type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <label className="form-label">Last Name</label>
    <input value={studentData.last_name} onChange={handleChange}  name="last_name" type="text" className="form-control" id="exampleInputEmail2" aria-describedby="emailHelp"/>
    <label className="form-label">Roll No</label>
    <input value={studentData.rollno} onChange={handleChange} name="rollno" type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <label className="form-label">Enrollment No</label>
    <input value={studentData.enrollment_no} onChange={handleChange} name="enrollment_no" type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
   
    <label className="form-label">Email Id</label>
    <input value={studentData.email} onChange={handleChange}  name="email" type="email" className="form-control" id="exampleInputEmail3" aria-describedby="emailHelp"/>
    
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
  <label  className="form-label">Department </label>
    <input value={studentData.department} onChange={handleChange}  name="department" type="username" className="form-control" id="exampleInputEmail5" aria-describedby="emailHelp"/>
    <label  className="form-label">Moblie No</label>
    <input value={studentData.mobile_no} onChange={handleChange}  name="mobile_no" type="number" className="form-control" id="exampleInputEmail6" aria-describedby="emailHelp"/>
  
    <label  className="form-label">Division</label>
    <input value={studentData.division} onChange={handleChange}  name="division" type="text" className="form-control" id="exampleInputEmail7" aria-describedby="emailHelp"/>
   </div>
 
 
  <button onClick={submitform} type="submit" className="btn btn-primary">Update</button>
  </div>
              </form>
 </div> </div> </section>
            </div></div>
    )
}
export default Profilesetting;