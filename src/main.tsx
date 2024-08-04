import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
// import './index.css'
// import { LoadingProvider }  from '../lib/main.ts'
// import LoadingScreen from '../lib/LoadingScreen/LoadingScreen.tsx'
import { LoadingProvider, LoadingScreen } from 'react-loadscreen-ui'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LoadingProvider>
      <LoadingScreen 
        text="Loading..."
      />
      <App />
    </LoadingProvider>
  </React.StrictMode>,
)
