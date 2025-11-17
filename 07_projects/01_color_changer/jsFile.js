const button =document.querySelectorAll('.button')
button.forEach(function(button){
    console.log(button)
    button.addEventListener('click',function(e){
        console.log(e);
        console.log(e.target);
        switch(e.target.id){
            case 'grey':
                body.style.background="grey";
                break;
            case 'white':
                body.style.background="white";
                break;
            case 'blue':
                body.style.background="blue";
                break;
            case 'yellow':
                body.style.background="yellow";
                break;
            default:
                body.style.background="purple";
                break;
        }
    });
});