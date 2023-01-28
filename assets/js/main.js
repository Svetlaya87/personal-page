let works = [
    [
        'https://svetlaya87.github.io/CSS-Grid-homework-10/', 
        'https://github.com/Svetlaya87/CSS-Grid-homework-10',
        "The task is to create an html page according to the picture and adapt it to different screens. Tools: css grid"
    ],
    [
       'https://svetlaya87.github.io/vue10.2-homework/',
       'https://github.com/Svetlaya87/vue10.2-homework',
       "Write a sorting mechanism for the buttons 'Name', 'Code' 'Capital'  and a search mechanism for the string 'Search'. Display pictures of flags of the country and its neighbors."
    ],
    [
        'https://svetlaya87.github.io/find-and-sort-goods-9.2/',
        'https://github.com/Svetlaya87/find-and-sort-goods-9.2',
        "Write a sorting mechanism for the prices buttons  and a search mechanism for the string 'Search'. Display photos of goods."
    ],
    [   'https://svetlaya87.github.io/atm-homework-main/',
        'https://github.com/Svetlaya87/atm-homework-main',
        'You have data on the fullness of the ATM, which load from the atm-info.json file. The user enters the amount they want to get. The task of the script is to calculate what are the denominations of banknotes and their number must given to the user. For example, the amount is 3320 UAH. So the ATM should give to user 500 x 6; 200x1; 100x1; 20x1 banknotes. At the same time, it is necessary to strive for the minimum possible number of issued banknotes.There is also a limit on the total number of banknotes that the ATM can dispense (constant maxNotesLimit).'
    ]
];     

let aside = document.getElementsByTagName('aside'); // тег,в котором будет перечень работ со ссылками на гитхаб

console.log(aside);
console.log(aside[0]);


for(i=0; i<works.length; i++){
    for(j=1; j< works[i].length; j++){

        let div = document.createElement('div');
        div.classList.add('aside-div');

        let textdiv = document.createElement('div');
        textdiv.classList.add('p-2')
        
        textdiv.innerText = works[i][j+1];
        div.append(textdiv);
      
        
        let adiv = document.createElement('div');
        adiv.classList.add('div-for-a');
        let a = document.createElement('a');
        adiv.append(a);

        a.target = '_blank';// открывается ссылка в новом окне
        a.href = works[i][j];
        a.innerHTML = 'See Code &gt;&gt;&gt;';
        //a.classList.add('btn');
        a.classList.add('btn-sveta');
        
       
        div.append(adiv);
        
        
        console.log(a);
    
        aside[0].append(div);
        break;
    }
   
}



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





