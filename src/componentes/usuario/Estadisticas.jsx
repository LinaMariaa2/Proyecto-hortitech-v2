import React from 'react';
import flecha from '../imagenes/flecha.png'
import imgEsta from '../imagenes/imgEsta.jpg'
import puntos from '../imagenes/puntos.jpg'
import { Link } from 'react-router-dom';


export default function Estadisticas() {
  return (
    <>
 <section className="flex flex-col md:flex-row">
  <div className="w-full mt-4 p-4">

  <div className="flex flex-col sm:flex-row justify-around items-stretch h-full space-y-4 sm:space-x-2">
      <div className="flex flex-col sm:flex-row justify-around items-stretch h-full space-y-4 sm:space-x-2">
          <Link to="/riego" className="transition-transform transform-gpu hover:scale-105 hover:shadow-lg flex flex-col items-center justify-center">
            <div className="w-full sm:w-50 h-50 sm:h-50 p-5 flex items-center justify-center">
              <img src={flecha} alt="Imagen 1" className="w-full h-full object-cover" />
            </div>

            <div className="flex items-center justify-center">
              <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-2 rounded">
                <h2>Estadísticas de Riego</h2>
              </button>
            </div>
          </Link>
    

      </div>

    
      <div className="flex flex-col sm:flex-row justify-around items-stretch h-full space-y-4 sm:space-x-2">
          <Link to="/iluminacion" className="transition-transform transform-gpu hover:scale-105 hover:shadow-lg flex flex-col items-center justify-center">
            <div className="w-full sm:w-50 h-50 sm:h-50 p-5 flex items-center justify-center">
              <img src={imgEsta} alt="Imagen 1" className="w-full h-full object-cover" />
            </div>

            <div className="flex items-center justify-center">
              <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-2 rounded">
                <h2>Estadísticas de Iluminacion</h2>
              </button>
            </div>
          </Link>
    

      </div>



     <div className="flex flex-col sm:flex-row justify-around items-stretch h-full space-y-4 sm:space-x-2">
          <Link to="/temperatura" className="transition-transform transform-gpu hover:scale-105 hover:shadow-lg flex flex-col items-center justify-center">
            <div className="w-full sm:w-50 h-50 sm:h-50 p-5 flex items-center justify-center">
              <img src={puntos} alt="Imagen 1" className="w-full h-full object-cover" />
            </div>

            <div className="flex items-center justify-center">
              <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-2 rounded">
                <h2>Temperatura</h2>
              </button>
            </div>
          </Link>
    

      </div>
      

</div>
  </div>
</section>
    </>
  );
}