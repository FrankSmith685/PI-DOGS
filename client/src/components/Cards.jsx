import React from "react";
import "./styles/Cards.css";

export const Cards=(props)=>{
    return(
        <div className="container_cards">
            <h2>{props.name}</h2>
            <img src={props.image} alt="NOT FOUND" width="300px" height="150px"/>
            <p>{props.temperament}</p>
            <p className="weight_min">{props.weight_min}</p>
            <p className="weight_max">{props.weight_max}</p>
            <p >{props.height_min}</p> 
            <p>{props.height_max}</p> 
        </div>
    )
}
