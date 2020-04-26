//upon loading game user will see all instructions (part of HTML)
//instructions in div id of #start

//variables for DOM elements
var currentQuestionIndex = 0;
var startBtn = document.getElementById("start");
var questionsElement = document.getElementById("questions");
var optionsElement = document.getElementById("options");
var timerElement = document.getElementById("time");
var messageElement = document.getElementById("message");
var initialsElement = document.getElementById("initials");
var submitBtn = document.getElementById("submit")

//define time for quiz
var quizTime = questions.length * 15;
var timer;

//*****************START GAME***************************
// WHEN I click the start button
$("#start-button").on("click", startQuiz);

    // start game
function startQuiz(){
    // hide start page when start button pressed
    var startScreenEl = document.getElementById("start-page");
    startScreenEl.setAttribute("class", "hide");
    //generate a question
    questionsElement.removeAttribute("class");
   //start timer
    timer = setInterval(timeCount, 1000);
    //show timer on page
    timerElement.textContent = quizTime;

    generateQuestion();
}

//generate question with multiple choice answers
function generateQuestion() {
    //get current question from questions.js array
    var currentQuestion = questions[currentQuestionIndex];
    //will get first question

        //will change question title to current
    var titleElement = document.getElementById("question-title");
    titleElement.textContent = currentQuestion.title;
   
    //hide past questions
    optionsElement.innerHTML = "";

    currentQuestion.options.forEach(function(option, i){
        //new button created for each multiple choice option
        var optionButton = document.createElement("button");
        optionButton.setAttribute("class", "option");
        optionButton.setAttribute("value", option);

        optionButton.textContent = i + 1 + ". " + option;
        //event listener for question options
        optionButton.onclick = questionClicked;  //will be new function

        //displays on page
        optionsElement.appendChild(optionButton);
    });

}
//function to subtract time if answer is incorrect
function questionClicked(){
    if (this.value !== questions[currentQuestionIndex].answer){
        quizTime -= 15;

        if (quizTime < 0) {
            quizTime = 0;
        }
        //displays new time
        timerElement.textContent = quizTime;

        messageElement.textContent = "Incorrect";       
    } else {
        messageElement.textContent = "Correct";
    }


    messageElement.setAttribute("class", "message");
    setTimeout(function(){
    messageElement.setAttribute("class", "message hide");
    }, 1000);

    //display next question
    currentQuestionIndex++;

    //check if there are no more questions
    if (currentQuestionIndex === questions.length) {
        quizEnd();          //new function
    } else {
        generateQuestion();
    }
}

function timeCount (){
    // subtract time
    quizTime--;
    timerElement.textContent = quizTime;

    if (quizTime <= 0) {
        quizEnd();
    }
}

function quizEnd() {
    clearInterval(timer);  //clear timer when game ends
    //display end page
    var endPageElement = document.getElementById("end-page");
    endPageElement.removeAttribute("class");
    //show score
    var finalScoreElement = document.getElementById("final-score");
    finalScoreElement.textContent = quizTime;

        //hide questions
    questionsElement.setAttribute("class", "hide");
}

function saveScore() {
    var initials = initialsElement.value;

    //get saved scores from local storage, or set to empty array
    var highscores = JSON.parse(window.localStorage.getItem("highscores"));

        //object to save score of last played game
    var newScore = {
        score: quizTime,
        initials: initials
    };
            // save new score to local storage
    highscores.push(newScore);
    window.localStorage.setItem("highscores", JSON.stringify(highscores));
}

function checkForSubmit(event) {
    if (event.key === "enter") {
        saveScore();
    }
}

//button to click to save highscoore/enter initials
submitBtn.onclick = saveScore;

initialsElement.onkeyup = checkForSubmit;
