import React from 'react'
import { FaWater, FaClock, FaChartLine, FaLayerGroup } from 'react-icons/fa';


export default function Iluminacion() {
  return (
   <div className="bg-white rounded-lg shadow-2xl p-8 m-4 text-center"> 
         <h2 className="text-3xl font-semibold text-gray-800 mb-6">Informe de iluminacion</h2>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           
           
           <div className="rounded-lg p-6 shadow-md"> 
             <div className="flex items-center mb-4">
               <FaLayerGroup className="text-yellow-500 text-5xl mr-6" />
               <h3 className="text-xl font-semibold text-700">Consumo en vatios "W" a la semana </h3>
             </div>
             <p className="text-2xl font-bold text-600">180 vatios</p>
             <p className="text-gray-600 mt-2">Promedio semanal de vatios utilozados para la ilimunacion</p>
           </div>
   
           
           <div className="rounded-lg p-6 shadow-md"> 
             <div className="flex items-center mb-4">
               <FaClock className="text-yellow-500 text-5xl mr-6" />
               <h3 className="text-xl font-semibold text-700">Tiempo de Iluminacion</h3>
             </div>
             <p className="text-2xl font-bold text-600">18 Horas/Día</p>
             <p className="text-gray-600 mt-2">Promedio diario de iluminacion</p>
           </div>
   
           
           <div className="rounded-lg p-6 shadow-md"> 
             <div className="flex items-center mb-4">
               <FaChartLine className="text-yellow-500 text-5xl mr-6" />
               <h3 className="text-xl font-semibold text-black-700">Frecuencia de Iluminacion</h3>
             </div>
             <p className="text-2xl font-bold text-black-600">2</p>
             <p className="text-black-600 mt-2">Frecuencia de iluminacion por dia.</p>
           </div>
   
   
           
         </div>
       </div>
  )
};
