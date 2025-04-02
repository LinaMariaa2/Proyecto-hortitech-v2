import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Home
import Home from './vistas/usuarios-home/home.jsx';
import InicioSesion from './vistas/usuarios-home/InicioSesion.jsx';
import Reco from './vistas/usuarios-home/reco.jsx';
import Reccontraseña from './vistas/usuarios-home/Reccontraseña.jsx';
import SolicitarInformacion from './vistas/usuarios-home/SolicitarInformacion.jsx';

// Administración
import PanelInvA from "./vistas/administrador/PanelInvA";
import PanelZonasA from "./vistas/administrador/PanelZonasA";
import BlocA from "./vistas/administrador/BlocA";
import ConfigAdmin from "./vistas/configuraciones/ConfigAdmin";

// Aprendiz
import PanelInvU from "./vistas/Aprendiz/PanelInvU";
import PanelZonasU from "./vistas/Aprendiz/PanelZonasU";
import BlocU from "./vistas/Aprendiz/BlocU";
import ConfigAprendiz from "./vistas/configuraciones/ConfigAprendiz";

// Barra de navegación
import Menu from './vistas/Menu';
import MenuUser from './vistas/MenuUser';
import Estadisticas from './componentes/usuario/Estadisticas';
import Agenda from './componentes/usuario/Agenda';
import Visualizacion from './componentes/usuario/Visualizacion';
import Configuracion from './componentes/usuario/Configuracion';
import Programacion from './componentes/usuario/Programacion';
import Riego from './componentes/usuario/Riego';
import Iluminacion from './componentes/Iluminacion';
import Temperatura from './componentes/Temperatura';

import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Rutas generales */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<InicioSesion />} />
        <Route path="/registro" element={<Reco />} />
        <Route path="/password" element={<Reccontraseña />} />
        <Route path="/solicitarInformacion" element={<SolicitarInformacion />} />

        {/* Rutas para Administrador */}
        <Route path="/admin" element={<Menu />}>
          <Route path="panelInvA" element={<PanelInvA />} />
          <Route path="panelzona/:id" element={<PanelZonasA />} />
          <Route path="blocA" element={<BlocA />} />
          <Route path="config" element={<ConfigAdmin />} />
          <Route path="estadisticas" element={<Estadisticas />} />
          <Route path="agenda" element={<Agenda />} />
          <Route path="visualizacion" element={<Visualizacion />} />
          <Route path="configuracion" element={<Configuracion />} />
          <Route path="programacion" element={<Programacion />} />
          <Route path="riego" element={<Riego />} />
          <Route path="iluminacion" element={<Iluminacion />} />
          <Route path="temperatura" element={<Temperatura />} />
        </Route>

        {/* Rutas para Aprendiz */}
        <Route path="/aprendiz" element={<MenuUser />}>
          <Route path="panelInvU" element={<PanelInvU />} />
          <Route path="panelZonasU/:id" element={<PanelZonasU />} />
          <Route path="blocU" element={<BlocU />} />
          <Route path="config" element={<ConfigAprendiz />} />
          <Route path="estadisticas" element={<Estadisticas />} />
          <Route path="agenda" element={<Agenda />} />
          <Route path="visualizacion" element={<Visualizacion />} />
          <Route path="configuracion" element={<Configuracion />} />
          <Route path="programacion" element={<Programacion />} />
          <Route path="riego" element={<Riego />} />
          <Route path="iluminacion" element={<Iluminacion />} />
          <Route path="temperatura" element={<Temperatura />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;

        

