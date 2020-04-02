import React, { useState, useEffect } from "react"
import "./styles/App.css"
import Names from "./components/Names"
import Address from "./components/Address"
import Phone from "./components/Phone"
import Thanks from "./components/Thanks"

function App() {
  const [datos, setDatos] = useState({})
  const [screen, setScreen] = useState(1)

  const setData = event => {
    setDatos({ ...datos, [event.target.className]: event.target.value })
  }

  const sendInfo = () => {
    localStorage.setItem("data", datos)
  }

  useEffect(() => document.getElementById("focus").focus(), [screen === (1 || 2 || 3)])

  return (
    <div className='App'>
      {screen === 1 ? (
        <Names
          onClick={() => {
            setScreen(2)
          }}
          onChange={event => {
            setData(event)
          }}
        />
      ) : screen === 2 ? (
        <Address
          onClick={() => setScreen(3)}
          onChange={event => setData(event)}
        />
      ) : screen === 3 ? (
        <Phone
          onClick={() => {
            setScreen(4)
            sendInfo()
          }}
          onChange={event => setData(event)}
        />
      ) : (
        <Thanks 
        onClick={() => window.location.reload(true)}/>
      )}
    </div>
  )
}

export default App
