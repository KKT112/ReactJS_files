import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './component/App.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App name='kkt' model = {22} />

  </StrictMode>,
)
