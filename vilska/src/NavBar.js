import React from "react";
import {NavLink} from "react-router-dom";
import "./App.css"

function NavBar(){
    return(
        <div className="navbar">

            <header className="heading">
               <h1>vislka.</h1>
            </header>

            <NavLink to="/">
               Account
            </NavLink>
            
            <NavLink to="/movies">
               Movies
            </NavLink>
            <NavLink to="/reviews">
               Reviews
            </NavLink>
            <NavLink to="/about"> 
               About
            </NavLink>
            
        </div>
    );
}

export default NavBar;