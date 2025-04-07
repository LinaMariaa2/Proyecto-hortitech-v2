import React, { useState } from "react";
import { FaCamera, FaLock, FaTimes } from "react-icons/fa"; // Importar íconos de Font Awesome

const AjustesAdmin = () => {
  const [modalFoto, setModalFoto] = useState(false);
  const [modalContraseña, setModalContraseña] = useState(false);
  const [previewFoto, setPreviewFoto] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setPreviewFoto(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const cambiarFoto = () => {
    console.log("Foto de perfil actualizada");
    setModalFoto(false);
  };

  const cambiarContraseña = () => {
    console.log("Contraseña actualizada");
    setModalContraseña(false);
  };

  return (
    <div>
      <h3 className="text-lg font-bold mb-4 text-green-700">Ajustes</h3>
      <div className="flex items-center mb-4">
        <button
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 flex items-center gap-2 transition"
          onClick={() => setModalFoto(true)}
        >
          <FaCamera /> Actualizar Foto de Perfil
        </button>
        <div className="w-16 h-16 ml-4 rounded-full overflow-hidden">
          {previewFoto ? (
            <img
              src={previewFoto}
              alt="Previsualización"
              className="object-cover w-full h-full"
            />
          ) : (
            <div className="bg-gray-300 w-full h-full flex items-center justify-center">
              <span className="text-gray-500">Sin Foto</span>
            </div>
          )}
        </div>
      </div>
      <button
        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 flex items-center gap-2 transition"
        onClick={() => setModalContraseña(true)}
      >
        <FaLock /> Cambiar Contraseña
      </button>

      {modalFoto && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow-md w-96 relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={() => setModalFoto(false)}
            >
              <FaTimes />
            </button>
            <h4 className="text-lg font-bold mb-4 text-green-700">Cambiar Foto de Perfil</h4>
            <div className="flex flex-col items-center mb-4">
              {previewFoto ? (
                <img
                  src={previewFoto}
                  alt="Previsualización"
                  className="w-32 h-32 rounded-full object-cover"
                />
              ) : (
                <div className="w-32 h-32 rounded-full bg-gray-300 flex items-center justify-center">
                  <span className="text-gray-500">Sin Foto</span>
                </div>
              )}
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="mt-4"
              />
            </div>
            <button
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
              onClick={cambiarFoto}
            >
              Guardar Foto
            </button>
            <button
              className="ml-2 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition"
              onClick={() => setModalFoto(false)}
            >
              Cancelar
            </button>
          </div>
        </div>
      )}
      {modalContraseña && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow-md w-96 relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={() => setModalContraseña(false)}
            >
              <FaTimes />
            </button>
            <h4 className="text-lg font-bold mb-4 text-green-700">Cambiar Contraseña</h4>
            <div>
              <input
                type="password"
                placeholder="Nueva Contraseña"
                className="mb-4 border rounded px-4 py-2 w-full"
              />
              <input
                type="password"
                placeholder="Confirmar Contraseña"
                className="mb-4 border rounded px-4 py-2 w-full"
              />
            </div>
            <button
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
              onClick={cambiarContraseña}
            >
              Guardar Contraseña
            </button>
            <button
              className="ml-2 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition"
              onClick={() => setModalContraseña(false)}
            >
              Cancelar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AjustesAdmin;
