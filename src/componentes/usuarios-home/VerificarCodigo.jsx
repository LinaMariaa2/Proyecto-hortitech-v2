import React, { useState } from 'react';
import axios from 'axios';

function VerificarCodigo() {
  const [codigo, setCodigo] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3000/api/persona/verificar', { codigo });
      setMensaje('¡Cuenta verificada exitosamente!');
      setError('');
    } catch (err) {
      setMensaje('');
      setError('Código inválido o expirado.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-100 px-4">
      <div className="bg-white shadow-lg rounded-xl p-8 max-w-md w-full border border-green-200">
        <h2 className="text-2xl font-bold text-center text-green-700 mb-4">Verificación de cuenta</h2>
        <p className="text-gray-600 text-center mb-6">
          Ingresa el código de verificación que te enviamos por correo.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Ej: AB3F9Z"
            value={codigo}
            onChange={(e) => setCodigo(e.target.value.toUpperCase())}
            className="w-full px-4 py-2 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 text-center tracking-widest font-mono"
            maxLength={10}
            required
          />
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition"
          >
            Verificar código
          </button>
        </form>

        {mensaje && <p className="text-green-600 mt-4 text-center">{mensaje}</p>}
        {error && <p className="text-red-500 mt-4 text-center">{error}</p>}

        <div className="text-center mt-6">
          <button
            className="text-sm text-green-600 hover:underline"
            onClick={() => alert('Aún no hemos implementado el reenvío')}
          >
            ¿No recibiste el código? Reenviar
          </button>
        </div>
      </div>
    </div>
  );
}

export default VerificarCodigo;
