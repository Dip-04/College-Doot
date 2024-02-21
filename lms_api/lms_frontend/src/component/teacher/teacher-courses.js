import { Link } from "react-router-dom";
import Teachersidebar from "./teachersidebar";
import { useState,useEffect } from "react";
import axios from 'axios';

const baseUrl = 'http://127.0.0.1:8000/api';
function Teachercourses(){
    const [courseData,setCourseData]=useState([])
    const teacherId = localStorage.getItem('teacherId');
    const [avgrating,setavgrating]=useState(0)

    useEffect(() => {
        try {
          axios.get(baseUrl+'/teacher-course/'+teacherId).then((response) => {
            setCourseData(response.data);
            if(response.data.course_rating!=='' && response.data.course_rating!==null ){
              setavgrating(response.data.course_rating)}
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
                        setCourseData(response.data);
          
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
        <h5 className="card-header">My Courses</h5>
        <div className="card-body">
            <table className="table-bordered table ">
                <thead>
<tr>
<th>Name</th>
<th>Image</th>
<th>Total Enrolled</th>
<th>Action</th>
</tr>
                </thead>
                <tbody>
                    {courseData.map((course)=>
                    <tr>
                    <td><Link to={'/all-chapter/'+course.id }>{course.title}</Link>
                    <hr />
                    {course.course_rating &&
                     <span>Rating: {course.course_rating}</span> }
{!course.course_rating &&
                     <span>Rating: 0</span> }


                    <hr />
                    </td>
                    <td><img src={course.featured_img} width="80" className="rounde" alt="imggg"/></td>

                    <td><Link to={'/enrolled-students/'+course.id}>{course.total_enrolled_students}</Link></td>
                    <td>
                    <Link className="btn btn-info btn-sm  ms-3" to={'/edit-course/'+course.id}><i className="bi bi-pencil-square "></i></Link>
                    <Link className="btn btn-success btn-sm  ms-3" to={'/add-chapter/'+course.id}>Add Chapter<i className="bi bi-plus "></i></Link>

                    <Link className="btn btn-primary btn-sm  ms-3" to={'/study-materials/'+course.id}>Study Material</Link>
   
                    <Link className="btn btn-warning btn-sm  ms-3" to={'/assign-quiz/'+course.id}>Assign Quiz</Link>

                        <button onClick={handelDelectClick} type="button" className=" btn btn-danger btn-sm ms-3 "><i className="bi bi-trash "></i></button>
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
export default Teachercourses