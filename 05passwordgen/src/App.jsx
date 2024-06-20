import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [number, setNumber] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback( () => {
    let pass =""
    let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(number) str += "0123456789"
    if(charAllowed) str += "!@#$%^&*()-_+={}[]~`"

    for (let i = 1; i <= length; i++) {
      let char =Math.floor(Math.random() * str.length +1)
      pass += str.charAt(char)
    }
    setPassword(pass)

  }, [length, number, charAllowed, setPassword]) 
  
  const copyPassword = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 8);
    window.navigator.clipboard.writeText(password)
  },[password])
 
  useEffect(() => {
    passwordGenerator()
  }, [length, number, charAllowed, passwordGenerator])
  return (
    <>
    <div className = "w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-red-500 bg-gray-700 py-3" >
      <h1 className='text-white text-center my-3  '>Password Generator</h1>

      <div className="flex shadow-md rounded-lg overflow-hidden mb-4 " >

        <input 
          type="text" 
          value= {password}
          className = "outline-none w-full py-2 px-3"
          placeholder= "Password"
          readOnly
          ref={passwordRef}
        />

        <button
        onClick={copyPassword}
        className='outline-none bg-blue-400 text-white px-3 py-0.5
        shrink-0 hover:bg-blue-700 ...'
        >Copy</button>

      </div>

      <div className='flex text-sm gap-x-1 ' > 
      <div className='flex items-center gap-x-1' > 
        <input 
        type="range"
        min={6}
        max={100}
        value={length}
        className='cursor-pointer'
        onChange={(e) => {setLength(e.target.value)}}
        /> 
        <label>Length: {length}</label>
      </div>

        <div className='flex items-center gap-x-1' > 
           <input
           type="checkbox"
           defaultChecked={number}
           id="numberInput"
           onChange={() => {
            setNumber((prev) => !prev)
           }
          }
           /> 
           <label htmlFor="numberInput">Numbers</label>
        </div>
          
        <div className='flex items-center gap-x-1' > 
           <input
           type="checkbox"
           defaultChecked={charAllowed}
           id="characterInput"
           onChange={() => {
            setCharAllowed((prev) => !prev)
           }
          }
           /> 
           <label htmlFor="characterInput">Character</label>
        </div>
      </div>
    </div>
    
    </>
  )
}

export default App
