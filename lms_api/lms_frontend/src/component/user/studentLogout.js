function StudentLogout(){
     localStorage.removeItem('userLoginStatus')
     window.location.href='/user-login'
  
    return(<div>
    
    </div>);
}
export default StudentLogout;