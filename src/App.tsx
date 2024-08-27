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

      <h1>React Loadscreen UI</h1>
      <div className="card">
        <button onClick={handleSubmit}>
          Loadscreen
        </button>
      </div>
    </>
  )
}

export default App
