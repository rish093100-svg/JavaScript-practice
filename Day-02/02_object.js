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
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname) // hitesh

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

//const obj3 = {obj1, obj2}
const obj3 = Object.assign({}, obj1, obj2)
console.log(obj3);