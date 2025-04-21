// SeleccionRol.jsx
import React from "react";
import { Link } from "react-router-dom";

function SeleccionRol() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold mb-8 text-green-700">Selecciona tu rol</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
        <Link
          to="/menuInicioU"
          className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-all border-t-4 border-green-400"
        >
          <div className="flex flex-col justify-between h-full">
            <div>
              <h2 className="text-2xl font-bold text-green-700 mb-2">Aprendiz</h2>
              <p className="text-sm text-gray-600">Explora las funcionalidades como aprendiz.</p>
            </div>
            <div className="mt-4 text-right text-sm text-green-600">Entrar →</div>
          </div>
        </Link>

        <Link
          to="/menuInicio"
          className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-all border-t-4 border-green-600"
        >
          <div className="flex flex-col justify-between h-full">
            <div>
              <h2 className="text-2xl font-bold text-green-700 mb-2">Administrador</h2>
              <p className="text-sm text-gray-600">Gestiona zonas, usuarios y configuraciones.</p>
            </div>
            <div className="mt-4 text-right text-sm text-green-600">Entrar →</div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default SeleccionRol;
