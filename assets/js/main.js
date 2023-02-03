import  {worksUk} from './modules/uk-data.js'; 
import {worksEn} from './modules/en-data.js';


let aside = document.getElementsByTagName('aside'); // тег,в котором будет перечень работ со ссылками на гитхаб

console.log(aside);
console.log(aside[0]);

let buttons = document.getElementsByTagName('button');
console.log(buttons[0]['tagName']);

let works = worksUk;



    for(let i=0; i<works.length; i++){
        for(let j=1; j< works[i].length; j++){
           
            let div = document.createElement('div');
            div.classList.add('aside-div');

            let textdiv = document.createElement('div');
            textdiv.classList.add('p-2');
            
            textdiv.innerText = works[i][j+1];
            div.append(textdiv);
        
            
            let adiv = document.createElement('div');
            adiv.classList.add('div-for-a');
            let a = document.createElement('a');
            adiv.append(a);

            a.target = '_blank';// открывается ссылка в новом окне
            a.href = works[i][j];
            a.innerHTML = 'Дивитись код &gt;&gt;&gt;';
            //a.classList.add('btn');
            a.classList.add('btn-sveta');
            
        
            div.append(adiv);
            
            
            console.log(a);
        
            aside[0].append(div);
            break;
        }
    
    }

let textdiv = document.querySelectorAll('aside > div > div.p-2 ');
let aSeeCode = document.querySelectorAll('aside > div > div > a.btn-sveta');
console.log(textdiv);
function translate(works){

    for(let i=0; i<works.length; i++){
        for(let j=1; j< works[i].length; j++){
         
            textdiv[i].innerText = works[i][j+1];
            console.log(textdiv[0].innerText);
            
    
            break;
        }
    
    }

}

function English() {
    for (let val of aSeeCode){
        val.innerHTML =  'See Code &gt;&gt;&gt;';
    }
    
    console.log(worksEn);
    translate(worksEn);
    
}


function Ukraine() {
    for (let val of aSeeCode){
        val.innerHTML =  'Дивитись код &gt;&gt;&gt;';
    }
   
    //aSeeCode[0].innerHTML = 'Дивитись код &gt;&gt;&gt;'
    console.log("I'm here Uk");
    translate(worksUk);
}


buttons[0].addEventListener( 'click', Ukraine);
buttons[1].addEventListener( 'click', English);




/*
button.onclick = function(){
    a.classList.remove('btn');
    a.classList.add('btn-clicked');
    
    a.visited.style.color = 'black';
}
button.onmousemove = function(){
    a.classList.add('btn-hover');
    a.hover.style.color = 'white';
}
button.onmouseout = function(){
    a.classList.remove('btn-hover');
}
*/
/*
let button = document.createElement('button');
console.log(button);

let a = document.createElement('a');
a.target = '_blank';
a.href = works[0][1];
a.innerHTML = works[0][2];
button.append(a)

button.classList.add('aside-button')
console.log(button);

aside[0].append(button);
*/





