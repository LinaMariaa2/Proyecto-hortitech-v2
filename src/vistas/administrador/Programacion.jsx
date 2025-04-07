import React, { useState } from "react";
import ZonaIluminacion from "../../componentes/administrador/ZonaIluminacion";

export default function Programacion() {
  const [zonaSeleccionada, setZonaSeleccionada] = useState(null);
  
  const zonasRiego = ["Zona 1", "Zona 2", "Zona 3"];
  const zonasIluminacion = ["Zona 1", "Zona 2", "Zona 3"];

  return (
    <div className="flex flex-col h-screen">
      {/* Sección del título con fondo degradado */}
      <div className="relative w-full h-1/4 flex items-center justify-center bg-gradient-to-r from-green-400 via-green-500 to-green-600">
        <h1 className="text-4xl md:text-6xl font-bold shadow-lg relative z-10">
          <span className="text-green-900">Programación</span>
          <span className="text-green-200"> de Zonas</span>
        </h1>
      </div>

      {/* Contenedor dividido en dos mitades */}
      <div className="flex flex-col md:flex-row h-3/4">
        {/* Sección de Riego */}
        <div className="w-full md:w-1/2 p-6 bg-gray-100 flex flex-col items-center">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">Programación de Riego</h2>
          <div className="grid grid-cols-1 gap-4 w-full max-w-md">
            {zonasRiego.map((zona, index) => (
              <div key={index} className="flex items-center bg-white rounded-2xl shadow-lg p-4 hover:bg-gray-200 transition">
                <span className="text-lg font-semibold">{zona}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Sección de Iluminación */}
        <div className="w-full md:w-1/2 p-6 bg-gray-200 flex flex-col items-center">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">Programación de Iluminación</h2>
          <div className="grid grid-cols-1 gap-4 w-full max-w-md">
            {zonasIluminacion.map((zona, index) => (
              <div 
                key={index} 
                className="flex items-center bg-white rounded-2xl shadow-lg p-4 hover:bg-gray-300 transition cursor-pointer"
                onClick={() => setZonaSeleccionada(zona)}
              >
                <span className="text-lg font-semibold">{zona}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal de Zona Iluminación */}
      {zonaSeleccionada && <ZonaIluminacion zona={zonaSeleccionada} onClose={() => setZonaSeleccionada(null)} />}
    </div>
  );
}
