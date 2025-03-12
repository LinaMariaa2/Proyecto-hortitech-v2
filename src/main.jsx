import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Invernaderos from './vistas/Invernaderos.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Invernaderos />
  </StrictMode>,
)
