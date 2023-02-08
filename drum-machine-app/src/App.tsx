import { useState } from 'react'

import DrumPad from './components/DrumPad';
import Logo from './components/FCLogo/Logo';

import {
  SRoot,
  SDrumMachine,
  SLogoWrapper,
  SControlsWrapper,
  SControls,
  SText,
  SSwitcher,
  SSwitchButton,
  SDisplay
} from './App.styled';

function App() {
  const [currentSound, setCurrentSound] = useState<string>("");
  const [drumOn, setDrumOn] = useState(false);

  const onClickHandler = () => {
    setCurrentSound("");
    setDrumOn(prev => !prev);
  };

  return (
    <SRoot id='root'>
      <SDrumMachine id="drum-machine">
        <DrumPad setSound={setCurrentSound} drumOn={drumOn} />

        <SLogoWrapper>
          <Logo />
        </SLogoWrapper>

        <SControlsWrapper>

          <SControls>

            <SText>Power</SText>

            <SSwitcher>
              <SSwitchButton onClick={onClickHandler} left={drumOn}></SSwitchButton>
            </SSwitcher>

          </SControls>

          <SDisplay id="display">
            {currentSound}
          </SDisplay>

        </SControlsWrapper>
      </SDrumMachine>
    </SRoot>
  )
}

export default App;
