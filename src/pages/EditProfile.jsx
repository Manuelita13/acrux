import React from 'react';
import { Link } from "react-router-dom";
import lupa from '../assets/images/lupita.png';
import logo from '../assets/images/image.png';
import iconbasura from '../assets/images/iconbasura.png';
import iconedit from '../assets/images/iconedit.png';
import profilePicture from '../assets/images/taylor.jpg';

const EditProfile = () => {
  const handleEdit = () => {
    alert("Editar función no implementada aún");
  };

  const handleDelete = () => {
    alert("Eliminar función no implementada aún");
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-black to-sky-500 text-white">

      <header className="flex justify-between items-center p-3 m-0">
        <nav className="bg-black flex items-center space-x-60 p-1 w-full">
          <Link to="/">
          <img src={logo} alt="Logo" className="w-16 h-16 mr-72" />
          </Link>
          <Link to="/EditProfile" className="font-bold hover:underline cursor-pointer">Editar Perfil</Link>
          <Link to="/" className="font-bold hover:underline cursor-pointer">Informacion</Link>
          <img src={profilePicture} alt="Taylor Swift Profile Picture" className="flex justify-end size-16 rounded-full" />
        </nav>
      </header>

     
      <main className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
       
          <div className="w-full max-w-lg mx-auto">
            <div className="relative mb-6">
              <img src={lupa} alt="Buscar" className="absolute top-1/2 transform -translate-y-1/2 left-4 w-6 h-6" />
              <input
                type="text"
                className="w-full bg-transparent text-white pl-12 pr-4 py-2 border border-white rounded-full"
                placeholder="Buscar Información"
              />
            </div>
            <div className="mb-6">
              <label className="text-white font-bold block mb-2">Área Laboral</label>
              <input
                type="text"
                className="w-full bg-white text-black px-4 py-3 rounded-full"
                placeholder="Ingrese su área laboral"
              />
            </div>
            <div className="mb-8">
              <label className="text-white font-bold block mb-2">Información:</label>
              <textarea
                className="w-full bg-white text-black px-4 py-3 rounded-2xl"
                rows={4}
                placeholder="Escribe aquí la información que quieras agregar para que te responda sobre eso en cualquier momento"
              ></textarea>
            </div>
            <button className="w-full bg-gradient-to-r from-sky-950 to-sky-600 text-white font-semibold py-3 rounded-full hover:bg-white transform transition duration-500 hover:scale-105">
              Guardar Cambios
            </button>
          </div>

          <div className="w-full max-w-2xl">
            <table className="w-full border-separate border-spacing-0 text-left text-white overflow-hidden border border-white rounded-lg">
              <thead>
                <tr>
                  <th className="px-4 py-2 border-b border-white">Área Laboral</th>
                  <th className="px-4 py-2 border-b border-white">Información</th>
                  <th className="px-4 py-2 border-b border-white">Editar</th>
                  <th className="px-4 py-2 border-b border-white">Eliminar</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2 border border-white">Recursos Humanos</td>
                  <td className="px-4 py-2 border border-white">
                    Es el término utilizado para describir la gestión y el desarrollo de los empleados de una organización.
                  </td>
                  <td className="px-4 py-2 border border-white">
                    <button
                      onClick={handleEdit}
                      className="flex items-center justify-center w-10 h-10 transparent-600 hover:bg-sky-800 rounded-full"
                    >
                      <img
                        src={iconedit}
                        alt="Editar"
                        className="w-6 h-6 object-contain"
                      />
                    </button>
                  </td>
                  <td className="px-4 py-2 border border-white">
                    <button
                      onClick={handleDelete}
                      className="flex items-center justify-center w-10 h-10 transparent-600 hover:bg-red-800 rounded-full"
                    >
                      <img
                        src={iconbasura}
                        alt="Eliminar"
                        className="w-6 h-6 object-contain"
                      />
                    </button>
                  </td>
                </tr>
                
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default EditProfile;