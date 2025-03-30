import React, { useState } from 'react';

function Recpassword() {
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTimeout(() => {
      setMensaje(`Se ha enviado un correo a ${email} para restablecer tu contraseña.`);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-100">
      <div className="bg-green-50 shadow-md rounded px-8 py-6 max-w-md w-full">
        <h2 className="text-2xl font-bold text-center text-green-700 mb-4">Recuperar Contraseña</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-green-800 mb-1">
              Correo Electrónico:
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="border border-green-300 rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition"
          >
            Enviar Correo de Recuperación
          </button>
        </form>
        {mensaje && (
          <p className="mt-4 text-green-700 font-medium text-center">{mensaje}</p>
        )}
      </div>
    </div>
  );
}

export default Recpassword;
