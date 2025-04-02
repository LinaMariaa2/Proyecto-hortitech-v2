import React, { useState } from "react";
import AjustesAprendiz from "./AjustesAprendiz";

const PerfilAdmin = () => {
  const [tabSeleccionada, setTabSeleccionada] = useState("info");

  return (
    <div className="p-6 bg-gray-100 rounded shadow-md">
      <h2 className="text-xl font-bold mb-4">Perfil del Administrador</h2>
      <div className="flex space-x-4 border-b mb-4">
        <button
          className={`px-4 py-2 ${tabSeleccionada === "info" ? "border-b-2 border-blue-500 text-blue-500" : "text-gray-500"}`}
          onClick={() => setTabSeleccionada("info")}
        >
          Información General
        </button>
        <button
          className={`px-4 py-2 ${tabSeleccionada === "ajustes" ? "border-b-2 border-blue-500 text-blue-500" : "text-gray-500"}`}
          onClick={() => setTabSeleccionada("ajustes")}
        >
          Ajustes
        </button>
      </div>

      {tabSeleccionada === "info" && (
        <div>
          <p><strong>Nombre:</strong> Rosa López</p>
          <p><strong>Email:</strong> admin@hortitech.com</p>
          <p><strong>Cumpleaños:</strong> 15 de marzo de 1990</p> 
          <p><strong>Teléfono:</strong> +57 123 456 7890</p>
          <p><strong>Dirección:</strong> Calle Ficticia #123, Popayán</p> 
        </div>
      )}
      {tabSeleccionada === "ajustes" && <AjustesAprendiz/>}
    </div>
  );
};

export default PerfilAdmin;