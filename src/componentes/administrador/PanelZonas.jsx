import React from 'react';

function PanelZonas() {
  // Datos del invernadero (pueden venir de la base de datos o props)
  const invernadero = {
    nombre: "Invernadero 1",
    descripcion: "Este invernadero se utiliza para el cultivo de flores.",
    fechaCreacion: "15 de Marzo, 2024",
    estado: "Activo",
    responsable: "FRanco Garzon",
  };

  // Datos de zonas (Ejemplo de datos, pueden venir de una API)
  const zonas = [
    { 
      id: 1, 
      nombre: "Zona 1", 
      tipoCultivo: "Crisantemos", 
      descripcion: "reicn", 
      tipoRiego: "Goteo Automático", 
      tipoIluminacion: "inactivo", 
      ultimaActivacion: "08:30 AM" 
    },
    { 
      id: 2, 
      nombre: "Zona 2", 
      tipoCultivo: "Petuneas", 
      descripcion: "semillero", 
      tipoRiego: "Aspersión", 
      tipoIluminacion: "led", 
      ultimaActivacion: "07:45 AM" 
    },
    { 
      id: 3, 
      nombre: "Zona 3", 
      tipoCultivo: "rosas", 
      descripcion: "cosecha", 
      tipoRiego: "Nebulización", 
      tipoIluminacion: "Halógeno", 
      ultimaActivacion: "09:15 AM" 
    },
  ];

  return (
    <main className="bg-gray-100 min-h-screen p-6 flex flex-col items-center">
      {/* Tarjeta de Información del Invernadero */}
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-3xl mb-6">
        <h2 className="text-2xl font-bold text-green-700">{invernadero.nombre}</h2>
        <p className="text-gray-600">{invernadero.descripcion}</p>
        <p className="text-sm text-gray-500">📅 Creado el: {invernadero.fechaCreacion}</p>
        <div className="grid grid-cols-2 gap-4 mt-4 text-sm">
          <p><strong> Estado:</strong> <span className={`font-bold ${invernadero.estado === "Activo" ? "text-green-600" : "text-red-500"}`}>{invernadero.estado}</span></p>
          <p><strong> Responsable:</strong> {invernadero.responsable}</p>
        </div>
      </div>

      {/* Lista de Zonas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-4xl">
        {zonas.map((zona) => (
          <div key={zona.id} className="bg-white rounded-lg shadow-md p-4 text-center hover:shadow-lg transition">
            <h3 className="text-lg font-semibold text-green-700">{zona.nombre}</h3>
            <p className="text-gray-600"> {zona.tipoCultivo}</p>
            <p className="text-sm text-gray-500">{zona.descripcion}</p>
            
            {/* Información de Riego e Iluminación */}
            <div className="mt-4 p-3 bg-gray-100 rounded-lg text-sm">
              <p><strong> Tipo de Riego:</strong> {zona.tipoRiego}</p>
              <p><strong> Tipo de Iluminación:</strong> {zona.tipoIluminacion}</p>
              <p><strong> Última Activación:</strong> {zona.ultimaActivacion}</p>
            </div>

            <button className="mt-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700 transition">
              Ver Zona
            </button>
          </div>
        ))}
      </div>

      {/* Botón para agregar Zona */}
      <div className="mt-8">
        <button className="bg-green-500 text-white text-lg font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-green-600 transition">
          + Agregar Zona
        </button>
      </div>
    </main>
  );
}

export default PanelZonas;
