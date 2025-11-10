//------------for-each loop-------------
const coding=["js","cpp","python","java"]


//In this we give a function without name inside for-each and tells inside the funtion what to do.
// coding.forEach(  function (item){
//     console.log(item)
// })

//using arrow function in foreach----
//coding.forEach((item)=>{console.log(item)})


// one more method to print
//this will work same--
// function prin(item){
//     console.log(item)
// }

// coding.forEach(prin)

// ----------------something more-----------
// coding.forEach((item,index)=>{// try to write arr  after index
//     console.log(item, index)
// })


//--------------object in array------------------
//--------------help in DataBase------------
const my_code=[
    {
        lang:"js",
        teacher: "Hitesh"
    },
    {
        lang:"cpp",
        teacher:"Rohit"
    },
    {
        lang:"python",
        teacher:"Amit"
    }
]

my_code.forEach((item)=>{
    console.log(item.lang, ':',item.teacher)
})