import { Link,useParams } from "react-router-dom";
import Teachersidebar from "./teachersidebar";
import { useState,useEffect } from "react";
import axios from 'axios';

const baseUrl = 'http://127.0.0.1:8000/api';
function EnrolledStudent(){
    const [studentData,setstudentData]=useState([])
let {course_id}=useParams();
useEffect(() => {
  try {
    axios.get(baseUrl+'/fetch-enrolled-students/'+course_id).then((response) => {
      console.log(response.data.first_name); // Log the API response
      setstudentData(response.data);
    });
  } catch (error) {
    console.error(error);
  } 
}, []);

      const Swal = require('sweetalert2')

      const handelDelectClick=(course_id)=>{
        Swal.fire({
            title: '    Confirm!',
            text: 'Are You Sure You Want To Delete This?',
            icon: 'info',
            confirmButtonText: 'Conitnue',
            showCancelButton: true
          }).then((result)=>{
            if(result.isConfirmed){
            try {
                axios.delete(baseUrl+'/course/'+course_id  ).then((response) => {
                  Swal.fire('success','Data has been deleted.')
                  try {
                    axios.get(baseUrl+'/course/'+course_id  ).then((response) => {
                        setstudentData(response.data);
          
                    });
                  } catch (error) {
                    console.error(error);
                  }  
                });
              } catch (error) {
                console.error(error);
                Swal.fire('success','Data has not been deleted.')
    
              }}
              else{
                Swal.fire('success','Data has not been deleted.')
    
              }
          })
    }
    return(
        <div className="container mt-4">
        <div className="row">
            <aside className="col-md-3">
       <Teachersidebar/></aside>
<section className="col-md-9">
<div className="card">
        <h5 className="card-header">Enrolled Student List</h5>
        <div className="card-body">
            <table className="table-bordered table ">
                <thead>
<tr>
<th>Name</th>
<th>Image</th>
<th>Roll No</th>
<th>Department</th>


<th>Email Id</th>
</tr>
                </thead>
                <tbody>
                    {studentData.map((row,index)=>
                    <tr key={index}>
                    <td>{row.student.first_name} {row.student.last_name}</td>
                    <td><img src={row.student.featured_img} width="80" className="rounde" alt="imggg"/></td>
                    <td>{row.student.rollno}</td>
                    <td>{row.student.department}</td>

                    <td>
                    <td>{row.student.email}</td>

                    </td>
                    </tr>)}
                </tbody>
            </table>
        </div>
    </div> 
</section>
        </div></div>


    );
}
export default EnrolledStudent 