import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Page from './auth/login/Page'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
<Page></Page>
  </StrictMode>,
)
