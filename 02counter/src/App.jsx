import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter] = useState(15)


  const addValue = () => {
   setCounter(counter + 1)
  }
  if (counter > 20){
    return (setCounter(counter-1))
  }

  const removeValue = () => {
    setCounter(counter -1)
  }
  if (counter < 0){
    return (setCounter(counter+1))
  }


  return (
    <>
      <h1>Chai</h1>
      <h2>counter value: {counter}</h2>

      <button onClick={addValue}
      >Add value </button>
      <br />
      <button onClick={removeValue}
      >Remove value</button>
    </>
  )
}

export default App
