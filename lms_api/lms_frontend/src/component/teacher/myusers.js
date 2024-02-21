import { Link } from "react-router-dom";
import Teachersidebar from "./teachersidebar";
import { useState,useEffect } from "react";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import MessageList from './teachermessages'



const baseUrl = 'http://127.0.0.1:8000/api';
function Myuser(){
const teacherId=localStorage.getItem('teacherId')

    const [studentData,setstudentData]=useState([])
    
    const [groupmsgData, setgroupmsgData] = useState({
      msg_text: '',
    });
const [msgData, setmsgData] = useState({
  msg_text: '',
});

const handleChange = (event) => {
  setmsgData({
    ...msgData,
    [event.target.name]: event.target.value,
  });
 
};
const ghandleChange = (event) => {
 
  setgroupmsgData({
    ...groupmsgData,
    [event.target.name]: event.target.value,
  });
};

const groupformSubmit =  () => {
  
  const grpmsgDataFormData = new FormData();
  grpmsgDataFormData.append('msg_text', groupmsgData.msg_text);
  grpmsgDataFormData.append('msg_from', 'teacher');
  
  try {
     axios.post(baseUrl + '/send-group-message/'+teacherId+'/', grpmsgDataFormData).then((response)=>{
     setgroupmsgData({
      'msg_text':''

     })
      console.log(response)
      });
   

    // window.location.reload();
  } catch (error) {
    console.log(error);
    // Handle the error, e.g., show an error message to the user
  }
}
const formSubmit =  (student_id) => {

  const msgDataFormData = new FormData();
  msgDataFormData.append('msg_text', msgData.msg_text);
  msgDataFormData.append('msg_from', 'teacher');
  
  try {
     axios.post(baseUrl + '/send-message/'+teacherId+'/'+student_id+'/', msgDataFormData).then((response)=>{
     setmsgData({
      'msg_text':''

     })
      console.log(response)
      });
   

    // window.location.reload();
  } catch (error) {
    console.log(error);
    // Handle the error, e.g., show an error message to the user
  }
};
const msgList={
  height:'500px',
  overflow:'auto'

}
useEffect(() => {
  try {
     axios.get(baseUrl+'/fetch-all-enrolled-students/'+teacherId).then((response) => {
      console.log(response.data.first_name); // Log the API response
      setstudentData(response.data);
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
       <Teachersidebar/></aside>
<section className="col-md-9">
<div className="card">
        <h5 className="card-header">All Student List
        
        <button data-bs-toggle='modal' data-bs-target={`#groupmsgmodal`} className="btn btn-primary float-end btn-sm " title="Send Message"><i className="bi bi-chat-fill"></i></button>   

        </h5>
        <div className="modal fade" id={'groupmsgmodal'} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog  ">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel"> 
        
        <span className="text-danger">All Students</span></h5>
        <span className="ms-3 btn btn-sm btn-secondary"><i className="bi bi-bootstrap-reboot"></i></span>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        

  <form>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Message</label>
    <textarea onChange={ghandleChange} value={groupmsgData.msg_text} name="msg_text" type="email" className="form-control" rows='9' id="exampleInputEmail1" aria-describedby="emailHelp"></textarea>
  </div>

  <button type="button" onClick={groupformSubmit}  className="btn btn-primary">Send</button>
</form>



  


      </div>
    
    </div>
  </div>
</div>
        <div className="card-body">
            <table className="table-bordered table ">
                <thead>
<tr>
<th>Name</th>
<th>Image</th>
<th>Roll No</th>
<th>Department</th>
<th>Email Id</th>
<th>enrolled Course</th>

<th>Assignment</th>



</tr>
                </thead>
                <tbody>
                    {studentData.map((row,index)=>
                    <tr >
                    <td>{row.student.first_name} {row.student.last_name}</td>
                    <td><img src={row.student.featured_img} width="80" className="rounde" alt="imggg"/></td>
                    <td>{row.student.rollno}</td>
                    <td>{row.student.department}</td>

                    <td>{row.student.email}</td>
                    <td><Link to={`/detail/${row.course.id}`}>{row.course.title}</Link></td>

<td><Link to={`/show-assignment/${row.student.id}/${teacherId}`} className="btn btn-sn btn-warning mb-2 me-2">Assignments</Link>
<Link to={`/add-assignment/${row.student.id}/${teacherId}`} className="btn btn-sn btn-success me-2 mb-2">Add Assignment</Link>
              <button data-bs-toggle='modal' data-bs-target={`#msgmodal${index}`} className="btn btn-sm btn-dark ms-2" title="Send Message"><i className="bi bi-chat-fill"></i></button>   
              <div className="modal fade" id={`msgmodal${index}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-fullscreen ">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel"> 
        
        <span className="text-danger">{row.student.first_name+' '+row.student.last_name}</span></h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        
<div className="row">
  <div className="col-md-8 mb-2 col-12 border-end " style={msgList}>
   <MessageList teacher_id={teacherId} student_id={row.student.id}/>
  </div>
  <div className="col-md-4 col-12">

  <form>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Message</label>
    <textarea onChange={handleChange} value={msgData.msg_text} name="msg_text" type="email" className="form-control" rows='9' id="exampleInputEmail1" aria-describedby="emailHelp"></textarea>
  </div>

  <button type="button"  onClick={()=>formSubmit(row.student.id)} className="btn btn-primary">Send</button>
</form>



  </div>

</div>


      </div>
    
    </div>
  </div>
</div>  </td>
                    
                    </tr>)}
                </tbody>
            </table>
        </div>
    </div> 
</section>
        </div></div>


    );
}
export default Myuser 