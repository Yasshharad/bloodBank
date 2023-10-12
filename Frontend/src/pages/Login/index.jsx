
import React, {useState} from 'react'
import "./style.css"
function Login() {
   const [email, setEmail]= useState();
   const [password, setPassword]= useState();


const handleLogin =  () =>{
  alert("Login successfull");
}
  return (
   
   <div className="row g-0 vh-100 justify-content-center align-items-center login-container">
   <div classname="col-10 row g-0 align-items-center bg-white">
   <div classname="col-6">




<center>
    <img src="https://img.freepik.com/free-vector/blood-donor-nurse_74855-6262.jpg" alt="" className='img-fluid'/></center>
   </div><div><center>
  <form className="col-6 py-4 px-3" >
  <h2 className="login-title text-center py-2 mb-4">Login</h2>
  <div classname="form-floating mb-3">
    <input type="email" className="form-control" id="email" placeholder='name@gmail.com' onChange={(e)=>{setEmail(e.target.value)}} />
    <label htmlFor="email">Email</label>
  </div>
  <div classname="form-floating py-2 mb-4">
    <input type="password" className="form-control" id="password" placeholder='password' onChange={(e)=>{setPassword(e.target.value)}} />
    <label htmlFor="password">Password</label>
    </div>
     <div classname="text-center">
      <button className="login-btn py-3 rounded-3" onClick={()=>{handleLogin()}} >
        Login
      </button>
     </div>
     <div className="text-center ">
      Not Registered ? Sign Up
     </div>
  </form>
</center></div>



    </div>




   </div>

  );
}

export default Login;