const accountId=109876;
let accountEmail="rajputg@gmail.com";
var accountPassword="12345";// this is not the appropiate way.
accountCity="Delhi";// variable can also be declare like this.
// don't use var , due to scope
let accountState;// i left it null, to see what will be the output
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);// I use this method to print multiple values at a time using console.table([])
