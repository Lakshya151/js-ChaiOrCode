//  Here in JS , arrays are resizable and can hold different type of data type in single arrays
// element of arr accessed using the index

const myArr=[9,8,7,6,5,4,3,2,1]
//console.log(myArr[1])
// second method to define array

const arr= new Array(9,8,7,6,5,4,3,1)
//console.log(arr[2])

//Array methods---->
arr.push(8)
arr.pop()
arr.unshift(0)// this will add 0 at start and shift the other elements
arr.shift()// this will remove the first element of the array
// console.log(arr)
// console.log(arr.includes(7))// this will give true or false , reponse to element is there or not
// console.log(arr.indexOf(7))// this will give the index of the given  number

const newArr= arr.join()
// console.log(newArr)// this will convert arr into string
// console.log(typeof(newArr))

console.log(arr)
const arr2 =arr.slice(1,4)// this will give the sub array of the given array
console.log(arr2)

const arr3= arr.splice(1,4)// it modify the origninal array, as it remove the portion of array that is splice
console.log(arr3)
console.log(arr)

