import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
import App from './component/App'
import Data from './component/Data'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App name="myfirst_message"/>
    <App name="mysecond_message"/>
    <Data></Data>
    </StrictMode>
    
)
