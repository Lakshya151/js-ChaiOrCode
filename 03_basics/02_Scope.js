if(true){
    //these are block scope and out of it , that are global scope
    let a=10
    const b=11
    var c=20
}
console.log(c)// this will print 20 , but it shouldn't as it is local variable

function one(){
    const user_name ="Tony Stark"
    function two(){
        const website="youtube"
        console.log(`this is inside two :${user_name}`)
    }
    //console.log(`now in outside two ${website}`)//error-> as we trying to access block element from outside
    two()
}
one()