function add(a, b) {
    return +a + +b;
}

function subtract(a, b) {
    return +a - +b;
}

function multiply(a, b) {
    return +a * +b;
}

function divide(a, b) {
    return +a / +b;
}

function operate(a, b, op) {
    if (op === '+') return add(a, b);
    else if (op === '-') return subtract(a, b);
    else if (op === '*') return multiply(a, b)
    else if (op === '/') return divide(a, b)
}

operatorClicked = false;

const buttons = document.querySelectorAll('#calculator-button');
const display = document.querySelector('.display');
buttons.forEach(button => button.addEventListener('click', () => {
    if (operatorClicked === false) {
        if (display.textContent.length > 7) return;
        display.textContent += button.textContent;
    }
    else {
        display.textContent = button.textContent;
        operatorClicked = false;
    }
}))

const operators = document.querySelectorAll("#operator")
evalArray = []
equalsClicked = false;
operators.forEach(operator => operator.addEventListener('click', () => {
    if (evalArray.length === 0) {
        evalArray.push(display.textContent);
        evalArray.push(operator.textContent);
    } else if (evalArray.length === 1) {
        evalArray.push(operator.textContent);
    } else {
        evalArray.push(display.textContent);
        let result = operate(evalArray[0], evalArray[2], evalArray[1])
        display.textContent = result;
        evalArray = [];
        evalArray.push(result);
        evalArray.push(operator.textContent);
    }
    operatorClicked = true;
}))


const clear = document.querySelector(".clear")
clear.addEventListener('click', () => {
    display.textContent = '';
    evalArray = [];
})

const equals = document.querySelector('.equals')
equals.addEventListener('click', () => {
    if (evalArray.length > 1) {
        evalArray.push(display.textContent);
        let result = operate(evalArray[0], evalArray[2], evalArray[1])
        display.textContent = result;
        evalArray = [];
        evalArray.push(result);
    }
})


const backspace = document.querySelector('.backspace');
backspace.addEventListener('click', () => {
    let str = display.textContent;
    return display.textContent = `${str.slice(0, -1)}`
})

window.addEventListener('keydown', function(e) {
    const key = e.key;
    if (!isNaN(key)) {
        document.querySelector(`._${key}`).click();
    }
    if (key === 'Backspace') {
        document.querySelector(`.backspace`).click();
    }
    if (key === '/') {
        document.querySelector(`.divide`).click();
    }
    if (key === '*') {
        document.querySelector(`.multiply`).click();
    }
    if (key === '+') {
        document.querySelector(`.add`).click();
    }
    if (key === '-') {
        document.querySelector(`.subtract`).click();
    }
    if (key === '=') {
        document.querySelector(`.equals`).click();
    }
    if (key === '.') {
        document.querySelector(`.decimal`).click();
    }
})