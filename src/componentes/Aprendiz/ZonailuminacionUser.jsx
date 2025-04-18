import React from "react";

export default function ZonaIluminacionUser({ zona, onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm bg-black/10 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-red-500"
        >
          ✕
        </button>
        <h2 className="text-2xl font-semibold text-green-700 mb-4">
          Iluminación - {zona}
        </h2>
        <div className="space-y-2 text-gray-800">
          <p><strong>Fecha de activación:</strong> 12/04/2025</p>
          <p><strong>Hora de activación:</strong> 18:00</p>
          <p><strong>Tiempo de activación:</strong> 2 horas</p>
          <p><strong>Descripción:</strong> Iluminación programada para simular luz solar al atardecer.</p>
        </div>
      </div>
    </div>
  );
}
