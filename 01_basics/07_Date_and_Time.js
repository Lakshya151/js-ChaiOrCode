let myDate= new Date()
// console.log(myDate)// hard to read
// console.log(myDate.toString()) // now easy to read
// console.log(myDate.toDateString()) // just give date and day
// console.log(myDate.toISOString()) // 
// console.log(myDate.toJSON()) // 
 console.log(myDate.toLocaleString())// try to use with toLocalDateString()
// console.log(typeof(myDate))// this is of object type
let myCreatedDate = new Date(2025,0,23)
// console.log(myCreatedDate)// this output is hard to read , so change it to datestring
// console.log(myCreatedDate.toDateString())// this will show the understandable result and month start from 0 index here

let mydate_01= new Date("07-11-2025")
console.log(mydate_01.toLocaleString())// try with toLocalDateString

let timeStamp= Date.now()// this will give output in mili second
console.log(timeStamp.toLocaleString())
console.log(myCreatedDate.getTime())// now this will also give mili sec , and i can compare them for dersirable result
// To convert upper mili sec to sec , divide them by 1000 and also user floor to remove decimal part

console.log(Math.floor(Date.now()/1000))