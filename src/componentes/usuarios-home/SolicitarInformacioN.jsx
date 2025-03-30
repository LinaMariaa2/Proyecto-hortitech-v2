import React, { useState } from 'react';

const SolicitarInformacioN = () => {
  const [formData, setFormData] = useState({ nombre: '', email: '', consulta: '' });
  const [mensajeExito, setMensajeExito] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Simulación de envío de datos (aquí puedes conectar con una API)
    setTimeout(() => {
      setMensajeExito('¡Gracias por contactarnos! Hemos recibido tu consulta y te responderemos pronto.');
      setFormData({ nombre: '', email: '', consulta: '' }); // Limpiar el formulario
    }, 1000);
  };

  return (
    <section id="solicitar-informacion" className="min-h-screen flex items-center justify-center bg-green-100">
      <div className="bg-white shadow-lg rounded-lg px-8 py-6 max-w-md w-full">
        <h2 className="text-2xl font-bold text-center text-green-700 mb-4">Solicitar Información</h2>
        <p className="text-gray-700 text-center mb-4">
          Completa el formulario para enviarnos tus datos y consulta. ¡Nos encantaría ayudarte!
        </p>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="nombre"
            placeholder="Tu nombre completo"
            value={formData.nombre}
            onChange={handleChange}
            required
            className="border border-green-300 rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Tu correo electrónico"
            value={formData.email}
            onChange={handleChange}
            required
            className="border border-green-300 rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <textarea
            name="consulta"
            placeholder="Escribe tu consulta aquí..."
            value={formData.consulta}
            onChange={handleChange}
            required
            className="border border-green-300 rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-green-400"
            rows="4"
          />
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition"
          >
            Enviar
          </button>
        </form>
        {mensajeExito && <p className="text-green-700 text-center mt-4">{mensajeExito}</p>}
      </div>
    </section>
  );
};

export default SolicitarInformacioN;
