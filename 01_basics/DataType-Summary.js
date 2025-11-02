/*Primitive DataType (7)-> these are call by value
String ,Number ,Bollean , Null ,Undefined ,Symbol(use to make unique) ,BigInt
*/

/*Non-Primitive (Reference)
Arrays ,Objects, Functions
*/

const id=Symbol('123')
const valueId= Symbol('123')
console.log(id==valueId)
//even though they have same value and same datatype , but due to symbol they are unique values.

const heros=["IronMan","Thor","SpiderMan"]// this is array
let myObj={
    name:"Lakshya",// under these brackets these are object
    age:20,
}

const myFun=function(){
    console.log("Hello World")
}