import { useState, Fragment } from 'react'
import { controls } from './utils/controllers';
import calculate from './logic/calculate';
import './App.css';

const App = () => {
  const [display, setDisplay] = useState(0);
  const [state, setState] = useState({
    obj: {
      total: null,
      next: null,
      operation: null,
    },
  });

  const handleClick = (event) => {
    const { obj } = state;

    setState({ obj: calculate(obj, event.target.textContent,setDisplay) });
  };
  const { obj } = state;
  const { total, next, operation } = obj;

  return (
    <div id="root">
      <div className="calculator">
        <div className="formulaScreen">{total} {operation} {next}</div>
        <div className="outputScreen" id="display">{display}</div>
        <div className="controls">
          {controls.map(cl => {
            if (cl?.name) {
              const { name, id, value, innerHTML } = cl;
              return (
                <Fragment key={id}>
                  <button onClick={handleClick} className={name} id={id} value={value}>{innerHTML}</button>
                </Fragment>
              )
            } else {
              const { id, value, innerHTML } = cl;
              return (
                <Fragment key={id}>
                  <button onClick={handleClick} id={id} value={value}>{innerHTML}</button>
                </Fragment>
              )
            }
          })}
        </div>
      </div>
    </div>
  )
}

export default App
