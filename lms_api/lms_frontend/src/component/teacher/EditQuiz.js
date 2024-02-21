
import React, { useState, useEffect } from 'react';
import Teachersidebar from './teachersidebar';
import axios from 'axios';
import { useParams } from "react-router-dom";
import Swal from 'sweetalert2';

const baseUrl = 'http://127.0.0.1:8000/api';

function EditQuiz() {
  const { quiz_id } = useParams();

  const [quizData, setquizData] = useState({
    title: '',
    detail: '',
   
  });
  const teacherId = localStorage.getItem('teacherId');

  const Swal = require('sweetalert2')

  useEffect(() => {
    axios
      .get(baseUrl + '/teacher-quiz-detail/' + quiz_id)
      .then((response) => {
        setquizData({
          title: response.data.title,
          detail: response.data.detail,
         
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }, [quiz_id]);

  const handleChange = (event) => {
    setquizData({
      ...quizData,
      [event.target.name]: event.target.value,
    });
  };

  
  const formSubmit =  (event) => {

    const quizDataFormData = new FormData();
    quizDataFormData.append('title', quizData.title);
    quizDataFormData.append('teacher',teacherId );
    quizDataFormData.append('detail', quizData.detail);

    try {
     axios.put(baseUrl + '/teacher-quiz-detail/'+quiz_id+'/', quizDataFormData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        }
      }).then((response)=>{

   

      if (response.status === 200) {
        Swal.fire({
          title: 'Data has been updated.',
          icon: 'success',
          toast: true,
          timer: 5000,
          position: 'top',
          timerProgressBar: true,
          showCancelButton: false,
        }); 
      }  })
    } catch (error) {
      console.log(error);
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
            <h5 className="card-header text-start">Edit Quiz</h5>
            <div className="card-body">
              <form className="row g-3" >
               
                <div className="mb-3">
                  <label htmlFor="title" className="form-label text-start col-sm-12">
                    Title
                  </label>
                  <input
                                      value={quizData.title}

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
  value={quizData.detail} // Fix the typo here
  className="form-control"
  name="detail"
  onChange={handleChange}
  id="detail"
></textarea></div>

               
                <div className="col-12">
                  <button type="submit" onClick={formSubmit} className="btn btn-primary">
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

export default EditQuiz;
