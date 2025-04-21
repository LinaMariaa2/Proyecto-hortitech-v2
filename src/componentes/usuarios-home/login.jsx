import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Login = () => {
    return (
        <>
            <div className="min-h-screen flex items-center justify-center bg-green-100">
                <div className="bg-green-50 shadow-md rounded-lg px-8 py-6 max-w-md w-full">
                    <h1 className="text-3xl font-bold text-center text-green-700 mb-6">Inicio de Sesión</h1>
                    <form className="space-y-4">
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
                        <Link
                            to="/seleccionRol"
                            className="block text-center w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition"
                            >
                            Iniciar Sesión
                        </Link>
                    </form>
                    <p className="text-gray-600 mt-4">
                        ¿No tienes cuenta? <Link to="/registro" className="text-green-500 hover:underline">Regístrate aquí</Link>.
                    </p>
                    <p className="text-gray-600 mt-4">
                        ¿Olvidó su contraseña? <Link to="/password" className="text-green-500 hover:underline">Recuperar</Link>.
                    </p>
                </div>
            </div>
            <Outlet />
        </>
    );
};

export default Login;
