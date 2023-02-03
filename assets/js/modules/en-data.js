
/*resume.js*/
let userDataEn = ['Vorobiova Svitlana', 'layout designer sites', 'Truskavets | svetlaya87@gmail.com | 380678533259', ''];

let titlesEn = ['Experience', 'Education', 'Courses'];

let myExpEn = [
    ["Frigate", "Internet service provider", '2021-2019', 'Operator сontact сenter', 
        "Consultation of subscribers on the services of the company, diagnostics of Internet equipment and cable operation over the phone."],
    ["YogaDay", "Yoga marathons in Dnipro", "2018-2014", "Co-organizer of the marathon",      "Looking for the hall, loooking for and invitation of teachers, creating a marathon program, maintaining a social network page, creating video content, printed products and other organizational issues."],
    [ "Self-employment", "", "2020-2017", "The organizer of yoga and health workshops",
        "Solving organizational issues. They are almost the same as when organizing a marathon."
        
    ]
];

//"ORT DNIPRO", "Международный образовательный центр, который обучает IT-специальностям"
let addEducEn = [
    [ "JavaScript, Frontend programming", "2021 August - May", "JavaScript syntax, work with HTML DOM, events and other aspects of a web page. Learning AJAX technology and working with WEB API (REST API). Study and practical usage of the Vue.js 3 framework."],
    ["Basics of programming and web development: Frontend, JavaScript, HTML, CSS, Bootstrap, GitHub", "2021 April - 2020 December", "Page layout (HTML 5.2 & CSS 3). Mastering CSS Grid technology, adaptive layout, Bootstrap 5. Entering, validating and processing user data." ], 
    ["QA", "2021 January - 2020 November", "Introduction to testing and analysis of software requirements. Methods and types of testing. Test documentation. Automation of testing."]
]

let EducEn = [
    "Dnipro", "NMetAU", "2009 July - September 2004", "Specialist", "Accounting and audit"
];


/*main.js */
let worksEn = [
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

export {userDataEn, titlesEn, myExpEn, addEducEn, EducEn, worksEn};