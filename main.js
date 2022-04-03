const number = document.querySelectorAll(".number");
const operator = document.querySelectorAll(".operator");
const point = document.getElementById("point");
const equal = document.getElementById("equal");
const clear = document.getElementById("clear");
const negate = document.getElementById("negate");
const percentage = document.getElementById("percentage");
const display = document.querySelector("#display");

let newInput = "";
let firstNumber = "";
let secondNumber = "";

let firstOperator = "";
let newOperator = "";

let partialOutput = "";
let finalOutput = "";

//no operator button available until there's a number on display
operator.forEach (e => e.disabled = true);

//print numbers out to display 
//prevent number from having more than one decimal point
//reset display after final output
number.forEach(item => {
    item.addEventListener("click", (e) => {
    equal.disabled = false;
    operator.forEach (e => e.disabled = false);
     if (finalOutput == "") {
        newInput = e.target.value;
        display.innerHTML += newInput;
        if(e.target.innerHTML === '.')
        point.disabled = true;     
    } else {
        display.innerHTML = ""
        finalOutput = ""
        newInput = e.target.value;
        display.innerHTML += newInput;
        if(e.target.innerHTML === '.')
        point.disabled = true;     
        }
    })
})

//when the operator button is pressed:
//CASE 1: if the operator button is pressed for the first time in the operation 
//then store the first number
//re-enable the decimal point button
//then store the operator 
//then clear the display
//CASE 2: if the operator button is pressed to concatenate a new operation, then
//store the number on display as second number
//store the new operator
//re-enable the ecimal point button
//execute the operation up to that point
//the output becomes the new firstNumber
//clear the display so a new number can be entered
//the new operator replaces the previous operator for the next operation

//added commas separators for thousands

operator.forEach(item => {
    item.addEventListener("click", (e) => {
        point.disabled = false;
        equal.disabled = true;
        operator.forEach (e => e.disabled = true)

        if (firstNumber == "") {
            firstNumber = display.innerHTML;
            firstOperator = e.target.value;
            console.log(firstNumber)
            display.innerHTML = "";
        } else { 
            secondNumber = display.innerHTML;
            newOperator = e.target.value;
            if (firstOperator == "+") {
                partialOutput = (parseFloat(firstNumber) + parseFloat(secondNumber)).toLocaleString('en-US');
            } else if (firstOperator == "-") {
                partialOutput = (parseFloat(firstNumber) - parseFloat(secondNumber)).toLocaleString('en-US');
            } else if (firstOperator == "x") {
                partialOutput = (parseFloat(firstNumber) * parseFloat(secondNumber)).toLocaleString('en-US');
            } else if (firstOperator == "÷") {
                partialOutput = (parseFloat(firstNumber) / parseFloat(secondNumber)).toLocaleString('en-US');
            }
            firstNumber = partialOutput;
            display.innerHTML = "";
            firstOperator = newOperator;
        }
    })
})


//when equal button pressed, store second number
//complete calculation
//update display with output
//re-enable decimal point button
//case of equal pressed after just one number
equal.addEventListener("click", (e) => {
    if (firstNumber != "") {
        secondNumber = display.innerHTML;
        if (firstOperator == "+") {
            finalOutput = (parseFloat(firstNumber) + parseFloat(secondNumber)).toLocaleString('en-US');
        } else if (firstOperator == "-") {
            finalOutput = (parseFloat(firstNumber) - parseFloat(secondNumber)).toLocaleString('en-US');
        } else if (firstOperator == "x") {
            finalOutput = (parseFloat(firstNumber) * parseFloat(secondNumber)).toLocaleString('en-US');
        } else if (firstOperator == "÷") {
            finalOutput = (parseFloat(firstNumber) / parseFloat(secondNumber)).toLocaleString('en-US');
        }
        display.innerHTML = finalOutput;
    } else { display.innerHTML = (parseFloat(display.innerHTML)).toLocaleString('en-US');
        }
    point.disabled = false;
    equal.disabled = true;
    firstNumber = "";
    // secondNumber = output
})

//clear button
//re-enable decimal point button
//reset number and operator variables
clear.addEventListener("click", (e) => {
    display.innerHTML = "";
    point.disabled = false;
    firstNumber = "";
    secondNumber = "";
    firstOperator = "";
    output = "";
    operator.forEach (e => e.disabled = true);
})

//percentage button
//disable decimal point
percentage.addEventListener("click", e => {
    point.disabled = true;
    if (display.innerHTML == "") {
        display.innerHTML = "";
    } else {
        display.innerHTML = parseFloat(display.innerHTML)/100;
    }
})

//negate button
negate.addEventListener("click", (e) => {
    if (display.innerHTML == "") {
        display.innerHTML = "";
    } else {
        display.innerHTML = (parseFloat(display.innerHTML)* (-1)).toLocaleString('en-US');
    }
})

