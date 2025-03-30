import React from 'react'
import { Link, Outlet } from 'react-router-dom';

const HeaderHome = () => {
  return (
    <header className="bg-gray-800 text-white py-4 shadow-md">

      <nav className="container mx-auto flex flex-wrap items-center justify-between px-6">

        <div className="text-2xl font-bold">
          <Link to="/" className="hover:text-gray-300">
            Hotitech
          </Link>
        </div>

        <ul className="flex space-x-6 text-lg">
          <li>
            <Link to="registro" className="hover:text-gray-300 transition duration-200">
              Registro
            </Link>
          </li>
          <li>
            <Link to="Login" className="hover:text-gray-300 transition duration-200">
              Iniciar Sesión
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet/>
    </header>
  );
};

export default HeaderHome;
