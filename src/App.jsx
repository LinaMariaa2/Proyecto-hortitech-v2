import { BrowserRouter, Routes, Route } from "react-router-dom";
import PanelInvA from "./vistas/administrador/PanelInvA";
import PanelZonasA from "./vistas/administrador/PanelZonasA";
import PanelInvU from "./vistas/Aprendiz/PanelInvU";
import PanelZonasU from "./vistas/Aprendiz/PanelZonasU";
import BlocU from "./vistas/Aprendiz/BlocU";
import BlocA from "./vistas/administrador/BlocA";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/panelInvA" element={<PanelInvA />} />
        <Route path="/panelzona/:id" element={<PanelZonasA />} />

        <Route path="/PanelInvU" element={<PanelInvU />} />
        <Route path="/PanelZonassU/:id" element={<PanelZonasU />} />

        <Route path="/BlocA" element={<BlocA />} />
        <Route path="/BlocU" element={<BlocU />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
