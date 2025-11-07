const score=400
//console.log(score)

const numScore= new Number(100)
// console.log(numScore)// this is 100% a number
// console.log(numScore.toString())// convert number to string
// console.log(numScore.toString().length)//tell the length of string
// console.log(numScore.toFixed(2))// this will print 100.00

const num1= 12.7899
//console.log(num1.toPrecision(3))//this will focus on first three number , 12.8 will be output
const hundred=1000000;
//console.log(hundred.toLocaleString('en-IN'))// this will convert the number into indian number format)

//+++++++++++++++++++++__MATHS__++++++++++++++++++++++++++++++++++++++++

console.log(Math.abs(-45))// this will change nigative value into positive
console.log(Math.round(456.567))// this will round the given number to given precise value
console.log(Math.ceil(4.6))// this will choose the upper number-> 5
console.log(Math.floor(4.6))//this will choose the bottom value-> 4
console.log(Math.sqrt(16))// give square_root of the given number.
console.log(Math.min(4,5,6,7,8,0,1))// this will find the minimum number in the given array.
// Math.max()-> it is also here
console.log(Math.random())// this will give the random value and number always come between 0 and 1.


console.log(Math.floor(Math.random()*(max-min+1))+10)// 2:50 part 1.