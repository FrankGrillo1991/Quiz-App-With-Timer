let questions = [
    {
        prompt: `Inside which HTML element do we put the JavaScript?`,
        options: [
            "<javascript>",
            "<js>",
            "<script>",
            "<scripting>",
        ],
        answer: "<script>"
    },

    {
        prompt: `How do you call a function named myFunction?` ,
        options: [
            "call myFunction()",
            "myFunction()",
            "call function myFunction",
            "Call.myFunction",
        ],
        answer: "myFunction()"
    },

    {
        prompt: `How does a for loop start?` ,
        options: [
            "for (i = 0; i <= 5; i++)",
            "for (i = 0; i <= 5)",
            "for i = 1 to 5",
            " for (i <= 5; i++)",
        ],
        answer: "for (i = 0; i <= 5; i++)"
    },

    {
        prompt: `In JavaScript, which of the following is the logical operator?` ,
        options: ["|", "&&", "%", "/"],
        answer: "&&"
    }, 

    {
        prompt: `A named element in a JavaScript program that is used to store and retrieve data is a _____.`,
        options: [
            "method",
            "assignment operator",
            "letiable",
            "string",
        ],
        answer: "letiable"
    }
];

// Get Dom Elements

let questionsEl = document.querySelector("#questions");
let timerEl = document.querySelector("#timer");
let choicesEl = document.querySelector("#options");
let submitBtn = document.querySelector("#submit-score");
let startBtn = document.querySelector("#start");
let nameEl = document.querySelector("#name");
let feedbackEl = document.querySelector("#feedback");
let reStartBtn = document.querySelector("#restart");

// Quiz's initial state
let currentQuestionIndex = 0;
let time = questions.length * 15;
let timerId;