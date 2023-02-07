import operate from './operate';

function isNumber(item) {
  return !!item.match(/[0-9]+/);
}

export default function calculate(obj, buttonName, setDisplay) {
  if (buttonName === 'AC') {
    setDisplay(0)
    return {
      total: null,
      next: null,
      operation: null,
    };
  }

  if (isNumber(buttonName)) {
  //if there is a minus with operation in queue.
    if(obj.operation && obj.minus && !obj.next) {
      setDisplay( -Math.abs(parseInt(buttonName)).toString());
      return { ...obj, next: -Math.abs(parseInt(buttonName)).toString()};
    }
    
    if (buttonName === '0' && obj.next === '0') {
      return {};
    }
    // If there is an operation, update next
    if (obj.operation) {
      if (obj.next && obj.next !== '0') {
        setDisplay(obj.next + buttonName)
        return { ...obj, next: obj.next + buttonName };
      }
      setDisplay(buttonName)
      return { ...obj, next: buttonName };
    }
    // If there is no operation, update next and clear the value
    if (obj.next && obj.next !== '0') {
      setDisplay(obj.next + buttonName)
      return {
        next: obj.next + buttonName,
        total: null,
      };
    }
    setDisplay(buttonName)
    return {
      next: buttonName,
      total: null,
    };
  }

  if (buttonName === '.') { // .  =>
    if (obj.next) {
      if (obj.next.includes('.')) { // 0
        setDisplay(obj.next);
        return { ...obj };
      }
      setDisplay(`${obj.next}.`);
      return { ...obj, next: `${obj.next}.` };
    }
    if (obj.operation) { // 0.7 *
      setDisplay("0.");
      return { ...obj, next: '0.' };
    }
    if (obj.total) { // 0
      if (obj.total.includes('.')) {
        return { };
      }
      return { ...obj, next: `${obj.total}.` };
    }
    setDisplay('0.')
    return { ...obj, next: '0.' };
  }

  if (buttonName === '=') {
    if (obj.next && obj.operation) {
      setDisplay(operate(obj.total, obj.next, obj.operation))
      return {
        total: operate(obj.total, obj.next, obj.operation),
        next: null,
        operation: null,
      };
    }
    // '=' with no operation, nothing to do
    setDisplay(0)
    return {};
  }

  if (buttonName === '+/-') {
    if (obj.next) {
      setDisplay((-1 * parseFloat(obj.next)).toString());
      return { ...obj, next: (-1 * parseFloat(obj.next)).toString() };
    }
    if (obj.total) {
      setDisplay((-1 * parseFloat(obj.total)).toString());
      return { ...obj, total: (-1 * parseFloat(obj.total)).toString() };
    }
    return {};
  }



  // User pressed an operation after pressing '='
  if (!obj.next && obj.total && !obj.operation) {
    return { ...obj, operation: buttonName };
  }

  // User pressed an operation button and there is an existing operation
  if (obj.operation) {
    if(obj.operation && !obj.next && obj.minus) {
      return { ...obj, operation: buttonName, minus: null }
    }
    if(obj.operation === '-' && buttonName === '-') {
      return { ...obj, operation: '+'}
    }

    if(obj.operation && buttonName === '-' && !obj.next) {
      setDisplay(buttonName)
      return { ...obj, minus: '-'}
    }

    if (obj.total && !obj.next) {
      return { ...obj, operation: buttonName };
    }

    if (!obj.total) {
      return { total: 0, operation: buttonName };
    }

    return {
      total: operate(obj.total, obj.next, obj.operation),
      next: null,
      operation: buttonName,
    };
  }

  // no operation yet, but the user typed one

  // The user hasn't typed a number yet, just save the operation
  if (!obj.next) {
    setDisplay(buttonName)
    return { operation: buttonName };
  }

  // save the operation and shift 'next' into 'total'
  return {
    total: obj.next,
    next: null,
    operation: buttonName,
  };
}
