import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
import App from './component/App'
import Data from './component/Data'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <Data/>
  </StrictMode>,
)
