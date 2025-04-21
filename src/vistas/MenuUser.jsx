import React, { useState } from 'react';
import computadora from '../componentes/imagenes/computadora.png';
import estadisticas from '../componentes/imagenes/estadistic.png';
import bloc from '../componentes/imagenes/bloc.png';
import flor from '../componentes/imagenes/flor.png';
import configuracion from '../componentes/imagenes/configuracion.png';
import perfil from '../componentes/imagenes/perfil.png';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link, Outlet } from 'react-router-dom';

export default function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [PerfilOpen, setPerfilOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const Perfil = () => {
    setPerfilOpen(!PerfilOpen);
  };

  const closePerfil = () => {
    setPerfilOpen(false);
  };

  const PerfilContent = () => {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white p-6 rounded-lg shadow-lg relative w-96">
          <button onClick={closePerfil} className="absolute top-2 right-2 text-gray-600 hover:text-red-600">
            <FaTimes size={20} />
          </button>
          <div className="flex flex-col items-center mb-4">
            <img src={perfil} alt="Foto de perfil" className="w-16 h-16 rounded-full mb-2" />
            <div className="text-center">
              <p className="text-lg font-semibold text-gray-600">¡Hola, Horti-Tech!</p>
              <p className="text-sm text-gray-600">Horti-Tech@ejemplo.com</p>
            </div>
          </div>
          <div className="flex justify-around">
            <Link
              to="/MenuU/ConfigAprendiz"
              onClick={closePerfil}
              className="bg-green-600 text-white font-bold py-1 px-4 rounded"
            >
              Configuración
            </Link>
            <Link
              to="/"
              onClick={closePerfil}
              className="bg-red-500 text-white font-bold py-1 px-4 rounded"
            >
              Salir
            </Link>
          </div>
        </div>
      </div>
    );
  };

  const MenuDesplegable = ({ setMenuOpen }) => {
    return (
      <aside
        className={`w-64 bg-green-100 p-4 rounded-lg shadow-md mt-4 ml-4 transition-transform duration-300 transform h-screen z-10 ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <nav>
          <ul className="space-y-2">
            <li>
              <Link
                to="/MenuU/ProgramacionU"
                className="block hover:bg-green-50 hover:text-green-600 p-3 rounded-md transition-colors duration-200 flex items-center"
                onClick={() => setMenuOpen(false)}
              >
                <img src={computadora} alt="" className="w-8 h-8 mr-2 rounded-full" />
                Programación
              </Link>
            </li>
            <li>
              <Link
                to="/MenuU/EstadisticasU"
                className="block hover:bg-green-50 hover:text-green-600 p-3 rounded-md transition-colors duration-200 flex items-center"
                onClick={() => setMenuOpen(false)}
              >
                <img src={estadisticas} alt="" className="w-8 h-8 mr-2 rounded-full" />
                Estadísticas
              </Link>
            </li>
            <li>
              <Link
                to="/MenuU/BlocU"
                className="block hover:bg-green-50 hover:text-green-600 p-3 rounded-md transition-colors duration-200 flex items-center"
                onClick={() => setMenuOpen(false)}
              >
                <img src={bloc} alt="" className="w-8 h-8 mr-2 rounded-full" />
                Agenda
              </Link>
            </li>
            <li>
              <Link
                to="/MenuU/ConfigAprendiz"
                className="block hover:bg-green-50 hover:text-green-600 p-3 rounded-md transition-colors duration-200 flex items-center"
                onClick={() => setMenuOpen(false)}
              >
                <img src={configuracion} alt="" className="w-8 h-8 mr-2 rounded-full" />
                Configuración
              </Link>
            </li>
            <li>
              <Link
                to="/MenuU/PanelInvU"
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
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-green-50 text-green-900 p-6 shadow-md">
        <div className="container mx-auto flex justify-between items-center relative">
          <button onClick={toggleMenu} className="focus:outline-none">
            <FaBars className="h-8 w-8" />
          </button>
          <div className="flex items-center justify-center flex-1">
            <h1 className="text-4xl font-serif font-bold tracking-wide">HortiTech</h1>
          </div>
          <div className="w-6 h-6"></div>
          <button onClick={Perfil} className="focus:outline-none">
            <img src={perfil} alt="Perfil" className="w-12 h-12 rounded-full" />
          </button>
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
          <p className="text-sm">&copy; {new Date().getFullYear()} HortiTech. Todos los derechos reservados.</p>
        </div>
      </footer>

      {/* Modal de perfil */}
      {PerfilOpen && <PerfilContent />}
    </div>
  );
}
