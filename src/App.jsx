import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import ShopkeeperDash from './components/ShopkeeperDash'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Login />
      
      {/* <ShopkeeperDash/> */}
    </>
     
  )
}

export default App
