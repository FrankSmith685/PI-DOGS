import React from "react";
import NavBar from "./NavBar";
import {DiJavascript1, DiPostgresql, DiReact} from "react-icons/di"
import { FaGithub, FaHtml5, FaLinkedin } from "react-icons/fa";
import {IoLogoCss3} from "react-icons/io";
import {SiExpress, SiRedux} from "react-icons/si";
import {AiOutlineMail} from "react-icons/ai";

export default function About() {
  return (
    <>
    
    <div className="w-full h-screen ">
                <NavBar/>
                <div className="bg-white py-0  flex items-center justify-center px-72">
                <div className="bg-gradient-to-r w-auto h-auto px-3 py-5 from-gray-500 to-gray-800 ">
                    <h2 className="text-white font-bold text-3xl text-center ">Henry-Dogs</h2>
                    <p className="text-white text-center py-5">This project was created as part of my fullstack developer education at Henry bootcamp. In order to map all the 
                        different breeds, this app consumes data from the dogs API. It is also possible to create a new dog breed, entering 
                        a name, weight, height, life span and temperaments.
                        Any feedback you can provide will be greatly appreciated. Thank you, and don't forget to create your own breed!
                    </p>
                    <h2 className="text-white text-xl text-center font-bold">Used technologies:</h2>
                    <div className="flex w-full justify-center text-5xl font-bold text-white py-5 space-x-2">
                        <DiJavascript1/>
                        <FaHtml5/>
                        <IoLogoCss3/>
                        <DiReact/>
                        <SiRedux/>
                        <SiExpress/>
                        <DiPostgresql/>
                    </div>
                    <h2 className="text-white text-xl text-center font-bold">Contact</h2>
                    <div className="flex w-full justify-center text-5xl font-bold text-white space-x-3">
                        <a href="https://www.linkedin.com/in/frank-smith-bocangelino-rojas-351157168/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                                <FaLinkedin />
                        </a>
                        <a href="https://github.com/FrankSmith685" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                                <FaGithub />
                        </a>
                    </div>
                    <div className="flex w-full h-full items-center justify-center py-5 space-x-2">
                        <hr className="w-96 text-white h-2"/>
                        
                        <span className="text-white font-bold text-xl">o</span>
                        <hr className="w-96 text-white h-2"/>
                    </div>

                    <div className="flex w-full justify-center text-4xl font-bold text-white">
                        <AiOutlineMail/>
                    </div>
                    <p className="text-center text-white text-lg">
                        <a href="mailto:f.s.b.rojas@gmail.com" className="underline">
                            f.s.b.rojas@gmail.com
                        </a>
                    </p>

                    

                </div>
            </div>
      
    </div>
    </>
  );
}
