// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Tony",
    "full name": "Tony Stark",
    [mySym]: "mykey1",
    age: 18,
    location: "New york",
    email: "jarvis@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"]) => 2nd method to access objects
// console.log(JsUser["full name"]) 
// console.log(JsUser[mySym])

JsUser.email = "jarvis@chatgpt.com"
// Object.freeze(JsUser) => freeze karne se hum uski value ko change nhi kar payenge
JsUser.email = "jarvish@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting()); // Hello JS user
console.log(JsUser.greetingTwo()); // Hello JS user, Tony