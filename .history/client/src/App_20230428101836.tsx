import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Inscription from './pages/Inscription'
import Admin from './pages/Admin'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
  <Admin/>       
    </div>
  )
}

export default App
