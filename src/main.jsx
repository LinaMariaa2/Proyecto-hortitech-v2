import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import MenuInicio from './vistas/administrador/MenuInicio'
import Programacion from './vistas/administrador/Programacion'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />

   

  </StrictMode>,
)
