import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "/node_modules/bootstrap/dist/css/bootstrap.css"
import DmartProvider from './hooks/context/components/store/Store.jsx'

createRoot(document.getElementById('root')).render(

<DmartProvider>
    <App />
</DmartProvider>
)
