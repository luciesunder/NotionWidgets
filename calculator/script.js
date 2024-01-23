const calculatorData = {
    operation: "",
    result: "",
    displayResult: false
}
const operatorRegex = /[\+\-\*\/.]/
const operationScreen = document.querySelector(".operation")
const resultScreen = document.querySelector(".result")

const numberButtons = [...document.querySelectorAll(".number")]
numberButtons.forEach(btn => btn.addEventListener("click", handleNumberClick))

function handleNumberClick(e) {
    const buttonValue = e.target.getAttribute("data-action")
    if (calculatorData.operation === "0") calculatorData.operation = ""
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
    let numbers = operation.split(operatorRegex)//divise la chaîne en un tableau de nombres
    let operators = operation.split("").filter(char => char.match(operatorRegex)) //divise la chaîne de l'opération en un tableau de char, puis filtre garder que les opérateurs.
    let result = Number(numbers[0]) //initialise le résultat avec le premier nombre.

    for (let i = 0; i < operators.length; i++) {
        if (operators[i] === "*" || operators[i] === "/") {
            const result = operators[i] === "*"
                ? Number(numbers[i]) * Number(numbers[i + 1])
                : Number(numbers[i]) / Number(numbers[i + 1])

            numbers.splice(i, 2, result)
            operators.splice(i, 1)
            i--
        }
    }

    for (let i = 0; i < operators.length; i++) {
        switch (operators[i]) {
            case "+":
                result += Number(numbers[i + 1])
                break
            case "-":
                result -= Number(numbers[i + 1])
                break
        }
    }

    resultScreen.textContent = result
    calculatorData.displayResult = true
    return result
}