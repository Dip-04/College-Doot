import { Link,useParams } from "react-router-dom";
import Teachersidebar from "./teachersidebar";
import { useState,useEffect } from "react";
import axios from 'axios';

const baseUrl = 'http://127.0.0.1:8000/api';
function EditChapter(){
    const {chapter_id}=useParams()

    const [chapterData, setChapterData] = useState({
        course:'',
        title: '',
        description: '',   
        pre_video:'', 
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
        setChapterData({
          ...chapterData,
          [event.target.name]: event.target.files[0],
        });
      };
      const Swal = require('sweetalert2')

      const formSubmit =  (event) => {
    
        const chapterDataformData = new FormData();
        // Assuming teacher ID is 1
        chapterDataformData.append('course',chapterData.course);
        chapterDataformData.append('title', chapterData.title);
        chapterDataformData.append('description', chapterData.description); 
        if(chapterData.video!==''){
        chapterDataformData.append('video', chapterData.video); }
        chapterDataformData.append('remarks', chapterData.techs);
    
        try {
          axios.put(baseUrl+'/chapter/'+chapter_id,chapterDataformData,{
                headers: {
                  'Content-Type': 'multipart/form-data',}
                }).then((response)=>{
                    Swal.fire({
                      title: '    Data has been updated.',
                      icon: 'success',
                      toast:true,
                      timer:5000,
                      position:'top',
                      timerProgressBar:true,
                      showCancelButton: false
                    })
                  
    
    
          })
       } catch (error) {
         console.log(error)
           }    
      };
      useEffect(() => {
        axios
          .get(baseUrl + '/chapter/' + chapter_id)
          .then((response) => {
            setChapterData({
              course: response.data.course,
              title: response.data.title,
              description: response.data.description,
              pre_video: response.data.video,
              remarks: response.data.remarks,
              video:''
            });
          })
          .catch((error) => {
            console.error(error);
          });
      }, [chapter_id]);
      
    return(
        <div className="container mt-4">
        <div className="row">
            <aside className="col-md-3">
       <Teachersidebar/></aside>
<section className="col-md-9">
    <div className="card">
        <h5 className="card-header text-start">Update Chapter</h5>
        <div className="card-body">
        <form className="row g-3">
        <div className="mb-3">
<label for="formGroupExampleInput" className="form-label text-start col-sm-12">Title</label>
<input type="text"  name="title"
             value={chapterData.title}   onChange={handleChange} className="form-control" id="formGroupExampleInput" />
</div>
<div className="mb-3">
<label for="formGroupExampleInput2" className="form-label text-start control-label col-sm-12">Description </label>
<textarea  name="description"
 value={chapterData.description}
                onChange={handleChange}
                className="form-control" id="floatingTextarea"></textarea>
</div>
<div className="col-12">
<label for="inputAddress" className="form-label text-start col-sm-12">Video</label>
<input  name="video"
                  onChange={handleFileChange} type="file" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
{chapterData.pre_video &&
<video controls width="250">
  <source src={chapterData.pre_video} type="video/webm" />

  <source src={chapterData.pre_video} type="video/mp4" />

  Download the
  <a href="/media/cc0-videos/flower.webm">WEBM</a>
  or
  <a href="/media/cc0-videos/flower.mp4">MP4</a>
  video.
</video>}
</div>
<div className="col-12">
<label for="inputAddress2" className="form-label text-start col-sm-12">Remarks</label>
<textarea  name="remarks"
                value={chapterData.remarks} onChange={handleChange} className="form-control"  id="floatingTextarea"></textarea>
</div>

<div className="col-12">
<button onClick={formSubmit} className=" btn btn-primary">Submit</button>   </div>
</form>
</div> </div> </section>
        </div></div>
    )
}
export default EditChapter