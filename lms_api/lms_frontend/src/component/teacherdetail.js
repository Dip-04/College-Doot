import { useParams,Link } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from 'axios';
const baseUrl = 'http://127.0.0.1:8000/api';









function TeacherDetail(){
    const [courseData,setCourseData]=useState([])
const [teacherData,setTeacherData]=useState([])
    let {teacher_id}=useParams();

    useEffect(() => {
        try {
          axios.get(baseUrl+'/teacher/'+teacher_id ).then((response) => {
            setCourseData(response.data.teacher_courses);
            setTeacherData(response.data);
         
    
    
          });
        } catch (error) {
          console.error(error);
        }
      }, [teacher_id]);
    return(
<div className="container mt-3">
    <div className="row">
        <div className="col-4">     
        <img src={teacherData.featured_img} className="img-thumbnail" alt="Teacher"/>

        
           </div>

            <div className="col-8 ">
                <h1 className="text-start">{teacherData.first_name } { teacherData.last_name} </h1>
                <p className="text-start"> {teacherData.detail}</p>
                <p className="fw-bold text-start">Qulification: {teacherData.qulification}</p>
                <p className="fw-bold text-start">Rating: 4/5 </p>
            </div>
    </div>
    <div className="card mt-4">
        <div className="card-header">
            Course List 
        </div>
        <div className="list-group list-group-flush">
            {courseData.map((course, index) => (
   <Link to={`/detail/${course.id}`} className="list-group-item list-group-item-action text-start">{course.title}</Link>
  ) )}
        </div>

        
    </div>
    

</div>    )
}
export default TeacherDetail;