import { Link,useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from 'axios';
import Sidebar from "./sidebar";
const baseUrl = 'http://127.0.0.1:8000/api';

function TakeQuiz(){
    const [questiondata,setquestiondata]=useState([])

const {quiz_id}=useParams()
console.log(quiz_id)
    const studentId=localStorage.getItem('studentId')
    useEffect(() => {
        try {
            axios.get(baseUrl+'/quiz-questions/'+quiz_id+'/1/'  ).then((response) => {
              setquestiondata(response.data);
  
            });
          } catch (error) {
            console.error(error);
          }
      }, []);
      const submitAnswer = (question_id, right_ans) => {
        const questiondataformData = new FormData();
        questiondataformData.append('student', studentId);
        questiondataformData.append('question', question_id);
        questiondataformData.append('right_ans',right_ans);
      
        try {
          axios.post(baseUrl + '/attemp-quiz/', questiondataformData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          }).then((response) => {
            try {
              axios.get(baseUrl + '/quiz-questions/' + quiz_id + '/next-question/' + question_id).then((response) => {
                setquestiondata(response.data);
              });
            } catch (error) {
              console.error(error);
            }
          }).catch((error) => {
            // Handle errors here
            console.error('Error:', error);
          });
        } catch (error) {
          console.error('Error:', error);
        }
      };
      
    return(
        <div className="container mt-4">
        <div className="row">
            <aside className="col-md-3">
       <Sidebar/></aside>
       {questiondata.map((row)=>

<section className="col-md-9">
    <h5 className="mb-3 border-bottom pb-1">{row.quiz.title}</h5>
<div className="card">
        <h4 className="card-header">{row.questions}</h4>
        <div className="card-body">
            <table className="table-bordered table ">
         
                <tbody>
               
<>
                    <tr>
                    <td><button onClick={()=>submitAnswer(row.id,row.ans1)} className="btn btn-outline-secondary">{row.ans1}</button></td></tr> 
                    <tr>
                    <td><button onClick={()=>submitAnswer(row.id,row.ans2)} className="btn btn-outline-secondary">{row.ans2}</button></td></tr> 
                    <tr>
                    <td><button onClick={()=>submitAnswer(row.id,row.ans3)} className="btn btn-outline-secondary">{row.ans3}</button></td></tr> 
                    <tr>
                    <td><button onClick={()=>submitAnswer(row.id,row.ans4)} className="btn btn-outline-secondary">{row.ans4}</button></td></tr> 
                    </>

                     </tbody>
            </table>
            {/* <button className="btn btn-dark">skip</button>
            <button className="btn btn-info  ms-2">Submit</button> */}

        </div>

    </div> 
</section>)}
        </div></div>


    );
}
export default TakeQuiz