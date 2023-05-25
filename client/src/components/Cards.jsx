import React from "react";

const Card=(prop)=>{
    return(
        <div className="w-full  h-full ">
            <div className="m-1 bg-gray-800 relative">
                <h2 className="h-12 flex items-center justify-center text-white text-center">{prop.nombre}</h2>
                <div className="w-full h-48">
                    <img src={prop.imagen} className="w-full h-full" alt="No se encontró la imagen" />
                </div>
                <div className="p-2 text-center h-40">
                    {prop.temperament}  
                </div>
                    <div className="absolute bottom-0 text-white font-semibold h-12 w-full flex justify-between items-center px-8">
                        <span>weight min: {prop.weight_min}Kg</span>
                        <span>weight max: {prop.weight_max}Kg</span>
                    </div>
            </div>
        </div>
    )
}

export default Card;