// Primitive
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 3456543765545n

// Rreference  (Non primitive)
// Array, Objects, Functions

const heroes = ["Iron_Man", "Captain_America"];

let myObj = {
    name: "Rishu",
    age: 22,
}

const myFunction = function(){
    console.log("Hello World");
    
    
}

// 2 Types of Memory
// Stack (Used in Primitive)
// Heap (Used in Non-Primitive)

let myYoutubename = "codershoderdotcom"

let anothername = myYoutubename
anothername = "cookiecoffee"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@bl"
}

let userTwo = userOne
userTwo.email = "codershoderdotcom"

console.log(userOne.email);
console.log(userTwo.email);