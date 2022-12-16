let myExp = [
    ["Фрегат", "Интернет-провайдер", '2021-2019', 'оператор контакт-центра', 
        "Консультация абонентов по услугам компании, диагностика работы интернет-оборудования, кабеля в телефонном режиме"],
    ["ЙогаДень", "Йога марафоны в Днепре", "2018-2014", "Со-организатор марафона",      "Поиск зала, поиск и приглашение преподавателей, создание программы марафона,      ведение страницы социальной сети, создание видео-контента, создание печатной продукции и другие организационные вопросы"],
    [ "Самозанятость", "", "2020-2017", "организатор семинаров по йоге и здоровью",
        "Решение организационных вопросов. Они почти такие же, как и в организации марофона"
        
    ]
];

//"ORT DNIPRO", "Международный образовательный центр, который обучает IT-специальностям"
let addEduc = [
    [ "Программирование на JavaScript, Frontend", "2021 август - май", "Синтаксис языка JavaScript, работа с элементами дерева, документа, событиями и другими аспекатми веб-страницы. Изучение технологии AJAX и робота с  WEB API (REST API). Изучение и использование на практике фреймворка Vue.js 3 "],
    ["Основи программирования и веб-разработки: Frontend, JavaScript, HTML, CSS, Bootstrap, GitHub", "2021 апрель - 2020 декабрь", "Верстка страниц (HTML 5.2 & CSS 3). Освоение технологии CSS Grid, адаптивной верстки, Bootstrap 5. Ввод, валидация и обработка данных пользователя." ],
    ["QA", "2021 январь - 2020 ноябрь", "Введение в тестирование и анализ требований к ПО. Методы и виды тестирования. Тестовая документация. Автоматизация тестирования."]
]

let Educ = [
    "Днепр", "НМетАУ", "2009 июнь - 2004 сентябрь", "Специалист", "Учет и аудит"
];

let employmentHistory = document.getElementsByTagName('employment-history');
let xCourses =          document.getElementsByTagName('x-courses');
let xEduc =             document.getElementsByTagName('x-education');

let ulForExp = document.createElement('ul');
let ulForCourses = document.createElement('ul');
let ulForEduc = document.createElement('ul');

employmentHistory[0].append(ulForExp);
xCourses[0].append(ulForCourses);
xEduc[0].append(ulForEduc);


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
            li.innerHTML = `<h3>${x[i][y]}</h3><p>${x[i][y+1]}</p> <p>${x[i][y+2]}</p>`;
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
    


    
