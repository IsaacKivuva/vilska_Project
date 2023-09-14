import React, {useState} from "react";
import Login from "./Login";
import Register from "./Register";

function Account(){
    const [currentForm, setCurrentForm]=useState('login'); //login page to be displayed first
    
    function toggleForm(formName){
        setCurrentForm(formName);
    }
    return(
        <div className='account-page'>
            {currentForm === 'login' ? <Login onFormSwitch={toggleForm}/> : <Register onFormSwitch={toggleForm}/>}
        </div>
    );
}

export default Account;