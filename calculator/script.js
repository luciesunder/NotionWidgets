const numberButtons = document.getElementsByClassName('number');
const operatorButtons = document.getElementsByClassName('operator');
const resultButton = document.getElementsByClassName('equals').item(0);
const clearButton = document.getElementsByClassName('clear').item(0);

let shouldClearResult = false;

function addEventListenerToElements(elements, callback) {
    for (let i = 0; i < elements.length; i++) {
        elements[i].addEventListener('click', callback);
    }
}

function addToOperation(e) {
    if (shouldClearResult) {
        clear();
        shouldClearResult = false;
    }
    document.getElementById("operation").innerText += e.target.innerText;
}

function calculate() {
    const operation = document.getElementById("operation").innerText;
    const result = eval(operation);
    document.getElementById("result").innerText = result;
    shouldClearResult = true;
}

function clear() {
    document.getElementById("operation").innerText = "";
    document.getElementById("result").innerText = "";
}

addEventListenerToElements(numberButtons, addToOperation);
addEventListenerToElements(operatorButtons, addToOperation);
resultButton.addEventListener('click', calculate);
clearButton.addEventListener('click', clear);