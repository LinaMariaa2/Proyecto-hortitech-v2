import React, { useState } from 'react';
import computadora from '../imagenes/computadora.png';
import estadisticas from '../imagenes/estadisticas.png';
import bloc from '../imagenes/bloc.png';
import configuracion from '../imagenes/configuracion.png';
import camara from '../imagenes/camara.png';
import { FaBars } from 'react-icons/fa';

export default function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="min-h-screen flex flex-col">
        {/* Header */}
        <header className="bg-gradient-to-r from-gray-400 to-green-600 text-white p-6 shadow-md">
          <div className="container mx-auto flex justify-between items-center">
            {/* Icono para desplegar el menú (lado izquierdo) */}
            <button
              onClick={toggleMenu}
              className="focus:outline-none mr-4" // Añadido mr-4 para margen derecho
            >
              <FaBars className="h-6 w-6" />
            </button>
            <h1 className="text-3xl font-serif font-bold tracking-wide">
              HortiTech
            </h1>
            <div className='w-[100px]'></div>
          </div>
        </header>

        {/* Main */}
        <main className="flex flex-1 bg-gray-100">
          {/* Menu */}
          <aside
            className={`w-64 bg-white p-4 rounded-lg shadow-md mt-4 ml-4 transition-transform duration-300 transform fixed top-20 left-0 h-screen z-10 ${
              menuOpen ? 'translate-x-0' : '-translate-x-full'
            }`}
          >
            <nav>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="block hover:bg-green-50 hover:text-green-600 p-3 rounded-md transition-colors duration-200 flex items-center"
                  >
                    <img
                      src={computadora}
                      alt=""
                      className="w-8 h-8 mr-2 rounded-full"
                    />
                    Programacion
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block hover:bg-green-50 hover:text-green-600 p-3 rounded-md transition-colors duration-200 flex items-center"
                  >
                    <img
                      src={estadisticas}
                      alt=""
                      className="w-8 h-8 mr-2 rounded-full"
                    />
                    Estadisticas
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block hover:bg-green-50 hover:text-green-600 p-3 rounded-md transition-colors duration-200 flex items-center"
                  >
                    <img
                      src={bloc}
                      alt=""
                      className="w-8 h-8 mr-2 rounded-full"
                    />
                    Agenda
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block hover:bg-green-50 hover:text-green-600 p-3 rounded-md transition-colors duration-200 flex items-center"
                  >
                    <img
                      src={camara}
                      alt=""
                      className="w-8 h-8 mr-2 rounded-full"
                    />
                    Visualizacion
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block hover:bg-green-50 hover:text-green-600 p-3 rounded-md transition-colors duration-200 flex items-center"
                  >
                    <img
                      src={configuracion}
                      alt=""
                      className="w-8 h-8 mr-2 rounded-full"
                    />
                    Configuracion
                  </a>
                </li>
              </ul>
            </nav>
          </aside>

          {/* seccion 2 */}
          <section className="flex-1 bg-white p-8 rounded-lg shadow-md mt-4 mr-4">
            <h2 className="text-2xl font-semibold mb-4">
              B
            </h2>
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-gray-800 text-white text-center p-6 mt-8 shadow-md">
          <div className="container mx-auto">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} HortiTech. Todos los derechos
              reservados.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}