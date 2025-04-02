import React from "react";

const EliminarCuenta = () => {
  const handleEliminar = () => {
    console.log("Cuenta eliminada.");
    alert("Tu cuenta ha sido eliminada.");
  };

  return (
    <div className="p-6 bg-green-100 rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-red-700">Eliminar Cuenta</h2>
      <p className="text-gray-700 mb-2">
        Si eliminas tu cuenta, perderás acceso a todos los datos y servicios de HortiTech. Esta acción
        no se puede deshacer.
      </p>
      <button
        className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        onClick={handleEliminar}
      >
        Eliminar mi Cuenta
      </button>
    </div>
  );
};

export default EliminarCuenta;
