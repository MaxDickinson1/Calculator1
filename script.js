const calculator = document.querySelector('.calculator');
const display = calculator.querySelector('.display');
const keys = calculator.querySelector('.keys');

let firstOperand = '';
let secondOperand = '';
let operator = null;
let shouldResetDisplay = false;

function resetCalculator() {
  display.textContent = '0';
  firstOperand = '';
  secondOperand = '';
  operator = null;
  shouldResetDisplay = false;
}

function handleButtonClick(event) {
  const button = event.target;
  const buttonText = button.textContent;

  if (button.classList.contains('operator')) {
    if (operator != null) {
      if (shouldResetDisplay) {
        display.textContent = firstOperand;
      }
      performCalculation();
    }
    else {
      firstOperand = display.textContent;
    }
    operator = buttonText;
    shouldResetDisplay = true;
  }
  else if (button.classList.contains('decimal')) {
    if (shouldResetDisplay) {
      display.textContent = '0';
    }
    if (!display.textContent.includes('.')) {
      display.textContent += '.';
    }
    shouldResetDisplay = false;
  }
  else if (button.classList.contains('clear')) {
    resetCalculator();
  }
  else if (button.classList.contains('calculate')) {
    performCalculation();
  }
  else {
    if (shouldResetDisplay) {
      display.textContent = '';
      shouldResetDisplay = false;
    }
    display.textContent += buttonText;
  }
}

function performCalculation() {
  if (operator === null || shouldResetDisplay) {
    return;
  }

  secondOperand = display.textContent;
  const result = calculateResult(parseFloat(firstOperand), parseFloat(secondOperand), operator);
  display.textContent = result;
  firstOperand = result;
  secondOperand = '';
  operator = null;
  shouldResetDisplay = true;
}

function calculateResult(firstOperand, secondOperand, operator) {
  switch (operator) {
    case '+':
      return firstOperand + secondOperand;
    case '-':
      return firstOperand - secondOperand;
    case '*':
      return firstOperand * secondOperand;
    case '/':
      return firstOperand / secondOperand;
    default:
      return secondOperand;
  }
}

keys.addEventListener('click', handleButtonClick);

keys.addEventListener('click', handleButtonClick);


