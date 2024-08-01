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
  return num1 ** 0.5
}

function calculate(expression) {
  let num1
  let operator
  let num2
  const tokens = expression.split(" ")
  if (tokens.length === 3) {
    num1 = Number(tokens[0])
    operator = tokens[1]
    num2 = Number(tokens[2])
  } else if (tokens.length === 2) {
    operator = tokens[0]
    num1 = Number(tokens[1])
  } else {
    return alert("Invalid Expression")
  }
  if (Number.isNaN(num1) && Number.isNaN(num2)) {
    return alert("Both numbers are invalid")
  }
  if (Number.isNaN(num1)) {
    return alert("Your first number is invalid")
  }
  if (Number.isNaN(num2)) {
    return alert("Your second number is invalid")
  }
  if (operator === "+") {
    return add(num1, num2)
  }
  if (operator === "-") {
    return subtract(num1, num2)
  }
  if (operator === "*") {
    return multiply(num1, num2)
  }
  if (operator === "/") {
    return divide(num1, num2)
  }
  if (operator === "^") {
    return power(num1, num2)
  }
  if (operator === "%") {
    return remainder(num1, num2)
  }
  if (operator === "sqrt") {
    return sqrt(num1)
  }
  return alert("operator is invalid")
}

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
