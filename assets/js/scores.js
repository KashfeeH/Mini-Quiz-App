var clearButton = document.querySelector("#clear"); 

//This function is executed to sort and create an ordered list of
//initials and scores each time the quiz is played

function printHighscores() { 
	var highscores = 
		JSON.parse(window.localStorage.getItem("highscores")) || []; 
	  highscores.sort(function (a, b) { 
		return b.score - a.score; 
	}); 
	highscores.forEach(function (score) { 
		var liTag = document.createElement("li"); 
		liTag.textContent = score.name + " - " + score.score; 
		var olEl = document.getElementById("highscores"); 
		olEl.appendChild(liTag); 
	}); 
} 

// Clear previous scores when users clicks clearButton 
function clearHighscores() { 
	window.localStorage.removeItem("highscores"); 
	window.location.reload(); 
} 

clearButton.addEventListener ("click", clearHighscores);
printHighscores();