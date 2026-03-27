import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {MobileContextProvider,} from '../src/context/globalStore.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MobileContextProvider>
      <App />
    </MobileContextProvider>
  </StrictMode>,
)
