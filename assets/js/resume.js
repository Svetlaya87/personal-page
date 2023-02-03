import  {userDataUk, titlesUk, myExpUk, addEducUk, EducUk} from './modules/uk-data.js'; 
import {userDataEn, titlesEn, myExpEn, addEducEn, EducEn} from './modules/en-data.js';



let employmentHistory = document.getElementsByTagName('employment-history');
let xCourses =          document.getElementsByTagName('x-courses');
let xEduc =             document.getElementsByTagName('x-education');

let ulForExp = document.createElement('ul');
let ulForCourses = document.createElement('ul');
let ulForEduc = document.createElement('ul');

employmentHistory[0].append(ulForExp);
xCourses[0].append(ulForCourses);
xEduc[0].append(ulForEduc);

let buttons = document.getElementsByTagName('button');
console.log(buttons[0]['tagName']);

let myExp = myExpUk;
let addEduc = addEducUk;
let Educ = EducUk;




let x = myExp;
let z = ulForExp;

for(let i=0; i<= x.length; i++){

    if ( i == x.length){

        if (i == x.length && x == addEduc){

            break;
        
        }

        x = addEduc;
        z = ulForCourses;
        i = 0;
    }
    
    console.log(x[i]);
    for(let y =0; y< x[i].length; y++){

        let li = document.createElement('li');
        z.append(li);
        li.classList.add('p-2');

        if (x == addEduc){
            li.innerHTML = `<h3>${x[i][y]}</h3><p>${x[i][y+1]}</p><p>${x[i][y+2]}</p>`;
            break;
        }

        

        li.innerHTML = `<h3>${x[i][y]} | ${x[i][y+1]}</h3><p>${x[i][y+2]} | ${x[i][y+3]}</p><p>${x[i][y+4]}</p>`;

        if ( x[i][y+1] == "" ){
            li.innerHTML = `<h3>${x[i][y]}</h3><p>${x[i][y+2]} | ${x[i][y+3]}</p><p>${x[i][y+4]}</p>`;
        }


        break;


    }
    
}

    x =Educ;
    let li = document.createElement('li');
    ulForEduc.append(li);
    li.classList.add('p-2');

    li.innerHTML = `<h3>${x[0]} | ${x[1]} </h3><p>${x[2]}</p><p>${x[3]} | ${x[4]}</p>`;



    

    function English() {

        
        //let nameSurname = document.querySelector('div > name-surname > p');
        let nameSurname = document.querySelectorAll('div > * > p');
        
        for(let i=0; i< userDataEn.length; i++){
            nameSurname[i].innerHTML= userDataEn[i];

        }

        let titles = document.querySelectorAll('div > * > h1');
        
        for(let i=0; i< titlesEn.length; i++){
            titles[i].innerHTML= titlesEn[i];

        }

        let aSeeMyWorks = document.querySelectorAll('header > span > a > span');
        console.log(aSeeMyWorks);
        aSeeMyWorks[0].innerHTML = 'See my works';

        let education = document.querySelectorAll('x-education > ul > li');
        console.log(education);
        education[0].childNodes[0].innerHTML = `${EducEn[0]} | ${EducEn[1]}`;
        education[0].childNodes[1].innerHTML = EducEn[2];
        education[0].childNodes[2].innerHTML = `${EducEn[3]} | ${EducEn[4]}`;

        let employment  = document.querySelectorAll('employment-history > ul > li');
        let courses = document.querySelectorAll('x-courses > ul > li');

        
        function translater(x, y){
            
            for(let i=0; i< x.length; i++){   
                for(let j=0; j < x[i].childNodes.length; j++){
                
                    if (y == myExpEn){
                        if (j== x[i].childNodes.length-1) {
                            x[i].childNodes[x[i].childNodes.length-1].innerHTML = y[i][y[i].length-1];
                        } else if( j== 0) {
                            x[i].childNodes[j].innerHTML = `${y[i][j]} | ${y[i][j+1]}`;
                            
                           
                            
                        } else{
                            x[i].childNodes[j].innerHTML = `${y[i][j+1]} | ${y[i][j+2]}`;
                        }
                    }else {
                       
                        x[i].childNodes[j].innerHTML = y[i][j];
                    }
                    
                }
                
            }
            
        }
        
        
        translater(employment, myExpEn );
        translater(courses, addEducEn);
        
        //titlesEn
        console.log("I'm here En");
    }
    
    
    function Ukraine() {
    
         //let nameSurname = document.querySelector('div > name-surname > p');
         let nameSurname = document.querySelectorAll('div > * > p');
        
         for(let i=0; i< userDataEn.length; i++){
             nameSurname[i].innerHTML= userDataUk[i];
 
         }
 
         let titles = document.querySelectorAll('div > * > h1');
         
         for(let i=0; i< titlesEn.length; i++){
             titles[i].innerHTML= titlesUk[i];
 
         }
 
         let aSeeMyWorks = document.querySelectorAll('header > span > a > span');
         console.log(aSeeMyWorks);
         aSeeMyWorks[0].innerHTML = 'Дивитись роботи';
 
         let education = document.querySelectorAll('x-education > ul > li');
         console.log(education);
         education[0].childNodes[0].innerHTML = `${EducUk[0]} | ${EducUk[1]}`;
         education[0].childNodes[1].innerHTML = EducUk[2];
         education[0].childNodes[2].innerHTML = `${EducUk[3]} | ${EducUk[4]}`;
 
         let employment  = document.querySelectorAll('employment-history > ul > li');
         let courses = document.querySelectorAll('x-courses > ul > li');
 
         
        function translater(x, y){
            for(let i=0; i< x.length; i++){
                for(let j=0; j < x[i].childNodes.length; j++){
                    if (y == myExpUk){
                        if (j== x[i].childNodes.length-1) {
                            x[i].childNodes[x[i].childNodes.length-1].innerHTML = y[i][y[i].length-1];
                        } else if( j== 0) {
                            x[i].childNodes[j].innerHTML = `${y[i][j]} | ${y[i][j+1]}`;
                            
                           
                            
                        } else{
                            x[i].childNodes[j].innerHTML = `${y[i][j+1]} | ${y[i][j+2]}`;
                        }
                    }else {
                        
                         x[i].childNodes[j].innerHTML = y[i][j];
                    }
                     
                }
            }
        }
         
         
         translater(employment, myExpUk );
         translater(courses, addEducUk);
         
        
        console.log("I'm here Uk");
    }
    
    
    buttons[1].addEventListener( 'click', English);
    buttons[0].addEventListener( 'click', Ukraine);
    


    
