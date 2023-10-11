const accountId = 144553
let accountEmail = "rajatdevsalan@gmail.com"
var accountPassword = "12345"
accountCity = "Bijnor"

// accountId = 2 not allowed in js
/*
prefer not to use var bcse of issue in block scope and functional scope.
*/

accountEmail = "hc@hc.com"
accountPassword = "212121"
accountCity = "Noida"

console.table([accountId, accountEmail, accountPassword])