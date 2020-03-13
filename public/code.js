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
        Array.from(key.parentNode.children).forEach(k =>
          k.classList.remove('is-depressed')
        );

        if (displayedNumber == '0') {
          result.textContent = keyContent;
          displayedNumber = result.textContent;
        } else {
          result.textContent = displayedNumber + keyContent;
          displayedNumber = result.textContent;
        }
      } else {
        if (
          action === 'add' ||
          action === 'subtract' ||
          action === 'multiply' ||
          action === 'divide'
        ) {
          {
            key.classList.add('is-depressed');
          }

          result.dataset.action = displayedNumber;
          calculator.firstNumber = result.dataset.action;
          calculator.operator = action;
          clearImmediate();
          result.textContent = calculator.firstNumber;
        }
      }
    }
  });
});

let equal = document
  .getElementById('equal')
  .addEventListener('click', event => {
    console.log(displayedNumber);
    console.log('resultcontent', result.textContent);
    let n1 = calculator.firstNumber;
    let operator = calculator.operator;
    let n2 = displayedNumber;

    let finalResult = '';
    if (displayedNumber != 0) {
      finalResult += calculate(n1, operator, n2);
      result.textContent = finalResult;
      displayedNumber = result.textContent;
    } else {
      finalResult = calculate(n1, operator, n2);
      result.textContent = finalResult;
      displayedNumber = result.textContent;
    }

    return finalResult;
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

let clear = document
  .getElementById('clear')
  .addEventListener('click', event => {
    if (event.target.dataset.action == 'clear') {
      clearImmediate();
      result.textContent = '0';
    }
  });

function clearImmediate() {
  result.textContent = '';
  displayedNumber = '';
}
