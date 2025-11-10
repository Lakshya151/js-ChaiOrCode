//----------for-loop--------------&& while-loop same as cpp-----------
//----------break & continue same as cpp--------
for (let i = 0; i < 10; i++) {
    const element = i;
    console.log(element);
    
}

for (let i = 0; i <5; i++) {
    console.log(`outer elemet : ${i}`)
    for (let j = 0; j < 2; j++) {
        console.log(`inner element :${j}`)
    }
}