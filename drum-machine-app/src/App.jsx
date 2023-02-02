import { useState } from 'react'
import { links } from './utils/sound-links';

import Button from './components/drumpad-button/Button'
import Logo from './components/drumpad-logo/Logo';
import './App.css'

function App() {
  const [currentSound, setCurrentSound] = useState("");
  const [drumOn, setDrumOn] = useState(false);

  const onClickHandler = () => {
    setCurrentSound("");
    setDrumOn(prev => !prev);
  };

  return (
    <div id='root'>
      <div className="inner-container" id="drum-machine">
        <div className="pad-board">
          {links.map((link) => {
            return (
              <Button 
                key={link.id} 
                drumOn={drumOn} 
                setSound={setCurrentSound} 
                {...link} 
              />
            );
          })}
        </div>
        <div className="logo">
          <Logo/>
        </div>
        <div className="controls-container">
          <div className="control">
            <p>Power</p>
            <div className="select">
              <div onClick={onClickHandler} className={`inner ${drumOn ? "float-right": "float-left"}`}></div>
            </div>
          </div>
          <div id="display">
            {currentSound}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
