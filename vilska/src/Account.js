import React, {useState} from "react";
import Login from "./Login";
import Register from "./Register";

function Account(){
    const [currentForm, setCurrentForm]=useState('login'); //login page to be displayed first
    return(
        <div className='account-page'>
            {currentForm === 'login' ? <Login /> : <Register />}
        </div>
    );
}

export default Account;