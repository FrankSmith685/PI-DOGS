import React from "react";
import './styles/Pagination.css'

export const Pagination=({totalPagination,nroPaginado,onClickPagination})=>{
    var pagination=[];

    for(let i=1;i<=Math.ceil(totalPagination/nroPaginado);i++){
        pagination.push(i);
    }
    return(
        <div className="Pagination">
            <ul>
            {
                pagination.map(N=>{
                    return(
                        <button key={N} onClick={()=>onClickPagination(N)}>{N}</button>
                    )
                })
            }
            </ul>
            
        </div>
    )
}
