import React from "react";
import './styles/SearchBar.css';
import {Link} from "react-router-dom";

export const SearchBar=(props)=>{
    return(
        <div className="searchbar">
            <button onClick={()=>props.onClickRefress()} className="Refress">Refress</button>
            <input type="text" onChange={(ev)=>props.onChangeSearchBarDog(ev)} value={props.value} placeholder="Search Dog"/>
            <button onClick={()=>props.onClickDog()} className="Buscar">Buscar</button>
            <Link to="/CreateDogs"><button className="CreateDogs">Crear Dogs</button></Link>
        </div>   
    )
}