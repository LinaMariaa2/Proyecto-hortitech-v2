import React, { useState, useEffect } from "react";

function AgregarInvernadero({ isOpen, onClose, onAgregar }) {
   
  const [invernadero, setInvernadero] = useState({
    nombre: "",
    descripcion: "",
    fechaCreacion: "",
    estado: "Activo", //predefinido
    responsable: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInvernadero((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!invernadero.nombre || !invernadero.fechaCreacion || !invernadero.responsable) {
      alert("Todos los campos obligatorios deben ser llenados");
      return;
    }
    onAgregar(invernadero);
    onClose();
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <div className="fixed inset-0 bg-gray-100 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
        <h2 className="text-xl font-bold mb-4">Agregar Invernadero</h2>
        <form onSubmit={handleSubmit}>
          <label className="block ">Nombre </label>
          <input type="text" name="nombre" className="w-full p-2 border rounded mb-3" value={invernadero.nombre} onChange={handleChange} required />

          <label className="block ">Descripción</label>
          <textarea name="descripcion" className="w-full p-2 border rounded mb-3" value={invernadero.descripcion} onChange={handleChange} />

          <label className="block ">Fecha de Creación </label>
          <input type="date" name="fechaCreacion" className="w-full p-2 border rounded mb-3" value={invernadero.fechaCreacion} onChange={handleChange} required />

          <label className="block ">Estado</label>
          <select name="estado" className="w-full p-2 border rounded mb-3" value={invernadero.estado} onChange={handleChange}>
            <option value="Activo">Activo</option>
            <option value="Inactivo">Inactivo</option>
          </select>

          <label className="block ">Responsable</label>
          <input type="text" name="responsable" className="w-full p-2 border rounded mb-3" value={invernadero.responsable} onChange={handleChange} required />

        
          <div className="flex justify-between ">
            <button type="button" className="bg-red-500 text-white px-4 py-2 rounded" onClick={onClose}>Cancelar</button>
            <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">Agregar</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AgregarInvernadero;
