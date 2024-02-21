
import Teachersidebar from "./teachersidebar";
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom'

const baseUrl = 'http://127.0.0.1:8000/api';

function Addchapter(){
  const [chapterData, setChapterData] = useState({
    title: '',
    description: '',    
    video: '', 
    remarks: '',
  });


  const handleChange = (event) => {
    setChapterData({
      ...chapterData,
      [event.target.name]: event.target.value,
    });
  };

  const handleFileChange = (event) => {
    window.URL=window.URL || window.webkitURL
    var video=document.createElement('video')
    video.preload='metadata'
    video.onloadeddata=function(){
      window.URL.revokeObjectURL(video.src)
    }
    video.src=URL.createObjectURL(event.target.files[0])
    setChapterData({
      ...chapterData,
      [event.target.name]: event.target.files[0],
    });
  };
  const {course_id}=useParams()
  const Swal = require('sweetalert2')

  const formSubmit =  (event) => {

    const chapterDataformData = new FormData();
    // Assuming teacher ID is 1
    chapterDataformData.append('course',course_id);
    chapterDataformData.append('title', chapterData.title);
    chapterDataformData.append('description', chapterData.description); 
    chapterDataformData.append('video', chapterData.video); 
    chapterDataformData.append('remarks', chapterData.techs);

    try {
      axios.post(baseUrl+'/course-chapter/'+course_id,chapterDataformData,{
            headers: {
              'Content-Type': 'multipart/form-data',}
            }).then((response)=>{
              Swal.fire({
                title: '    Data has been added.',
                icon: 'success',
                toast:true,
                timer:5000,
                position:'top',
                timerProgressBar:true,
                showCancelButton: false
              })
              window.location.href = '/add-chapter/'+course_id+'/';


      })
   } catch (error) {
     console.log(error)
       }    
  };


    return(
        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
           <Teachersidebar/></aside>
    <section className="col-md-9">
        <div className="card">
            <h5 className="card-header text-start">Add Chapter</h5>
            <div className="card-body">
            <form className="row g-3">
            <div className="mb-3">
  <label for="formGroupExampleInput" className="form-label text-start col-sm-12">Title</label>
  <input type="text"  name="title"
                    onChange={handleChange} className="form-control" id="formGroupExampleInput" />
</div>
<div className="mb-3">
  <label for="formGroupExampleInput2" className="form-label text-start control-label col-sm-12">Description </label>
  <textarea  name="description"
                    onChange={handleChange}
                    className="form-control" id="floatingTextarea"></textarea>
</div>
  <div className="col-12">
    <label for="inputAddress" className="form-label text-start col-sm-12">Video</label>
    <input  name="video"
                    onChange={handleFileChange} type="file" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
  </div>
  <div className="col-12">
    <label for="inputAddress2" className="form-label text-start col-sm-12">Remarks</label>
    <textarea  name="remarks"
                    onChange={handleChange} className="form-control"  id="floatingTextarea"></textarea>
  </div>
 
  <div className="col-12">
  <button onClick={formSubmit} className=" btn btn-primary">Submit</button>   </div>
</form>
 </div> </div> </section>
            </div></div>
    )
}
export default Addchapter;