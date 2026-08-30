const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

marvel_heros.push(dc_heros)

console.log(marvel_heros); // marvel heroes ke andar dc heroes aa jayenge pura array ek elemnt ki tarah count hoga
console.log(marvel_heros[3][1]); // 3rd element ki first value jo ki (flash) hai

const allHeros = marvel_heros.concat(dc_heros) //dono array ko proper merge kar dega
console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);



console.log(Array.isArray("Hitesh")) // false
console.log(Array.from("Hitesh")) //ye array bna dega [ 'H', 'i', 't', 'e', 's', 'h' ]
console.log(Array.from({name: "hitesh"})) // ye empty array dega

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // returns new array from set of elements