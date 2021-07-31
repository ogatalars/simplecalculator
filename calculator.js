function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2; 
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) { 
    return num1 / num2;
}

function expo(num1, num2) { 
    return num1 ** num2;
}

function operator(num1, num2, operator) {
    return operator(num1, num2);

}

operator(100,10, add);