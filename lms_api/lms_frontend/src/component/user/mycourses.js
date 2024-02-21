import { Link,useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from 'axios';
import Sidebar from "./sidebar";
const baseUrl = 'http://127.0.0.1:8000/api';

function Mycourses(){
    const [courseData,setcourseData]=useState([])
    const studentId=localStorage.getItem('studentId')
    useEffect(() => {
        try {
           axios.get(baseUrl+'/fetch-enrolled-courses/'+studentId).then((response) => {
            console.log(response.data.first_name); // Log the API response
            setcourseData(response.data);
          });
        } catch (error) {
          console.error(error);
        } 
      }, []);

    return(
        <div className="container mt-4">
        <div className="row">
            <aside className="col-md-3">
       <Sidebar/></aside>
<section className="col-md-9">
<div className="card">
        <h5 className="card-header">My Courses</h5>
        <div className="card-body">
            <table className="table-bordered table ">
                <thead>
<tr>
<th>Name</th>
<th>Created</th>
<th>Quiz</th>

</tr>
                </thead>
                <tbody>
                {courseData.map((row,index)=>
                    <tr>
                    <td><Link to={'/detail/'+row.course.id}>{row.course.title}</Link></td>
                    <td><Link to={'/teacher-detail/'+row.course.teacher.id}>{row.course.teacher.first_name+" " +row.course.teacher.last_name}</Link></td>
                    <td><Link className='btn btn-warning' to={'/course-quiz/'+row.course.id}>Quiz List</Link>
                    <Link className='btn btn-primary ms-3' to={'/user-study-materials/'+row.course.id}>Study Material</Link></td>

                    </tr>)} </tbody>
            </table>
        </div>
    </div> 
</section>
        </div></div>


    );
}
export default Mycourses