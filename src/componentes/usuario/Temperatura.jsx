import React from 'react'
import { FaThermometerHalf, FaLayerGroup  } from 'react-icons/fa';

export default function Temperatura() {
  return (
    <div className="bg-white rounded-lg shadow-2xl p-8 m-4 text-center w-9/10 mx-auto">
    <h2 className="text-3xl font-semibold text-gray-800 mb-6">Informe de Temperatura</h2>
    <div className="flex grid grid-cols-1 md:grid-cols-2 gap-8 itemd-center">

      <div className="rounded-lg p-6 shadow-md">
        <div className="flex items-center mb-4">
          <FaThermometerHalf className="text-yellow-500 text-5xl mr-6" />
          <h3 className="text-xl font-semibold text-gray-700">Temperatura </h3>
        </div>
        <p className="text-2xl font-bold text-gray-600">24  Grados Centigrados</p>
        <p className="text-gray-600 mt-2">Promedio semanal de temperatura en Grados Centigrados</p>
      </div>

       <div className="rounded-lg p-6 shadow-md"> 
          <div className="flex items-center mb-4">
            <FaLayerGroup className="text-blue-500 text-5xl mr-6" />
            <h3 className="text-xl font-semibold text-blaa¿ck-700">Humedad del Suelo.</h3>
            </div>
            <p className="text-2xl font-bold text-black-600">60%</p>
            <p className="text-600 mt-2">Promedio semanal de humedad del suelo</p>
          </div>
    </div>
  </div>
  )
}
