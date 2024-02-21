import { Link,useParams } from "react-router-dom";
import Teachersidebar from "./teachersidebar";
import { useState,useEffect } from "react";
import axios from 'axios';

const baseUrl = 'http://127.0.0.1:8000/api';
function StudyMaterial(){
    const [studyData,setstudyData]=useState([])
    const [totalresult,settotalresult]=useState(0)

const {course_id}=useParams()
    useEffect(() => {
        try {
          axios.get(baseUrl+'/study-materials/'+course_id  ).then((response) => {
            setstudyData(response.data);
            settotalresult(response.data.length);

          });
        } catch (error) {
          console.error(error);
        }
      }, []);
      const Swal = require('sweetalert2')

const handelDelectClick=(study_id)=>{
    Swal.fire({
        title: '    Confirm!',
        text: 'Are You Sure You Want To Delete This?',
        icon: 'info',
        confirmButtonText: 'Conitnue',
        showCancelButton: true
      }).then((result)=>{
        if(result.isConfirmed){
        try {
            axios.delete(baseUrl+'/study-material/'+study_id+'/'  ).then((response) => {
              Swal.fire('success','Data has been deleted.')
              try {
                axios.get(baseUrl+'/study-materials/'+course_id  ).then((response) => {
                  setstudyData(response.data);
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
        <h5 className="card-header">All Study Materials ({totalresult}) <Link className="btn btn-success btn-sm float-end" to={'/add-study/'+course_id}>Add Study Material</Link></h5>
        <div className="card-body">
        <table className="table-bordered table ">
                <thead>
<tr>
<th>Title</th>
<th>File</th>
<th>Remarks</th>
<th>Action</th>
</tr>
                </thead>
                <tbody>
                    {studyData.map((row)=>
                    <tr>
                    <td>{row.title}</td>
                    <td>
                        <Link to={row.upload}>{row.title}</Link>
</td>

                    <td>{row.remarks}</td>
                    <td>

                        <button onClick={()=>handelDelectClick(row.id)} to={'/delete-study/'+row.id} type="button" className=" btn btn-danger btn-sm "><i className="bi bi-trash "></i></button>
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
export default StudyMaterial