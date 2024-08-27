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
        text="Please wait ..."
        spinnerSize={30}
        backgroundColor='rgba(40, 44, 52, 0.7)'
        textColor="#61dafb"
      />
      <App />
    </LoadingProvider>
  </React.StrictMode>,
)
