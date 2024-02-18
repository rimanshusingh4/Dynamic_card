import { useState } from 'react'
import Background from './components/Background'
import './App.css'
import Foreground from './components/Foreground'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='relative w-full h-screen bg-zinc-800'>
        <Background/>
        <Foreground/>
      </div>
    </>
  )
}

export default App
