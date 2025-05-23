import React, { useState } from "react";
import ZonaIluminacion from "../../componentes/administrador/ZonaIluminacion";
import ZonaRiego from "../../componentes/administrador/ZonaRiego";

export default function Programacion() {
  const [zonaIluminacionSeleccionada, setZonaIluminacionSeleccionada] = useState(null);
  const [zonaRiegoSeleccionada, setZonaRiegoSeleccionada] = useState(null);

  const zonasRiego = ["Zona 1", "Zona 2", "Zona 3","Zona 4"];
  const zonasIluminacion = ["Zona 1", "Zona 2", "Zona 3","Zona 4"];

  return (
    <div className="flex flex-col h-screen">
      {/* Sección del título con fondo degradado */}
      <div className="relative w-full h-1/4 flex items-center justify-center bg-gradient-to-r ">
        <h1 className="text-3xl md:text-4xl font-bold  relative z-8">
          <span className="text-green-900">Programación</span>
          <span className="text-green-500"> de Zonas</span>
        </h1>
      </div>

      
      <div className="flex flex-col md:flex-row h-3/4">
        {/* Sección de Riego */}
        <div className="w-full md:w-1/2 p-6 bg-gray-100 flex flex-col items-center">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">Programación de Riego</h2>
          <div className="grid grid-cols-1 gap-4 w-full max-w-md">
            {zonasRiego.map((zona, index) => (
              <div 
                key={index} 
                className="flex items-center bg-white rounded-2xl shadow-lg p-4 hover:bg-gray-200 transition cursor-pointer"
                onClick={() => setZonaRiegoSeleccionada(zona)}
              >
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
                onClick={() => setZonaIluminacionSeleccionada(zona)}
              >
                <span className="text-lg font-semibold">{zona}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modales */}
      {zonaIluminacionSeleccionada && (
        <ZonaIluminacion zona={zonaIluminacionSeleccionada} onClose={() => setZonaIluminacionSeleccionada(null)} />
      )}
      {zonaRiegoSeleccionada && (
        <ZonaRiego zona={zonaRiegoSeleccionada} onClose={() => setZonaRiegoSeleccionada(null)} />
      )}
    </div>
  );
}
