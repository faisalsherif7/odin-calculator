function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(...numbers) {
    return numbers.reduce((total, current) => {
        return total * current;
    }, 1)
}

function divide(a, b) {
    return a / b;
}

function operate(a, b, op) {
    if (op === '+') return add(a, b);
    else if (op === '-') return subtract(a, b);
    else if (op === '*') return multiply([a, b])
    else if (op === '/') return divide(a, b)
}

const buttons = document.querySelectorAll('button');
const display = document.querySelector('.display')
buttons.forEach(button => button.addEventListener('click', () => {
    display.textContent += ' ' + button.textContent;
}))