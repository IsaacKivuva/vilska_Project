import React from "react";
import {NavLink} from "react-router-dom";

function NavBar(){
    return(
        <div className="navbar">
            <NavLink to="/">
               Account
            </NavLink>
            <NavLink to="/movies">
               Movies
            </NavLink>
        </div>
    );
}

export default NavBar;