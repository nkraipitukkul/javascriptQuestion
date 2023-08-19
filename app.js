let q1 = document.getElementById('q1');
let q2 = document.getElementById('q2');
let q3 = document.getElementById('q3');
let firstText = document.getElementById('firstText');
let secondText = document.getElementById('secondText');
let thirdText = document.getElementById('thirdText');
let img1 = document.getElementById('img1');
let img2 = document.getElementById('img2');
let img3 = document.getElementById('img3');

let switches1 = true;
img1.addEventListener('click', function(){
    switches1 = !switches1;
    if(!switches1){
        img1.src = 'minus.png';
    }
    else{
        img1.src = 'add.png';
    }   
})

let switches2 = true;
img2.addEventListener('click', function(){
    switches2 = !switches2;
    if(switches2){
        img2.src = 'minus.png';
    }
    else{
        img2.src = 'add.png';
    }   
})

let switches3 = true;
img3.addEventListener('click', function(){
    switches3 = !switches3;
    if(switches3){
        img3.src = 'minus.png';
    }
    else{
        img3.src = 'add.png';
    }   
})

function firstBox(){
    q1.classList.toggle('q1After');
    firstText.classList.toggle('article1None');
}

function secondBox(){
    q2.classList.toggle('q2After');
    secondText.classList.toggle('article2None');
}

function thirdBox(){
    q3.classList.toggle('q3After');
    thirdText.classList.toggle('article3None');
}