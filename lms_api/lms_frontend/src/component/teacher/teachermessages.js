import { Link } from "react-router-dom";
import Teachersidebar from "./teachersidebar";
import { useState,useEffect } from "react";
import axios from 'axios';

const baseUrl = 'http://127.0.0.1:8000/api';
function MessageList(props){
    const [msgData,setmsgData]=useState([])

    useEffect(() => {
        try {
          axios.get(baseUrl+'/get-message/'+props.teacher_id+'/'+props.student_id).then((response) => {
            setmsgData(response.data);
           
          });
        } catch (error) {
          console.error(error);
        }
      }, []);
      const Swal = require('sweetalert2')
      const fetchmsg=()=>{
        try {
          axios.get(baseUrl + '/get-message/'+props.teacher_id+'/'+props.student_id+'/').then((response)=>{
          setmsgData(response.data)
          const objDiv=document.getElementById('msgList')
           });
        
      
         // window.location.reload();
       } catch (error) {
         console.log(error);
         // Handle the error, e.g., show an error message to the user
       }
      }
         
      
    return(
        <>
    
        <p>  <span className=" btn btn-sm btn-secondary" onClick={fetchmsg} title="Refresh"><i className="bi bi-bootstrap-reboot"></i></span></p>
        {msgData.map((row)=>
    
        <div className="row ">
{row.msg_from != 'teacher' &&
        <div className="col-5">
      <div className="alert alert-success mb-1 " role="alert">
      {row.msg_text}
      </div>
      <small className="text-muted">{row.msg_time}</small>
  </div>}
  {row.msg_from == 'teacher' &&

  <div className="col-5 offset-7">
  
  <div className="alert alert-primary mb-1" role="alert">
 {row.msg_text}

  </div>      <small className="text-muted">{row.msg_time}</small>
</div>}</div>

    )}

  </>
    );
}
export default MessageList