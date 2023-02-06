import { useState, useEffect } from 'react';

const getMMSS = (time) => {
  let ms = time * 60 * 1000;
  let minutes = Math.floor(ms / 60000);
  let seconds = ((ms % 60000) / 1000).toFixed(0);

  return (minutes < 10 ? '0' : '') + minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}

const App = () => {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(1);
  const [timeLeft, setTimeLeft] = useState(getMMSS(sessionLength));
  const [timeLabel, setTimeLabel] = useState('Session');
  const [isPlaying, setIsPlaying] = useState(false);
  const [intervalId, setIntervalId] = useState('');

  useEffect(() => {
    if(timeLeft === '00:00') {
      clearInterval(intervalId);
    }
  },[timeLeft])
  
  const startTimer = (length) => {
    let value = length;
    let ms = value * 60 * 1000;
    
    if(!isPlaying && getMMSS(length) !== timeLeft) {
      ms = ( Number(timeLeft.split(':')[0])*60 + Number(timeLeft.split(':')[1]) ) * 1000;
    }

    if(!isPlaying) {
      setIsPlaying(true);
    
      const id = setInterval(() => {
        ms = ms - 1000
        let minutes = Math.floor(ms / 60000);
        let seconds = ((ms % 60000) / 1000).toFixed(0);
        
        setTimeLeft((minutes < 10 ? '0' : '') + minutes + ":" + (seconds < 10 ? '0' : '') + seconds);
      }, 1000);

      setIntervalId(id)
    } else {
      clearInterval(intervalId);
      setIsPlaying(false);
      setIntervalId('');
    }
  }

  const resetTimer = () => {
    setBreakLength(5);
    setSessionLength(25);
    setTimeLeft('25:00');
    setTimeLabel('Session');
    setIsPlaying(false);
    clearInterval(intervalId);
  }

  return (
    <div className="app">
      <div id="clock">
        <h3>25 + 5 Clock</h3>
        <div className="controls">
          <div className="break-container">
            <h5 id="break-label">Break Length</h5>
            <div className="btn-group">
              <button id="break-increment" className="break-arrow-up">
                <i className="fa-solid fa-circle-up"></i>
              </button>
              <p id="break-length">
                {breakLength}
              </p>
              <button id="break-decrement" className="break-arrow-down">
                <i className="fa-solid fa-circle-down"></i>
              </button>
            </div>
          </div>
          <div className="session-container">
            <h5 id="session-label">Session Length</h5>
            <div className="btn-group">
              <button id="session-increment" className="session-arrow-up">
                <i className="fa-solid fa-circle-up"></i>
              </button>
              <p id="session-length">
                {sessionLength}
              </p>
              <button id="session-decrement" className="session-arrow-down">
                <i className="fa-solid fa-circle-down"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="timer">
          <h4 id="timer-label">
            Session
          </h4>
          <h1 id="time-left">
            {timeLeft}
          </h1>
        </div>
        <div className="main-controls">
          <button onClick={() => startTimer(sessionLength)} id="start_stop">
            <i className="fa-solid fa-play"></i>
          </button>
          <button onClick={resetTimer} id="reset">
            <i className="fa-solid fa-arrow-rotate-left"></i>
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
