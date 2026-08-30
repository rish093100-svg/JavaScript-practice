const accountId = 144553
let accountEmail = "rishu1122@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"

//accountId = 2 //Not allowed to change
console.log(accountId);

accountEmail = "Hm@gmail.com"
accountPassword = "2244"
accountCity = "Bengaluru"

console.table([accountId, accountEmail, accountPassword, accountCity])

/*
prefer not to use var because of issue in block scope and functional scope 
*/

