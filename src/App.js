import React, { useState, useEffect } from "react"
import "./styles/AppStyles.scss"
import PageOne from "./components/pageOne"
import Thanks from "./components/Thanks"
import putData from "./db/digest"

const url = "http://localhost:3001/api/v1/"

function App() {
  const [datos, setDatos] = useState({})
  const [screen, setScreen] = useState(1)

  const setData = (event) => {
    setDatos({ ...datos, [event.target.className]: event.target.value })
  }

  const sendInfo = () => {
    putData(datos)
    // localStorage.setItem("data", datos)
  }

  const finish = () => {
    window.location.reload(true)
  }

  return (
    <div className='App'>
      {screen === 1 ? (
        <PageOne
          onClick={() => {
            sendInfo()
          }}
          onChange={(event) => {
            setData(event)
          }}
        />
      ) : (
        <Thanks onClick={() => finish()} />
      )}
    </div>
  )
}

export default App
