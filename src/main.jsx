import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import PanelInvA from './vistas/administrador/PanelInvA.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <PanelInvA />



  </StrictMode>,
)
