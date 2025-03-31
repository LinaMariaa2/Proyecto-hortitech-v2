import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Menu from './vistas/Menu';
import Estadisticas from './componentes/usuario/Estadisticas';
import Agenda from './componentes/usuario/Agenda';
import Visualizacion from './componentes/usuario/Visualizacion';
import Configuracion from './componentes/usuario/Configuracion';
import Programacion from './componentes/usuario/Programacion';
import './App.css';
import Riego from './componentes/usuario/Riego';
import Iluminacion from './componentes/Iluminacion';
import Temperatura from './componentes/Temperatura';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Menu />}>
            <Route path="Estadisticas" element={<Estadisticas />} />
            <Route path="Agenda" element={<Agenda />} />
            <Route path="Visualizacion" element={<Visualizacion />} />
            <Route path="Configuracion" element={<Configuracion />} />
            <Route path="Programacion" element={<Programacion />} />
            <Route path="Riego" element={<Riego />} />
            <Route path="iluminacion" element={<Iluminacion />} />
            <Route path="temperatura" element={<Temperatura />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;