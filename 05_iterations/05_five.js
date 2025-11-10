const num=[1,2,3,4,4,5,6,7]
new_nums=num.filter((val)=> val>4) // this will return value , while forEach doesn't return values
//new_nums=num.filter((val)=> {
// return val>4})          // if I use {} then i have to use return , with scope
//console.log(new_nums)

const books=[
    {
        title:"Book one" , genre:"fiction",publish:1948, edition:2010
    },
    {
        title:"Book two" , genre:"history",publish:1949, edition:2013
    },
    {
        title:"Book three" , genre:"science",publish:1950, edition:2015
    },
    {
        title:"Book four" , genre:"non-fiction",publish:1969, edition:2019
    },
    {
        title:"Book five" , genre:"fiction",publish:1999, edition:2020
    }
]

const user_book=books.filter((bk)=>bk.genre==="fiction") // i can check other condition also., and can use && and ||
console.log(user_book)