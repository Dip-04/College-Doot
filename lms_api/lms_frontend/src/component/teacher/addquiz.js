import React, { useState, useEffect } from 'react';
import Teachersidebar from './teachersidebar';
import axios from 'axios';
import Swal from 'sweetalert2';

const baseUrl = 'http://127.0.0.1:8000/api';

function AddQuiz() {
  const [quizData, setquizData] = useState({
    title: '',
    detail: '',

 
  });

 
  const handleChange = (event) => {
    setquizData({
      ...quizData,
      [event.target.name]: event.target.value,
    });
  };


const formSubmit =  (event) => {
  const teacherId = localStorage.getItem('teacherId');

  try {

    const quizDataFormData = new FormData();
    quizDataFormData.append('teacher', teacherId);
    quizDataFormData.append('title', quizData.title);
    quizDataFormData.append('detail', quizData.detail);
  

     axios.post(baseUrl + '/quiz/', quizDataFormData, {
      
    }).then((response)=>{ // Course added successfully, you can redirect or show a success message
      Swal.fire({
        title: 'Data has been added.',
        icon: 'success',
        toast: true,
        timer: 5000,
        position: 'top',
        timerProgressBar: true,
        showCancelButton: false,
      });})
      window.location.href='/add-quiz'

   
  } catch (error) {
    console.error(error);
    Swal.fire({
      title: 'Error',
      text: 'An error occurred while adding the data.',
      icon: 'error',
      toast: true,
      timer: 5000,
      position: 'top',
      timerProgressBar: true,
      showCancelButton: false,
    });
  }
};
  

  return (
    <div className="container mt-4">
      <div className="row">
        <aside className="col-md-3">
          <Teachersidebar />
        </aside>
        <section className="col-md-9">
          <div className="card">
            <h5 className="card-header text-start">Add Quiz</h5>
            <div className="card-body">
              <form className="row g-3" >
                 
                <div className="mb-3">
                  <label htmlFor="title" className="form-label text-start col-sm-12">
                    Title
                  </label>
                  <input
                    type="text"
                    name="title"
                    onChange={handleChange}
                    className="form-control"
                    id="title"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="detail" className="form-label text-start control-label col-sm-12">
                    Detail
                  </label>
                  <textarea
                    className="form-control"
                    name="detail"
                    onChange={handleChange}
                    id="detail"
                  ></textarea>
                </div>
               
               

                <div className="col-12">
                <button type="button" onClick={formSubmit} className="btn btn-primary">
  Submit
</button>

                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default AddQuiz;
