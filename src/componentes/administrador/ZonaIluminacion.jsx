import React from "react";

export default function ZonaIluminacion({ zona, onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm bg-black/10 z-50">
      {/* Capa opaca que cubre toda la pantalla, pero sin color de fondo */}
      <div className="absolute inset-0 bg-opacity-20 z-40"></div>
      
      {/* Ventana Modal */}
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 z-50">
        <h2 className="text-2xl font-semibold text-green-700 mb-4">{zona}</h2>
        
        <label className="block text-sm font-medium text-gray-700">Fecha:</label>
        <input type="date" className="w-full p-2 border rounded mb-2" />
        
        <label className="block text-sm font-medium text-gray-700">Hora de Activación:</label>
        <input type="time" className="w-full p-2 border rounded mb-2" />
        
        <label className="block text-sm font-medium text-gray-700">Hora de Desactivación:</label>
        <input type="time" className="w-full p-2 border rounded mb-2" />
        
        <label className="block text-sm font-medium text-gray-700">Descripción:</label>
        <textarea className="w-full p-2 border rounded mb-4"></textarea>
        
        <div className="flex justify-center mt-4">
              <button onClick={onClose} className="bg-green-500 text-white px-4 py-2 rounded">
                Cerrar
              </button>
        </div>
      </div>
    </div>
  );
}

