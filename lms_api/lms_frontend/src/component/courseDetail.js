import { useParams,Link } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from 'axios';
const baseUrl = 'http://127.0.0.1:8000/api/';
const siteUrl = 'http://127.0.0.1:8000/';

function CourseDetail(){
    let {course_id}=useParams();
    const [courseData,setCourseData]=useState([])
    const [teacherData,setTeacherData]=useState([])
    const [chapterData,setChapterData]=useState([])
    const [relatedcourseData,setRelatedcourseData]=useState([])
    const [userLoginStatus,setuserLoginStatus]=useState([])
    const [enrollStatus,setenrollStatus]=useState([])
    const [ratingStatus,setratingStatus]=useState([])
    const [avgrating,setavgrating]=useState(0)
    const [favoriteStatus,setfavoriteStatus]=useState([])





    const Swal = require('sweetalert2')
    const studentId = localStorage.getItem('studentId');

    useEffect(() => {
      try {
       axios.get(baseUrl + 'course/' + course_id)
.then((response) => {
          setCourseData(response.data);
          setTeacherData(response.data.teacher);
          setChapterData(response.data.course_chapters);
          setRelatedcourseData(JSON.parse(response.data.related_vidoes));
          if(response.data.course_rating!=='' && response.data.course_rating!==null ){
          setavgrating(response.data.course_rating)}

        });
      } catch (error) {
        console.error(error);
      }


      try {
        axios.get(baseUrl+'fetch-enroll-status/'+studentId+'/'+course_id ).then((response) => {
         if(response.data.bool==true){
          setenrollStatus('success')
         }


        });
      } catch (error) {
        console.error(error);
      }
      try {
        axios.get(baseUrl+'fetch-rating-status/'+studentId+'/'+course_id ).then((response) => {
         if(response.data.bool==true){
          setratingStatus('success')
         }


        });
      } catch (error) {
        console.error(error);
      }
      const userLoginStatus = localStorage.getItem('userLoginStatus');
      if (userLoginStatus === 'true') {
       setuserLoginStatus('success')
      }
    
    }, [course_id]);
    const enrollCourse = () => {
      // Get the student's ID from local storage
      const studentId = localStorage.getItem('studentId');
      
      // Ensure that course_id is a valid value
      if (!course_id) {
        console.error("Course ID is missing or invalid.");
        return;
      }
      
      // Create a FormData object to send data in a multipart/form-data format
      const formData = new FormData();
      formData.append('course', course_id); // Assuming course_id is defined
      formData.append('student', studentId);
    
      // Send a POST request to the specified URL
      axios.post(baseUrl + 'student-enroll-course/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((response) => {
        // Handle the success response
        Swal.fire({
          title: 'You have successfully enrolled',
          icon: 'success',
          toast: true,
          timer: 5000,
          position: 'top',
          timerProgressBar: true,
          showCancelButton: false,
        });
        setenrollStatus('success');
      })
      .catch((error) => {
        console.error('Error:', error);
        Swal.fire({
          title: 'Enrollment Failed',
          text: 'There was an error while enrolling in the course.',
          icon: 'error',
          toast: true,
          timer: 5000,
          position: 'top',
          timerProgressBar: true,
          showCancelButton: false,
        });
      });
    }
    
const [RatingData, setRatingData] = useState({
  rating: '',
  review: '',    
 
});


const handleChange = (event) => {
  setRatingData({
    ...RatingData,
    [event.target.name]: event.target.value,
  });
};

