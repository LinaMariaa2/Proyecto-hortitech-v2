import React from 'react';
import Invernaderoi from '../../imagenes/Invernadero.jpg';

function PanelInvernadero() {
  return (
    <>
      <main className="bg-gray-100 min-h-screen flex flex-col items-center py-10">
        {/* Título Principal */}
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Invernaderos</h1>

        {/* Contenedor de Invernaderos en Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 pt-6">
          {[1, 2, 3, 4].map((num) => (
            <div
              key={num}
              className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all hover:scale-105"
            >
              <img
                src={Invernaderoi}
                alt={`Invernadero ${num}`}
                className="w-full h-40 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-gray-700 mb-2"> Invernadero {num}</h3>
                <a
                  href={`/PanelZona${num}`} 
                  className="inline-block bg-green-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-green-700 transition"
                >
                  Ver Zonas
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Botón de Agregar Invernadero */}
        <div className="mt-10">
          <button className="bg-green-500 text-white text-lg font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-green-600 transition">
            + Agregar Invernadero
          </button>
        </div>
      </main>
    </>
  );
}

export default PanelInvernadero;
