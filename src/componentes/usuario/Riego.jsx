import React from 'react';
import { FaWater, FaClock, FaChartLine, FaLayerGroup } from 'react-icons/fa';

export default function Riego() {
  return (
    <div className="bg-white rounded-lg shadow-2xl p-8 m-4 text-center"> 
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">Informe de Riego y Condiciones Ambientales</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        
        <div className="rounded-lg p-6 shadow-md"> 
          <div className="flex items-center mb-4">
            <FaWater className="text-blue-500 text-5xl mr-6" />
            <h3 className="text-xl font-semibold text-700">Consumo de Agua</h3>
          </div>
          <p className="text-2xl font-bold text-600">150 Litros/Semana</p>
          <p className="text-gray-600 mt-2">Promedio semanal de agua utilizada para el riego.</p>
        </div>

        
        <div className="rounded-lg p-6 shadow-md"> 
          <div className="flex items-center mb-4">
            <FaClock className="text-blue-500 text-5xl mr-6" />
            <h3 className="text-xl font-semibold text-700">Tiempo de Riego</h3>
          </div>
          <p className="text-2xl font-bold text-600">2 Horas/Día</p>
          <p className="text-gray-600 mt-2">Promedio diario de horas de riego.</p>
        </div>

        
        <div className="rounded-lg p-6 shadow-md"> 
          <div className="flex items-center mb-4">
            <FaChartLine className="text-red-500 text-5xl mr-6" />
            <h3 className="text-xl font-semibold text-black-700">Frecuencia de Riego</h3>
          </div>
          <p className="text-2xl font-bold text-black-600">2</p>
          <p className="text-black-600 mt-2">Frecuencia de Riego por dia.</p>
        </div>


        <div className="rounded-lg p-6 shadow-md"> 
          <div className="flex items-center mb-4">
            <FaLayerGroup className="text-blue-500 text-5xl mr-6" />
            <h3 className="text-xl font-semibold text-blaa¿ck-700">Humedas del Suelo.</h3>
          </div>
          <p className="text-2xl font-bold text-black-600">60%</p>
          <p className="text-600 mt-2">Promedio semanal de humedad del suelo</p>
        </div>
      </div>
    </div>
  );
}