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
