import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PanelInvA from '../../componentes/administrador/PanelInvA'
import PanelZonas from './vistas/administrador/PanelZonasA'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  	  <BrowserRouter>
            <Routes>
                <Route path='PanelInvA' element={<PanelInvA/>}>  
                  <Route path="/PanelZona1" element={<PanelZonas />} />
                  <Route path="/PanelZona2" element={<PanelZonas />} />
                  <Route path="/PanelZona3" element={<PanelZonas />} />
                  <Route path="/PanelZona4" element={<PanelZonas />} />
                    
                </Route>
            
                    
               
                

            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
