//declare global variables. Userscore, container, high-score
var questionBoxEl = document.getElementById("question-content-box");
var btnAEl = document.getElementById("btnA");
var btnBEl = document.getElementById("btnB");
var btnCEl = document.getElementById("btnC");
var scoreCountEl = document.getElementById("correct-score-count");
var incorrectScoreEl= document.getElementById("incorrect-score-count");
var timerEl = document.getElementById("timer-counter");
var submitBtn = document.getElementById("button-submit");
var startBtn = document.getElementById("button-start");



var secondsLeft = 3;

//What I want to see on the page when it first loads. 

//Use Toggle Logic to start quiz. 
// submitBtn.addEventListener("click", )


function startGame () {
    var timerInterval = setInterval(function() {
      document.getElementById("timer-counter").innerHTML="00:" + secondsLeft;
      secondsLeft--;
      // timerEl.textContent = secondsLeft.value;
  
      if(secondsLeft === 0) {
        clearInterval(timerInterval);
        
        alert("Times up! Let's see how you did");
      };
    }, 1000);
  }
//      
  
      //Need to push an object into each button div for each answer, and submit btn will procure right or wrong. Questions need to appear in textbox. .textContent... 
// function getQuestion() {
//     var questionGrab = questions[i];

//     for(let i=0; i<question.length; i++) {
//         questionBoxEl = questionGrab;
//         btnAEl.addEventListener("onclick", questions[0]);
//     }
// }


// Need a function to check if the User got right or wrong answer. 

// Function to end the game 

// timer to start. setInterval(someFunction, seconds*1000)

// Declare a function for question array to begin.  Declare [array of objects] - questions, options, and/or booleans



// for ( var i = 0; i < questions.length; i++ ) {
//     var question = questions[i].question;
//     document.write ( question );
//     var options = questions[i].choices;
//     for ( var opt in options ) {
//        for ( var radios in userChoices ) {
//          userChoices[radios].value = options[opt];
         
//        }
//     }
    
//   }


//Array Starts, for loop identify the var, i=x, x++ use ===. Some if else statements to determine if User is right. 














//Extra Help

// var score = 0;
// var quizContainer= document.querySelector('quiz');
// var resultsContainer = document.querySelector('submit');

// var questions = [
//     {
//         question
//         choices
//         answer 
//     }
// ]
// for (let index = 0; index < question.length; index++) {
//     const element = array[index];



  
