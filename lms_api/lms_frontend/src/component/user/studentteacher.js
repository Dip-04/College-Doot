import { Link } from "react-router-dom";
import SideBar from "./sidebar";
import { useState,useEffect } from "react";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import MessageList from './studentmessege'


const baseUrl = 'http://127.0.0.1:8000/api';
function StudentTeacher(){
const studentId=localStorage.getItem('studentId')

    const [teacherData,setteacherData]=useState([])
    
  
const [msgData, setmsgData] = useState({
  msg_text: '',
});

const handleChange = (event) => {
  setmsgData({
    ...msgData,
    [event.target.name]: event.target.value,
  });
 
};


const formSubmit =  (teacher_id) => {

  const msgDataFormData = new FormData();
  msgDataFormData.append('msg_text', msgData.msg_text);
  msgDataFormData.append('msg_from', 'student');
  
  try {
     axios.post(baseUrl + '/send-message-to-teacher/'+studentId+'/'+teacher_id+'/', msgDataFormData).then((response)=>{
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
     axios.get(baseUrl+'/fetch-all-enrolled-teacher/'+studentId).then((response) => {
      console.log(response.data.first_name); // Log the API response
      setteacherData(response.data);
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
       <SideBar/></aside>
<section className="col-md-9">
<div className="card">
        <h5 className="card-header">All Teacher List
        

        </h5>

        <div className="card-body">
            <table className="table-bordered table ">
                <thead>
<tr>
<th>Name</th>

<th>Action</th>



</tr>
                </thead>
                <tbody>
                    {teacherData.map((row,index)=>
                    <tr >
                    <td>{row.teacher.first_name} {row.teacher.last_name}</td>
              

<td> <button data-bs-toggle='modal' data-bs-target={`#msgmodal${index}`} className="btn btn-sm btn-dark ms-2" title="Send Message"><i className="bi bi-chat-fill"></i></button>   
              <div className="modal fade" id={`msgmodal${index}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-fullscreen ">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel"> 
        
        <span className="text-danger">{row.teacher.first_name+' '+row.teacher.last_name}</span></h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        
<div className="row">
  <div className="col-md-8 mb-2 col-12 border-end " style={msgList}>
  <MessageList student_id={studentId} teacher_id={row.teacher.id}/>
  </div>
  <div className="col-md-4 col-12">

  <form>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Message</label>
    <textarea onChange={handleChange} value={msgData.msg_text} name="msg_text" type="email" className="form-control" rows='9' id="exampleInputEmail1" aria-describedby="emailHelp"></textarea>
  </div>

  <button type="button"  onClick={()=>formSubmit(row.teacher.id)} className="btn btn-primary">Send</button>
</form>



  </div>

</div>


      </div>
    
    </div>
  </div>
</div>  
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
export default StudentTeacher 