// Arrays, objects and destructuring

let a = ["Nayyum",9,"Aman"]
console.log(a);

// traversal of Array
// searching
// sort
// CRUD

for(let i = 0;i<a.length;i++) {
    console.log(a[i]);
}

var myFriends = ["sunny", "dani", "Eva", "alex", "coco"]
console.log(myFriends[3])
console.log(myFriends.length)


//Searching //indexOf // lastIndexOf // includes
var myFriends = ["sunny", "dani", "Eva", "alex", "coco"]


console.log(myFriends.indexOf("dani", 1))

console.log(myFriends.lastIndexOf("sunny"))
console.log(myFriends.includes("kamal"))

console.log(myFriends.lastIndexOf("kamal"))

let months = ["March", "Jan", "feb", "April", "Dec", "Nov"]
console.log(months.sort())

let arr = [5, 7, 1, 3, 9, 12, 51, 1000, 44]
console.log(arr.sort());


//CRUD




//!  Object

// key value pair

let student = {
    name: "Manoj Bharti",
    age: 21,
    course: "Btech"
}

console.log(student.name, student.age, student.course)
console.log(Object.keys(student))
console.log(Object.values(student))


//! Destructuring

const myBioData = ["nami", 21, "Pirate navigator"]

let [myName, myAge, myProffesion] = myBioData;
console.log(myAge)



const myData = {
    myName : "Navii",
    myAge : 25,
    myProffesion : "Teacher"
}

let [myName, myAge, myProffesion] = Object.values(myData);
console.log(myName)


//traditional way
function add(a,b) {
    console.log(a+b);
}
let a = 5
let b = 6
//arrow function
const add = (a, b) => {
    console.log(a+b);
}
add(5,6)


// Promises

let Promise = new Promise((resolve, reject) => {
    if(success) {
        console.log("Success!!");
    }else {
        reject("Error!!")
    }
})

Promise.then(Response => {
    console.log(Response);
}).catch(error => {
    console.log(error);
})


//pending
//fullfilled
//rejected



let playMovie = new Promise((resolve, reject) => {
    let internetWorking = true;

    if(internetWorking){
        resolve("Movie is playing!!");
    }else {
        reject("No internet connection.")
    }
})


playMovie.then(msg => {
    console.log(msg);
}).catch(err => {
    console.log(err);
})




//! Async/ Await

async function fetchData() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/users');
        let data = await response.json();
        console.log(data);
    }catch(error) {
        console.error(error);
    }
}


fetchData()









//! ***  Working with JSON : JS Object Notation

const student = {
    name: "anshul",
    age: 20
}

//convert object to JSON

const jsonString = JSON.stringify(student)
console.log(jsonString);


//JSON to object
const 