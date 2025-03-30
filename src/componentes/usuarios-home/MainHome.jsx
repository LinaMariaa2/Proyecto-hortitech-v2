import React from 'react';
import { Link } from 'react-router-dom'; 

const MainHome = () => {
    return (
        <main className="flex flex-col items-center justify-center min-h-screen bg-[url('/src/imagenes/img/imagen3.jpg')] bg-cover bg-center bg-fixed">
            <article className="w-full max-w-4xl bg-white/80 rounded-lg shadow-lg p-8 text-center">

                <section id="about" className="mb-8">
                    <h2 className="text-3xl font-bold text-green-700 mb-4">Acerca de Nosotros</h2>
                    <p className="text-gray-700">
                        HorTitech es una solución tecnológica que permite controlar de forma remota los sistemas de luz y agua. Ideal para la agricultura moderna y el manejo eficiente de recursos en edificios e industrias.
                    </p>
                </section>

                <section id="features" className="features">
                    <h2 className="text-3xl font-bold text-green-700 mb-4">Características principales</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                        <div className="bg-green-200 p-6 rounded-lg shadow-md hover:shadow-lg hover:-translate-y-2 transform transition duration-300">
                            <h3 className="text-xl font-bold text-green-800">Control Remoto</h3>
                            <p className="text-gray-600 mt-2">
                                Activa o desactiva los sistemas de luz y agua desde cualquier lugar.
                            </p>
                        </div>
                        <div className="bg-green-200 p-6 rounded-lg shadow-md hover:shadow-lg hover:-translate-y-2 transform transition duration-300">
                            <h3 className="text-xl font-bold text-green-800">Optimización de Recursos</h3>
                            <p className="text-gray-600 mt-2">
                                Maximiza el uso eficiente del agua y la electricidad con programación inteligente.
                            </p>
                        </div>

                        <div className="bg-green-200 p-6 rounded-lg shadow-md hover:shadow-lg hover:-translate-y-2 transform transition duration-300">
                            <h3 className="text-xl font-bold text-green-800">Fácil Integración</h3>
                            <p className="text-gray-600 mt-2">
                                Compatible con diferentes tipos de instalaciones, adaptable a tus necesidades.
                            </p>
                        </div>
                    </div>
                </section>

                <section id="cta" className="mt-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">¿Quieres saber más?</h2>
                    <Link to="/solicitarInformacioN">
                        <button className="bg-green-500 text-white py-3 px-6 rounded-lg hover:bg-green-600 transition">
                            Solicitar Información
                        </button>
                    </Link>
                </section>

                <section id="testimonials" className="mt-12">
                    <h2 className="text-3xl font-bold text-green-700 mb-6">Lo que dicen nuestros clientes</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-green-50 p-4 rounded-lg shadow-md">
                            <p className="text-gray-700 italic">
                                "HorTitech transformó nuestra manera de trabajar. Ahora ahorramos recursos y mejoramos la productividad."
                            </p>
                            <p className="text-gray-800 font-bold mt-2">- Ana Martínez, Agricultora</p>
                        </div>
                        <div className="bg-green-50 p-4 rounded-lg shadow-md">
                            <p className="text-gray-700 italic">
                                "La instalación fue rápida y sencilla, y los beneficios han sido increíbles. ¡100% recomendado!"
                            </p>
                            <p className="text-gray-800 font-bold mt-2">- Juan Pérez, Ingeniero</p>
                        </div>
                    </div>
                </section>
            </article>
        </main>
    );
};

export default MainHome;




