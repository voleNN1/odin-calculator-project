let inputOne = "";
let inputTwo = "";
let inputOperator = "";
let result = 0;

function addNum(numOne, numTwo) {
    let total =  parseInt(numOne) + parseInt(numTwo);

    return total.toFixed(5);
}

function subtractNum(numOne, numTwo) {
    let total =  parseInt(numOne) - parseInt(numTwo);

    return total.toFixed(5);
}

function multiplyNum(numOne, numTwo) {
    let total = parseInt(numOne) * parseInt(numTwo);

    return total.toFixed(5);
}

function divideNum(numOne, numTwo) {
    let total = parseInt(numOne) / parseInt(numTwo);

    return total.toFixed(5);
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
const btnClear = document.querySelector("#clear");
const btnEquals = document.querySelector("#equals");
const btnDecimal = document.querySelector("#decimal");
const btnBackspace = document.querySelector("#backspace");

btnZero.addEventListener("click", () => {
    if (inputOperator === "") {
        displayOne.textContent += "0";
        inputOne += "0";
    }
    else {
        displayTwo.textContent += "0";
        inputTwo += "0";
    }  
});

btnOne.addEventListener("click", () => {
    if (inputOperator === "") {
        displayOne.textContent += "1";
        inputOne += "1";
    }
    else {
        displayTwo.textContent += "1";
        inputTwo += "1";
    }
});

btnTwo.addEventListener("click", () => {
    if (inputOperator === "") {
        displayOne.textContent += "2";
        inputOne += "2";
    }
    else {
        displayTwo.textContent += "2";
        inputTwo += "2";
    }
});

btnThree.addEventListener("click", () => {
    if (inputOperator === "") {
        displayOne.textContent += "3";
        inputOne += "3";
    }
    else {
        displayTwo.textContent += "3";
        inputTwo += "3";
    }
});

btnFour.addEventListener("click", () => {
    if (inputOperator === "") {
        displayOne.textContent += "4";
        inputOne += "4";
    }
    else {
        displayTwo.textContent += "4";
        inputTwo += "4";
    }
});

btnFive.addEventListener("click", () => {
    if (inputOperator === "") {
        displayOne.textContent += "5";
        inputOne += "5";
    }
    else {
        displayTwo.textContent += "5";
        inputTwo += "5";
    }
});

btnSix.addEventListener("click", () => {
    if (inputOperator === "") {
        displayOne.textContent += "6";
        inputOne += "6";
    }
    else {
        displayTwo.textContent += "6";
        inputTwo += "6";
    }
});

btnSeven.addEventListener("click", () => {
    if (inputOperator === "") {
        displayOne.textContent += "7";
        inputOne += "7";
    }
    else {
        displayTwo.textContent += "7";
        inputTwo += "7";
    }
});

btnEight.addEventListener("click", () => {
    if (inputOperator === "") {
        displayOne.textContent += "8";
        inputOne += "8";
    }
    else {
        displayTwo.textContent += "8";
        inputTwo += "8";
    }
});

btnNine.addEventListener("click", () => {
    if (inputOperator === "") {
        displayOne.textContent += "9";
        inputOne += "9";
    }
    else {
        displayTwo.textContent += "9";
        inputTwo += "9";
    }
});

btnAdd.addEventListener("click", () => {
    if (inputOperator === "") {
        displayOper.textContent = "+";
        inputOperator = "+";
        btnDecimal.removeAttribute("disabled");
    }
    else if (inputOperator === "+") {
        alert("Operator already selected!");
    }
    else {
        displayOper.textContent = "+";
        inputOperator = "+";
        btnDecimal.removeAttribute("disabled");
    }
});

btnSubtract.addEventListener("click", () => {
    if (inputOperator === "") {
        displayOper.textContent = "-";
        inputOperator = "-";
        btnDecimal.removeAttribute("disabled");
    }
    else if (inputOperator === "-") {
        alert("Operator already selected!");
    }
    else {
        displayOper.textContent = "-";
        inputOperator = "-";
        btnDecimal.removeAttribute("disabled");
    }
});

btnMultiply.addEventListener("click", () => {
    if (inputOperator === "") {
        displayOper.textContent = "*";
        inputOperator = "*";
        btnDecimal.removeAttribute("disabled");
    }
    else if (inputOperator === "*") {
        alert("Operator already selected!");
    }
    else {
        displayOper.textContent = "*";
        inputOperator = "*";
        btnDecimal.removeAttribute("disabled");
    }
});

btnDivide.addEventListener("click", () => {
    if (inputOperator === "") {
        displayOper.textContent = "/";
        inputOperator = "/";
        btnDecimal.removeAttribute("disabled");
    }
    else if (inputOperator === "/") {
        alert("Operator already selected!");
    }
    else {
        displayOper.textContent = "/";
        inputOperator = "/";
        btnDecimal.removeAttribute("disabled");
    }
});

btnEquals.addEventListener("click", () => {
    if (inputOne === "0" || inputTwo === "0") {
        alert("You won't break this calculator!");
    }
    else if (inputOne === "" || inputTwo === "") {
        alert("Please input two values and an operator!");
    }
    else {
        result = operate(inputOne, inputOperator, inputTwo);
        displayTotal.textContent = result;
        inputOperator = "";
        displayOne.textContent = result;
        displayTwo.textContent = "0";
        inputTwo = "";
        inputOne = result;
        alert("Please select a new operator and continue, or press CLEAR to start again.");
    }
});

btnClear.addEventListener("click", () => {
    inputOne = "0";
    inputTwo = "0";
    inputOperator = "";
    displayOne.textContent = "0";
    displayOper.textContent = "";
    displayTwo.textContent = "0";
    displayTotal.textContent = "0";
    btnDecimal.removeAttribute("disabled");
});

btnDecimal.addEventListener("click", () => {
    if (inputOperator === "") {
        displayOne.textContent += ".";
        inputOne += ".";
        btnDecimal.setAttribute("disabled", "");
    }
    else {
        displayTwo.textContent += ".";
        inputTwo += ".";
        btnDecimal.setAttribute("disabled", "");
    }
});

btnBackspace.addEventListener("click", () => {
    if (inputOperator === "") {
        displayOne.textContent = inputOne.slice(0, -1);
        inputOne = inputOne.slice(0, -1);
    }
    else {
        displayTwo.textContent = inputTwo.slice(0, -1);
        inputTwo = inputTwo.slice(0, -1);
    }
})
