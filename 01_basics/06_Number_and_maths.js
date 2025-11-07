const score=400
console.log(score)
const numScore= new Number(100)
console.log(numScore)// this is 100% a number
console.log(numScore.toString())// convert number to string
console.log(numScore.toString().length)//tell the length of string
console.log(numScore.toFixed(2))// this will print 100.00
const num1= 12.7899
console.log(num1.toPrecision(3))//this will focus on first three number , 12.8 will be output
const hundred=1000000
console.log(hundred.toLocaleString('en-IN')// this will convert the number into indian number format)