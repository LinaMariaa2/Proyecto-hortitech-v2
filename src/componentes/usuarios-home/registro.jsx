import React, { useState } from 'react';
import axios from 'axios';

function Registro() {
  const [form, setForm] = useState({
    nombre_usuario: '',
    correo: '',
    contrasena: '',
    
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };
     
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3000/api/persona/registro', form);
      alert('Usuario registrado correctamente');
      console.log(res.data);
    } catch (error) {
      alert('Error al registrar: ' + (error.response?.data?.mensaje || 'Error desconocido'));
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-100">
      <div className="bg-green-50 shadow-md rounded-lg px-8 py-6 max-w-md w-full">
        <h1 className="text-3xl font-bold text-center text-green-700 mb-6">Registro</h1>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="nombre_usuario"
            placeholder="Nombre de usuario"
            value={form.nombre_usuario}
            onChange={handleChange}
            className="border border-green-300 rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-green-400"
            required
          />
          <input
            type="email"
            name="correo"
            placeholder="Correo electrónico"
            value={form.correo}
            onChange={handleChange}
            className="border border-green-300 rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-green-400"
            required
          />
          <input
            type="password"
            name="contrasena"
            placeholder="Contraseña"
            value={form.contrasena}
            onChange={handleChange}
            className="border border-green-300 rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-green-400"
            required
          />
          
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition"
            
          >
            Crear Cuenta
          </button>
        </form>
        <p className="text-gray-600 mt-4">
          ¿Ya tienes cuenta?{' '}
          <a href="/verificar-correo" className="text-green-500 hover:underline">reenviar el codigo</a>.
        </p>
      </div>
    </div>
  );
}

export default Registro;
