import Home from './Home'
import Header from './header'
import Footer from './footer'
import { Routes,Route } from 'react-router-dom';
import About from "./About";
import CourseDetail from './courseDetail';
import Register from "./user/register";
import Login from "./user/login";
import Dashboard from "./user/dashboard";
import Mycourses from "./user/mycourses";
import FavoriteCourses from "./user/favoritecourses";
import Profilesetting from "./user/profilesetting";
import Changepassword from "./user/changepassword";
import Teacherlogin from "./teacher/teacherlogin";
import Teacherregister from "./teacher/teacherregister";
import TeacherDashboard from "./teacher/teacherdashboard";
import TeacherChangepassword from "./teacher/teacherchangepassword";
import TeacherProfilesetting from "./teacher/teacherprofilesetting";
import Teachercourses from "./teacher/teacher-courses";
import Myuser from "./teacher/myusers";
import Addcourses from "./teacher/addcourses";
import TeacherDetail from "./teacherdetail";
import Allcourses from "./allcourses";
import Popularteachers from "./popularteachers";
import TeacherLogout from "./teacher/teacherLogout";
import Addchapter from "./teacher/addchapter";
import AllChapter from "./teacher/coursechapter"
import EditChapter from "./teacher/editchapter"
import EditCourse from "./teacher/editcourse"
import StudentLogout from "./user/studentLogout";
import EnrolledStudent from "./teacher/enrolledstudents";
import AddAssignment from "./teacher/AddAssignment";
import ShowAssignment from "./teacher/ShowAssignment";
import StudentAssignment from "./user/StudentAssignment";
import AddQuiz from "./teacher/addquiz";
import AllQuiz from "./teacher/AllQuiz";
import EditQuiz from "./teacher/EditQuiz";
import AllQuestion from "./teacher/QuizQuestion";
import AddQuestion from "./teacher/AddquizQuestions";
import EditQuestion from "./teacher/editquestions";
import AssignQuiz from "./teacher/assignquiz";
import CourseQuizList from "./user/CourseQuizList";
import TakeQuiz from "./user/TakeQuiz";
import Search from "./Search";
import StudyMaterial from "./teacher/StudyMaterial";
import Userteacher from "./user/studentteacher";

import AddStudyMaterial from "./teacher/addstudymaterial"

import UserStudyMaterial from './user/userStudyMaterial'

import VerifyTeacher from "./teacher/VerifyTeacher";







function Main() {
  return (
    <div className="App">
  <Header/>
  <Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/about" element={<About/>} />
  <Route path="/detail/:course_id" element={<CourseDetail/>} />
  <Route path="/user-login" element={<Login/>} />
  <Route path="/user-register" element={<Register/>} />
  <Route path="/user-dashboard" element={<Dashboard/>} />
  <Route path="/my-courses" element={<Mycourses/>} />
  <Route path="/favorite-courses" element={<FavoriteCourses/>} />
  <Route path="/profile-setting" element={<Profilesetting/>} />
  <Route path="/change-password" element={<Changepassword/>} />
  <Route path="/teacher-login" element={<Teacherlogin/>} />
  <Route path="/teacher-register" element={<Teacherregister/>} />
  <Route path="/teacher-dashboard" element={<TeacherDashboard/>} />
  <Route path="/teacher-change-password" element={<TeacherChangepassword/>} />
  <Route path="/teacher-profile-setting" element={<TeacherProfilesetting/>} />
  <Route path="/teacher-courses" element={<Teachercourses/>} />
  <Route path="/my-users" element={<Myuser/>} />
  <Route path="/add-courses" element={<Addcourses/>} />
  <Route path="/teacher-detail/:teacher_id" element={<TeacherDetail/>} />
  <Route path="/all-courses" element={<Allcourses/>} />
  <Route path="/popular-teachers" element={<Popularteachers/>} />
  <Route path="/add-chapter/:course_id" element={<Addchapter/>} />
  <Route path="/teacher-logout" element={<TeacherLogout/>} /> 
  <Route path="/all-chapter/:course_id" element={<AllChapter/>} />
  <Route path="/edit-chapter/:chapter_id" element={<EditChapter/>} />
  <Route path="/edit-course/:course_id" element={<EditCourse/>} />
  <Route path="/student-logout" element={<StudentLogout/>} /> 
  <Route path="/enrolled-students/:course_id/" element={<EnrolledStudent/>} /> 
  <Route path="/add-assignment/:student_id/:teacher_id/" element={<AddAssignment/>} /> 
  <Route path="/show-assignment/:student_id/:teacher_id/" element={<ShowAssignment/>} /> 
  <Route path="/my-assignments/" element={<StudentAssignment/>} /> 
  <Route path="/add-quiz/" element={<AddQuiz/>} />
  <Route path="/all-quiz/" element={<AllQuiz/>} />
  <Route path="/edit-quiz/:quiz_id/" element={<EditQuiz/>} />

  <Route path="/all-questions/:quiz_id/" element={<AllQuestion/>} />
  <Route path="/add-quiz-question/:quiz_id/" element={<AddQuestion/>} />
  <Route path="/edit-question/:questions_id/" element={<EditQuestion/>} />
  <Route path="/assign-quiz/:course_id/" element={<AssignQuiz/>} />
  <Route path="/course-quiz/:course_id/" element={<CourseQuizList/>} />
  <Route path="/take-quiz/:quiz_id/" element={<TakeQuiz/>} />

  <Route path="/search/:searchString/" element={<Search/>} />
  <Route path="/study-materials/:course_id/" element={<StudyMaterial/>} />
  {/* <Route path="/edit-study/:study_id/" element={<EditStudy/>} /> */}
  <Route path="/add-study/:course_id/" element={<AddStudyMaterial/>} />
  <Route path="/user-study-materials/:course_id/" element={<UserStudyMaterial/>} />
  <Route path="/verify-teacher/:teacher_id/" element={<VerifyTeacher/>} />
  <Route path="/student-teacher/" element={<Userteacher/>} />



  </Routes>
  <Footer/>
    </div>
  );
}

export default Main;