const formSubmit=()=>{

  const _formData = new FormData();
_formData.append('course', course_id);
_formData.append('student', studentId);
_formData.append('rating', RatingData.rating);
_formData.append('review', RatingData.review);


  
  try {
    axios.post(baseUrl + 'course-rating/' + course_id, _formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    
    .then((response) => {

   
      Swal.fire({
        title: 'You have successfully enrolled',
        icon: 'success',
        toast: true,
        timer: 5000,
        position: 'top',
        timerProgressBar: true,
        showCancelButton: false,
      });
      setenrollStatus('success')

    })
    
  } catch (error) {
    // Handle Axios or network errors
    console.error('Error:', error);
  }
}
const markAsFavorite = () => {
  const _formData = new FormData();
  _formData.append('course', course_id);  // Add the 'course' field with the 'course_id'
  _formData.append('student', studentId);  // Add the 'student' field with the 'studentId'
  _formData.append('status', true);       // Add the 'status' field with the value 'true'

  try {
    axios.post(baseUrl + 'student-add-favorite-courses/', _formData, {
      headers: {
        'Content-Type': 'multipart/form-data',  // Set the 'Content-Type' header for FormData
      },
    })
    .then((response) => {
      // Handle the response when the request is successful
      Swal.fire({
        title: 'This Course Has Been Added In Your Wish List',
        icon: 'success',
        toast: true,
        timer: 5000,
        position: 'top',
        timerProgressBar: true,
        showCancelButton: false,
      });
      setfavoriteStatus('success');  // Set the 'favoriteStatus' to 'success'
    })
    .catch((error) => {
      // Handle errors that occur during the request
      console.error('Error:', error);
    });
  } catch (error) {
    // Handle Axios or network errors (Note: This block is unlikely to execute)
    console.error('Error:', error);
  }
}

const removeFavorite=(pk)=>{
  const _formData=new FormData();
  _formData.append('course',course_id)
  _formData.append('student',studentId)
  _formData.append('status',false)
  try {
    axios.post(baseUrl + 'student-remove-favorite-courses/'+course_id+'/'+studentId+'/',{
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    
    .then((response) => {
  
   
      Swal.fire({
        title: 'This Course Has Been Remove Frome Your Wish List',
        icon: 'success',
        toast: true,
        timer: 5000,
        position: 'top',
        timerProgressBar: true,
        showCancelButton: false,
      });
      setfavoriteStatus('')
  
    })
    
  } catch (error) {
    // Handle Axios or network errors
    console.error('Error:', error);
  }
  }
try {
  axios.get(baseUrl + 'fetch-favorite-status/'+studentId+'/'+course_id )
  .then((response) => {
if(response.data.bool===true){
  setfavoriteStatus('success')
}else{
  setfavoriteStatus('')
}
 
  })
  
} catch (error) {
  // Handle Axios or network errors
  console.error('Error:', error);
}
console.log(teacherData)

    return(
<div className="container mt-3">
    <div className="row">
 
        <div className="col-4">     
        <img src={courseData.featured_img} className="img-thumbnail" alt={courseData.title}/>

        
           </div>

            <div className="col-8 ">
                <h1 className="text-start">{courseData.title}</h1>
                <p className="text-start">{courseData.description}</p>
                <p className="fw-bold text-start">Techs: {courseData.techs}</p>
                <p className="fw-bold text-start">Course By: <Link to={'/teacher-detail/'+teacherData.id}>{teacherData.first_name +" "+teacherData.last_name} </Link></p>
                <p className="fw-bold text-start">Duration: 3 Hours 30 Minuts</p>
                <p className="fw-bold text-start">Total Enrolled: {courseData.total_enrolled_students} Students</p>
                <p className="fw-bold text-start">Rating: {avgrating}
               {
              enrollStatus==='success' && userLoginStatus==='success' && 
            <>{ ratingStatus!=='success'&&
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#ratingModal">
  Rating
</button>}
{ ratingStatus==='success'&&
<small className=" badge bg-info text-dark ms-2">You Already Rated</small> 
}

<div className="modal fade" id="ratingModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-lg">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Rate for {courseData.title}</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Rating</label>
<select onChange={handleChange} name="rating" className="form-control" >
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
  <option value="4">4</option>
  <option value="5">5</option>

  </select>  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Review</label>
    <textarea onChange={handleChange} className="form-control" name="review" cols="30" rows="10"></textarea>
 </div>

  <button type="submit" onClick={formSubmit} class="btn btn-primary">Submit</button>
</form>      </div>
      
    </div>
  </div>
</div>
</>   }
                 </p>
                {
              enrollStatus==='success' && userLoginStatus==='success' && 
            
                <p className="fw-bold text-start"> <span   className="btn btn-info">Already Enrolled </span></p>
             } 
            {
              userLoginStatus==='success' && enrollStatus!=='success' &&
            
                <p className="fw-bold text-start"> <button  onClick={enrollCourse} type="button" className="btn btn-success">Enroll </button></p>
             }
             {
              userLoginStatus==='success'  && favoriteStatus!=='success' &&
            
                <p className="fw-bold text-start"> <button  onClick={markAsFavorite} title="Add in your favorite course list" type="button" className="btn btn-outline-danger"><i className="bi bi-heart-fill"></i> </button></p>
             }
             {
              userLoginStatus==='success'  && favoriteStatus==='success' &&
            
                <p className="fw-bold text-start"> <button  onClick={removeFavorite} title="Remove from your favorite course list" type="button" className="btn btn-danger"><i className="bi bi-heart-fill"></i> </button></p>
             }
             
               {
              userLoginStatus!=='success' && 
            
               
            <p className="fw-bold text-start"> <Link  to='/user-login' type="button" className="btn btn-danger">Login to Enroll </Link></p>
             } 
             </div>
    </div>
    <div className="card mt-4">
        <div className="card-header">
          In this course
        </div>
        {
              enrollStatus==='success' && userLoginStatus==='success' && 
        <ul className="list-group list-group-flush">
       
         
              {chapterData && chapterData.map((chapter,index)=>
            <> 
            <li className="list-group-item text-start">{chapter.title} 
            <span className="float-end">
                <span className="me-3">1 Hours 30 minuts</span>
                {/* <button className="btn btn-sm btn-danger float-end" data-bs-toggle="modal" data-bs-target="#videoModal1">
  <i className="bi-youtube"></i>
</button></span> */}
<Link  to={chapter.video} target="_blank" className="btn btn-sm btn-danger float-end" > 
  <i className="bi-youtube"></i>
</Link></span>
        
 

          </li>  </>) }

        
</ul>}
    </div>
    <h3 className="border-bottom pb-1 mb-4 mt-5 text-start">Other Courses</h3>

<div className="row mb-4">
{relatedcourseData.map((rcourse, index) => (
          <div className="col-md-3" key={rcourse.pk}>
            <div className="card">
              <img
                src={`${siteUrl}media/${rcourse.fields.featured_img}`}
                className="card-img-top"
                alt={rcourse.fields.title}
              />
              <div className="card-body">
                <h5 className="card-title">
                  <Link target="__blank" to={`/detail/${rcourse.pk}`}>
                    {rcourse.fields.title}
                  </Link>
                </h5>
                <details>
                <p className="card-text"> {rcourse.fields.description}</p></details>
              </div>
            </div>
          </div>
        ))}


</div>
</div>
)
}
export default CourseDetail;