import React, {useState} from "react";

function Login(props){
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');

    function handleSubmit(e){
        e.preventDefault();
    }
    return(
        <div className="form-container">
        <form onSubmit={handleSubmit}>
            <label htmlFor='email' />
            <input value={email} onChange={(e)=> setEmail(e.target.value)} type='email' placeholder='Email Address' id='email' name='email' />
            <label htmlFor='password' />
            <input value={password} onChange={(e)=> setPassword(e.target.value)} type='password' placeholder='Enter Password' id='password' name='password' />
            <button>Login</button>
        </form> 
        <button onClick={() => props.onFormSwitch('register')}>Already have an account? Login</button>
        </div>
    );
}

export default Login;