
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

let firstNumber = "";
let firstOperator = "";
let secondNumber = "";
let output = "";


//print numbers out to display 
//prevent number from having more than one decimal point
number.forEach(item => {
    item.addEventListener("click", (e) => {
        const newInput = e.target.value;
        console.log (newInput);
        if(e.target.innerHTML === '.')
        point.disabled = true;     
        display.innerHTML += newInput  
    })
})

//when operator button is pressed:
//store first number
//re-enable decimal point button
//then store operator
//then clear display
operator.forEach(item => {
    item.addEventListener("click", (e) => {
         firstNumber = display.innerHTML
         point.disabled = false; 
         firstOperator = e.target.value
         console.log(firstNumber)
         display.innerHTML = ""


//update first number as output if the existing first number is not equal zero 

        //  operator.forEach(item => {
        //     item.addEventListener("click", (e) => {
        //         secondNumber = display.innerHTML
        //         if (firstOperator == "+") {
        //             output = parseFloat(firstNumber) + parseFloat(secondNumber);
        //         } else if (firstOperator == "-") {
        //             output = parseFloat(firstNumber) - parseFloat(secondNumber);
        //         } else if (firstOperator == "x") {
        //             output = parseFloat(firstNumber) * parseFloat(secondNumber);
        //         } else if (firstOperator == "÷") {
        //             output = parseFloat(firstNumber)/parseFloat(secondNumber);
        //         }
        //         display.innerHTML = output
        //         point.disabled = false;
        //  })
    })
})


//when equal button is pressed, store second number
//complete calculation
//update display with output
//re-enable decimal point button
equal.addEventListener("click", (e) => {
    secondNumber = display.innerHTML
    if (firstOperator == "+") {
        output = parseFloat(firstNumber) + parseFloat(secondNumber);
    } else if (firstOperator == "-") {
        output = parseFloat(firstNumber) - parseFloat(secondNumber);
    } else if (firstOperator == "x") {
        output = parseFloat(firstNumber) * parseFloat(secondNumber);
    } else if (firstOperator == "÷") {
        output = parseFloat(firstNumber)/parseFloat(secondNumber);
    }
    display.innerHTML = output
    point.disabled = false;
})

//clear button
//re-enable decimal point button
clear.addEventListener("click", (e) => {
    display.innerHTML = "";
    point.disabled = false;
})


point.addEventListener("dblclick", (e) => {
    display.HTML
})


//percentage


//negate button
negate.addEventListener("click", (e) => {
    display.innerHTML = parseFloat(display.innerHTML)* (-1)
})




//concatenation without equal