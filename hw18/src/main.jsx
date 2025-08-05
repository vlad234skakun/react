import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './Module/App.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
