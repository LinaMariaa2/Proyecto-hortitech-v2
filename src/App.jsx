import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom';
//Home
import Home from './vistas/usuarios-home/home.jsx';
import InicioSesion from './vistas/usuarios-home/InicioSesion.jsx';
import Reco from './vistas/usuarios-home/reco.jsx';
import Reccontraseña from './vistas/usuarios-home/Reccontraseña.jsx';
import SolicitarInformacion from './vistas/usuarios-home/SolicitarInformacion.jsx';

// Inv
import PanelInvA from "./vistas/administrador/PanelInvA";
import PanelZonasA from "./vistas/administrador/PanelZonasA";
import PanelInvU from "./vistas/Aprendiz/PanelInvU";
import PanelZonasU from "./vistas/Aprendiz/PanelZonasU";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* HOME */}
        <Route path="/" element={<Home />} /> 
        <Route path='Login' element={<InicioSesion/>}/>
        <Route path='registro' element={<Reco/>}/>
        <Route path='password'element={<Reccontraseña/>}/>
        <Route path='solicitarInformacion' element={<SolicitarInformacion/>}/>

        {/* INV */}
        <Route path="/panelInvA" element={<PanelInvA />} />
        <Route path="/panelzona/:id" element={<PanelZonasA />} />
        <Route path="/PanelInvU" element={<PanelInvU />} />
        <Route path="/PanelZonassU/:id" element={<PanelZonasU />} />
      
        {/*  */}

      </Routes>
    </Router>
  );
};





export default App;
