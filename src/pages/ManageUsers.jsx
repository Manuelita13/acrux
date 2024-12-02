import React from 'react';
import { Link } from "react-router-dom";
import lupa from '../assets/images/lupita.png';
import logo from '../assets/images/image.png';
import iconbasura from '../assets/images/iconbasura.png';
import iconedit from '../assets/images/iconedit.png';
import profilePicture from '../assets/images/taylor.jpg';

const ManageUsers = () => {

  const handleEdit = () => {
    alert("Editar función no implementada aún");
  };

  const handleDelete = () => {
    alert("Eliminar función no implementada aún");
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-black to-sky-500 text-white">

      <header className="flex justify-between items-center m-0">
        <nav className="bg-black flex items-center space-x-60 p-4 w-full">
          <Link to="/">
          <img src={logo} alt="Logo" className="w-16 h-16 mr-72" />
          </Link>
          <Link to="/EditProfile" className="font-bold hover:underline cursor-pointer">Editar Perfil</Link>
          <Link to="/" className="font-bold hover:underline cursor-pointer">Informacion</Link>
          <img src={profilePicture} alt="Taylor Swift Profile Picture" className="flex justify-end size-16 rounded-full" />
        </nav>
      </header>

     
        <main className='p-2'>
          <div className="w-full">
            <table className="w-full border-separate border-spacing-0 text-left text-white overflow-hidden border border-white rounded-lg">
              <thead>
                <tr>
                  <th className="px-4 py-2 border-b border-white">Usuario</th>
                  <th className="px-4 py-2 border-b border-white">Nombre</th>
                  <th className="px-4 py-2 border-b border-white">Cédula</th>
                  <th className="px-4 py-2 border-b border-white">Cargo</th>
                  <th className="px-4 py-2 border-b border-white">Email</th>
                  <th className="px-4 py-2 border-b border-white">Contraseña</th>
                  <th className="px-2 py-2 border-b border-white"><img src={lupa} alt="Buscar" className='w-16 h-16'/></th>
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
      </main>
    </div>
  );
};

export default ManageUsers;