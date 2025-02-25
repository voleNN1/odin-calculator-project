let inputOne = "";
let inputTwo = "";
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

const displayOne = document.querySelector("#num-one");
const displayOper = document.querySelector("#operator");
const displayTwo = document.querySelector("#num-two");
const displayTotal = document.querySelector("#result");
const btnZero = document.querySelector("#zero");
const btnOne = document.querySelector("#one");
const btnTwo = document.querySelector("#two");
const btnThree = document.querySelector("#three");
const btnFour = document.querySelector("#four");
const btnFive = document.querySelector("#five");
const btnSix = document.querySelector("#six");
const btnSeven = document.querySelector("#seven");
const btnEight = document.querySelector("#eight");
const btnNine= document.querySelector("#nine");
const btnAdd = document.querySelector("#add");
const btnSubtract = document.querySelector("#subtract");
const btnMultiply = document.querySelector("#multiply");
const btnDivide = document.querySelector("#divide");
const btnClear = document.querySelector("clear");
const btnEquals = document.querySelector("equals");
const btnDecimal = document.querySelector("decimal");

btnZero.addEventListener("click", () => {
    if (inputOperator === "") {
        displayOne.textContent += "0";
        inputOne += "0";
    }
    else {
        displayTwo.textContent += "0";
        inputTwo += "0";
    }  
})

btnOne.addEventListener("click", () => {
    if (inputOperator === "") {
        displayOne.textContent += "1";
        inputOne += "1";
    }
    else {
        displayTwo.textContent += "1";
        inputTwo += "1";
    }
})

btnTwo.addEventListener("click", () => {
    if (inputOperator === "") {
        displayOne.textContent += "2";
        inputOne += "2";
    }
    else {
        displayTwo.textContent += "2";
        inputTwo += "2";
    }
})

btnThree.addEventListener("click", () => {

})

btnFour.addEventListener("click", () => {

})

btnFive.addEventListener("click", () => {

})

btnSix.addEventListener("click", () => {

})

console.log(operate(8, '-', 8));