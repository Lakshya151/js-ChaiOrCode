const num=[1,2,3,4,5,6,7,8,9,10]

// const new_num=num.map((val)=>val+10)// this will add 10 to each element in array and then store them in variable
// console.log(new_num)

const new_num=num.map((val)=>val*10).map((val)=>val+10).filter((val)=>val>=50)// this will multiply element of array by 10 and then add 10 to each element and then store only those , which has value greater then 50
console.log(new_num)

