import React, {useState} from "react";

function Login({onFormSwitch}){
    const [username, setUsername]=useState('');
    const [password, setPassword]=useState('');

    function handleSubmit(e){
      e.preventDefault();
      if(validate()){
        fetch('http:localhost:8000/user/'+username).then((res)=>{
          return res.json();
        }).then((data) => {
          console.log('Login successful:', data);
        })
        .catch((err) => {
          const errorMessage = document.createElement('p');
          errorMessage.textContent = 'Login failed due to: ' + err.message;
          document.body.appendChild(errorMessage);
        });
      }
    }
    const validate=()=>{
      let result=true;
      return result;
    }
    return(
        <div className="form-container">
            <h1>WELCOME BACK!</h1>
        <form className="login-form">
            <label htmlFor='username' />
            <input value={username} onChange={(e)=> setUsername(e.target.value)} type='username' placeholder='Username' id='username' name='usrname' />
            <label htmlFor='password' />
            <input value={password} onChange={(e)=> setPassword(e.target.value)} type='password' placeholder='Enter Password' id='password' name='password' />
            <button type="submit">Login</button>
        </form> 
        <button className="btn" onClick={() =>onFormSwitch('register')}>REGISTER</button>
        </div>
    );
}

export default Login;