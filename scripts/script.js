let inputOne = 0;
let inputTwo = 0;
let inputOperator = "";

function addNum(numOne, numTwo) {
    return numOne + numTwo;
}

function subtractNum(numOne, numTwo) {
    return numOne - numTwo;
}

function multiplyNum(numOne, numTwo) {
    return numOne * numTwo;
}

function divideNum(numOne, numTwo) {
    return numOne / numTwo;
}

function operate(numOne, oper, numTwo) {
    switch (oper) {
        case "+":
            return addNum(numOne, numTwo);
            break;
        case "-":
            return subtractNum(numOne, numTwo);
            break;
        case "*":
            return multiplyNum(numOne, numTwo);
            break;
        case "/":
            return divideNum(numOne, numTwo);
            break;
        default:
            break;
    }
}

console.log(operate(8, '-', 8));