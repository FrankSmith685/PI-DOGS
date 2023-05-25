import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetailDogs } from "../redux/action";
import imagen from'../images/dog_run.gif';
import {Link, useParams} from 'react-router-dom';

 const DetailDogs=(props)=>{
    const { id } = useParams();
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
            dispatch(getDetailDogs(id));
            setTimeout(() => {
                    setState({...state,loading:false});
            }, 1000);
    },[dispatch]);

    return (
        <div className="bg-gradient-to-r h-auto from-gray-500 to-gray-800 py-8 px-4">
  <div className="max-w-2xl mx-auto">
    <div className="flex justify-between items-center mb-4">
      <Link to="/Home">
        <button className="bg-pink-700 hover:bg-pink-900 text-white font-bold py-2 px-4 rounded">
          Volver
        </button>
      </Link>
    </div>
    <div className="bg-white shadow-lg rounded-lg p-6">
      {state.loading ? (
        <div className="flex items-center">
          <div className="rounded-full bg-purple-200 h-16 w-16 flex items-center justify-center mr-4">
            <svg
              className="animate-spin h-8 w-8 text-purple-500"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647zm5 2.647C18.627 20.937 24 15.565 24 9h-4c0 3.042-1.135 5.824-3 7.938l-3-2.647zM20 12a8 8 0 01-8 8v4c5.373 0 10-4.627 10-10h-4z"
              ></path>
            </svg>
          </div>
          <p className="text-purple-600">Cargando data...</p>
        </div>
      ) : (
        <div>
          <h2 className="text-3xl font-bold mb-4 text-purple-900 text-center">{detailsDogs.name}</h2>
          <div className="w-full flex items-center justify-center">
            <img
                src={detailsDogs.image}
                alt="NOT FOUND"
                className="w-300  h-150 mb-4 rounded-lg shadow-md"
            />
          </div>
          
          <p className="text-gray-800 text-lg mb-2 text-center">{name?.join(", ")}</p>
          <div className="flex justify-between px-10">
            <p className="text-purple-600 mb-1">
                Height min: {detailsDogs.height?.[0]}Cm
            </p>
            <p className="text-purple-600 mb-1">
                {detailsDogs.height?.[1] ? "Height max: " + detailsDogs.height[1] + "Cm" : ""}
            </p>
          </div>
          <div className="flex justify-between px-10">
            <p className="text-purple-600 mb-1">
                Weight min: {detailsDogs.weight?.[0]}Kg
            </p>
            <p className="text-purple-600 mb-1">
                {detailsDogs.weight?.[1] ? "Weight max: " + detailsDogs.weight[1] + "Kg" : ""}
            </p>
          </div>
          
          <p className="text-gray-800 text-center">Life Span: {detailsDogs.life_span}</p>
        </div>
      )}
    </div>
  </div>
</div>


    )
}

export default DetailDogs;