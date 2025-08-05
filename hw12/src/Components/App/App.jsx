import { useState } from 'react'

import './App.css'

import ValueDisplay from '../ValueDisplay/ValueDisplay'


function App() {
  const [ value , setValue] = useState("")

  const handleValue = (e) => { 
    setValue(e.target.value)
  }

  return (
    <>
    <h1>Current and Previous Value</h1>
    <input onChange={handleValue} type='text' value={value} />
    <ValueDisplay value={value} />
      
    </>
  )
}

export default App
