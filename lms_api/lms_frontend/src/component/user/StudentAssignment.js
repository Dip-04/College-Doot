
import { Link,useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from 'axios';
import Sidebar from "./sidebar";
import Swal from "sweetalert2";
const baseUrl = 'http://127.0.0.1:8000/api';

function StudentAssignment(){
    const [AssignmentData,setAssignmentData]=useState([])
    const [AssignmentStatus,setAssignmentStatus]=useState('')

    const studentId=localStorage.getItem('studentId')
    useEffect(() => {
        try {
           axios.get(baseUrl+'/my-assignments/'+studentId).then((response) => {
            setAssignmentData(response.data);
          });
        } catch (error) {
          console.error(error);
        } 
      }, []);
const markasdone=(assignment_id,title,detail,student,teacher)=>{
        
        const formData = new FormData();
        formData.append('student_status', true);
        formData.append('title', title);
        formData.append('detail', detail);
        formData.append('student', student);
        formData.append('teacher', teacher);


        
         // Assuming course_id is defined
      
        // Send a POST request to the specified URL
        axios.put(baseUrl + '/update-assignment/'+assignment_id+'/', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then((response) => {
          // Handle the success response
          Swal.fire({
            title: 'You have successfully Completed this assignment',
            icon: 'success',
            toast: true,
            timer: 5000,
            position: 'top',
            timerProgressBar: true,
            showCancelButton: false,
          });
          setAssignmentStatus('success');
          window.location.reload()
        })
        .catch((error) => {
          console.error('Error:', error);
          Swal.fire({
            title: ' Failed',
            text: 'There was an error while complete assignment.',
            icon: 'error',
            toast: true,
            timer: 5000,
            position: 'top',
            timerProgressBar: true,
            showCancelButton: false,
          });
        });
      }
      

    return(
        <div className="container mt-4">
        <div className="row">
            <aside className="col-md-3">
       <Sidebar/></aside>
<section className="col-md-9">
<div className="card">
        <h5 className="card-header">My Assignment</h5>
        <div className="card-body">
            <table className="table-bordered table ">
                <thead>
<tr>
<th>Title</th>
<th>Detail</th>
<th>Teacher</th>
<th>Action</th>

</tr>
                </thead>
                <tbody>
                {AssignmentData.map((row,index)=>
                    <tr>
                    <td>{row.title}</td>
                    <td>{row.detail}</td>
                    <td><Link to={'/teacher-detail/'+row.teacher.id}>{row.teacher.first_name+" " +row.teacher.last_name}</Link></td>
                   <td>{row.student_status === false &&
                   <button onClick={()=>markasdone(row.id,row.title,row.detail,row.student.id,row.teacher.id)} className="btn btn-success btn-sm" >Mark as Done</button>
}
{row.student_status === true &&
<span className="bagde bg-primary">Completed</span>
}</td>
                    </tr>)} </tbody>
            </table>
        </div>
    </div> 
</section>
        </div></div>


    );
}
export default StudentAssignment