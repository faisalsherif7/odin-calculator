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

const buttons = document.querySelectorAll('#calculator-button');
const display = document.querySelector('.display');
const equals = document.querySelector(".equals")
const clear = document.querySelector(".clear")

clear.addEventListener('click', () => display.textContent = '')
buttons.forEach(button => button.addEventListener('click', () => display.textContent += button.textContent))

equals.addEventListener('click', () => {

    // Get the big number to be divided
    let array = display.textContent.split('');

    // If division available, do so
    if (array.includes('/')) {
        operateAll('/', array);
    }

    if (array.includes('*')) {
        operateAll('*', array);
    }

    if (array.includes('+')) {
        operateAll('+', array);
    }

    if (array.includes('-')) {
        operateAll('-', array);
    }

    return display.textContent = array;
})


function operateAll(operator, array) {
    let indexArray = array.reduce((indexArray, currentElement, currentIndex) => {
        if (currentElement === operator) {
            indexArray.push(currentIndex);
        }
        return indexArray;
    }, [])
    indexArray.map(index => {
        let result = operate(array[index - 1], array[index + 1], operator);
        array.splice(index - 1, 3, result);
    })
}
