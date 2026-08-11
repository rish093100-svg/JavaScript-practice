// const instaUser = new Object() =>singletone object
const instaUser = {} //non singletone object

console.log(instaUser);

instaUser.id = "123abc"
instaUser.name = "Jaadu"
instaUser.isLoggedIn = false

// console.log(instaUser)

const regularUser = {
    email: "OyeeHoyee@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Christopher",
            lastname: "nolan"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname) // hitesh

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

//const obj3 = {obj1, obj2}
//const obj3 = Object.assign({}, obj1, obj2) //object line se aa jayenge

const obj3 = {...obj1, ...obj2}
console.log(obj3);

const users = [
    {
        id: 1,
        email: "nolan@gmail.com"
    },
    {
        id: 1,
        email: "nolan@gmail.com"
    },
    {
        id: 1,
        email: "nolan@gmail.com"
    },
]

users[1].email
console.log(instaUser);

console.log(Object.keys(instaUser));
console.log(Object.values(instaUser));
console.log(Object.entries(instaUser));
