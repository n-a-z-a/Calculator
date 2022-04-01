
const number = document.querySelectorAll(".number");
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
// const point = document.getElementById("point");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const divide = document.getElementById("divide");
const multiply = document.getElementById("multiply");
const equal = document.getElementById("equal");
const clear = document.getElementById("clear");
const negate = document.getElementById("negate");
const percentage = document.getElementById("percentage");
const display = document.querySelector(".display");

const operator = document.querySelectorAll(".operator");

// const buttons = document.querySelectorAll("button");
// console.log(buttons);

let firstNumber = "";
let firstOperator = "";
let secondNumber = "";
let output = "";

number.forEach(item => {
    item.addEventListener("click", (e) => {
        
        const newInput = e.target.value;
        console.log (newInput);
        display.innerHTML += newInput

        // const onDisplay = display.innerHTML;
        // if (onDisplay === "0") {
        //     display.innerHTML = `${newInput}`;
        // } else {
        //     display.innerHTML = `${onDisplay}${newInput}`;
        //     }   
    })
})

operator.forEach(item => {
    item.addEventListener("click", (e) => {
         firstNumber = display.innerHTML
         firstOperator = e.target.value
         console.log(firstNumber)
        //  console.log(firstOperator);
         display.innerHTML = ""
    })
})


equal.addEventListener("click", (e) => {
    secondNumber = display.innerHTML
    // console.log(secondNumber)
    // display.innerHTML = parseFloat(firstNumber) + parseFloat(secondNumber);
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
})


//when equal button is pressed, update second number
//complete calculation
//update display





//SUM OPERATION
// const sum = () => {
//     console.log("run")
//     if (display.innerHTML.includes("+" && "=")) {
//         const firstNumber = display.innerHTML.slice(0,indexOf("+")-1);
//         const secondNumber = display.innerHTML.slice(indexOf("+")+1, indexOf("=")-1);
    
//         const result = parseFloat(firstNumber) + parseFloat(secondNumber);
//         display.innerHTML = `${result}`;
//     }
// }

// equal.addEventListener("click", sum)

// switch(onDisplay) {
//     case plus:
//       // code block
//       break;
//     case minus:
//       // code block
//       break;
//     case multiply:
//       // code block
//       break;
//     case divide:
//       // code block
//       break;
//     default:
//       // code block
//   } 










