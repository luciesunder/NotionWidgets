const calculatorData = {
    operation: "",
    result: "",
    displayResult: false
}
const operatorRegex = /[\+\-\*\/]/
const operationScreen = document.querySelector(".operation")
const resultScreen = document.querySelector(".result")

const numberButtons = [...document.querySelectorAll(".number")]
numberButtons.forEach(btn => btn.addEventListener("click", handleNumberClick))

function handleNumberClick(e) {
    const buttonValue = e.target.getAttribute("data-action")
    if (calculatorData.operation === "0") calculatorData.operation = ""
    if (calculatorData.displayResult) {
        calculatorData.operation = ""
        resultScreen.textContent = ""
        calculatorData.displayResult = false
    }
    calculatorData.operation += buttonValue
    operationScreen.textContent = calculatorData.operation
}


const operatorbuttons = [...document.querySelectorAll(".operator")]
operatorbuttons.forEach(btn => btn.addEventListener("click", handleOperatorClick))

function handleOperatorClick(e) {
    const buttonValue = e.target.getAttribute("data-action")

    if (!calculatorData.operation && buttonValue === "-") {
        calculatorData.operation += buttonValue
        operationScreen.textContent = calculatorData.operation
        return
    }
    else if (calculatorData.operation.slice(-1).match(operatorRegex)) {
        calculatorData.operation = calculatorData.operation.slice(0, -1) + buttonValue
        operationScreen.textContent = calculatorData.operation
    }
    else if (!calculatorData.operation) return
    else {
        calculatorData.operation += buttonValue
        operationScreen.textContent = calculatorData.operation
    }

}


const equalButton = document.querySelector("[data-action='=']")
equalButton.addEventListener("click", handleEqualClick)

function handleEqualClick(e) {
    if (operatorRegex.test(calculatorData.operation.slice(-1))) {
        resultScreen.textContent = "ERROR"
        return
    }
    if (!calculatorData.displayResult) {
        calculatorData.result = calculation(calculatorData.operation)
    }
}

function calculation(operation) {
    let numbers = operation.split(operatorRegex) //divise la chaîne en un tableau de nombres
    let operators = operation.split("").filter(char => char.match(operatorRegex)) //divise la chaîne de l'opération en un tableau de char, puis filtre garder que les opérateurs.

    for (let i = 0; i < operators.length; i++) {
        if (operators[i] === "*" || operators[i] === "/") {
            const result = operators[i] === "*"
                ? Number(numbers[i]) * Number(numbers[i + 1])
                : Number(numbers[i]) / Number(numbers[i + 1]);

            numbers.splice(i, 2, result);
            operators.splice(i, 1);
            i--;
        }
    }

    let result = Number(numbers[0]);
    for (let i = 0; i < operators.length; i++) {
        switch (operators[i]) {
            case "+":
                result += Number(numbers[i + 1]);
                break;
            case "-":
                result -= Number(numbers[i + 1]);
                break;
        }
    }

    resultScreen.textContent = result;
    calculatorData.displayResult = true;
    return result;
}

const resetButton = document.querySelector("[data-action='c']")
resetButton.addEventListener("click", handleResetClick)

function handleResetClick() {
    calculatorData.operation = ""
    calculatorData.displayResult = false
    calculatorData.result = ""
    resultScreen.textContent = ""
    operationScreen.textContent = ""
}

const deleteButton = document.querySelector("[data-action='ce']")
deleteButton.addEventListener("click", handleDeleteClick)

function handleDeleteClick() {
    if (calculatorData.displayResult) {
        calculatorData.operation = ""
        calculatorData.displayResult = false
        calculatorData.result = ""
        resultScreen.textContent = ""
        operationScreen.textContent = ""
    }
    else {
        calculatorData.operation = calculatorData.operation.slice(0, -1)
        operationScreen.textContent = calculatorData.operation
    }
}

const decimalButton = document.querySelector("[data-action='.']")
decimalButton.addEventListener("click", handleDecimalClick);

function handleDecimalClick() {
    if (calculatorData.displayResult) {
        calculatorData.operation = "0.";
        calculatorData.displayResult = false;
        operationScreen.textContent = calculatorData.operation;
        resultScreen.textContent = "";
    }
    else if (!calculatorData.operation) {
        calculatorData.operation = "0.";
        operationScreen.textContent = calculatorData.operation;
    }
    else if (calculatorData.operation.slice(-1).match(operatorRegex)) {
        calculatorData.operation += "0.";
        operationScreen.textContent = calculatorData.operation;
    }
    else if (calculatorData.operation === "0") {
        calculatorData.operation += ".";
        operationScreen.textContent = calculatorData.operation;
    }
    else if (!calculatorData.operation.includes(".")) {
        calculatorData.operation += ".";
        operationScreen.textContent = calculatorData.operation;
    }
}
