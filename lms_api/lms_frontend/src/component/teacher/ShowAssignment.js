import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Teachersidebar from "./teachersidebar";
import axios from 'axios';

const baseUrl = 'http://127.0.0.1:8000/api';

function ShowAssignment() {
    const [AssignmentData, setAssignmentData] = useState([]);
    const [totalresult, settotalresult] = useState(0);

    const { student_id, teacher_id } = useParams();

    useEffect(() => {
      try {
          axios.get(`${baseUrl}/student-assignment/${teacher_id}/${student_id}`).then((response) => {
              setAssignmentData(response.data);
              settotalresult(response.data.length);
          });
      } catch (error) {
          console.error(error);
      }
  }, [teacher_id, student_id]);
  
  console.log(AssignmentData); // Check if the data has 'student_status'
  

    return (
        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
                    <Teachersidebar />
                </aside>
                <section className="col-md-9">
                    <div className="card">
                        <h5 className="card-header">All Assignment ({totalresult}) <Link to={`/add-assignment/${student_id}/${teacher_id}`} className="btn btn-sn btn-success btn-sm float-end">Add Assignment</Link></h5>
                        <div className="card-body">
                            <table className="table-bordered table">
                                <thead>
                                    <tr>
                                        <th>Title</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {AssignmentData.map((row, index) => 
                                        <tr key={index}>
                                            <td>{row.title}</td>
                                            <td>
                                            {row.student_status === false && (
    <span className="badge bg-warning">Pending</span>
)}
{row.student_status === true && (
    <span className="badge bg-success">Completed</span>
)}

                                            </td>
                                        </tr>
                                   )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default ShowAssignment;
