import React from "react";

const AyudaAdmin = () => {
  return (
    <div className="p-6 bg-green-100 rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-green-700">Ayuda</h2>
      <p className="text-gray-700 mb-2">
        Si necesitas soporte, por favor contacta a nuestro equipo mediante el correo:{" "}
        <span className="font-semibold">soporte@hortitech.com</span>.
      </p>
      <p className="text-gray-700 mb-2">
        Puedes también visitar nuestra sección de preguntas frecuentes para resolver dudas comunes.
      </p>
      <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
        Ver Preguntas Frecuentes
      </button>
    </div>
  );
};

export default AyudaAdmin;
