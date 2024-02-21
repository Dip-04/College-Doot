
import React, { useState, useEffect } from 'react';
import Teachersidebar from './teachersidebar';
import axios from 'axios';
import { useParams } from "react-router-dom";
import Swal from 'sweetalert2';

const baseUrl = 'http://127.0.0.1:8000/api';

function EditCourse() {
  const { course_id } = useParams();


  const [cats, setCats] = useState([]);
  const [courseData, setCourseData] = useState({
    category: '',
    title: '',
    description: '',
    pre_img: '',
    featured_img: '',
    techs: '',
  });
  const Swal = require('sweetalert2')

  useEffect(() => {
    try {
      axios.get(baseUrl + '/category').then((response) => {
        setCats(response.data);
      });
    } catch (error) {
      console.error(error);
    }
  }, []);
  const teacherId = localStorage.getItem('teacherId');

  useEffect(() => {
    axios
      .get(baseUrl + '/teacher-course-detail/' + course_id)
      .then((response) => {
        setCourseData({
          category: response.data.category,
          title: response.data.title,
          description: response.data.description,
          pre_img: response.data.featured_img,
          techs: response.data.techs,
          featured_img: '', // Set featured_img to an empty string
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }, [course_id]);

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

    const courseDataFormData = new FormData();
    courseDataFormData.append('title', courseData.title);
    courseDataFormData.append('teacher', teacherId);
    courseDataFormData.append('description', courseData.description);

    if (courseData.featured_img) {
      courseDataFormData.append('featured_img', courseData.featured_img);
    }

    courseDataFormData.append('techs', courseData.techs);
    courseDataFormData.append('category', courseData.category);

    try {
     axios.put(baseUrl + '/teacher-course-detail/'+course_id+'/', courseDataFormData, {
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
            <h5 className="card-header text-start">Update Courses</h5>
            <div className="card-body">
              <form className="row g-3" >
                <div className="mb-3">
                  <label htmlFor="category" className="form-label text-start col-sm-12">
                    Category
                  </label>
                  <select
                    name="category"
                    value={courseData.category}
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
                                      value={courseData.title}

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
  value={courseData.description} // Fix the typo here
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
                  {courseData.pre_img && (
  <img src={courseData.pre_img} width="200" className="rounded" alt="Previous Image" />
)}
</div>
                <div className="col-12">
                  <label htmlFor="techs" className="form-label text-start col-sm-12">
                    Technologies
                  </label>
                  <textarea
                    className="form-control"
                    name="techs"
                    value={courseData.techs}

                    onChange={handleChange}
                    id="techs"
                  ></textarea>
                </div>

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

export default EditCourse;
