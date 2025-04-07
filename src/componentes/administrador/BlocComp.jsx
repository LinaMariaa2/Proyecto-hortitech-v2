import React, { useState } from "react";

const notasIniciales = [
  { id: 1, invernaderoId: 1, zonaId: 1, titulo: "Revisión de riego", descripcion: "Verificar el sistema de riego.", importancia: "Alta", fecha: "2025-03-29", hora: "10:00 AM" },
  { id: 2, invernaderoId: 3, zonaId: 2, titulo: "Control Semillero", descripcion: "Ajustar la intensidad de luces LED.", importancia: "Media", fecha: "2025-03-28", hora: "11:30 AM" },
];

const invernaderos = [
  { id: 1, nombre: "Invernadero 1" },
  { id: 2, nombre: "Invernadero 2" },
  { id: 3, nombre: "Invernadero 3" },
  { id: 4, nombre: "Invernadero 4" },
];

const zonas = {
  1: [
    { id: 1, nombre: "Zona 1" },
    { id: 2, nombre: "Zona 2" },
    { id: 3, nombre: "Zona 3" },
    { id: 4, nombre: "Zona 4" },
  ],
  2: [
    { id: 1, nombre: "Zona 1" },
    { id: 2, nombre: "Zona 2" },
    { id: 3, nombre: "Zona 3" },
    { id: 4, nombre: "Zona 4" },
  ],
  3: [
    { id: 1, nombre: "Zona 1" },
    { id: 2, nombre: "Zona 2" },
    { id: 3, nombre: "Zona 3" },
    { id: 4, nombre: "Zona 4" },
  ],
  4: [
    { id: 1, nombre: "Zona 1" },
    { id: 2, nombre: "Zona 2" },
    { id: 3, nombre: "Zona 3" },
    { id: 4, nombre: "Zona 4" },
  ],
};

function BlocComp() {
  const [notas, setNotas] = useState(notasIniciales);
  const [nuevaNota, setNuevaNota] = useState({ titulo: "", descripcion: "", invernaderoId: "", zonaId: "", importancia: "Media" });

  const agregarNota = () => {
    if (!nuevaNota.titulo || !nuevaNota.descripcion || !nuevaNota.zonaId || !nuevaNota.invernaderoId) return;
    const fecha = new Date();
    const fechaStr = fecha.toISOString().split("T")[0];
    const horaStr = fecha.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    setNotas([...notas, { id: notas.length + 1, ...nuevaNota, fecha: fechaStr, hora: horaStr }]);
    setNuevaNota({ titulo: "", descripcion: "", invernaderoId: "", zonaId: "", importancia: "Media" });
  };

  const eliminarNota = (id) => {
    setNotas(notas.filter(nota => nota.id !== id));
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center">
      <h1 className="text-3xl font-bold text-green-700 mb-6">Bloc de Notas</h1>
      
      <div className="bg-white p-4 rounded-xl shadow-lg w-full max-w-md mb-6">
        <h2 className="text-lg font-semibold mb-3 text-gray-700">Nueva Nota</h2>
        <select value={nuevaNota.invernaderoId} 
                onChange={(e) => setNuevaNota({ ...nuevaNota, invernaderoId: Number(e.target.value), zonaId: "" })} 
                className="border border-gray-300 p-2 w-full mb-2 rounded-lg">
          <option value="">Seleccione un Invernadero</option>
          {invernaderos.map((inv) => (
            <option key={inv.id} value={inv.id}>{inv.nombre}</option>
          ))}
        </select>
        <select value={nuevaNota.zonaId} 
                onChange={(e) => setNuevaNota({ ...nuevaNota, zonaId: Number(e.target.value) })} 
                className="border border-gray-300 p-2 w-full mb-3 rounded-lg" 
                disabled={!nuevaNota.invernaderoId}>
          <option value="">Seleccione una Zona</option>
          {zonas[nuevaNota.invernaderoId]?.map((zona) => (
            <option key={zona.id} value={zona.id}>{zona.nombre}</option>
          ))}
        </select>
        <input type="text" placeholder="Título" value={nuevaNota.titulo} 
               onChange={(e) => setNuevaNota({ ...nuevaNota, titulo: e.target.value })} 
               className="border border-gray-300 p-2 w-full mb-2 rounded-lg" />
        <textarea placeholder="Descripción" value={nuevaNota.descripcion}
               onChange={(e) => setNuevaNota({ ...nuevaNota, descripcion: e.target.value })} 
               className="border border-gray-300 p-2 w-full mb-2 rounded-lg h-20 resize-none" />
               <label>Clasificacion importancia</label>
        <select value={nuevaNota.importancia}
                onChange={(e) => setNuevaNota({ ...nuevaNota, importancia: e.target.value })}
                className="border border-gray-300 p-2 w-full mb-2 rounded-lg">
          <option value="Alta">🔴 Alta</option>
          <option value="Media">🟡 Media</option>
          <option value="Baja">🟢 Baja</option>
        </select>
        <button onClick={agregarNota} className="bg-green-500 text-white font-semibold px-4 py-2 rounded-lg w-full hover:bg-green-700 transition">➕ Agregar Nota</button>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-4xl">
        {notas.map((nota) => (
          <div key={nota.id} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition relative">
            <span className={`absolute top-2 left-2 px-3 py-1 text-white font-bold rounded-full ${nota.importancia === "Alta" ? "bg-red-500" : nota.importancia === "Media" ? "bg-yellow-500" : "bg-green-500"}`}>{nota.importancia}</span>
            <button onClick={() => eliminarNota(nota.id)} className="absolute top-2 right-2 text-red-500 hover:text-red-700">🗑️</button>
            <h3 className="text-lg font-semibold text-green-700 mb-2 mt-6">{nota.titulo}</h3>
            <p className="text-gray-600 mb-2">{nota.descripcion}</p>
            <p className="text-gray-600">{invernaderos.find(i => i.id === nota.invernaderoId)?.nombre || "Desconocido"}</p>
            <p className="text-gray-600">{zonas[nota.invernaderoId]?.find(z => z.id === nota.zonaId)?.nombre || "Desconocida"}</p>
            <p className="text-sm text-gray-500">📅 {nota.fecha} | ⏰ {nota.hora}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlocComp;
