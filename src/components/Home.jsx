import React from "react";
import '../home.css'
import { Link } from "react-router-dom";
import logo from '../assets/images/image.png';
import profilePicture from '../assets/images/taylor.jpg';
import robot from '../assets/images/robotacrux-removebg-preview.png';
const User = () => {
    return (
        <div className="min-h-screen bg-gradient-to-r from-black to-sky-500 text-white">
            <header className="flex justify-between items-center p-3 m-0">
                <nav className="bg-black flex items-center space-x-80 w-full">
                <img src={logo} alt="Logo" className="w-16 h-16" />                
                <Link to="/LoginPage" className="font-bold hover:underline cursor-pointer">Iniciar Sesion</Link>
                <img src={profilePicture} alt="Taylor Swift Profile Picture" className="flex justify-end size-16 rounded-full" />
                </nav>
            </header>

            <main className="flex justify-center items-center"> 
            <div className="employee-container">
                
                <div className="employee-image-container">
                    <img src={robot} alt="Robot Acrux" />
                </div>
                <div className="employee-text">
                    <h1>¡BIENVENIDO!</h1>
                    <p>
                        Soy Acrux y estoy para impulsarte en todo lo que requieras para ayudarte a mejorar cada día en tu área laboral.
                    </p>
                </div>
            </div>
            </main>

            {/* Botón para el robot */}
            <Link to="/ChatBot">
                <div className="relative group ">
                    <button>
                        <img src={robot} className="flex absolute bottom-0 right-3 rounded-full size-32 border-solid border-2 border-white"/> 
                    </button>
                    <span className="bg-gradient-to-r from-sky-950 to-sky-600 border-4 border-white text-black text-xl font-bold absolute left-2/3 right-40 bottom-16 p-6 opacity-0 group-hover:opacity-100">
                    Inicia tu conversacion con el ChatBot!
                    </span>
                </div>
            </Link>

        </div>
    )
};

export default User;

// En src/home.css se agregan las clases necesarias para el diseño de la página home.