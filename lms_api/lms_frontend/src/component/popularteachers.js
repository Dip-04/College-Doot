import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios';

const baseUrl = 'http://127.0.0.1:8000/api';
function Popularteachers() {
 
    
  const [teacher, setTeacher] = useState(null);
  useEffect(() => {
    axios.get(baseUrl + '/teacher/')
      .then((response) => {
        setTeacher(response.data);
      })
      .catch((error) => {

        console.error('AxiosError:', error);
      });
  }, []);
  
 
  useEffect(() => {
    document.title = 'All Teachers ';
  });

    return(
<div className="container mt-3">
<h3 className="border-bottom pb-1 mb-4 mt-5 text-start">All Teachers </h3>

<div className="row mb-4">
{teacher && teacher.map((teacher,index)=>

<div className="col-md-3">
<div className="card" >
<img src={teacher.featured_img} className="card-img-top" alt="..."/>
<div className="card-body">
  <h5 className="card-title"><Link to={`/teacher-detail/${teacher.id}`}>{teacher.first_name+' '+teacher.last_name}</Link></h5>
</div>
</div>
</div>
)}

</div>
</div>
    )
}
export default Popularteachers;