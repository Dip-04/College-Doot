import { Link,useParams } from "react-router-dom";
import Teachersidebar from "./teachersidebar";
import { useState,useEffect } from "react";
import axios from 'axios';

const baseUrl = 'http://127.0.0.1:8000/api';
function QuizQuestion(){
    const [questiondata,setquestiondata]=useState([])
    const [totalresult,settotalresult]=useState(0)

const {quiz_id}=useParams()
    useEffect(() => {
        try {
          axios.get(baseUrl+'/quiz-questions/'+quiz_id  ).then((response) => {
            setquestiondata(response.data);
            settotalresult(response.data.length);

          });
        } catch (error) {
          console.error(error);
        }
      }, []);
      const Swal = require('sweetalert2')

const handelDelectClick=(question_id)=>{
    Swal.fire({
        title: '    Confirm!',
        text: 'Are You Sure You Want To Delete This?',
        icon: 'info',
        confirmButtonText: 'Conitnue',
        showCancelButton: true
      }).then((result)=>{
        if(result.isConfirmed){
        try {
            axios.delete(baseUrl+'/questions/'+question_id+'/').then((response) => {
              Swal.fire('success','Data has been deleted.')
              try {
                axios.get(baseUrl+'/quiz-questions/'+quiz_id  ).then((response) => {
                  setquestiondata(response.data);
                  settotalresult(response.data.length);
      
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
        <h5 className="card-header">All Questions({totalresult})</h5>
        <div className="card-body">
        <table className="table-bordered table ">
                <thead>
<tr>
<th>Question</th>

<th>Action</th>
</tr>
                </thead>
                <tbody>
                    {questiondata.map((row)=>
                    <tr>
                    <td><Link to={'/edit-question/'+row.id}>{row.questions}</Link></td>
                   
                    <td>
                    <Link to={'/edit-question/'+row.id} type="button" className=" btn btn-info btn-sm ms-2 "><i className="bi bi-pencil-square"></i></Link>

                        <button onClick={()=>handelDelectClick(row.id)} to={'/delete-row/'+row.id} type="button" className=" btn btn-danger btn-sm "><i className="bi bi-trash "></i></button>
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
export default QuizQuestion