import { BrowserRouter, Routes, Route } from "react-router-dom";
import PanelInvA from "./vistas/administrador/PanelInvA";
import PanelZonasA from "./vistas/administrador/PanelZonasA";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/panelInvA" element={<PanelInvA />} />
        <Route path="/panelzona/:id" element={<PanelZonasA />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
