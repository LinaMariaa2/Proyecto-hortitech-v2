import React, { useState } from "react";
import PerfilAdmin from "./PerfilAdmin";
import ListaUsuarios from "./ListaUsuarios";
import AyudaAdmin from "./AyudaAdmin";
import EliminarCuenta from "./EliminarCuenta";

const ConfiguracionAdmin = () => {
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
        background: "linear-gradient(to bottom, #a8edea, #fed6e3)", 
      }}
    >
      <div className="w-1/4 bg-green-700 text-white p-4 shadow-lg">
        <h2 className="text-xl font-bold mb-6 text-center">Menú Administrador</h2>
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
                vista === "listaUsuarios" ? "bg-green-800" : "bg-green-700 hover:bg-green-800"
              } transition`}
              onClick={() => setVista("listaUsuarios")}
            >
              📋 Lista de Usuarios
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
        </ul>

        <div className="mt-10">
          <button
            className="w-full text-left px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded transition"
            onClick={cerrarSesion}
          >
            🔒 Cerrar Sesión
          </button>
        </div>
      </div>

      <div
        className="w-3/4 p-6"
        style={{
          background: "linear-gradient(to bottom, #d4edda, #a8deaa)", // Fondo degradado verde
          overflowY: "auto",
          borderRadius: "0px", 
                }}
      >
        {vista === "perfil" && <PerfilAdmin />}
        {vista === "listaUsuarios" && <ListaUsuarios />}
        {vista === "ayuda" && <AyudaAdmin />}
        {vista === "eliminarCuenta" && <EliminarCuenta />}
      </div>
    </div>
  );
};

export default ConfiguracionAdmin;
