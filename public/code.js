let result = document.getElementById('result');
let displayedNumber = result.textContent;

let calculator = {
  result: '0',
  firstNumber: '0',
  secondNumber: '2',
  operator: null
};

let keys = document.querySelectorAll('.keys').forEach(element => {
  element.addEventListener('click', event => {
    if (event.target.matches('button.keys')) {
      let key = event.target;
      let keyContent = key.textContent;
      let action = key.dataset.action;

      if (action == undefined) {
        if (displayedNumber == '0') {
          result.textContent = keyContent;
          displayedNumber = result.textContent;
        } else {
          result.textContent = displayedNumber + keyContent;
          displayedNumber = result.textContent;
          calculator.secondNumber = displayedNumber;
        }
      } else {
        if (
          action === 'add' ||
          action === 'subtract' ||
          action === 'multiply' ||
          action === 'divide'
        ) {
          result.dataset.action = displayedNumber;
          calculator.firstNumber = result.dataset.action;
          clearImmediate();
          calculator.operator = action;
        }
      }
    }
  });
});

document.getElementById('equal').addEventListener('click', event => {
  let n1 = calculator.firstNumber;
  let operator = calculator.operator;
  let n2 = calculator.secondNumber;

  const finalResult = calculate(n1, operator, n2);
  result.textContent = finalResult;
});

const calculate = (n1, operator, n2) => {
  let equals = '';

  if (operator === 'add') {
    equals = parseFloat(n1) + parseFloat(n2);
  } else if (operator === 'subtract') {
    equals = parseFloat(n1) - parseFloat(n2);
  } else if (operator === 'multiply') {
    equals = parseFloat(n1) * parseFloat(n2);
  } else if (operator === 'divide') {
    equals = parseFloat(n1) / parseFloat(n2);
  } else if (operator === 'module') {
    equals = parseFloat(n1) % parseFloat(n2);
  }

  return equals;
};

document.getElementById('clear').addEventListener('click', event => {
  if (event.target.dataset.action == 'clear') {
    clearImmediate();
    result.textContent = '0';
  }
});

function clearImmediate() {
  result.textContent = '';
  displayedNumber = '';
}
