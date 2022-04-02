const number = document.querySelectorAll(".number");
const operator = document.querySelectorAll(".operator");

// const one = document.getElementById("one");
// const two = document.getElementById("two");
// const three = document.getElementById("three");
// const four = document.getElementById("four");
// const five = document.getElementById("five");
// const six = document.getElementById("six");
// const seven = document.getElementById("seven");
// const eight = document.getElementById("eight");
// const nine = document.getElementById("nine");
// const zero = document.getElementById("zero");
const point = document.getElementById("point");
// const plus = document.getElementById("plus");
// const minus = document.getElementById("minus");
// const divide = document.getElementById("divide");
// const multiply = document.getElementById("multiply");
const equal = document.getElementById("equal");
const clear = document.getElementById("clear");
const negate = document.getElementById("negate");
const percentage = document.getElementById("percentage");
const display = document.querySelector(".display");

// const buttons = document.querySelectorAll("button");
// console.log(buttons);

let newInput = "";
let firstNumber = "";
let secondNumber = "";

let firstOperator = "";
let newOperator = "";

let partialOutput = "";
let finalOutput = "";

//print numbers out to display 
//prevent number from having more than one decimal point
//reset display after final output
number.forEach(item => {
    item.addEventListener("click", (e) => {
    equal.disabled = false;
     if (finalOutput == "") {
        newInput = e.target.value;
        // console.log (newInput);
        display.innerHTML += newInput
        if(e.target.innerHTML === '.')
        point.disabled = true;   
        // console.log(output)    
    } else {
        display.innerHTML = ""
        finalOutput = ""
        newInput = e.target.value;
        console.log (newInput);
        display.innerHTML += newInput
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

operator.forEach(item => {
    item.addEventListener("click", (e) => {
        point.disabled = false;
        // for (let item = 0; item > operator.length; item++) {
        //     operator[item].disabled = true;
        // }

        if (firstNumber == "") {
            firstNumber = display.innerHTML
            firstOperator = e.target.value
            console.log(firstNumber)
            display.innerHTML = ""
        } else { 
            secondNumber = display.innerHTML
            newOperator = e.target.value;
            if (firstOperator == "+") {
                partialOutput = parseFloat(firstNumber) + parseFloat(secondNumber);
            } else if (firstOperator == "-") {
                partialOutput = parseFloat(firstNumber) - parseFloat(secondNumber);
            } else if (firstOperator == "x") {
                partialOutput = parseFloat(firstNumber) * parseFloat(secondNumber);
            } else if (firstOperator == "÷") {
                partialOutput = parseFloat(firstNumber) / parseFloat(secondNumber);
            }
            // display.innerHTML = output
            console.log(partialOutput)
            firstNumber = partialOutput
            display.innerHTML = "";
            firstOperator = newOperator
        }
    })
})
        //  firstNumber = display.innerHTML
        //  point.disabled = false; 
        //  firstOperator = e.target.value
        //  console.log(firstNumber)
        //  display.innerHTML = ""


//when equal button pressed, store second number
//complete calculation
//update display with output
//re-enable decimal point button
equal.addEventListener("click", (e) => {
    secondNumber = display.innerHTML
    if (firstOperator == "+") {
        finalOutput = parseFloat(firstNumber) + parseFloat(secondNumber);
    } else if (firstOperator == "-") {
        finalOutput = parseFloat(firstNumber) - parseFloat(secondNumber);
    } else if (firstOperator == "x") {
        finalOutput = parseFloat(firstNumber) * parseFloat(secondNumber);
    } else if (firstOperator == "÷") {
        finalOutput = parseFloat(firstNumber) / parseFloat(secondNumber);
    }
    display.innerHTML = finalOutput
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
})

//percentage button
//disable decimal point
percentage.addEventListener("click", e => {
    point.disabled = true;
    if (display.innerHTML == "") {
        display.innerHTML = "0"
    } else {
        display.innerHTML = parseFloat(display.innerHTML)/100
    }
})

//negate button
negate.addEventListener("click", (e) => {
    if (display.innerHTML == "") {
        display.innerHTML = "0"
    } else {
        display.innerHTML = parseFloat(display.innerHTML)* (-1)
    }
})

