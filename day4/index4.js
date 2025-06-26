
//map
const numbers = [1,2,3,4]
const mutiple = numbers.map((item) => {
    return item * 2
})

console.log(mutiple)


//filter

// return new array containing only those elements that satisfy a specific condition

const numbers = [1,2,3,4]
const result = numbers.filter(numbers => numbers >= 2);
console.log(result);

const cop = [1,0,0,0,0,1,1,1,1,0]
const re = cop.filter(cop => cop == 1);
console.log(re)

//reduce : this method reduces the array to a sigle value by performing function each element(from left to right)

const price = [100, 200, 300]
cont 



// * NaN : Not a number . it will come in output when you try to subtract 2 string to each other

console.log(typeof(NaN)) //number

//difference between var, let and const ?



// hello my name is ....... and my age is..... 

console.log(2);
console.log("Man");
setTimeout(() => console.log("Hello"), 1000);
console.log(1);
console.log("okayyyyy")



console.log("start");
setTimeout(()=> {
    console.log("Timeout");
}, 0)

Promise.resolve().then(() => 
console.log("Promise"));

console.log("End")



// <!--! what is this in javascript?


// What is an IFFI function (immediately invoked function expressison)

(function() {
    console.log("Hello");
})();


// what is the difference between function declaration and function expressison?


// application -> v8(javascript engine) -> nodejs bindings(node api) -> os operation -> event quee -> worker thread -> 




