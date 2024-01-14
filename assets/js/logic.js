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

//this part of the function deals with the happenings when the 
//user clicks on one of the answers for the question.
//The function further provides feedback to the user in the 
//form of right or wrong answers along with individual feedback sounds.

function questionClick() { 
  if (this.value !== questions[currentIndex].answer) { 
    time -= 10; 
    if (time < 0) { 
        time = 0; 
    } 
    timerEl.textContent = time; 
    var wrongSound = new Audio("./assets/sfx/incorrect.wav");
    feedbackEl.textContent = "Incorrect!"
    wrongSound.play();
  } else {
    correctAnswer++;
    var rightSound = new Audio("./assets/sfx/correct.wav");
    feedbackEl.textContent = "Correct!"
    rightSound.play();
  }
    feedbackEl.setAttribute("class", "feedback"); 
    setTimeout(function () { 
        feedbackEl.setAttribute("class","feedback hide");}, 2000); 
        currentIndex++; 
    if (currentIndex === questions.length) { 
        endQuiz(); 
    } else { 
        getQuestion(); 
    } 
  } 

  //the endQuiz function is triggered when either the user has answered all questions
  //or the time has run out

  function endQuiz() { 
    clearInterval(timer); 
    var endScreen = document.getElementById("end-screen"); 
        endScreen.removeAttribute("class"); 
      var finalScore = document.getElementById("final-score"); 
      finalScore.innerHTML = calculateScore(time); 
      questionsEl.setAttribute("class", "hide"); 
    } 
  
  //this function simply returns the number of answers the
  //user got right. However, the required functionality
  //for subtracting 10s from time for each wrong answers
  //has been maintained.

    function calculateScore() {
      return correctAnswer;
    }
  //This responsible for saving the high scores of users to the local storage of the browser
  //Also some added functionality for storing the initials of the user has been added
  function saveHighscores() { 
    var name = initialsEl.value.trim(); 
    var letters = /^[A-Za-z]{1,3}$/
    if (name !== "" && name.match(letters)) { 
    var highscores = JSON.parse(window.localStorage.getItem("highscores")) || []; 
      var newScore = { 
          score: calculateScore(),
          name: name, 
        }; 
    highscores.push(newScore); 
    window.localStorage.setItem("highscores", JSON.stringify(highscores)); 
    alert("Your Score has been Submitted"); 
    } else {
    alert("Please enter your initials only"); 
          }
    }
    
    //event listeners for the buttons provided by the HTML
    
    submitButton.addEventListener ("click", saveHighscores);
    startButton.addEventListener ("click", startQuiz);


