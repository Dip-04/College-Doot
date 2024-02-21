import { Link,useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from 'axios';
const baseUrl = 'http://127.0.0.1:8000/api';

function Sidebar(){
    const [notifData,setnotifData]=useState([])
    const studentId=localStorage.getItem('studentId')
    useEffect(() => {
      try {
        axios.get(baseUrl + '/student/fetch-all-notification/' + studentId)
          .then((response) => {
            console.log(response);
            setnotifData(response.data);
          })
          .catch((error) => {
            console.error(error); 
          });
      } catch (error) {
        console.error(error);
      }
    }, []);
    
      

    return(  <div className="card mt-4">
    <div className="card-header">
        Dashboard 
    </div>
    <ul className="list-group list-group-flush">
        <Link to="/my-courses" className="list-group-item list-group-item-action text-start">My Courses </Link>
            <Link to="/favorite-courses" className="list-group-item list-group-item-action text-start">Favorite Courses 
      </Link>
      <Link to="/student-teacher" className="list-group-item list-group-item-action text-start">Teachers  
      </Link>
      <Link to="/my-assignments/" className="list-group-item list-group-item-action text-start">Assigments 
     <span className="float-end badge bg-danger mt-1">{notifData.length}</span> </Link>
            <Link to="/profile-setting" className="list-group-item list-group-item-action text-start">Profile Setting 
       </Link>
            <Link to="/change-password" className="list-group-item list-group-item-action text-start">Change Password 
      </Link>
            <Link to="/user-login" className="list-group-item list-group-item-action text-start text-danger">Logout 
      </Link>
           
    </ul>
</div>);
}
export default Sidebar;