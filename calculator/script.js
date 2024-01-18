const numberButtons = document.getElementsByClassName('number');
for (let i = 0; i < numberButtons.length; i++) {
    numberButtons[i].addEventListener('click', (e) => {
        document.getElementById("operation").innerText += e.target.innerText
    })
}

const operatorButton = document.getElementsByClassName('operator');
for (let i = 0; i < operatorButton.length; i++) {
    operatorButton[i].addEventListener('click', (e) => {
        document.getElementById("operation").innerText += e.target.innerText
    })
}

const resultButton = document.getElementsByClassName('equals').item(0);
resultButton.addEventListener('click', calculate)
function calculate() {
    const operation = document.getElementById("operation").innerText
    const result = eval(operation)
    document.getElementById("result").innerText = result
}

const clearButton = document.getElementsByClassName('clear').item(0);
clearButton.addEventListener('click', clear)
function clear() {
    document.getElementById("operation").innerText = ""
    document.getElementById("result").innerText = ""
}