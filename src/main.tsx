import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Create root outside of render function to avoid context issues
const rootElement = document.getElementById('root')
const root = createRoot(rootElement!)

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
)
