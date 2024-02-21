import { Link, useParams } from "react-router-dom";
import Teachersidebar from "./teachersidebar";
import { useState,useEffect } from "react";
import axios from 'axios';

const baseUrl = 'http://127.0.0.1:8000/api';
function AssignQuiz(){
    const [quizData,setquizData]=useState([])
    const [courseData,setCourseData]=useState([])

    const teacherId = localStorage.getItem('teacherId');
 const {course_id}=useParams()
    useEffect(() => {
        try {
          axios.get(baseUrl+'/teacher-quiz/'+teacherId).then((response) => {
            setquizData(response.data);
           
          });
        } catch (error) {
          console.error(error);
        }


        try {
            axios.get(baseUrl + '/course/' + course_id)
     .then((response) => {
               setCourseData(response.data);
              
             });
           } catch (error) {
             console.error(error);
           }

    
      }, []);
      const Swal = require('sweetalert2')
      const assignquiz=(quiz_id)=>{
         // Get the student's ID from local storage
      
      // Ensure that course_id is a valid value
      if (!course_id) {
        console.error("Course ID is missing or invalid.");
        return;
      }
      
      // Create a FormData object to send data in a multipart/form-data format
      const formData = new FormData();
      formData.append('teacher', teacherId); // Assuming course_id is defined

      formData.append('course', course_id); // Assuming course_id is defined
      formData.append('quiz', quiz_id);
    
      // Send a POST request to the specified URL
      axios.post(baseUrl + '/quiz-assign-course/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((response) => {
        // Handle the success response
        Swal.fire({
          title: 'Quiz is successfully Assign',
          icon: 'success',
          toast: true,
          timer: 5000,
          position: 'top',
          timerProgressBar: true,
          showCancelButton: false,
        });
        window.location.reload()
      })
      .catch((error) => {
        console.error('Error:', error);
        Swal.fire({
          title: 'Enrollment Failed',
          text: 'There was an error while enrolling in the course.',
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
       <Teachersidebar/></aside>
<section className="col-md-9">
<div className="card">
        <h5 className="card-header">Assign Quiz   <span className="text-primary">({courseData.title})</span>  </h5>
        <div className="card-body">
            <table className="table-bordered table ">
                <thead>
<tr>
<th>Title</th>
<th>Total Questions</th>
<th>Action</th>
</tr>
                </thead>
                <tbody>
                    {quizData.map((row)=>
                   
                    <tr>
                    <td><Link to={'/all-questions/'+row.id }>{row.title}</Link></td>
                    <td><Link to='#'>12</Link></td>
 

                    <td>
                    {row.assign_status === 0 &&
                        
                     <button onClick={()=>assignquiz(row.id)} type="button" className=" btn btn-success btn-sm ms-3 ">Assign Quiz</button>
                     }
                     {row.assign_status>0 &&
                     <span className="text-success">Assigned</span>
                     } </td>
                    </tr>)}
                </tbody>
            </table>
        </div>
    </div> 
</section>
        </div></div>


    );
}
export default AssignQuiz