// ------------------for-of loop----------
//["","",""] ->string inside array
//[{},{},{}] -> objects inside array 

const arr=[1,2,3,4,5]
for(const num of arr){
    console.log(num)
}
const greating= "hello ! world"
for(let c of greating){
    console.log(`each char of greating :${c}`)
}

//Maps

const map= new Map()
map.set('IN',"INDIA")
map.set('USA',"United state of America")
map.set('Fr',"France")
//console.log(map)

// for(const key of map){// this will give key-value in array form
//     console.log(key);
    
// }


// this will give  key-value format---
for(const [key,value] of map){
    console.log(key,':',value);
}

const my_obj={
    'game_1':'BGMI',
    'game_2':'PUBG',
    'game_3':'COC',
}

//this format of for loop will not work on object--------
// for(const [key,value] of game){
//     console.log(key,':',value)
// }