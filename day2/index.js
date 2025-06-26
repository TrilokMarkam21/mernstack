// let marks = 85;

// if(marks > 80) {
//     console.log("pass");
// }

// --------------------------------------------------------------------

// let weather = "rainy";

// if(weather == "sunny") {
//     console.log("Go back to park");
// }else {
//     console.log("Stay at home !!");
// }


// -------------------------------------------------------------------------

// let light = "red";

// if(light == "green") {
//     console.log("ren!!");
// }else if(light == "yellow") {
//     console.log("get ready for the run");
// }else if(light = "red") {
//     console.log("Stopp!!");
// }else {
//     console.log("Internal Error");
// }

// ----------------------------------------------------------------

// let option = 2;

// switch(option) {
//     case 1:
//         console.log("Music");
//         break;
//     case 2:
//         console.log("Game");
//         break;
//     case 3:
//         console.log("Arts");
//         break;
//     default:
//         console.log("Stay in your class");
// }



//for loop

// for(let i = 1; i <= 5;i++) {
//     console.log(i);
// }

// while loop

// let count = 1;
// while(count <= 5) {
//     console.log(count);
//     count++;
// }

// do...while loop


// for(let i = 1;i<=10;i++) {
//     console.log(i);
// }



// let day = "Monday";

// if(day == "Sunday") {
//     console.log("dont study")
// }else {
//     console.log("study for 3 subjects")
// }


// let day = "Monday"

// switch(day) {
//     case "Monday":
//         console.log("study subject 1 \nstudy subject 2 \nstudy subject 3");
//         break;
//     case "Tuesday":
//         console.log("study subject 1 \nstudy subject 2 \nstudy subject 3");
//         break;
//     case "Wednesday":
//         console.log("study subject 1 \nstudy subject 2 \nstudy subject 3");
//         break;
//     case "Friday":
//         console.log("study subject 1 \nstudy subject 2 \nstudy subject 3");
//         break;
//     case "Saturday":
//         console.log("study subject 1 \nstudy subject 2 \nstudy subject 3");
//         break;
//     case "Sunday":
//         console.log("no study");
//         break;
//     default:
//         console.log("Invalid Input");

// }



// functions

function greet(name) {
    console.log("hello " + name);
}

greet("Nayyam");

function Sum(a,b) {
    console.log(a + b);
}

Sum(45, 56);


function printn(num) {
    for(let i = 1;i<=num;i++) {
        console.log(i);
    }
}

printn(5);


// A function declaration defines what a function does; it specifies the function's name, parameters, and the code it executes.
//  A function call, on the other hand, is the actual execution of the function's code. It uses the function's name followed
//   by parentheses, possibly including arguments that provide values for the function's parameters.

// A function declaration defines a function, specifying its name, return type, parameters, and the code it executes.
//  A function call is the act of using a declared function to perform its defined task. It involves providing the function's name
//   followed by parentheses, potentially including arguments that correspond to the function's parameters.

// A parameter is a variable listed inside the parentheses in the function declaration. It acts as a placeholder for a value that
//  the function expects to receive. An argument is the actual value that is passed to the function when it is called. It is the concrete data that 
//  the parameter will hold during that specific function execution.


function ab(){
    console.log(a);
    var a = 10;
}

ab();//undefined

// output will be undefined

function ab(){
    console.log(a);
    let a = 10;
}

ab(); // reference error

// what is hoisting?

var a = 1;
function b() {
    a = 10;
    return;
    function a() {}
}

b();
console.log(a);



// Scope : where variable can be acessed or used in your code - inside or outside a function or block

//global scope
var college = "LPU"

function myClass() {
    var subject = "MERN";
    console.log("College: ",college);
    console.log("Subject: ",subject);
}

myClass();
//console.log(subject);


// block scope

{
    let pencil = "apsara";
    console.log(pencil);
}


// closures : when a function remembers the variable from its 



function createCounter() {
    let count = 0;

    return function () {
        count++;
        console.log("Current count: ",count);
    }
}

let counter = createCounter();
counter();
counter();



var a = 20;
var b = 30;

console.log("1. +");
console.log("2. -");
console.log("3. *");
console.log("4. /");

var c = 1;

switch(c) {
    case 1:
        console.log(a+b);
        break;
    case 2:
        console.log(a-b);
        break;
    case 3:
        console.log(a*b);
        break;
    case 4:
        console.log(a/b);
        break;
    default:
        console.log("Invalid Input");

}

let a = 2;
let b = 3;

console.log(a+b+"5"+ 2 + 2);

function test() {
    return;
    2+2;
}
console.log(test());


