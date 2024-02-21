import { Link,useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from 'axios';
import Sidebar from "./sidebar";
const baseUrl = 'http://127.0.0.1:8000/api';

function CourseQuizList(){
    const [quizData,setquizData]=useState([])
    const {course_id}=useParams()
    useEffect(() => {
        try {
          axios.get(baseUrl + '/fetch-assigned-quiz/' + course_id).then((response) => {
            setquizData(response.data);
          });
        } catch (error) {
          console.error(error);
        }
        document.title = 'Quiz List';
      }, []);
      console.log(quizData.title)

    return(
        <div className="container mt-4">
        <div className="row">
            <aside className="col-md-3">
       <Sidebar/></aside>
<section className="col-md-9">
<div className="card">
        <h5 className="card-header">Quiz List</h5>
        <div className="card-body">
            <table className="table-bordered table ">
                <thead>
<tr>
<th>Quiz</th>
<th>Action</th>

</tr>
                </thead>
                <tbody>
                {quizData.map((row,index)=>
                    <tr>
                    <td>{row.quiz.title}</td>
                    <td><Link className='btn btn-warning' to={'/take-quiz/'+row.quiz.id}>Take Quiz</Link></td>

                    </tr>)} </tbody>
            </table>
        </div>
    </div> 
</section>
        </div></div>


    );
}
export default CourseQuizList