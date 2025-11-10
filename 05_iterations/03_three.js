// -----to iterate on objects we have for-in loop----------
const my_obj={
    js:"JavaScript",
    cpp:"c++",
    py:"Python"
}

// for (const key in my_obj) {
//     console.log(key,' : ',my_obj[key])
// }


//-------for-in loop on array-------
const arr=["js","cpp","python","node js"]
for(const key in arr){
    console.log(arr[key]); // if i just print key , it will give index values only
}