import React, { useState, useEffect } from 'react';
import Teachersidebar from './teachersidebar';
import axios from 'axios';
import Swal from 'sweetalert2';

const baseUrl = 'http://127.0.0.1:8000/api';

function AddCourses() {
  const [cats, setCats] = useState([]);
  const [courseData, setCourseData] = useState({
    category: '',
    title: '',
    description: '',
    featured_img: null, // Initialize it as null
    techs: '',
  });

  useEffect(() => {
    try {
      axios.get(baseUrl + '/category').then((response) => {
        setCats(response.data);
      });
    } catch (error) {
      console.error(error);
    }
  }, []);

  const handleChange = (event) => {
    setCourseData({
      ...courseData,
      [event.target.name]: event.target.value,
    });
  };

  const handleFileChange = (event) => {
    setCourseData({
      ...courseData,
      [event.target.name]: event.target.files[0],
    });
  };

const formSubmit =  (event) => {
  const teacherId = localStorage.getItem('teacherId');

  try {

    const courseDataFormData = new FormData();
    courseDataFormData.append('teacher', teacherId);
    courseDataFormData.append('title', courseData.title);
    courseDataFormData.append('description', courseData.description);
    courseDataFormData.append('featured_img', courseData.featured_img);
    courseDataFormData.append('techs', courseData.techs);
    courseDataFormData.append('category', courseData.category);

     axios.post(baseUrl + '/add-course/', courseDataFormData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
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
            <h5 className="card-header text-start">Add Courses</h5>
            <div className="card-body">
              <form className="row g-3" >
                <div className="mb-3">
                  <label htmlFor="category" className="form-label text-start col-sm-12">
                    Category
                  </label>
                  <select
                    name="category"
                    onChange={handleChange}
                    className="form-control"
                    id="category"
                  >
                    <option value="">Select a Category</option>
                    {cats.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.title}
                      </option>
                    ))}
                  </select>
                </div>
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
                  <label htmlFor="description" className="form-label text-start control-label col-sm-12">
                    Description
                  </label>
                  <textarea
                    className="form-control"
                    name="description"
                    onChange={handleChange}
                    id="description"
                  ></textarea>
                </div>
                <div className="col-12">
                  <label htmlFor="featured_img" className="form-label text-start col-sm-12">
                    Featured Image
                  </label>
                  <input
                    type="file"
                    name="featured_img"
                    onChange={handleFileChange}
                    className="form-control"
                    id="featured_img"
                  />
                </div>
                <div className="col-12">
                  <label htmlFor="techs" className="form-label text-start col-sm-12">
                    Technologies
                  </label>
                  <textarea
                    className="form-control"
                    name="techs"
                    onChange={handleChange}
                    id="techs"
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

export default AddCourses;
