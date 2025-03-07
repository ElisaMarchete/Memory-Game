// Get the highScoresList and namesList id from HTML to update the list
const highScoresList = document.getElementById("highScoresList");
const namesList = document.getElementById("namesList");

var highScoresUser = [];

function displayScores() {
  // Retrieve scores from local storage
  highScoresUser = JSON.parse(localStorage.getItem("highScores"));
  // Sort highscores to display from highest to lowest
  highScoresUser.sort((a, b) => {
    return b.score - a.score;
  });

  for (i = 0; i < highScoresUser.length; i++) {
    // if (highScoresUser[i].name == )
    // Create a list to display the scores
    var scoreUser = document.createElement("li");
    var nameUser = document.createElement("li");
    scoreUser.textContent = highScoresUser[i].score;
    nameUser.textContent = highScoresUser[i].name;
    highScoresList.appendChild(scoreUser);
    namesList.appendChild(nameUser);
  }
}

displayScores();
