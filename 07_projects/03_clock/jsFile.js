const clock =document.querySelector('#clock')
setInterval(function(){
    let date = new Date();
    //console.log(date.toLocaleTimeString());  // due to setInterval time will update every second , but i don't want to update this in console , so....
    clock.innerHTML=date.toLocaleTimeString();
},1000)// this 1000 is mili-second