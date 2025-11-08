//const tinder_user= new Object()
const tinder_user = {} 
// these both are objects

tinder_user.id="lakky123"
tinder_user.name="sam"
tinder_user.isLoggedIn=false

const regular_user={
    email:"some@gmail.com",
    full_name:{// this is another object inside the object
        user_full_name:{
            first_name:"Maharana",
            last_name:"pratap"
        }
    }
}

//console.log(regular_user.full_name.user_full_name)

const obj_01={1:"a",2:"b",3:"c"}
const obj_02={4:"d",5:"e",6:"f"}
const obj_03={7:"g",8:"h",9:"i"}
//const obj_03={obj_01,obj_02}// this will make object inside object

//const obj_combine=Object.assign({},obj_01,obj_02,obj_03)

//Recommended
const obj_combine_01={...obj_01,...obj_02,...obj_03}//this will spread element and store them

//console.log(obj_combine)
//console.log(obj_combine_01)
console.log(tinder_user)
//below code give object values in arrays
console.log(Object.keys(tinder_user))// this will all give the keys of the object
console.log(Object.values(tinder_user))
console.log(Object.entries(tinder_user))
console.log(tinder_user.hasOwnProperty('isLoggedIn'))// this will tell if the mentioned property is there in object or not
 

//Destructuring------------
const course={
    course_name:"BTech",
    year:"2nd",
    Branch:"CSE"
}

const {course_name:c_name}=course// this is allias of course_name ,as i can use c_name instead course_name
console.log(c_name)// and also now i don't have to use couse.key_name
