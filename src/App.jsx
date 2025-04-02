import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Home
import Home from './vistas/usuarios-home/home.jsx';
import InicioSesion from './vistas/usuarios-home/InicioSesion.jsx';
import Reco from './vistas/usuarios-home/reco.jsx';
import Reccontraseña from './vistas/usuarios-home/Reccontraseña.jsx';
import SolicitarInformacion from './vistas/usuarios-home/SolicitarInformacion.jsx';

//Programacion


// Inv
import PanelInvA from "./vistas/administrador/PanelInvA";
import PanelZonasA from "./vistas/administrador/PanelZonasA";
import PanelInvU from "./vistas/Aprendiz/PanelInvU";
import PanelZonasU from "./vistas/Aprendiz/PanelZonasU";

//Bloc
import BlocU from "./vistas/Aprendiz/BlocU";
import BlocA from "./vistas/administrador/BlocA";

//Barra Navegacion
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

//Menu Est


//Configuraciones



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

        {/* PROGRAMACION */}


        {/* INV */}
        <Route path="/panelInvA" element={<PanelInvA />} />
        <Route path="/panelzona/:id" element={<PanelZonasA />} />
        <Route path="/PanelInvU" element={<PanelInvU />} />
        <Route path="/PanelZonassU/:id" element={<PanelZonasU />} />
        
        {/* BLOC */}
        <Route path="/BlocA" element={<BlocA />} />
        <Route path="/BlocU" element={<BlocU />} />
      
        {/* BARRA NAVEGACION */}
        <Route path="Menu" element={<Menu />}></Route>
        <Route path="Estadisticas" element={<Estadisticas />} />
        <Route path="Agenda" element={<Agenda />} />
        <Route path="Visualizacion" element={<Visualizacion />} />
        <Route path="Configuracion" element={<Configuracion />} />
        <Route path="Programacion" element={<Programacion />} />
        <Route path="Riego" element={<Riego />} />
        <Route path="iluminacion" element={<Iluminacion />} />
        <Route path="temperatura" element={<Temperatura />} />

        {/* MENU ESTAT*/}


        {/* CONFIGURACIONES */}

        

       

      </Routes>
    </Router>
  );
};


export default App;



