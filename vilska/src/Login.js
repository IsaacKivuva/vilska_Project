import React, {useState} from "react";

function Login(props){
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');

    function handleSubmit(e){
        e.preventDefault();
    }
    return(
        <div className="form-container">
            <h1>WELCOME BACK!</h1>
        <form className="login-form" onSubmit={handleSubmit}>
            <label htmlFor='email' />
            <input value={email} onChange={(e)=> setEmail(e.target.value)} type='email' placeholder='Email Address' id='email' name='email' />
            <label htmlFor='password' />
            <input value={password} onChange={(e)=> setPassword(e.target.value)} type='password' placeholder='Enter Password' id='password' name='password' />
            <button>Login</button>
        </form> 
        <button className="btn" onClick={() => props.onFormSwitch('register')}>Create a new account!</button>
        </div>
    );
}

export default Login;