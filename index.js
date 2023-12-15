let result = document.querySelector('.result');
let increase = document.querySelector('.increase');
let decrease = document.querySelector('.decrease');
let reset = document.querySelector('.reset');

decrease.addEventListener('click', ()=>{
    result.innerHTML--;
    color();
});
increase.addEventListener('click', ()=>{
    result.innerHTML ++;
    color();
});
reset.addEventListener('click', ()=>{
    result.innerHTML =0;
    color();
});

function color(){
    if(result.innerHTML < 0){
        result.style.color = "red";
    } else if(result.innerHTML > 0){
        result.style.color = "green";
    }else {
        result.style.color ='white';
    }
}


let output=document.querySelector('.output');
let input=document.querySelector('.input');
let numb=document.querySelector('.numb');

input.addEventListener('input', function(){
    numb.innerHTML = input.value + "%";
    output.style.borderRadius = input.value + "%";
});