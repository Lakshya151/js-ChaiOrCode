//Immediately Invoked Function Expression(IIFE) 
//-> I want a function to execute as soon as i write it
//-> The function that immediately execute and because of global scope pollution (to remove the global variable or global function pollution we use iife)

(function chai(){
    console.log(`DB Connected`)
})() ;// use semi-colon
//----------Arrow function----
((name) =>(console.log(`DB_2 connected named : ${name}`)))
("MySql");// i can pass argument here


// (() =>(console.log(`DB_2 connected `))) (); this can be return also