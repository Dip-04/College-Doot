import { Link,useParams } from "react-router-dom";
import Teachersidebar from "./teachersidebar";
import { useState,useEffect } from "react";
import axios from 'axios';

const baseUrl = 'http://127.0.0.1:8000/api';
function AllChapter(){
    const [chapterData,setchapterData]=useState([])
    const [totalresult,settotalresult]=useState(0)

const {course_id}=useParams()
    useEffect(() => {
        try {
          axios.get(baseUrl+'/course-chapter/'+course_id  ).then((response) => {
            setchapterData(response.data);
            settotalresult(response.data.length);

          });
        } catch (error) {
          console.error(error);
        }
      }, []);
      const Swal = require('sweetalert2')

const handelDelectClick=(chapter_id)=>{
    Swal.fire({
        title: '    Confirm!',
        text: 'Are You Sure You Want To Delete This?',
        icon: 'info',
        confirmButtonText: 'Conitnue',
        showCancelButton: true
      }).then((result)=>{
        if(result.isConfirmed){
        try {
            axios.delete(baseUrl+'/chapter/'+chapter_id+'/'  ).then((response) => {
              Swal.fire('success','Data has been deleted.')
              try {
                axios.get(baseUrl+'/course-chapter/'+course_id  ).then((response) => {
                  setchapterData(response.data);
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
        <h5 className="card-header">All Chapter({totalresult})</h5>
        <div className="card-body">
        <table className="table-bordered table ">
                <thead>
<tr>
<th>Title</th>
<th>Video</th>
<th>Remarks</th>
<th>Action</th>
</tr>
                </thead>
                <tbody>
                    {chapterData.map((chapter)=>
                    <tr>
                    <td><Link to='#'>{chapter.title}</Link></td>
                    <td><video controls width="250">
  <source src={chapter.video.url} type="video/webm" />

  <source src={chapter.video.url} type="video/mp4" />

  Download the
  <a href="/media/cc0-videos/flower.webm">WEBM</a>
  or
  <a href="/media/cc0-videos/flower.mp4">MP4</a>
  video.
</video>
</td>

                    <td>{chapter.remarks}</td>
                    <td>
                    <Link to={'/edit-chapter/'+chapter.id} type="button" className=" btn btn-info btn-sm ms-2 "><i className="bi bi-pencil-square"></i></Link>

                        <button onClick={()=>handelDelectClick(chapter.id)} to={'/delete-chapter/'+chapter.id} type="button" className=" btn btn-danger btn-sm "><i className="bi bi-trash "></i></button>
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
export default AllChapter