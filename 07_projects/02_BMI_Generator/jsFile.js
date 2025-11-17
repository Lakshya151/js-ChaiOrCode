const form = document.querySelector('form')
form.addEventListener('submit',function(e){
    e.preventDefault();// as we don't hava DB ,so we stop submitting the result to DB.
    const height=parseInt(document.querySelector('#height').value) // by .value we get the input value  , but in format of string , so we have to convert it into number or any required data type.
    const weight=parseInt(document.querySelector('#weight').value)
    const result=document.querySelector('#results')
    if(height===''||height<0 || isNaN(height)) {// this NaN will check if the given height is a number or not
        result.innerHTML=`please give a valid height : ${height}`;
    }else if(weight===''||weight<0 || isNaN(weight)) {
        result.innerHTML=`please give a valid weight : ${weight}`;
    }else{
        const bmi=(weight/((height*height)/10000)).toFixed(2);
        //show the result 
        result.innerHTML=`<span>${bmi}</span>`;
    }
});