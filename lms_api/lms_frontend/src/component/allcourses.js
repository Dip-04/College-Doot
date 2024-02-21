import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from 'axios';
const baseUrl = 'http://127.0.0.1:8000/api';

function Allcourses(){
  const [courseData,setCourseData]=useState([])

  useEffect(() => {
      try {
        axios.get(baseUrl+'/course/' ).then((response) => {
          setCourseData(response.data);
        });
      } catch (error) {
        console.error(error);
      }
    }, []);
    return(
        <div className="container mt-4"> 
        <h3 className="border-bottom pb-1 mb-4 text-start">All Courses</h3>
     
     <div className="row mb-4">
      {courseData && courseData.map((course,index)=>
       <div className="col-md-3 mb-4">
     <div className="card" >
       <img src={course.featured_img} className="card-img-top" alt={course.title}/>
       <div className="card-body">
         <h5 className="card-title"><Link to={`/detail/${course.id}`}>{course.title}</Link></h5>
         <p className="card-text">{course.description}</p>
       </div>
     </div>
     </div>
)}
     </div>  
     {/* <nav aria-label="Page navigation example mt-4 ">
  <ul className="pagination justify-content-center">
    <li className="page-item"><Link className="page-link" to="#">Previous</Link></li>
    <li className="page-item"><Link className="page-link" to="#">1</Link></li>
    <li className="page-item"><Link className="page-link" to="#">2</Link></li>
    <li className="page-item"><Link className="page-link" to="#">3</Link></li>
    <li className="page-item"><Link className="page-link" to="#">Next</Link></li>
  </ul>
</nav>*/}</div>    ); 
}
export default Allcourses;