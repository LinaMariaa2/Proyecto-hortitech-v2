import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ConfigAprendiz from "./vistas/configuraciones/ConfigAprendiz";
import ConfigAdmin from "./vistas/configuraciones/ConfigAdmin";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/Aprendiz" element={<ConfigAprendiz/>} />
        <Route path="/Administrador" element={<ConfigAdmin/>} /> 
      </Routes>
    </Router>
  );
};

export default App;
