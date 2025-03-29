import React, { useState } from "react";
import PerfilAdmin from "./PerfilAdmin";
import AyudaAdmin from "./AyudaAdmin";
import EliminarCuenta from "./EliminarCuenta";
import PoliticasPrivacidad from "./PoliticasPrivacidad";

const ConfiguracionAprendiz = () => {
  const [vista, setVista] = useState("perfil"); 

  const cerrarSesion = () => {
    console.log("Sesión cerrada.");
    alert("Has cerrado sesión.");
    window.location.href = "/login";
  };

  return (
    <div
      className="flex h-screen"
      style={{
        background: "linear-gradient(to bottom, #a8edea, #fed6e3)", // Fondo degradado
      }}
    >

      <div className="w-1/4 bg-green-700 text-white p-4 shadow-lg flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-bold mb-6 text-center"> Configuacion Aprendiz</h2>
          <ul className="space-y-4">
            <li>
              <button
                className={`w-full text-left px-4 py-2 rounded ${
                  vista === "perfil" ? "bg-green-800" : "bg-green-700 hover:bg-green-800"
                } transition`}
                onClick={() => setVista("perfil")}
              >
                👤 Perfil
              </button>
            </li>
            <li>
              <button
                className={`w-full text-left px-4 py-2 rounded ${
                  vista === "ayuda" ? "bg-green-800" : "bg-green-700 hover:bg-green-800"
                } transition`}
                onClick={() => setVista("ayuda")}
              >
                ❓ Ayuda
              </button>
            </li>
            <li>
              <button
                className={`w-full text-left px-4 py-2 rounded ${
                  vista === "eliminarCuenta" ? "bg-red-600" : "bg-green-700 hover:bg-green-800"
                } transition`}
                onClick={() => setVista("eliminarCuenta")}
              >
                🗑️ Eliminar Cuenta
              </button>
            </li>
            <li>
              <button
                className={`w-full text-left px-4 py-2 rounded ${
                  vista === "politicas" ? "bg-green-800" : "bg-green-700 hover:bg-green-800"
                } transition`}
                onClick={() => setVista("politicas")}
              >
                📜 Políticas y Privacidad
              </button>
            </li>
          </ul>
        </div>

        <div className="mt-6">
          <button
            className="w-full text-left px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded transition"
            onClick={cerrarSesion}
          >
            🔒 Cerrar Sesión
          </button>
        </div>

        <div className="text-center text-sm mt-6">
          <p className="text-white">© 2025 HortiTech. Todos los derechos reservados.</p>
        </div>
      </div>

      <div
        className="w-3/4 p-6"
        style={{
          background: "linear-gradient(to bottom, #d4edda, #a8deaa)", // Fondo verde degradado
          overflowY: "auto",
        }}
      >
        {vista === "perfil" && <PerfilAdmin />}
        {vista === "ayuda" && <AyudaAdmin />}
        {vista === "eliminarCuenta" && <EliminarCuenta />}
        {vista === "politicas" && <PoliticasPrivacidad />}
      </div>
    </div>
  );
};

export default ConfiguracionAprendiz;
