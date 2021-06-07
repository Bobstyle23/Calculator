const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];
let result = 0;

// Gets input from input field
function getUserNumberInput() {
  return parseInt(usrInput.value);
}

// Generates and writes calculation log
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription); // from vendor file
}

function writeToLog(
  operationIdentifier,
  prevResult,
  operationNumber,
  newResult
) {
  const logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult,
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

function calculate(operation) {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  let operator;
  switch (operation) {
    case "ADD":
      currentResult += enteredNumber;
      operator = "+";
      break;
    case "SUBTRACT":
      currentResult -= enteredNumber;
      operator = "-";
      break;
    case "MULTIPLY":
      currentResult *= enteredNumber;
      operator = "*";
      break;
    case "DIVIDE":
      currentResult /= enteredNumber;
      operator = "/";
      break;
    case "RESULT":
      result = currentResult += enteredNumber;
      operator = "=";
      break;
  }
  createAndWriteOutput(operator, initialResult, enteredNumber);
  writeToLog(operation, initialResult, enteredNumber, currentResult);
}

addBtn.addEventListener("click", calculate.bind(this, "ADD"));
subtractBtn.addEventListener("click", calculate.bind(this, "SUBTRACT"));
multiplyBtn.addEventListener("click", calculate.bind(this, "MULTIPLY"));
divideBtn.addEventListener("click", calculate.bind(this, "DIVIDE"));
resultBtn.addEventListener("click", calculate.bind(this, "RESULT"));
