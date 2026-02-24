import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { WorkoutContextProvider } from '../context/Workoutcontext'
import { AuthcontextProvider } from '../context/Userauthcontext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthcontextProvider>
      <WorkoutContextProvider>
        <App />
      </WorkoutContextProvider>
    </AuthcontextProvider>
  </StrictMode>,
)
