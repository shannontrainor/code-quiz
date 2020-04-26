function displayHighscores() {
    var highscores = JSON.parse(window.localStorage.getItem("highscores"));

    highscores.sort(function (a, b) {
        return b.score - a.score;
    });

    highscores.forEach(function (score) {

        //li tag for each individual score
        var liTag = document.createElement("li");
        liTag.textContent = score.initals + " - " + score.score;

        var olElement = document.getElementById("highscores");
        olElement.appendChild(liTag);
    });
}