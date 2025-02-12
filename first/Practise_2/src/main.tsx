import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './component/App.tsx'
import Question from './component/Question.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <Question></Question>
  </StrictMode>,
)
