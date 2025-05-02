import React, { useState } from "react";
import { useParams } from "react-router-dom";
import AgregarZona from "./AgregarZona"; // Importamos el formulario 

function PanelZonas() {
  const { id } = useParams(); // Captura el ID de la URL

  const invernaderosBase = {
    1: {
      nombre: "Invernadero 1",
      descripcion: "Cultivo de flores",
      fechaCreacion: "15 de Marzo, 2024",
      estado: "Activo",
      responsable: "Hugo Capote",
      zonas: [
        { id: 1, nombre: "Zona 1", tipoCultivo: "Crisantemos", descripcion: "Inicio Floración", tipoRiego: "Goteo", tipoIluminacion: "Inactivo", ultimaActivacion: "08:30 AM" },
        { id: 2, nombre: "Zona 2", tipoCultivo: "Petunias", descripcion: "Semillero", tipoRiego: "Aspersión", tipoIluminacion: "LED", ultimaActivacion: "07:45 AM" },
        { id: 3, nombre: "Zona 3", tipoCultivo: "Rosas", descripcion: "Crecimiento", tipoRiego: "Nebulización", tipoIluminacion: "LED", ultimaActivacion: "09:00 AM" },
      ],
    },
    2: {
      nombre: "Invernadero 2",
      descripcion: "Cultivo de hortalizas.",
      fechaCreacion: "20 de Marzo, 2024",
      estado: "Inactivo",
      responsable: "Maria Perez",
      zonas: [
        { id: 1, nombre: "Zona 1", tipoCultivo: "Tomates", descripcion: "Plántulas", tipoRiego: "Nebulización", tipoIluminacion: "LED", ultimaActivacion: "09:15 AM" },
        { id: 2, nombre: "Zona 2", tipoCultivo: "Lechugas", descripcion: "Crecimiento", tipoRiego: "Aspersión", tipoIluminacion: "Inactivo", ultimaActivacion: "10:00 AM" },
        { id: 3, nombre: "Zona 3", tipoCultivo: "Zanahorias", descripcion: "Producción", tipoRiego: "Goteo", tipoIluminacion: "LED", ultimaActivacion: "11:30 AM" },
      ],
    },
    3: {
      nombre: "Invernadero 3",
      descripcion: "Cultivo de hierbas aromáticas.",
      fechaCreacion: "10 de Marzo, 2024",
      estado: "Activo",
      responsable: "Luis Gomez",
      zonas: [
        { id: 1, nombre: "Zona 1", tipoCultivo: "Albahaca", descripcion: "Cosecha", tipoRiego: "Goteo", tipoIluminacion: "LED", ultimaActivacion: "07:30 AM" },
        { id: 2, nombre: "Zona 2", tipoCultivo: "Orégano", descripcion: "Floración", tipoRiego: "Aspersión", tipoIluminacion: "Inactivo", ultimaActivacion: "11:45 AM" },
        { id: 3, nombre: "Zona 3", tipoCultivo: "Menta", descripcion: "Crecimiento", tipoRiego: "Aspersión", tipoIluminacion: "LED", ultimaActivacion: "10:20 AM" },
      ],
    },
    4: {
      nombre: "Invernadero 4",
      descripcion: "Cultivo de frutas exóticas.",
      fechaCreacion: "5 de Marzo, 2024",
      estado: "Activo",
      responsable: "Sofia Rivas",
      zonas: [
        { id: 1, nombre: "Zona 1", tipoCultivo: "Maracuyá", descripcion: "Producción", tipoRiego: "Aspersión", tipoIluminacion: "LED", ultimaActivacion: "08:00 AM" },
        { id: 2, nombre: "Zona 2", tipoCultivo: "Pitahaya", descripcion: "Crecimiento", tipoRiego: "Nebulización", tipoIluminacion: "Inactivo", ultimaActivacion: "09:30 AM" },
        { id: 3, nombre: "Zona 3", tipoCultivo: "Mango", descripcion: "Cosecha", tipoRiego: "Goteo", tipoIluminacion: "LED", ultimaActivacion: "07:45 AM" },
      ],
    },
  };

  const invernadero = invernaderosBase[parseInt(id)] || { nombre: "Desconocido", zonas: [] };
  const [zonas, setZonas] = useState([...invernadero.zonas]);
  const [menuAbierto, setMenuAbierto] = useState(null);
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  const toggleMenu = (zonaId) => {
    setMenuAbierto(menuAbierto === zonaId ? null : zonaId);
  };

  const eliminarZona = (zonaId) => {
    setZonas(zonas.filter((zona) => zona.id !== zonaId));
    setMenuAbierto(null);
  };

  const agregarZona = (nuevaZona) => {
    setZonas([...zonas, { id: zonas.length + 1, ...nuevaZona }]);
    setMostrarFormulario(false);
  };

  return (
    <main className="bg-gray-100 min-h-screen p-6 flex flex-col items-center">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-3xl mb-6">
        <h2 className="text-2xl font-bold text-green-700">{invernadero.nombre}</h2>
        <p className="text-gray-600">{invernadero.descripcion}</p>
        <p className="text-sm text-gray-500">📅 Creado el: {invernadero.fechaCreacion}</p>
        <div className="grid grid-cols-2 gap-4 mt-4 text-sm">
          <p>
            <strong>Estado:</strong>{" "}
            <span className={`font-bold ${invernadero.estado === "Activo" ? "text-green-600" : "text-red-500"}`}>
              {invernadero.estado}
            </span>
          </p>
          <p>
            <strong>Responsable:</strong> {invernadero.responsable}
          </p>
        </div>
      </div>

      {/* Lista de Zonas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-4xl">
        {zonas.map((zona) => (
          <div key={zona.id} className="bg-white rounded-lg shadow-md p-4 relative hover:shadow-lg transition">
            <div className="absolute top-2 right-2">
              <button onClick={() => toggleMenu(zona.id)} className="text-gray-600 hover:text-gray-800 text-lg">
                ⋮
              </button>
              {menuAbierto === zona.id && (
                <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg p-2">
                  <button onClick={() => eliminarZona(zona.id)} className="block w-full text-left px-4 py-2 text-red-500 hover:bg-red-100">
                    Eliminar Zona
                  </button>
                </div>
              )}
            </div>

            <h3 className="text-lg font-semibold text-green-700">{zona.nombre}</h3>
            <p className="text-gray-600">{zona.tipoCultivo}</p>
            <p className="text-sm text-gray-500">{zona.descripcion}</p>

            <div className="mt-4 p-3 bg-gray-100 rounded-lg text-sm">
              <p><strong>Tipo de Riego:</strong> {zona.tipoRiego}</p>
              <p><strong>Tipo de Iluminación:</strong> {zona.tipoIluminacion}</p>
              <p><strong>Última Activación:</strong> {zona.ultimaActivacion}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Botón Agregar Zona */}
      <button onClick={() => setMostrarFormulario(true)} className="mt-6 bg-green-500 text-white text-lg font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-green-600 transition">
        Agregar Zona
      </button>

      {mostrarFormulario && <AgregarZona onAgregar={agregarZona} onClose={() => setMostrarFormulario(false)} />}
    </main>
  );
}

export default PanelZonas;
