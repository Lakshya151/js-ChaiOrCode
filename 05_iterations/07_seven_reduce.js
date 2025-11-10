const my_num=[1,2,3]
// const my_total=my_num.reduce(function(acc, curr_val){
//     console.log(`accumulator : ${acc} and curr value: ${curr_val}`)
//     return acc+curr_val
// },0) // this 0 is the initial value of accumulator


const my_total=my_num.reduce((acc,curr_val)=>(acc+curr_val),0)
console.log(my_total)