function myfun(){
    console.log("T")
    console.log("H")
    console.log("A")
    console.log("K")
    console.log("U")
    console.log("R")
}
//myfun()
// function add_two_numbers(number1 , number2){
//     console.log(number1+number2)
// }
const fun =function(num){
    return num+2
}
console.log(fun(2))
function add_two_numbers(number1 , number2){
    return number1+number2
}

//const result=add_two_numbers(3,4)
//console.log(result)


const sum=add_two_numbers(3,9)
console.log(sum)

function login_msg(user){//i can also give default value here
    if(!user){
        return ("enter you name !")
    }else{
    return (`${user} just logged in`)
    }
}
console.log(login_msg())

// If I don't know the parameter in the function then---
function calculate_cart_price(...obj){// here it is called rest operator & obj can be anything
    return obj// but this will give ans in format of arrays
}

console.log(calculate_cart_price(123,343,54))// print the array , can pass any number of arguments
 
//how to pass objects in function
const user={
    name:"IronMan",
    net_worth:987899
}

function handleobj(anyobject){
    return (`${anyobject.name} has a networth of ${anyobject.net_worth}`)
}

console.log(handleobj(user))// instead of user , I can give whole object here ...eg->{data here}

//arrays as parameter inside the function--
const arr=[1,0,3,4,5,6,7,8,9]
function array_first_element(get_array){
    return get_array[1]
}
console.log(array_first_element(arr))