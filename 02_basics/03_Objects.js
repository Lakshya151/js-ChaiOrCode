//Singleton ->it is made using constructor

//object literals

const sym= Symbol("key_01")// i want this symbol to use as key in object obj
const obj={
    name:"Lakshya",
    [sym]:"hello",//if i dont use[], it will not be a symbol then , it will be string.
    "full name":"Lakshya Rajput",
    age:20,
    Loca:"Noida",
    email:"rajputlakshya444@gmail.com",
    isLogged:false,
    lastLoginDates:["Monday","Friday","Saturday"]
}
//to access elements----->
// console.log(obj.name)
// console.log(obj["full name"])// this is recommended , as in full name there is space and we can access
//it using  dot .
// console.log(obj[sym])
//console.log(typeof(sym))// it will give symbol

//To change the value of key--
obj["email"]="lakshyarajput444@gmail.com"
// console.log(obj["email"])

//If i want to value to never change---
//Object.freeze(obj)// now any update in obj will not be done

obj.greeting=function(){// this is function
    console.log("hello sir")
}
obj.greeting_02=function(){
    console.log(`hello ${obj.name} sir`);
    
}
console.log(obj.greeting())
console.log(obj.greeting_02())
