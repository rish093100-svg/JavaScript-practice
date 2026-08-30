const name = "Pushpa"
const repoCount = 200

// console.log(name + repoCount +"Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('higamer')

console.log(gameName[0]); // h

console.log(gameName.length); // 7
console.log(gameName.toUpperCase()); // HIGAMER

console.log(gameName.charAt(2)); // g
console.log(gameName.indexOf('t')); // -1

const newString = gameName.substring(0, 4)
console.log(newString); // higa

const anotherString = gameName.slice(-8, 4)
console.log(anotherString); // higa

const url = "https://gamer.com.gamer%20win"

console.log(url.replace('%20', '-')); // %20 replace ho jayega '-' se

console.log(url.includes('sundar')) //false