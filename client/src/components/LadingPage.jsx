import React from "react";
import { Link } from "react-router-dom";
import "./styles/LadingPage.css";


export const LadingPage=()=>{
        return(
            <div id="container">
                <h2>Welcome to the dog app!!</h2>
                <Link to="/home"><button>Home</button></Link>
            </div>

        )
    
}