import React, { useState } from "react";

function AgregarZona({ onAgregar, onClose }) {
  const [zona, setZona] = useState({
    nombre: "",
    tipoCultivo: "",
    descripcion: "",
    tipoRiego: "",
    tipoIluminacion: "",
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
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
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
          <input
            type="text"
            name="tipoRiego"
            placeholder="Tipo de Riego"
            className="w-full border p-2 mb-2"
            onChange={handleChange}
          />
          <input
            type="text"
            name="tipoIluminacion"
            placeholder="Tipo de Iluminación"
            className="w-full border p-2 mb-2"
            onChange={handleChange}
          />
          <input
            type="text"
            name="ultimaActivacion"
            placeholder="Última Activación"
            className="w-full border p-2 mb-2"
            onChange={handleChange}
          />
          <div className="flex justify-end">
            <button type="button" onClick={onClose} className="bg-red-500 text-white px-3 py-2 rounded-md mr-2">
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
