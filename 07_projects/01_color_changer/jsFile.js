const button =document.querySelectorAll('.button')
const body = document.querySelector("body");
button.forEach(function(button){
    console.log(button)// this will show all the buttons on console and their details
    button.addEventListener('click',function(e){
        console.log(e);
        console.log(e.target);// this will show the details of the clicked button
        switch(e.target.id){ // this e.target will give the box that we click on , and then .id will provide its id , which is given on div in html file.
            case 'grey':
                body.style.background=e.target.id;
                break;
            case 'white':
                body.style.background=e.target.id;
                break;
            case 'blue':
                body.style.background=e.target.id;
                break;
            case 'yellow':
                body.style.background=e.target.id;
                break;
            default:
                body.style.background="purple";
                break;
        }
    });
});