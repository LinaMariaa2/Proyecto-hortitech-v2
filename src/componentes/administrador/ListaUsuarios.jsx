import React from "react";

const ListaUsuarios = () => {
  const usuarios = [
    { nombre: "Juan Pérez", email: "juan@correo.com", telefono: "123-456-7890", genero: "Masculino" },
    { nombre: "Ana Gómez", email: "ana@correo.com", telefono: "321-654-0987", genero: "Femenino" },
    { nombre: "Carlos Ramírez", email: "carlos@correo.com", telefono: "987-654-3210", genero: "Masculino" },
    { nombre: "Laura Martínez", email: "laura@correo.com", telefono: "765-432-1098", genero: "Femenino" },
  ];

  return (
    <div className="p-6 bg-white rounded shadow-md max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Lista de Usuarios</h2>
      <ul className="divide-y divide-gray-200">
        {usuarios.map((usuario, index) => (
          <li key={index} className="py-4">
            <p className="text-gray-800 font-medium">{usuario.nombre}</p>
            <p className="text-gray-500 text-sm">Email: {usuario.email}</p>
            <p className="text-gray-500 text-sm">Teléfono: {usuario.telefono}</p>
            <p className="text-gray-500 text-sm">Género: {usuario.genero}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaUsuarios;

