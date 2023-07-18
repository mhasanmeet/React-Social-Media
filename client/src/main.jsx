import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { AuthContextProvider } from './context/authContext'
import { DarkModeContextProvider } from './context/darkModeContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* get dark mode context api to use dark mode in entire application */}
    <DarkModeContextProvider> 
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </DarkModeContextProvider>
  </React.StrictMode>,
)
