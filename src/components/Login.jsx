import './Login.css';
import {useState} from 'react';
function Login(){
  const[users,setUser]=useState({
   "uname":"demo",
   "password":"1234"
  })

  const [name,setName]=useState("");
  const [ps,setps]=useState("");
  function handleSubmit(e){
    e.preventDefault();
    alert("submited");
    console.log ("Current State:"+ name);
    console.log ("Current State:"+ ps);
    setUser(
      {
        "uname":name,
        "password":ps
      }
    );
    console.log(users);
  }
  return (

    <div className="Login-box">
        <h1 id="greet">Welcome Back</h1>
        <p className="paratag">Login with your account</p>
        
        <form className="login-form" onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter Username" id="uname" name="uname" className="input-box" onChange={(e)=>setName(e.target.value)}/>
            <br/>
            <input type="password" placeholder="Enter Password" id="password" name="password" className="input-box" onChange={(e)=>setps(e.target.value)}/>
            <br/>
            <input type="submit" value="Login" className="btn"/>

        </form>
    </div>

  )
}
export default Login;