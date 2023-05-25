import React from "react";
import imagenLading from "../images/main_dog.jpg";
import {FaLinkedin,FaGithub} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
 

const LadingPage=()=>{

    const navigate = useNavigate();

    const handleClickIngresar=(event)=>{
        event.preventDefault();
        navigate("/home");
        
    }

    return(
        <div className="h-screen w-screen relative">
            <img src={imagenLading} alt="Imagen de Fondo"  className="h-full w-full object-cover"/>
            <div className="bg-favorite01 absolute top-0 w-full h-full">
                <div className="flex w-full h-full items-center justify-center">
                    <div className="w-auto h-auto ">
                        <h2 className="text-white font-bold text-2xl text-center md:text-4xl">Bienvenido a la aplicación de <span className="text-orange-500"> Henry-Dogs!!</span></h2>
                        <div className="flex items-center justify-center mt-4">
                            <button className=" bg-white w-1/2 font-bold text-base md:text-xl py-1 md:py-2 rounded-2xl" onClick={(event)=>handleClickIngresar(event)}>Ingresar</button>
                        </div>
                        <div className=" mt-10 w-full flex flex-nowrap space-x-10">
                        <div className="w-full  text-lg md:text-2xl border-b-2 font-semibold">
                            <a href="https://www.linkedin.com/in/frank-smith-bocangelino-rojas-351157168/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                                <FaLinkedin />
                                <span>Linkedin</span>
                            </a>
                        </div>

                        <div className="w-full  text-lg md:text-2xl border-b-2 font-semibold">
                            <a href="https://github.com/FrankSmith685" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                                <FaGithub />
                                <span>Github</span>
                            </a>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LadingPage;