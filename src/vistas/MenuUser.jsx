import React, { useState } from 'react';
import computadora from '../componentes/imagenes/computadora.png';
import estadisticas from '../componentes/imagenes/estadistic.png';
import bloc from '../componentes/imagenes/bloc.png';
import flor from '../componentes/imagenes/flor.png'
import configuracion from '../componentes/imagenes/configuracion.png';
import camara from '../componentes/imagenes/camara.png';
import perfil from '../componentes/imagenes/perfil.png';
import { FaBars } from 'react-icons/fa';
import { Link, Outlet } from 'react-router-dom';

export default function MenuUser() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [PerfilOpen, setPerfilOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const Perfil = () => {
    setPerfilOpen(!PerfilOpen);
  };

  const PerfilContent = () => {
    return (
      <div className="bg-white p-4 rounded-lg shadow-md mt-2 absolute top-16 right-0 w-80">
        <div className="flex flex-col items-center mb-4">
          <img src={perfil} alt="Foto de perfil" className="w-16 h-16 rounded-full mr-4" />
          <div>
            <p className="text-lg font-semibold text-gray-600">¡Hola, Horti-Tech!</p>
            <p className="text-sm text-gray-600">Horti-Tech@ejemplo.com</p>
          </div>
        </div>
        <div className="flex justify-around items-center aline">
          <button className="bg-gradient-to-r from-gray-300 to-green-700 text-white font-bold py1 px-4 rounded">
            Configuración
          </button>
          <button className="bg-gradient-to-r from-gray-300 to-green-700 text-white font-bold py1 px-4 rounded">
            Salir
          </button>
        </div>
      </div>
    );
  };

  const MenuDesplegable = ({ setMenuOpen }) => {
    return (
      <aside
        className={`w-64 bg-white p-4 rounded-lg shadow-md mt-4 ml-4 transition-transform duration-300 transform fixed top-20 left-0 h-screen z-10 ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <nav>
          <ul className="space-y-2">
            <li>
              <Link
                to="/Programacion"
                className="block hover:bg-green-50 hover:text-green-600 p-3 rounded-md transition-colors duration-200 flex items-center"
                onClick={() => setMenuOpen(false)}
              >
                <img src={computadora} alt="" className="w-8 h-8 mr-2 rounded-full" />
                Programacion
              </Link>
            </li>
            <li>
              <Link
                to="/Estadisticas"
                className="block hover:bg-green-50 hover:text-green-600 p-3 rounded-md transition-colors duration-200 flex items-center"
                onClick={() => setMenuOpen(false)}
              >
                <img src={estadisticas} alt="" className="w-8 h-8 mr-2 rounded-full" />
                Estadisticas
              </Link>
            </li>
            <li>
              <Link
                to="/Agenda"
                className="block hover:bg-green-50 hover:text-green-600 p-3 rounded-md transition-colors duration-200 flex items-center"
                onClick={() => setMenuOpen(false)}
              >
                <img src={bloc} alt="" className="w-8 h-8 mr-2 rounded-full" />
                Agenda
              </Link>
            </li>
            <li>
              <Link
                to="/Visualizacion"
                className="block hover:bg-green-50 hover:text-green-600 p-3 rounded-md transition-colors duration-200 flex items-center"
                onClick={() => setMenuOpen(false)}
              >
                <img src={camara} alt="" className="w-8 h-8 mr-2 rounded-full" />
                Visualizacion
              </Link>
            </li>
            <li>
              <Link
                to="/Configuracion"
                className="block hover:bg-green-50 hover:text-green-600 p-3 rounded-md transition-colors duration-200 flex items-center"
                onClick={() => setMenuOpen(false)}
              >
                <img src={configuracion} alt="" className="w-8 h-8 mr-2 rounded-full" />
                Configuracion
              </Link>
            </li>
            <li>
              <Link
                to="/invernadero"
                className="block hover:bg-green-50 hover:text-green-600 p-3 rounded-md transition-colors duration-200 flex items-center"
                onClick={() => setMenuOpen(false)}
              >
                <img src={flor} alt="" className="w-8 h-8 mr-2 rounded-full" />
                Invernadero
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
    );
  };

  return (
    <>
      <div className="min-h-screen flex flex-col">
        {/* Header */}
        <header className="bg-gradient-to-r from-gray-400 to-green-600 text-white p-6 shadow-md">
          <div className="container mx-auto flex justify-between items-center pl-0 relative">
            <button onClick={toggleMenu} className="focus:outline-none mr-0 ml-0 pl-0">
              <FaBars className="h-8 w-8" />
            </button>
            <div className="flex items-center justify-center flex-1">
              <h1 className="text-5xl font-serif font-bold tracking-wide">HortiTech</h1>
            </div>
            <div className="w-6 h-6"></div>
            <button onClick={Perfil} className="focus:outline-none mr-0 ml-0 pl-0">
              <img src={perfil} alt="Perfil" className="w-12 h-12 rounded-full" />
            </button>
            {PerfilOpen && <PerfilContent />}
          </div>
        </header>

        {/* Main */}
        <main className="flex flex-1 bg-gray-100">
          {menuOpen && <MenuDesplegable setMenuOpen={setMenuOpen} />}
          <div className="flex-1">
            <Outlet />
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-gray-800 text-white text-center p-6 mt-8 shadow-md">
          <div className="container mx-auto">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} HortiTech. Todos los derechos reservados.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}

