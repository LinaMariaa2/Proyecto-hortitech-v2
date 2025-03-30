import React, { useState } from "react";

function AgregarZona({ onAgregar, onClose }) {
  const [zona, setZona] = useState({
    nombre: "",
    tipoCultivo: "",
    descripcion: "",
    tipoRiego: "Goteo", // Valor por defecto
    tipoIluminacion: "LED", 
    ultimaActivacion: "",
  });

  const handleChange = (e) => {
    setZona({ ...zona, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!zona.nombre.trim()) return;
    onAgregar(zona);
    onClose(); // Cierra el modal después de agregar
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-100 bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-xl w-96">
        <h2 className="text-xl font-semibold mb-4">Agregar Nueva Zona</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="nombre"
            placeholder="Nombre de la Zona"
            className="w-full border p-2 mb-2"
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="tipoCultivo"
            placeholder="Tipo de Cultivo"
            className="w-full border p-2 mb-2"
            onChange={handleChange}
            required
          />
          
          <input
            type="text"
            name="descripcion"
            placeholder="Descripción"
            className="w-full border p-2 mb-2"
            onChange={handleChange}
          />

          {/* Tipo de Riego (Enum) */}
          <label className="block mb-1 font-semibold">Tipo de Riego</label>
          <select name="tipoRiego" className="w-full border p-2 mb-2" value={zona.tipoRiego} onChange={handleChange}>
            <option value="Goteo">Goteo</option>
            <option value="Aspersión">Aspersión</option>
          </select>

          {/* Tipo de Iluminación (Enum) */}
          <label className="block mb-1 font-semibold">Tipo de Iluminación</label>
          <select name="tipoIluminacion" className="w-full border p-2 mb-2" value={zona.tipoIluminacion} onChange={handleChange}>
            <option value="LED">LED</option>
            <option value="Sodio">Sodio</option>
            </select>

          {/* Última Activación (Fecha y Hora) */}
          <label className="block mb-1 font-semibold">Última Activación</label>
          <input
            type="datetime-local"
            name="ultimaActivacion"
            className="w-full border p-2 mb-2"
            onChange={handleChange}
          />

          <div className="flex justify-between mt-4">
            <button type="button" onClick={onClose} className="bg-red-500 text-white px-3 py-2 rounded-md">
              Cancelar
            </button>
            <button type="submit" className="bg-green-500 text-white px-3 py-2 rounded-md">
              Agregar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AgregarZona;
