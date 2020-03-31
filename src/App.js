import React, { useState } from 'react';
import './styles/App.css';
import Names from './components/Names'
import Address from './components/Address'
import Phone from './components/Phone'

function App() {

  const [datos, setDatos] = useState({})
  const [screen, setScreen] = useState(1)


  return (
    <div className="App">
      {/* <p>{screen}</p> */}
      <Names
        screen={screen}
        order={() => setScreen(2)}
      />
      <Address
        screen={screen}
        order={() => setScreen(3)}
      />
      <Phone
        screen={screen}
        order={() => setScreen(1)}
      />
    </div>
  );
}

export default App;
