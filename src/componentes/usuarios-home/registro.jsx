import React from 'react';

const Registro = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-green-100">
      <div className="bg-green-50 shadow-md rounded-lg px-8 py-6 max-w-md w-full">
        <h1 className="text-3xl font-bold text-center text-green-700 mb-6">Registro</h1>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Nombre completo"
            className="border border-green-300 rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <input
            type="email"
            placeholder="Correo electrónico"
            className="border border-green-300 rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <input
            type="password"
            placeholder="Contraseña"
            className="border border-green-300 rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <select
            className="border border-green-300 rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-green-400"
            required
          >
            <option value="" disabled selected>Selecciona tu rol</option>
            <option value="estudiante">Estudiante</option>
            <option value="administrador">Administrador</option>
          </select>
          <button className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition">
            Crear Cuenta
          </button>
        </form>
        <p className="text-gray-600 mt-4">
          ¿Ya tienes cuenta? <a href="/login" className="text-green-500 hover:underline">Inicia sesión aquí</a>.
        </p>
      </div>
    </div>
  );
};

export default Registro;
