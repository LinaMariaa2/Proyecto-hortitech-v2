import React from "react";
import { Link } from "react-router-dom";
import Invernaderoi from "../../imagenes/Invernadero.jpg"; // Imagen de invernadero

const invernaderos = [
  { id: 1, nombre: "Invernadero 1" },
  { id: 2, nombre: "Invernadero 2" },
  { id: 3, nombre: "Invernadero 3" },
  { id: 4, nombre: "Invernadero 4" },
];

function PanelInvernadero() {
  return (
    <main className="bg-gray-100 min-h-screen flex flex-col items-center py-10">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Invernaderos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 pt-6">
        {invernaderos.map((inv) => (
          <div
            key={inv.id}
            className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all hover:scale-105"
          >
            <img src={Invernaderoi} className="w-full h-37 object-cover" alt={inv.nombre} />
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">{inv.nombre}</h3>
              <Link
                to={`/panelzona/${inv.id}`}
                className="inline-block bg-green-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-green-700 transition"
              >
                Ver Zonas
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-10">
        <button className="bg-green-500 text-white text-lg font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-green-600 transition">
          Agregar Invernadero
        </button>
      </div>
    </main>
  );
}

export default PanelInvernadero;
