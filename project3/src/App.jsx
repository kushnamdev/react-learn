import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from "../components/Card"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind and props</h1>
    <Card name="Kush" />
    <Card name="Raj" />
    <Card name= "Ally" />  
    <Card  /> {/* we are not passing value here so it will take default value */}
    </>
  )
}

export default App
