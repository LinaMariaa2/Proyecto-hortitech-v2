import React, { useState } from "react";

const EliminarCuenta = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [razonSeleccionada, setRazonSeleccionada] = useState("");
  const [confirmado, setConfirmado] = useState(false);

  const razones = [
    "No encuentro valor en usar esta plataforma",
    "Preocupaciones sobre la privacidad",
    "Demasiadas notificaciones",
    "Otro motivo",
  ];

  const handleEliminarCuenta = () => {
    if (razonSeleccionada) {
      setConfirmado(true);
      setModalVisible(false);
    } else {
      alert("Por favor selecciona una razón antes de continuar.");
    }
  };

  return (
    <div className="p-6 bg-white rounded shadow-md max-w-lg mx-auto">
      <h2 className="text-xl font-semibold mb-4 text-red-600 text-center">
        Eliminar Cuenta
      </h2>
      <p className="text-gray-700 mb-6 text-center">
        Antes de continuar, nos gustaría saber por qué deseas eliminar tu cuenta.
      </p>
      <div className="flex justify-center">
        <button
          className="px-6 py-2 bg-red-500 text-white font-medium rounded hover:bg-red-600 transition"
          onClick={() => setModalVisible(true)}
        >
          Continuar
        </button>
      </div>

      {modalVisible && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow-md max-w-md">
            <h4 className="text-lg font-bold mb-4 text-center">
              ¿Cuál es la razón para eliminar tu cuenta?
            </h4>
            <ul className="mb-4">
              {razones.map((razon, index) => (
                <li key={index} className="mb-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="razon"
                      value={razon}
                      className="mr-2"
                      onChange={() => setRazonSeleccionada(razon)}
                    />
                    {razon}
                  </label>
                </li>
              ))}
            </ul>
            <button
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              onClick={handleEliminarCuenta}
            >
              Confirmar Eliminación
            </button>
            <button
              className="ml-2 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
              onClick={() => setModalVisible(false)}
            >
              Cancelar
            </button>
          </div>
        </div>
      )}

      {confirmado && (
        <p className="text-center text-green-600 font-semibold mt-4">
          Tu cuenta ha sido eliminada. Lamentamos verte partir.
        </p>
      )}
    </div>
  );
};

export default EliminarCuenta;
