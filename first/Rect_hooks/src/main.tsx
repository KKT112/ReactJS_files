import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
 //import Usecallback from './Usecallback'
import UseReducer2 from './UseReducer2'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <UseReducer2></UseReducer2>
  </StrictMode>,
)
