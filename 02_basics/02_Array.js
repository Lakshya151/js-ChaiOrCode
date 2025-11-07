const MCU =["IronMan","SpiderMan","Thor","Caption America","Hulk"]
const DCU=["Wolvorience","SuperMan","Flash","AquaMan","BatMan"]

//MCU.push(DCU)// if I do this this will place whole array the MCU , it means there will be whole array
//console.log(MCU)

//const allHero=MCU.concat(DCU)// now this will collect all elements at one place
//console.log(allHero)


//PREFER THIS--
const allHero_1=[...MCU,...DCU]// this... is spread , it  means it spread all elemts of both the
//arrays and then store them in allHero_1 array
//console.log(allHero_1)

// IF ther is a situation when there are many arrays inside one arrays and u want to make them one
const arr_02= [1,2,3,[3,2,1],[6,5,3],[7,5,9]]// use flat to do that
const arr_02_final=arr_02.flat()// try to use infinity inside flat()
//console.log(arr_02_final)

//to check if an array is array

// console.log(Array.isArray(MCU))// this will give true, try to replace it with "IronMan"
// console.log(Array.from("IRONMAN"))// this will make an array of elements of IRONMAN


let score_01=123
let score_02=543
let score_03=987
//now i want to make arrays of these elements

console.log(Array.of(score_01,score_02,score_03))
