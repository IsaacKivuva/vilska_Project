import React, {useState} from "react";

function Register(props){
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');
    const [name, setName]=useState('');

    function handleSubmit(e){
        e.preventDefault();
    }
    return(
        <div className="form-container">
        <form onSubmit={handleSubmit}>
        <label htmlFor='Full Name' />
            <input value={name} onChange={(e)=> setName(e.target.value)} type='name' placeholder='Full Name' id='name' name='name' />
            <label htmlFor='email' />
            <input value={email} onChange={(e)=> setEmail(e.target.value)} type='email' placeholder='Email Address' id='email' name='email' />
            <label htmlFor='password' />
            <input value={password} onChange={(e)=> setPassword(e.target.value)} type='password' placeholder='Enter Password' id='password' name='password' />
            <button>Register</button>
        </form>
        <button onClick={() => props.onFormSwitch('login')}>Create your account!</button>
        </div>
    );
}

export default Register;