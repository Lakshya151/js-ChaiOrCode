//file 04 is about comparission so i skip it.

const name="Lakshya"
const repoCount=3
//console.log(name+repoCount) // not much good
console.log(`My name is ${name} and my repocount is ${repoCount}.`)

//Another method to define string->// with this type , i can have access of many methods in insept console
const gameName= new String("PUBG")
console.log(gameName[0])// one method from many
console.log(gameName.__proto__)// string method 
console.log(gameName.length)   // string method
console.log(gameName.toUpperCase())//string method     
console.log(gameName.charAt(2))
console.log(gameName.indexOf('U'))


const newString = name.substring(0,4)// can't use negative index here
console.log(newString)

const anotherStr= name.slice(1,4)// if I give negative index , then it will start from back
console.log(anotherStr)

const newStr="      Rajput  "
console.log(newStr)//here space will be present
console.log(newStr.trim())// it will trim the space here.

const url="https://Lakshya95.com"
console.log(url.replace('95','-rajput'))// this will replace the given text.
console.log(url.includes('rajput'))// this will give true ot false , if not present in url
/* this will give false , as url is primitive type , so oroginal value haven't change 
and there is no rajput in it*/

const dashName="Lakshya-Rajput-S/O-Arjun-Singh"// now i want to store this string in array when there is"-"
console.log(dashName.split('-'))