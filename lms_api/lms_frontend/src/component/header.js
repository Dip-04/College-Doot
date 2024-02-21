import { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [searchString,setsearchString]=useState({
    'search':''
  })
  const teacherLoginStatus = localStorage.getItem('teacherLoginStatus');
  const userLoginStatus = localStorage.getItem('userLoginStatus');
  const handleChange=(event)=>{
    setsearchString({
      ...searchString,
      [event.target.name]:event.target.value
    })
  }
 const searchCourse=()=>{
  if (searchString.search!=''){
    window.location.href='/search/'+searchString.search}
 }
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          College Doot
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <Link className="nav-link active" aria-current="page" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/all-courses">
              Courses
            </Link>
            <Link className="nav-link" to="/about">
              About us
            </Link>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Teacher
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                {!teacherLoginStatus && (
                  <>
                    <li>
                      <Link className="dropdown-item" to="/teacher-login">
                        Login
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/teacher-register">
                        Register
                      </Link>
                    </li>
                  </>
                )}
                {teacherLoginStatus && (
                  <>
                    <li>
                      <Link className="dropdown-item" to="/teacher-dashboard">
                        Dashboard
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/teacher-logout">
                        Logout
                      </Link>
                    </li>
                  </>
                )}
              </ul>
             
            </li>

            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                id="navbarDropdownUser"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                User
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownUser">
                {!userLoginStatus && (
                  <>
                    <li>
                      <Link className="dropdown-item" to="/user-login">
                        Login
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/user-register">
                        Register
                      </Link>
                    </li>
                  </>
                )}
                {userLoginStatus && (
                  <>
                    <li>
                      <Link className="dropdown-item" to="/user-dashboard">
                        Dashboard
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/student-logout">
                        Logout
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </li>  </div>
            <form class="d-flex">
      <input name='search'onChange={handleChange} className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button onClick={searchCourse} className="btn btn-warning" type="button">Search</button>
    </form>
        
        </div>
      </div>
    </nav>
  );
}

export default Header;
