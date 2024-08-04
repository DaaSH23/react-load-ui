import React from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import { useLoading } from '../lib/LoadingScreen'
import { useLoading } from 'react-loadscreen-ui';
import '../dist/style.css'


function App() {
  // const [count, setCount] = useState(0)

  const { showLoadScreen, hideLoadScreen } = useLoading();

  const handleSubmit = () => {
    showLoadScreen();
    setTimeout(() => {
      hideLoadScreen();
    }, 3000);
  };

  return (
    <>
      
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={handleSubmit}>
          count
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
