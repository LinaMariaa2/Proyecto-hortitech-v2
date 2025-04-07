import React from 'react'

import programacionImg from "../../imagenes/computadora.png";
import inver from "../../imagenes/Invernadero.jpg";
import Estadist from "../../imagenes/estadisticas.png";
import Agend from "../../imagenes/hoja.png";
import CamaraImg from "../../imagenes/camara.png"
import Config from "../../imagenes/configuracion.png"

const menuItems = [
    { name: "Programación", img: programacionImg },
    { name: "Invernaderos", img: inver },
    { name: "Estadísticas", img: Estadist },
    { name: "Agenda", img: Agend },
    { name: "Cámara", img: CamaraImg },
    { name: "Configuraciones", img: Config },
  ];

export default function MenuInicioU() {
  return (
    <div className="flex flex-col h-screen">
    {/* Sección del título con imagen usando <img> */}
    <div className="relative w-full h-1/3 flex items-center justify-center bg-gradient-to-r from-green-400 via-green-500 to-green-600">
        <h1 className="text-4xl md:text-6xl font-bold shadow-lg relative z-10">
          <span className="text-green-900">Horti</span>
          <span className="text-green-200">Tech</span>
        </h1>
      </div>
    
    {/* Sección de tarjetas de navegación */}
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 bg-gray-100">
        {menuItems.map((item, index) => (
          <div key={index} className="flex items-center bg-white rounded-2xl shadow-lg p-4 hover:bg-gray-200 transition">
            <img src={item.img} alt={item.name} className="w-20 h-20 object-cover rounded-md mr-4" />
            <span className="text-lg font-semibold">{item.name}</span>
          </div>
        ))}
      </div>
      <footer className="bg-gray-800 text-white text-center p-6 mt-8 shadow-md">
          <div className="container mx-auto">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} HortiTech. Todos los derechos
              reservados.
            </p>
          </div>
        </footer>
  </div>
    
  )
};