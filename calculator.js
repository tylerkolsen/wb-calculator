// Add function
function add(num1, num2) {
  return num1 + num2
}

// Subtract function
function subtract(num1, num2) {
  return num1 - num2
}

// Multiply function
function multiply(num1, num2) {
  return num1 * num2
}

// Divide function
function divide(num1, num2) {
  return num1 / num2
}

// Power function
function power(num1, num2) {
  return num1 ** num2
}

// Remainder function
function remainder(num1, num2) {
  return num1 % num2
}

// Square Root function
function sqrt(num1) {
  return Math.sqrt(num1)
}

function calculate(expression) {}

/* **************** DO NOT EDIT THE CODE BELOW **************** */
/* ************************************************************ */
/* **************** DO NOT EDIT THE CODE BELOW **************** */

// When the Submit button is clicked, this code calls your `calculate` function
// and then inserts the result on the HTML page.
document.querySelector('#submitButton').addEventListener('click', () => {
  const result = calculate(document.querySelector('#expression').value);
  if (result !== undefined) {
    document.querySelector('#answer').innerText = result;
  }
});
