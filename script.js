//upon loading game user will see all instructions (part of HTML)
//instructions in div id of #start

//variables for DOM elements
var currentQuestionIndex = 0;
var questionsElement = document.getElementById("questions");
var optionsElement = document.getElementById("options");
var timerElement = document.getElementById("time");
var messageElement = document.getElementById("message")

//define time for quiz
var quizTime = questions.length * 15;
var quizTimer;

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
   
    //remove past questions
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
        optionsElement.appendChild(optionsButton);
    });

}
//function to subtract time if answer is incorrect
function questionClicked(){
    if (this.value !== questions[currentQuestionIndex].answer){
        quizTime -= 15;

        if (time < 0) {
            time = 0;
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




}

function timeCount (){
    // subtract time
    quizTime--;
    timerElement.textContent = time;
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
