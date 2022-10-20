import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetailDogs } from "../redux/action";
import './styles/DetailDogs.css';
import imagen from'.././image/dog_run.gif';
import {Link} from 'react-router-dom';

export const DetailDogs=(props)=>{
    const dispatch=useDispatch();
    const detailsDogs=useSelector(state=>state.detail_dogs);
    //validar el temperament de cada dogs
    var name=[]
    detailsDogs.temperaments?.forEach(t=>{
        if(t.name){
            name.push(t.name);
        }else{
            name.push(t);
        }
    })

    const [state,setState]=useState({
        loading:true
    })
    
    useEffect(()=>{
            dispatch(getDetailDogs(props.match.params.id));
            setTimeout(() => {
                    setState({...state,loading:false});
            }, 1000);
    },[dispatch]);

    return (
        <div className="DetailsDogs">
            <div className="barMenuDetails">
            <Link to="/Home"><button>Volver</button></Link>
            </div>
        <div className="subcontainerdetalle">
                <div className="cardsDetalle">
                {state.loading ?(
                <div className="cargando">
                    <img src={imagen} alt="NOT FOUND" />
                    <p>Cargando data...</p>
                    
                </div>
                ):(
                    <div>
                    <h2>{detailsDogs.name}</h2>
                    <img src={detailsDogs.image} alt="NOT FOUND" width="300px" height="150px"/>
                    <p>{name?.join(" ")}</p>
                    <p className="height_min">Height min: {detailsDogs.height?.[0]}Cm</p>
                    <p className="height_max">{detailsDogs.height?.[1]?"Height max: "+detailsDogs.height[1]+"Cm":""}</p>
                    <p className="weight_min">Weight min: {detailsDogs.weight?.[0]}Kg</p>
                    <p className="weight_max">{detailsDogs.weight?.[1]?"Weight max: "+detailsDogs.weight[1]+"Kg":""}</p>
                    <p>Life Span: {detailsDogs.life_span}</p>
                    </div>
                )
                }   
                </div>
            
        </div>
        </div>
    )
}