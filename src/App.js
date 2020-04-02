import React, { useState, useEffect } from "react"
import "./styles/App.css"
import Names from "./components/Names"
import Address from "./components/Address"
import Phone from "./components/Phone"
import Thanks from "./components/Thanks"

const url = "http://localhost:3001/api/v1/"

function App() {
  const [datos, setDatos] = useState({})
  const [screen, setScreen] = useState(1)

  const setData = event => {
    setDatos({ ...datos, [event.target.className]: event.target.value })
  }

  const sendInfo = () => {
    localStorage.setItem("data", datos)
  }

  const finish = async () => {
    // window.location.reload(true)
    var myHeaders = new Headers()
    myHeaders.append("Content-Type", "application/json")
    var raw = JSON.stringify(datos)

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    }

    fetch(`${url}post/`, requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log("error", error))
  }

  useEffect(() => document.getElementById("focus").focus(), [
    screen === (1 || 2 || 3)
  ])

  return (
    <div className='App'>
      {screen === 1 ? (
        <Names
          onClick={() => {
            setScreen(2)
            finish()
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
        <Thanks onClick={() => finish()} />
      )}
    </div>
  )
}

export default App
