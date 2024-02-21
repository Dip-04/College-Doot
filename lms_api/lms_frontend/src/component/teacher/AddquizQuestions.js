
import Teachersidebar from "./teachersidebar";
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom'
import { Link } from "react-router-dom";

const baseUrl = 'http://127.0.0.1:8000/api';

function AddquizQuestions(){
  const [questiondata, setquestiondata] = useState({
    quiz: '',
    questions: '',    
    ans1: '', 
    ans2: '',
    ans3: '',
    ans4: '',
    right_ans: '',

});


  const handleChange = (event) => {
    setquestiondata({
      ...questiondata,
      [event.target.name]: event.target.value,
    });
  };


  const {quiz_id}=useParams()
  const Swal = require('sweetalert2')

  const formSubmit =  (event) => {

    const questiondataformData = new FormData();
    questiondataformData.append('quiz',quiz_id);
    questiondataformData.append('questions', questiondata.questions);
    questiondataformData.append('ans1', questiondata.ans1); 
    questiondataformData.append('ans2', questiondata.ans2); 
    questiondataformData.append('ans3', questiondata.ans3);
    questiondataformData.append('ans4', questiondata.ans4);
    questiondataformData.append('right_ans', questiondata.right_ans);

    try {
        axios.post(baseUrl + '/quiz-questions/' + quiz_id+'/' , questiondataformData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }).then((response) => {
          // Handle success response
          Swal.fire({
            title: 'Questions have been added.',
            icon: 'success',
            toast: true,
            timer: 5000,
            position: 'top',
            timerProgressBar: true,
            showCancelButton: false
          });
          window.location.reload();
        }).catch((error) => {
          // Handle errors here
          console.error('Error:', error);
          Swal.fire({
            title: 'Error',
            text: 'An error occurred while adding questions.',
            icon: 'error',
            timer: 5000,
            position: 'top',
            timerProgressBar: true,
            showCancelButton: false
          });
        });
      } catch (error) {
        console.error('Error:', error);
      }
      
  };


    return(
        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
           <Teachersidebar/></aside>
    <section className="col-md-9">
        <div className="card">
            <h5 className="card-header text-start">Add Quetions           <Link className="btn btn-success btn-sm  ms-3 float-end" to={'/all-questions/'+quiz_id}>All Questions</Link>
</h5>
            <div className="card-body">
            <form className="row g-3">
            <div className="mb-3">
            <label htmlFor="question" className="form-label text-start col-sm-12">Question </label>
<input
  type="text"
  name="questions"
  id="question" // Add an ID that matches the 'for' attribute in the label
  onChange={handleChange}
  className="form-control"
/>
</div>
<div className="mb-3">
  <label for="formGroupExampleInput" className="form-label text-start col-sm-12">Option 1</label>
  <input type="text"  name="ans1"
                    onChange={handleChange} className="form-control" id="formGroupExampleInput" />
</div>
<div className="mb-3">
  <label for="formGroupExampleInput" className="form-label text-start col-sm-12">Option 2</label>
  <input type="text"  name="ans2"
                    onChange={handleChange} className="form-control" id="formGroupExampleInput" />
</div>
<div className="mb-3">
  <label for="formGroupExampleInput" className="form-label text-start col-sm-12">Option 3</label>
  <input type="text"  name="ans3"
                    onChange={handleChange} className="form-control" id="formGroupExampleInput" />
</div>
<div className="mb-3">
  <label for="formGroupExampleInput" className="form-label text-start col-sm-12">Option 4</label>
  <input type="text"  name="ans4"
                    onChange={handleChange} className="form-control" id="formGroupExampleInput" />
</div>
<div className="mb-3">
  <label for="formGroupExampleInput" className="form-label text-start col-sm-12">Right Anser</label>
  <input type="text"  name="right_ans"
                    onChange={handleChange} className="form-control" id="formGroupExampleInput" />
</div>

 
  <div className="col-12">
  <button onClick={formSubmit} className=" btn btn-primary">Submit</button>   </div>
</form>
 </div> </div> </section>
            </div></div>
    )
}
export default AddquizQuestions;