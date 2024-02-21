import { Link } from "react-router-dom";

function Teachersidebar(){
    return(  <div className="card mt-4">
    <div className="card-header">
        Dashboard 
    </div>
    <ul className="list-group list-group-flush">
        <Link to="/teacher-courses" className="list-group-item list-group-item-action text-start">My Courses </Link>
            <Link to="/my-users" className="list-group-item list-group-item-action text-start">My Users 
      </Link>
            <Link to="/add-courses" className="list-group-item list-group-item-action text-start">Add Courses 
       </Link>
       <Link to="/teacher-profile-setting" className="list-group-item list-group-item-action text-start">Profile Setting 
       </Link>
       <Link to="/all-quiz" className="list-group-item list-group-item-action text-start">Quiz 
       </Link>
       <Link to="/add-quiz" className="list-group-item list-group-item-action text-start">Add Quiz 
       </Link>
            <Link to="/teacher-change-password" className="list-group-item list-group-item-action text-start">Change Password 
      </Link>
            <Link to="/teacher-login" className="list-group-item list-group-item-action text-start text-danger">Logout 
      </Link>
           
    </ul>
</div>);
}
export default Teachersidebar;