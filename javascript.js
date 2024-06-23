let currentNumber = 0;
let previousNumber = 0;
let operator = null;
let executed = true;
let cleared = true;

let write;

document.addEventListener("DOMContentLoaded", function() {
    let powerOn = false;
    const power = document.getElementById("aOn-button"); 
    let delay = false;

    const zero = document.getElementById("zero");
    const one = document.getElementById("one");
    const two = document.getElementById("two");
    const three = document.getElementById("three");
    const four = document.getElementById("four");
    const five = document.getElementById("five");
    const six = document.getElementById("six");
    const seven = document.getElementById("seven");
    const eight = document.getElementById("eight");
    const nine = document.getElementById("nine");
    
    const AC = document.getElementById("AC");
    const delet = document.getElementById("delete");
    const period = document.getElementById("period");
    const add = document.getElementById("add");
    const subtract = document.getElementById("subtract");
    const multiply = document.getElementById("multiply");
    const divide = document.getElementById("divide");
    const execute = document.getElementById("execute");

    power.addEventListener("click", function() {
        if(!delay){
            powerOn = !powerOn;
            powerOnOff(powerOn);
            delay = true;
            setTimeout(() => {
                delay = false;
            }, 2000);
        }
    });

    zero.addEventListener("click", function() { handleNumber(0); });
    one.addEventListener("click", function() { handleNumber(1); });
    two.addEventListener("click", function() { handleNumber(2); });
    three.addEventListener("click", function() { handleNumber(3); });
    four.addEventListener("click", function() { handleNumber(4); });
    five.addEventListener("click", function() { handleNumber(5); });
    six.addEventListener("click", function() { handleNumber(6); });
    seven.addEventListener("click", function() { handleNumber(7); });
    eight.addEventListener("click", function() { handleNumber(8); });
    nine.addEventListener("click", function() { handleNumber(9); });
    period.addEventListener("click", function() { handleNumber("period"); });

    AC.addEventListener("click", functionAC);
    delet.addEventListener("click", functionDelet);

    add.addEventListener("click", function() { handleOperator("add"); });
    subtract.addEventListener("click", function() { handleOperator("subtract"); });
    multiply.addEventListener("click", function() { handleOperator("multiply"); });
    divide.addEventListener("click", function() { handleOperator("divide"); });

    execute.addEventListener("click", function() { handleExecute(); });

});

function powerOnOff(powerOn) {
    const screen = document.querySelector("#power-screen"); 
    const screenText = document.getElementById("screen-text");
    screenText.innerHTML = "";
    currentNumber = 0;
    previousNumber = 0;
    operator = null;
    executed = true;
    cleared = true;

    if(powerOn) {
        console.log("paspausta");
        screen.classList.add("move");
        setTimeout(() => {
            screen.classList.remove("move");
        }, 1000);
    } else {
        screen.classList.add("move");
        setTimeout(() => {
            screen.classList.remove("move");
        }, 1000);
    }
}

function handleNumber(num) {
    const screenText = document.getElementById("screen-text");
    if(num == "period") {
        num = ".";
    }
    if (cleared) {
        screenText.innerHTML = num;
        cleared = false;
    } else {
        screenText.innerHTML += num;
    }
    currentNumber = parseFloat(screenText.innerHTML);
}

function functionAC() {
    const screenText = document.getElementById("screen-text");
    screenText.innerHTML = "";
    currentNumber = 0;
    previousNumber = 0;
    operator = null;
    executed = true;
    cleared = true;
}

function functionDelet() {
    const screenText = document.getElementById("screen-text");
    let deleted = screenText.innerHTML.slice(0, -1);

    screenText.innerHTML = deleted;
    currentNumber = screenText.innerHTML
}



function handleOperator(op) {
    if (operator && !executed) {
        handleExecute();
    }
    previousNumber = currentNumber;
    operator = op;
    cleared = true;
    executed = false;
}

function handleExecute() {
    const screenText = document.getElementById("screen-text");
    if (operator === "add") {
        currentNumber = previousNumber + currentNumber;
    } else if (operator === "subtract") {
        currentNumber = previousNumber - currentNumber;
    } else if (operator === "multiply") {
        currentNumber = previousNumber * currentNumber;
    } else if (operator === "divide") {
        if (currentNumber !== 0) {
            currentNumber = previousNumber / currentNumber;
        } else {
            screenText.innerHTML = "LAZERDIM700";
            currentNumber = 0;
            previousNumber = 0;
            operator = null;
            executed = true;
            cleared = true;
            return;
        }
    }
    
    
    screenText.innerHTML = parseFloat(currentNumber.toFixed(5));
    operator = null;
    executed = true;
    cleared = true;
}
