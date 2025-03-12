import React from 'react';
import Invernaderoi from '../../imagenes/Invernadero.jpg';

function PanelInvernadero() {
  return ( 
  <>
    <header>


    </header>
    <main>
    
    <div className='flex justify-center items-center min-h-screen bg-gray-100'>
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="max-w-sm w-full bg-white rounded-lg shadow-lg">
        <img src={Invernaderoi} alt="magen" className="w-full h-25 object-cover rounded-t-lg" />
        <div className="p-6 text-center">
          <a
            href="#"
            className="inline-block bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-700"
          >
            Invernadero 1
            
          </a>
        </div>
      </div>
    </div>
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="max-w-sm w-full bg-white rounded-lg shadow-lg">
        <img src={Invernaderoi} alt="magen" className="w-full h-25 object-cover rounded-t-lg" />
        <div className="p-6 text-center">
          <a
            href="#"
            className="inline-block bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-700"
          >
            Invernadero 1
            
          </a>
        </div>
      </div>
    </div>
    </div>

    
    
    
    <button className="bg-green-500 text-white py-2 px-5 rounded-md w-1/2 mx-auto hover:bg-green-600">
            Agregar Invernadero
    </button>
    </main>
    <footer>

        
    </footer>
  
  
  
  </>
    
  );
}

export default PanelInvernadero;


