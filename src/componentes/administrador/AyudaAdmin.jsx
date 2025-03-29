import React, { useState } from 'react';

const AyudaAdmin = () => {
  const [mensaje, setMensaje] = useState("");
  const [enviado, setEnviado] = useState(false);

  const enviarMensaje = (e) => {
    e.preventDefault();
    console.log("Mensaje enviado:", mensaje);
    setEnviado(true);
    setMensaje(""); 
  };

  return (
    <div className="p-6 bg-gray-100 rounded shadow-md">
      <h2 className="text-xl font-bold mb-4">Ayuda</h2>
      <p>¿Necesitas ayuda? Contacta a soporte técnico en <strong>soporte@hortitech.com</strong></p>

      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-2">Preguntas Frecuentes</h3>
        <ul className="list-disc list-inside text-gray-700">
          <li>¿Cómo puedo cambiar mi contraseña?</li>
          <li>¿Dónde encuentro los reportes administrativos?</li>
          <li>¿Qué hago si tengo problemas técnicos?</li>
        </ul>
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-2">Enviar Mensaje al Soporte</h3>
        {!enviado ? (
          <form onSubmit={enviarMensaje}>
            <textarea
              placeholder="Escribe tu mensaje aquí..."
              className="w-full border rounded px-4 py-2 mb-4"
              rows="4"
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)}
            />
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Enviar
            </button>
          </form>
        ) : (
          <p className="text-green-600 font-semibold">¡Tu mensaje fue enviado con éxito!</p>
        )}
      </div>
    </div>
  );
};

export default AyudaAdmin;
