import React, { useState, useEffect } from "react"
import "./styles/App.css"
import Names from "./components/Names"
import Address from "./components/Address"
import Phone from "./components/Phone"

function App() {
  const [datos, setDatos] = useState({})
  const [screen, setScreen] = useState(1)

  const setData = event => {
    setDatos({ ...datos, [event.target.className]: event.target.value })
  }

  const sendInfo = () => {
    localStorage.setItem('data', datos)
  }

  useEffect(() => document.getElementById("focus").focus(), [screen])

  return (
    <div className='App'>
      {screen === 1 ? (
        <Names
          onClick={() => {setScreen(2)}}
          onChange={event => {
            setData(event)
          }}
        />
      ) : screen === 2 ? (
        <Address
          onClick={() => setScreen(3)}
          onChange={event => setData(event)}
        />
      ) : (
        <Phone
          onClick={() => setScreen(1)}
          onChange={event => {setData(event); sendInfo()}}
        />
      )}
    </div>
  )
}

export default App
