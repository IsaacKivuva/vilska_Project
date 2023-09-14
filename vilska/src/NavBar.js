import React from "react";
import {NavLink} from "react-router-dom";

function NavBar(){
    return(
        <div className="navbar">
            <NavLink to="/">
               Account
            </NavLink>
            <br/>
            <NavLink to="/movies">
               Movies
            </NavLink>
            <NavLink to="/about">
               ABout
            </NavLink>
            <NavLink to="/reviews">
               Reviews
            </NavLink>
            
        </div>
    );
}

export default NavBar;