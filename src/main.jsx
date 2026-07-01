import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// 1. Importera de globala stilarna HÄR (och bara här!)
import './index.css'
import "./Styles/global.css"
import "./Styles/buttons.css"

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)