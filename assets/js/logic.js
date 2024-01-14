//Taking the DOM elements that are to be manipulated

var questionsEl = document.querySelector("#questions"); 
var timerEl = document.querySelector("#time"); 
var choicesEl = document.querySelector("#choices"); 
var submitButton = document.querySelector("#submit"); 
var startButton = document.querySelector("#start"); 
var initialsEl = document.querySelector("#initials"); 
var feedbackEl = document.querySelector("#feedback"); 

//initializing the needed variables
var currentIndex = 0; 
var time = questions.length *15; 
var timer; 
var correctAnswer = 0;

//This startQuiz() consists of 4 functions
//each performing a specific task

function startQuiz() {
  startCountdown();
  hideStartScreen();
  showQuestionsSection();
  fetchNextQuestion();
}

function startCountdown() {
  timer = setInterval(startTime, 1000);
  timerEl.textContent = time;
}

function hideStartScreen() {
  var landingScreen = document.getElementById("start-screen");
  landingScreen.setAttribute("class","hide");
}

function showQuestionsSection() {
  questionsEl.removeAttribute("class");
}

function fetchNextQuestion() {
  getQuestion();
}
//This is the countdown timer
//when the timer reaches zero, the quiz ends

function startTime() { 
  time--; 
  timerEl.textContent = time; 
  if (time <= 0) { 
    endQuiz();
  } 
}

function getQuestion() {
  let currentQuestion = questions[currentIndex];
  updateQuestionTitle(currentQuestion.prompt);
  clearChoices();
  generateOptions(currentQuestion.options);
}

//updates the questions shown on the page

function updateQuestionTitle(prompt) {
  let promptEl = document.getElementById("question-title");
  promptEl.textContent = prompt;
}

//clears any previously displayed choices
function clearChoices() {
  choicesEl.innerHTML = "";
}

//generates the buttons for each options of the current question
function generateOptions(options) {
  options.forEach((option, index) => {
    let choiceButton = createChoiceButton(index, option);
    choicesEl.appendChild(choiceButton);
  });
}
//creates a single button for a given option
function createChoiceButton(index, option) {
  let choiceButton = document.createElement("button");
  choiceButton.setAttribute("value", option);
  choiceButton.textContent = index + 1 + ". " + option;
  choiceButton.onclick = questionClick;
  return choiceButton;
}


