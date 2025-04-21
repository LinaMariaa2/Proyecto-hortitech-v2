import React from 'react';
import { useState } from 'react';
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';
import './App.css';

// Home
import Home from './vistas/usuarios-home/home.jsx';
import InicioSesion from './vistas/usuarios-home/InicioSesion.jsx';
import Reco from './vistas/usuarios-home/reco.jsx';
import Reccontraseña from './vistas/usuarios-home/Reccontraseña.jsx';
import SolicitarInformacion from './vistas/usuarios-home/SolicitarInformacion.jsx';
import SeleccionRol from './vistas/usuarios-home/SeleccionRol.jsx';

// Administración
import PanelInvA from "./vistas/administrador/PanelInvA.jsx";
import PanelZonasA from "./vistas/administrador/PanelZonasA.jsx";
import BlocA from "./vistas/administrador/BlocA.jsx";
import ConfigAdmin from "./vistas/configuraciones/ConfigAdmin.jsx";
import ProgramacionA from './vistas/administrador/ProgramacionA.jsx';
import Estadisticas from './componentes/usuario/Estadisticas.jsx';
import Menu from './vistas/Menu.jsx';
import Riego from './componentes/usuario/Riego.jsx';
import Iluminacion from './componentes/usuario/Iluminacion.jsx';
import Temperatura from './componentes/usuario/Temperatura.jsx';
import AgregarInvernadero from './componentes/administrador/AgregarInvernadero.jsx';
import AgregarZona from './componentes/administrador/AgregarZona.jsx';

//Aprendiz
import MenuInicio from './vistas/administrador/MenuInicio.jsx';
import MenuInicioU from './vistas/administrador/MenuInicioU.jsx';
import MenuUser from './vistas/MenuUser.jsx';
import EstadisticaU from './componentes/usuario/EstadisiticaU.jsx';
import ConfigAprendiz from './vistas/configuraciones/ConfigAprendiz.jsx'
import ProgramacionU from './vistas/Aprendiz/ProgramacionU.jsx';
import PanelInvU from './vistas/Aprendiz/PanelInvU.jsx';
import PanelZonasU from './vistas/Aprendiz/PanelZonasU.jsx'

function App() {
  return (
     <BrowserRouter>
       <Routes>
        {/* Principales */}
         <Route path="/" element={<Home />} />
         <Route path="/login" element={<InicioSesion />} />
         <Route path="/registro" element={<Reco />} />
         <Route path="/password" element={<Reccontraseña />} />
         <Route path="/solicitarInformacion" element={<SolicitarInformacion />} />
         <Route path="/seleccionRol" element={<SeleccionRol />} /> 

        {/* Rutas Admin */}
         <Route path="/menuInicio" element={<MenuInicio />} />
          <Route path="/MenuA" element={<Menu />}>
            <Route path="Estadisticas" element={<Estadisticas />} />
            <Route path="BlocA" element={<BlocA />} />
            <Route path="ConfigAdmin" element={<ConfigAdmin />} />
            <Route path="ProgramacionA" element={<ProgramacionA />} />
            <Route path="Estadisticas/riego" element={<Riego />} />
            <Route path="Estadisticas/iluminacion" element={<Iluminacion />} />
            <Route path="Estadisticas/consumo" element={<Temperatura />} />
            <Route path="PanelInvA" element={<PanelInvA />} />
            <Route path="PanelInvA/panelZonasA/:idInvernadero" element={<PanelZonasA />} />
            <Route path="PanelInvA/agregarInvernadero" element={<AgregarInvernadero/>} />
            <Route path="PanelInvA/panelZonasA" element={<AgregarZona />} />
          </Route>

          {/* Rutas Aprendiz */}
          <Route path="/menuInicioU" element={<MenuInicioU />} />
          <Route path="/MenuU" element={<MenuUser/>}>
            <Route path="EstadisticasU" element={<EstadisticaU />} />
            <Route path="BlocU" element={<BlocA/>} />
            <Route path="ConfigAprendiz" element={<ConfigAprendiz />} />
            <Route path="ProgramacionU" element={<ProgramacionU />} />
            <Route path="EstadisticasU/riego" element={<Riego />} />
            <Route path="EstadisticasU/iluminacion" element={<Iluminacion />} />
            <Route path="EstadisticasU/consumo" element={<Temperatura />} />
            <Route path="PanelInvU" element={<PanelInvU />} />
            <Route path="PanelInvU/panelZonasU/:idInvernadero" element={<PanelZonasU/>} />
          </Route>
   </Routes>
</BrowserRouter>
)};

export default App;