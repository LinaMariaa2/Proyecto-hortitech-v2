import React from 'react';
import Invernaderoi from '../../imagenes/Invernadero.jpg'; 
import { Link } from 'react-router-dom';  

function PanelZonas() {
  return ( 
    <>
      <header></header>
      <main className="bg-gray-100">
        
        <div className="space-x-10  flex justify-center items-center h-screen">
         
          <div className="max-w-sm w-full bg-white rounded-lg shadow-lg">
            <img 
              src={Invernaderoi} 
              alt="Invernadero" 
              className="object-contain rounded-t-lg" 
            />
            <div className="p-6 text-center">
              {/* Botónes internos */}
              <a
                href="#"
                className="inline-block bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-700"
              >
                Zona 1
              </a>
            </div>
          </div>

          
          <div className="max-w-sm w-full bg-white rounded-lg shadow-lg">
            <img 
              src={Invernaderoi} 
              alt="Invernadero" 
              className="object-contain rounded-t-lg" 
            />
            <div className="p-6 text-center">
              <a
                href="#"
                className="inline-block bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-700"
              >
                zona 2
              </a>
            </div>
          </div>


          <div className="max-w-sm w-full bg-white rounded-lg shadow-lg">
            <img 
              src={Invernaderoi} 
              alt="Invernadero" 
              className="object-contain rounded-t-lg" 
            />
            <div className="p-6 text-center">
              <a
                href="#"
                className="inline-block bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-700"
              >
                Zona 3
              </a>
            </div>
          </div>


          <div className="max-w-sm w-full bg-white rounded-lg shadow-lg">
            <img 
              src={Invernaderoi} 
              alt="Invernadero" 
              className="object-contain rounded-t-lg" 
            />
            <div className="p-6 text-center">

              <a
                href="#"
                className="inline-block bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-700"
              >
                Zona 4
              </a>
            </div>
          </div>

        {/* Botón de agregar invernadero */}
        </div>
        <div className="flex justify-center mt-6 ">
          <button className="bg-green-500 text-white py-2 px-5 rounded-md w-1/2 hover:bg-green-600 absolute top-200">
            Agregar Zona
          </button>
        </div>
        
      </main>
      <footer></footer>
    </>
  );
}

export default PanelZonas;
