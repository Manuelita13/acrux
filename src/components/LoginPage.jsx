import React from 'react'
import logoblanco from '../assets/images/image.png';
import { Link } from "react-router-dom";


function LoginPage() {
  return (

    <div className='flex items-center justify-center min-h-screen  bg-gradient-to-br from-black to-[#0170b8]'>
    <form className='px-4 max-w-md w-[400px] bg-black shadow-md rounded-lg p-8'>
        <div className="mb-6 flex justify-center">
            <img className='w-[200px] h-[200px] object-cove' src={logoblanco} alt="" />
        </div>
        <div className='block justify-center'>
        <h2 className='text-2xl font-bold mb-3 text-left text-white'>INICIAR SESIÓN</h2>
        <div className="mb-3">
            <input
                type="text"
                id="cedula"
                className='bg-black border border-white rounded-none p-2 w-[350px] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2'
                placeholder="Cédula"
            />
        </div>
        <div className="mb-4">
            <input
                type="password"
                id="password"
                className='bg-black border border-white rounded-none p-2 w-[350px] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500'
                placeholder="Contraseña"
            />
        </div>
        </div>
        <div className="flex justify-center mb-4">
            <Link to="/">
                <button className='text-white text-xl font-bold bg-blue-500 rounded-lg px-4 py-2 hover:bg-blue-600'>
                    Iniciar Sesión
                </button>
            </Link>

        </div>

    </form>
</div>
  )
}

export default LoginPage
