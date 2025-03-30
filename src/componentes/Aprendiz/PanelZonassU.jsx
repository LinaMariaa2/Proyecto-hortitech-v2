import React from "react";
import { useParams } from "react-router-dom";

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
};

function PanelZonassU() {
  const { id } = useParams();
  const invernadero = invernaderosBase[id] || { nombre: "Desconocido", zonas: [] };
  const zonas = invernadero.zonas;

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

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-4xl">
        {zonas.map((zona) => (
          <div key={zona.id} className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition">
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
    </main>
  );
}

export default PanelZonassU;
