import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './vistas/usuarios-home/home.jsx';
import InicioSesion from './vistas/usuarios-home/InicioSesion.jsx';
import Reco from './vistas/usuarios-home/reco.jsx';
import Reccontraseña from './vistas/usuarios-home/Reccontraseña.jsx';
import SolicitarInformacion from './vistas/usuarios-home/SolicitarInformacion.jsx';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path='Login' element={<InicioSesion/>}/>
        <Route path='registro' element={<Reco/>}/>
        <Route path='password'element={<Reccontraseña/>}/>
        <Route path='solicitarInformacion' element={<SolicitarInformacion/>}/>
      </Routes>
    </Router>
  );
};

export default App;
