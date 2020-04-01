import React, { useState } from 'react';
import './styles/App.css';
import Names from './components/Names'
import Address from './components/Address'
import Phone from './components/Phone'

function App() {

  const [datos, setDatos] = useState({})
  const [screen, setScreen] = useState(1)

const setData = (event) => {
  setDatos({...datos, [event.target.className]: event.target.value})
}

  return (
    <div className="App">
      <Names
        screen={screen}
        order={() => setScreen(2)}
        onChange={(event) => setData(event)}
      />
      <Address
        screen={screen}
        order={() => setScreen(3)}
        onChange={(event) => setData(event)}
      />
      <Phone
        screen={screen}
        order={() => setScreen(1)}
        onChange={(event) => setData(event)}
      />
    </div>
  );
}

export default App;
