import Teachersidebar from "./teachersidebar";
import axios from 'axios';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const baseUrl = 'http://127.0.0.1:8000/api';

function AddAssignment() {
  const [assignmentData, setAssignmentData] = useState({
    title: '',
    detail: '',
  });

  const handleChange = (event) => {
    setAssignmentData({
      ...assignmentData,
      [event.target.name]: event.target.value,
    });
  };

  const { teacher_id } = useParams();
  const { student_id } = useParams();

  const Swal = require('sweetalert2');

  const formSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    const assignmentDataFormData = new FormData();
    assignmentDataFormData.append('title', assignmentData.title);
    assignmentDataFormData.append('detail', assignmentData.detail);
    assignmentDataFormData.append('teacher', teacher_id); // Use 'teacher_id' instead of 'teacher'
    assignmentDataFormData.append('student', student_id); // Use 'student_id' instead of 'student'

    try {
      await axios.post(baseUrl + '/student-assignment/'+teacher_id+'/'+student_id+'/', assignmentDataFormData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      Swal.fire({
        title: 'Assignment has been added.',
        icon: 'success',
        toast: true,
        timer: 5000,
        position: 'top',
        timerProgressBar: true,
        showCancelButton: false,
      });
      const notifDataFormData = new FormData();
      notifDataFormData.append('teacher', teacher_id);
      notifDataFormData.append('notif_subject', 'assignment');
      notifDataFormData.append('notif_for', 'student'); // You might want to change this based on the recipient
      notifDataFormData.append('student', student_id);

      axios.post(baseUrl + '/save-notification/', notifDataFormData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
        .then((response) => {
          console.log('Notification added successfully');
          console.log(response.data);

        })
        .catch((error) => {
          console.error('Error while adding notification:', error);
        });

      // window.location.reload();
    } catch (error) {
      console.log(error);
      // Handle the error, e.g., show an error message to the user
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
            <h5 className="card-header text-start">Add Assignment</h5>
            <div className="card-body">
              <form className="row g-3" onSubmit={formSubmit}>
                <div className="mb-3">
                  <label htmlFor="formGroupExampleInput" className="form-label text-start col-sm-12">Title</label>
                  <input
                    type="text"
                    name="title"
                    onChange={handleChange}
                    className="form-control"
                    id="formGroupExampleInput"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="formGroupExampleInput2" className="form-label text-start control-label col-sm-12">Detail</label>
                  <textarea
                    name="detail"
                    onChange={handleChange}
                    className="form-control"
                    id="floatingTextarea"
                  />
                </div>
                <div className="col-12">
                  <button type="submit" className="btn btn-primary">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default AddAssignment;
