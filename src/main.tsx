
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./styles/globals.css";
import App from './App.tsx'
import './App.css'
import './index.css';
import { Toaster } from 'react-hot-toast';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
        <Toaster position="top-center" reverseOrder={false} />
  </StrictMode>,
)
