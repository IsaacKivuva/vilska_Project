import React, {useState, useEffect} from "react";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function Login({onFormSwitch}){
    const [username, setUsername]=useState('');
    const [password, setPassword]=useState('');
 
    const navigate=useNavigate();
    useEffect(()=>{
        sessionStorage.clear()
    },[])

    function handleSubmit(e){
        e.preventDefault();
        let regobj={username,password};
        
        fetch('http://localhost:8000/user',{
            method:'POST',
            headers:{'content-type':'application/json'},
            body:JSON.stringify(regobj)
        }).then((res)=>{
            toast.success('Login Successfully.')
            navigate('/Movies');
        }).catch((err)=>{
            toast.err('Failed:'+err.message);
        });
    }
    return(
        <div className="form-container">
            <h1>WELCOME BACK!</h1>
        <form className="login-form" onSubmit={handleSubmit}>
            <label htmlFor='username' />
            <input required value={username} onChange={(e)=> setUsername(e.target.value)} type='username' placeholder='Username' id='username' name='usrname' />
            <label htmlFor='password' />
            <input required value={password} onChange={(e)=> setPassword(e.target.value)} type='password' placeholder='Enter Password' id='password' name='password' />
            <button type="submit">Login</button>
        </form> 
        <button className="btn" onClick={() =>onFormSwitch('register')}>REGISTER</button>
        </div>
    );
}

export default Login;