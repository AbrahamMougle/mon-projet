import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ThemeProvider } from './darkMode'
import App from './App'
import { makeServer } from './Api/server'
import { Toaster } from "@/components/ui/sonner"
makeServer();
createRoot(document.getElementById('root')!).render(
   <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
  <StrictMode>
    <App />  
   <Toaster position="top-left" richColors />
  </StrictMode>,
  </ThemeProvider>
)
