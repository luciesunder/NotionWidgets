const calculatorData = {
    operation: "",
    result: "",
    displayResult: false
}

const operationScreen = document.querySelector(".operation")
const resultScreen = document.querySelector(".result")

const numberButtons = [...document.querySelectorAll(".number")]
numberButtons.forEach(btn => btn.addEventListener("click", handleNumberClick))

function handleNumberClick(e) {
    const buttonValue = e.target.getAttribute("data-action")
    if (calculatorData.operation === "0") calculatorData.operation = ""
    calculatorData.operation += buttonValue
    resultScreen.textContent = calculatorData.operation
}


const operatorbuttons = [...document.querySelectorAll(".operator")]
operatorbuttons.forEach(btn => btn.addEventListener("click", handleOperatorClick))

function handleOperatorClick(e) {
    const buttonValue = e.target.getAttribute("data-action")

    if (!calculatorData.operation && buttonValue === "-") {
        calculatorData.operation += buttonValue
        resultScreen.textContent = calculatorData.operation
        return
    }
    else if (calculatorData.operation.slice(-1).match(/[\+\-\*\/]/)) {
        calculatorData.operation = calculatorData.operation.slice(0, -1) + buttonValue
        resultScreen.textContent = calculatorData.operation
    }
    else if (!calculatorData.operation) return
    else {
        calculatorData.operation += buttonValue
        resultScreen.textContent = calculatorData.operation
    }

}