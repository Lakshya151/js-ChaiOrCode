const user={
    user_name:"Trish",
    price:999,
    welcome_msg:function(){
        console.log(`hello ! ${this.user_name} , welcome to our website.`)
        //console.log(this)// this will print the data of user , as it is its parent
    }
}

//user.welcome_msg()
//user.user_name="Robert"
//user.welcome_msg()


//console.log(this)// and this print {} , as it has no parent so this will give empty object

// function chai(){
//     let user_name="Robert"
//     console.log(this.user_name)// this will give undefine, it means this will not work here , as it work in object
// }
// chai()


//-------------------ARROW FUNCTION-------------

// const chai= () =>{// This is called arrow function
//     let user_name="Peter parker"
//     console.log(this.user_name);// so this also not work here.
// }
// chai()

const add_two =(num1 , num2) =>{
    return num1+num2
}
// also can write like below 
const add_two_02 =(num1 , num2) =>num1+num2 // both function work same
//----------------or---------------RECOMENDED
const add_two_002=(num1,num2) =>(num1+num2)// inside paranthesis 

console.log(add_two(4,5))
console.log(add_two_02(6,7))