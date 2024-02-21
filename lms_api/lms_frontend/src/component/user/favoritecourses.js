
import { Link,useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from 'axios';
import Sidebar from "./sidebar";
const baseUrl = 'http://127.0.0.1:8000/api';

function FavoriteCourses(){
    const [courseData,setcourseData]=useState([])
    const studentId=localStorage.getItem('studentId')
    useEffect(() => {
        try {
           axios.get(baseUrl+'/fetch-favorite-courses/'+studentId).then((response) => {
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
        <h5 className="card-header">Favorite Courses</h5>
        <div className="card-body">
            <table className="table-bordered table ">
                <thead>
<tr>
<th>Name</th>
<th>Created</th>
</tr>
                </thead>
                <tbody>
               {courseData.map((row, index) => (
  <tr key={index}>
    <td>
      <Link to={'/detail/' + (row.course && row.course.id)}>
        {row.course.title}
      </Link>
    </td>
    <td>
      <Link to={'/teacher-detail/' + (row.course && row.course.teacher && row.course.teacher.id)}>
        {row.course && row.course.teacher && row.course.teacher.first_name + " " + row.course.teacher.last_name}
      </Link>
    </td>
  </tr>
))}



 </tbody>
            </table>
        </div>
    </div> 
</section>
        </div></div>


    );
}
export default FavoriteCourses