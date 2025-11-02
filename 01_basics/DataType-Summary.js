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

//----------------------------------------------------------------------
// Stack Memory(Primitive DataType) , Heap Memory(Non-Primitive DataType)
/*In stack we get the copy of that data , but in head we get the reference of that data */

let myName="Lakshya Rajput"
let anotherName = myName // i will get the copy of myName here , not the original

anotherName="lakhu"
console.log(myName)
console.log(anotherName)

let user1={
    name:"Lakshya Rajput",
    age:20,
}

let user2=user1 // here user2 also pointing the data of user1 , as it is refernce type
user2.age=21
console.log(user1)
