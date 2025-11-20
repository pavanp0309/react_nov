import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import "/node_modules/bootstrap/dist/css/bootstrap.css"
import "./index.css"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* enabling the Routing capabilities to react application */}
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </StrictMode>,
)
