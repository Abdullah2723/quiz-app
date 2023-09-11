const arr = [
    {
        question: "What does HTML stand for?",
        options: ["Hyper Text Markup Language", "Hyperlink and Text Markup Language", "Highly Texted Markup Language", "Hyper Transfer Markup Language"],
        answer: "Hyper Text Markup Language"
    },
    {
        question: "Which HTML tag is used to create an ordered list?",
        options: ["ul", "li", "ol", "dl"],
        answer: "ol"
    },
    {
        question: "What does CSS stand for?",
        options: ["Computer Style Sheet", "Creative Style Sheet", "Cascading Style Sheet", "Colorful Style Sheet"],
        answer: "Cascading Style Sheet"
    },
    {
        question: "Which CSS property is used to change the text color of an element?",
        options: ["text-color", "color", "font-color", "text-style"],
        answer: "color"
    },
    {
        question: "What is JavaScript primarily used for in web development?",
        options: ["Styling web pages", "Creating web page layouts", "Enhancing the user interface", "Server-side scripting"],
        answer: "Enhancing the user interface"
    },
    {
        question: "Which keyword is used to declare variables in JavaScript?",
        options: ["var", "variable", "declare", "let"],
        answer: "var"
    },
    {
        question: "What is the purpose of the 'href' attribute in an HTML 'a' tag?",
        options: ["Defines the link's content", "Sets the link's text color", "Specifies the link's destination", "Adds a border around the link"],
        answer: "Specifies the link's destination"
    },
    {
        question: "Which HTML tag is used for creating a table?",
        options: ["table", "tr", "td", "th"],
        answer: "table"
    },
    {
        question: "Which CSS property is used to control the spacing between elements?",
        options: ["margin", "padding", "border", "spacing"],
        answer: "margin"
    },
    {
        question: "What is the purpose of the 'querySelector' method in JavaScript?",
        options: ["To select the first matching element in the DOM", "To create a new element", "To add event listeners to elements", "To change the page's URL"],
        answer: "To select the first matching element in the DOM"
    },
    {
        question: "Which HTML tag is used for creating a hyperlink?",
        options: ["link", "url", "a", "hyperlink"],
        answer: "<a>"
    }
];

let startBtn = document.querySelector('.startBtn')
let start = document.querySelector('#start')
let qes = document.getElementById('q')
let ansBtn = document.querySelector('.ansBtn')
let nextBtn = document.querySelector('.next-question')
let optDiv = document.querySelector('#opt')


//quiz start event
startBtn.addEventListener('click', () => {
    start.style.display = "block"
    startBtn.style.display = "none"
    body.classList.add('new')
    display()
})


//display the answers and question
let next = 0
let display = () => {
    if (next < 11) {
        qes.innerText = `${next + 1}. ${arr[next].question}`;
        optDiv.innerHTML="";
        
        arr[next].options.map((opt,ind) => {
            const buttons = document.createElement('button');
            buttons.classList.add('ansBtn')
            buttons.innerText= opt
            buttons.addEventListener('click', ()=>{
                submit(ind)
            })
            optDiv.appendChild(buttons);
        })
    }
    else {
        start.innerHTML = "";
        start.innerHTML = `
        <h1 style="color:rgb(75, 233, 89); class="lastheading">Quiz completed! Your score: ${score} out of ${arr.length}</h1>
        <h1 style="color:red;" class="lastheading">Total wrong answers is: ${nill}`
    }
}


//next question button
let nextQ=()=>{
    next++;
    nextBtn.style.display="none";
    display()
}


//submit fnction call in display function to check answer correct or not
let Answers;
let selectAnswers;
let score = 0;
let nill = 0;
let submit = (selectInd) => {
    Answers = arr[next].options.findIndex((option) => option === arr[next].answer);
    const buttons = optDiv.querySelectorAll('button');

    buttons.forEach((ele, i) => {
        if (i === Answers) {
            ele.classList.add('correct');
        }
         else if (i === selectInd) {
            ele.classList.add('incorrect');
        }
        ele.style.pointerEvents="none" 
    });

    if (selectInd === Answers) {
        score++;
    } else {
        nill++;
    }
    nextBtn.style.display = "block";
}


setInterval(()=>{
    // document.querySelector('.mainLoad').style.opacity="0"
    document.querySelector('.mainLoad').style.display="none"
},2000)