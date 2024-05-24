import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(0)
  // let count = 0;
  const increaseCount= () => {
    if (count < 20){
      setCount(count+1)
    }
}
  const decreaseCount= () => {
    if (count > 0){
      setCount(count-1)
    }
}

  return (
    <>
    <h1>Counter program</h1>
    <h3>It counts the number of clicks {count}</h3>
    <button onClick={increaseCount}>Increase count {count}</button>
    <button onClick={decreaseCount}>Decrease count  {count} </button>

    </>
  )
}

export default App
