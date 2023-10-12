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
    <div classname="col-10 row g-0 ">
    <div classname="col-6">
 
    <img
   src="https://img.freepik.com/free-vector/blood-donor-nurse_74855-6262.jpg"
   alt=""
   style={{ border: '2.5px solid #000' }}
 />
 
 
    </div>
    <div>
  <form className="col-6">
    <h2 className="login-title">Login</h2>
    <div className="form-floating mb-3" style={{ marginBottom: '20px' }}>
      <input
        type="email"
        className="form-control"
        id="email"
        placeholder="name@gmail.com"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <label htmlFor="email">Email</label>
    </div>
    <div className="form-floating" style={{ marginBottom: '20px' }}>
      <input
        type="password"
        className="form-control"
        id="password"
        placeholder="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <label htmlFor="password">Password</label>
    </div>
    <div className="text-center" style={{ margin: '20px 0' }}>
      <button className="login-btn py-3 rounded-3" onClick={() => { handleLogin() }}>
        Login
      </button>
      </div>
      <div className="text-center ">
       Not Registered ? Sign Up
      </div>
   </form>
 </div>
  </div>
</div>


  
  

  );
}

export default Login;
