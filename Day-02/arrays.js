// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

myArr.push(6) // [0,1,2,3,4,5,6]
myArr.push(7) // [0,1,2,3,4,5,6,7]
myArr.pop() //last value delete ho jayegi

myArr.unshift(9) //ye 9 ko starting me kar dega
myArr.shift() // ye starting ki value ko hata dega 

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

const newArr = myArr.join() //ye array ki type ko change kar deta hai

console.log(myArr);
console.log(newArr);


// slice, splice

console.log("A ", myArr); // A [0,1,2,3,4,5,]

const myn1 = myArr.slice(1, 3) // start from 1 and stop at before 3 => [1,2]
console.log(myn1); // [1,2]

console.log("B ", myArr); // B [0,1,2,3,4,5,]


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr); // C [0,4,5]
console.log(myn2); // [1,2,3]

