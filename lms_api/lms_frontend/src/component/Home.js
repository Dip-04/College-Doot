import { Link } from 'react-router-dom'
import { useState,useEffect } from "react";
import axios from 'axios';
const baseUrl = 'http://127.0.0.1:8000/api';
function Home() {
  useEffect(()=>{
    document.title='College Doot'
  });
  const [courseData,setCourseData]=useState([])
  const [teacherData,setteacherData]=useState([])


  useEffect(() => {
      try {
        axios.get(baseUrl+'/course/?result=4' ).then((response) => {
          setCourseData(response.data);
        });
      } catch (error) {
        console.error(error);
      }
      try {
        axios.get(baseUrl+'/teacher/?result=4' ).then((response) => {
          setteacherData(response.data);
        });
      } catch (error) {
        console.error(error);
      }
    }, []);
  return (
   <div className="container mt-4"> 
   <h3 className="border-bottom pb-1 mb-4 text-start">Latest Courses <Link to="/all-courses" className="float-end">See All</Link></h3>

<div className="row mb-4">
{courseData && courseData.map((course,index)=>
       <div className="col-md-3 mb-4">
     <div className="card" >
       <img src={course.featured_img} className="card-img-top" alt={course.title}/>
       <div className="card-body">
         <h5 className="card-title"><Link to={`/detail/${course.id}`}>{course.title}</Link></h5>
         <details><p className="card-text">{course.description}</p></details>
       </div>
     </div>
     </div>
)}
</div>
<h3 className="border-bottom pb-1 mb-4 mt-5 text-start"> Teachers <Link  className="float-end" to="/popular-teachers">See All</Link></h3>

<div className="row mb-4">
{teacherData && teacherData.map((teacher,index)=>

  <div className="col-md-3">
<div className="card" >
  <img src={teacher.featured_img} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title"><Link to={`/teacher-detail/${teacher.id}`}>{teacher.first_name+' '+teacher.last_name}</Link></h5>
  </div>
</div>
</div>
)}
</div>
   </div>
);
}

export default Home;
