import React from "react";
import {Link} from 'react-router-dom';

export const NotFound=()=>{
    return(
        <div>
            <Link to="/"><button>Volver</button></Link>
            <h3>NOT FOUND</h3>
        </div>
    )
}
