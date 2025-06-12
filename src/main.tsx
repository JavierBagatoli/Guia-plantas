import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className='center'>
      <h1>Cuidado de plantas</h1>
    </div>
    <App />
  </StrictMode>,
)
