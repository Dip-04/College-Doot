import { Link } from "react-router-dom";
import Teachersidebar from "./teachersidebar";
import { useState,useEffect } from "react";
import axios from 'axios';

const baseUrl = 'http://127.0.0.1:8000/api';
function AllQuiz(){
    const [quizData,setquizData]=useState([])
    const teacherId = localStorage.getItem('teacherId');

    useEffect(() => {
        try {
          axios.get(baseUrl+'/teacher-quiz/'+teacherId).then((response) => {
            setquizData(response.data);
           
          });
        } catch (error) {
          console.error(error);
        }
      }, []);
      const Swal = require('sweetalert2')
      const handelDelectClick=(quiz_id)=>{
        Swal.fire({
            title: '    Confirm!',
            text: 'Are You Sure You Want To Delete This?',
            icon: 'info',
            confirmButtonText: 'Conitnue',
            showCancelButton: true
          }).then((result)=>{
            if(result.isConfirmed){
            try {
                axios.delete(baseUrl+'/quiz/'+quiz_id  ).then((response) => {
                  Swal.fire('success','Quiz has been deleted.')
                  try {
                    axios.get(baseUrl+'/teacher-quiz/'+teacherId).then((response) => {
                      setquizData(response.data);
                     
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
        <h5 className="card-header">All Quiz</h5>
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
                    <Link className="btn btn-info btn-sm  ms-3" to={`/edit-quiz/`+row.id}><i className="bi bi-pencil-square "></i></Link>
                    <Link className="btn btn-success btn-sm  ms-3" to={'/add-quiz-question/'+row.id}>Add Questions<i className="bi bi-plus "></i></Link>

                        
                     <button onClick={()=>handelDelectClick(row.id)} type="button" className=" btn btn-danger btn-sm ms-3 "><i className="bi bi-trash "></i></button>
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
export default AllQuiz