import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import ThreeScene from './ThreeScene.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThreeScene />
  </StrictMode>,
)
