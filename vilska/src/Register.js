import React, {useState} from "react";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


function Register(props){
    const [name, setName]=useState('');
    const [password, setPassword]=useState('');
    
    const navigate=useNavigate();

    function handleSubmit(e){
        e.preventDefault();
        let regobj={name,password};
        fetch('http://localhost:8000/user',{
            method:'POST',
            headers:{'content-type':'application/json'},
            body:JSON.stringify(regobj)
        }).then((res)=>{
            toast.success('Registerd Successfully.')
            navigate('/Movies');
        }).catch((err)=>{
            toast.err('Failed:'+err.message);
        });
    }
    return(
        <div className="form-container">
            <h1>WELCOME TO VILSKA!</h1>
        <form className="register-form" onSubmit={handleSubmit}>
        <label htmlFor='Full Name' />
            <input required value={name} onChange={(e)=> setName(e.target.value)} type='name' placeholder='Full Name' id='name' name='name' />
            <label htmlFor='password' />
            <input required value={password} onChange={(e)=> setPassword(e.target.value)} type='password' placeholder='Enter Password' id='password' name='password' />
            <button>Register</button>
        </form>
        <button className="btn" onClick={() => props.onFormSwitch('login')}>Already have an account?Login</button>
        </div>
    );
}

export default Register;