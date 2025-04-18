import React from "react";

export default function ZonaRiego({ zona, onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm bg-black/10 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-semibold text-green-700 mb-4">{zona}</h2>
        
        <label className="block text-sm font-medium text-gray-700">Tipo de Riego:</label>
        <select className="w-full p-2 border rounded mb-2">
          <option>Goteo</option>
          <option>Aspersión</option>
          <option>Manual</option>
        </select>

        <label className="block text-sm font-medium text-gray-700">Fecha de Activación:</label>
        <input type="date" className="w-full p-2 border rounded mb-2" />
        
        <label className="block text-sm font-medium text-gray-700">Hora de Activación:</label>
        <input type="time" className="w-full p-2 border rounded mb-2" />

        <label className="block text-sm font-medium text-gray-700">Tiempo de Activación (min):</label>
        <input type="number" className="w-full p-2 border rounded mb-2" />

        <label className="block text-sm font-medium text-gray-700">Descripción:</label>
        <textarea className="w-full p-2 border rounded mb-4"></textarea>
        <div className="flex justify-center mt-4">
            <button onClick={onClose} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-blue-600">Cerrar</button>

        </div>

       
      </div>
    </div>
  );
}
