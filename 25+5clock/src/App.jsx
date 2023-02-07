import { useState, useEffect, useRef } from 'react';
import './App.css';

const App = () => {
  const [displayTime, setDisplayTime] = useState(1500);
  const [breakTime, setBreakTime] = useState(5);
  const [sessionTime, setSessionTime] = useState(25);
  const [timerOn, setTimerOn] = useState(false);
  const [timerId, setTimerId] = useState("Session");
  const audioElement = useRef(document.getElementById('beep'));
  let loop = undefined;

  const formatTime = (time) => {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    return `${minutes}:${seconds}`;
  };

  const changeTime = (amount, type) => {
    let newCount;
    if (type === "Session") {
      newCount = sessionTime + amount;
    } else {
      newCount = breakTime + amount;
    }

    if (newCount > 0 && newCount <= 60 && !timerOn) {
      type === "Session" ? setSessionTime(newCount) : setBreakTime(newCount);
      if (type === "Session") {
        setDisplayTime(newCount * 60);
      }
    }
  };

  const setActive = () => {
    setTimerOn(!timerOn);
  };

  useEffect(() => {
    if (timerOn && displayTime > 0) {
      const interval = setInterval(() => {
        setDisplayTime(displayTime - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else if (displayTime === 0) {
      audioElement.current.play();
      audioElement.current.currentTime = 0;

      if (timerId === "Session") {
        setDisplayTime(breakTime * 60);
        setTimerId("Break");
      }
      if (timerId === "Break") {
        setDisplayTime(sessionTime * 60);
        setTimerId("Session");
      }
    }
  }, [breakTime, sessionTime, displayTime, timerId, timerOn]);

  const resetTime = () => {
    setBreakTime(5);
    setSessionTime(25);
    setDisplayTime(1500);
    setTimerId("Session");
    setTimerOn(false);
    clearInterval(loop);
    audioElement.current.load();
  };

  return (
    <div className="app">
      <div id="clock">
        <h3 className="main-title">25 + 5 Clock</h3>
        <div className="controls">
          <div className="break-container">
            <h5 id="break-label">Break Length</h5>
            <div className="btn-group">
              <button onClick={() => changeTime(1, "Break")} id="break-increment" className="break-arrow-up">
                <i className="fa-solid fa-circle-up"></i>
              </button>
              <p id="break-length">
                {breakTime}
              </p>
              <button onClick={() => changeTime(-1, "Break")} id="break-decrement" className="break-arrow-down">
                <i className="fa-solid fa-circle-down"></i>
              </button>
            </div>
          </div>
          <div className="session-container">
            <h5 id="session-label">Session Length</h5>
            <div className="btn-group">
              <button onClick={() => changeTime(1, "Session")} id="session-increment" className="session-arrow-up">
                <i className="fa-solid fa-circle-up"></i>
              </button>
              <p id="session-length">
                {sessionTime}
              </p>
              <button onClick={() => changeTime(-1, "Session")} id="session-decrement" className="session-arrow-down">
                <i className="fa-solid fa-circle-down"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="timer">
          <h4 id="timer-label">
            {timerId}
          </h4>
          <h1 id="time-left">
            {formatTime(displayTime)}
          </h1>
          <div className="main-controls">
            <button onClick={setActive} id="start_stop">
              <i className={`fa-solid fa-${timerOn ? 'pause' : 'play'}`}></i>
            </button>
            <button onClick={resetTime} id="reset">
              <i className="fa-solid fa-arrow-rotate-left"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
