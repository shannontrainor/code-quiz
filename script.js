//upon loading game user will see all instructions (part of HTML)
//instructions in div id of #start

// main variables for quiz outline
var start = document.getElementById("start");
var questionsEl = document.getElementById("question");



// GIVEN I am taking a code quiz
//html for code quiz page

//*****************START GAME***************************
// WHEN I click the start button
// start button on main page with id of #start-button
$("#start-button").on("click", startGame)
    // hide main pg when start button pressed
    // start game
    // generate first question with choice buttons
// THEN a timer starts and I am presented with a question
    //create a timer
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
