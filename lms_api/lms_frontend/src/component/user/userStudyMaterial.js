import { Link,useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from 'axios';
import Sidebar from "./sidebar";

const baseUrl = 'http://127.0.0.1:8000/api';
function UserStudyMaterial(){
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


    return(
        <div className="container mt-4">
        <div className="row">
            <aside className="col-md-3">
       <Sidebar/></aside>
<section className="col-md-9">
<div className="card">
        <h5 className="card-header">All Study Materials ({totalresult}) <Link className="btn btn-success btn-sm float-end" to={'/add-study/'+course_id}>Add Study Material</Link></h5>
        <div className="card-body">
        <table className="table-bordered table ">
                <thead>
<tr>
<th>Title</th>
<th>detail</th>
<th>File</th>
<th>Remarks</th>
</tr>
                </thead>
                <tbody>
                    {studyData.map((row)=>
                    <tr>
                    <td>{row.title}</td>
                    <td>{row.description}</td>
                    <td>
                        <Link to={row.upload}>{row.title}</Link>
</td>

                    <td>{row.remarks}</td>
                  
                    </tr>)}
                </tbody>
            </table>
        </div>
    </div> 
</section>
        </div></div>


    );
}
export default UserStudyMaterial