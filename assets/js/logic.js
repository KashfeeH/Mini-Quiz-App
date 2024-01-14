//Taking the DOM elements that are to be manipulated

var questionsEl = document.querySelector("#questions"); 
var timerEl = document.querySelector("#time"); 
var choicesEl = document.querySelector("#choices"); 
var submitButton = document.querySelector("#submit"); 
var startButton = document.querySelector("#start"); 
var initialsEl = document.querySelector("#initials"); 
var feedbackEl = document.querySelector("#feedback"); 

var currentIndex = 0; 
var time = questions.length *10; 
var timer; 
var correctAnswer = 0;

function startQuiz() { 
  timer = setInterval(startTime, 1000); 
  timerEl.textContent = time; 
  var landingScreen = document.getElementById("start-screen"); 
  landingScreen.setAttribute("class","hide"); 
  questionsEl.removeAttribute("class"); 
  getQuestion(); 
}

function startTime() { 
  time--; 
  timerEl.textContent = time; 
  if (time <= 0) { 
    endQuiz();
  } 
} 