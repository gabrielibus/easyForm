import React, { useState } from "react"
import "./styles/AppStyles.scss"
import Header from "./components/Header"
import Button from "./components/Button"
import Forms from "./components/Forms.jsx"
// import Thanks from "./components/Thanks"
import putData from "./db/digest"
import Terms from "./components/Terms"

// const url = "http://localhost:3001/api/v1/"

function App() {
  const [datos, setDatos] = useState({})

  const saveData = (event) => {
    setDatos({ ...datos, [event.target.className]: event.target.value })
  }

  const sendInfo = () => {
    putData({id: 2, productName: "frontend"})
    console.log('working')
      // window.location.reload(true)
    // putData(datos)
    // localStorage.setItem("data", datos)
  }

  // const finish = () => {
  // }

  return (
    <div className='App'>
      <Header />
      <Forms onchange={(event) => saveData(event)} />
      <Terms />
      <Button action={() => sendInfo()} />
      {/* <Thanks onClick={() => finish()} /> */}
    </div>
  )
}

export default App
