import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { makeServer } from './Api/server.ts'
import { Toaster } from "@/components/ui/sonner"



if (import.meta.env.DEV) {
  makeServer();
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
   <Toaster position="top-left" richColors />
  </StrictMode>,
)
