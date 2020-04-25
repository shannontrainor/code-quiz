//upon loading game user will see all instructions (part of HTML)
//instructions in div id of #start


var questionsElement = document.getElementById("question");
//define time for quiz
var quizTime = questions.length * 15;
var quizTimer;
var optionsElement = document.getElementById("options");

//*****************START GAME***************************
// WHEN I click the start button
$("#start-button").on("click", startQuiz);

    // start game
function startQuiz(){
    // hide start page when start button pressed
    $("#start-page").hide();

    //generate a question
    questionsElement.removeAttribute("class");
   //start timer
    quizTimer = setInterval(timeCount, 1000)
    //show timer on page
    quizTimer.textContent = time;
}

function timeCount (){
    // subtract time
    time--;
    quizTimer.textContent = time;
}
    // generate first question with choice buttons
function generateQuestion() {

}

    //store time in variable quizTime, default at 60 s.

// THEN a timer starts and I am presented with a question
    // start timer when start button is pressed

//*****************QUESTIONS******************************

// WHEN I answer a question
// THEN I am presented with another question
    // hide previous question
    // generate next question with choice buttons

// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
    //time --
    // generate next questions with choice buttons

// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
    // if statement timer = 0, all questions answered = end game
// WHEN the game is over
// THEN I can save my initials and score
    // enter intials (HTML)
    // calculate score
    // display score
    // 




//3 javascript files
//logic
//questions
//scores

//event listener start quiz

//function getQuestion()
