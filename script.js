//declare global variables. Userscore, container, high-score
// var questionBoxEl = document.getElementById("question-content-box");
// var btnAEl = document.getElementById("btnA");
// var btnBEl = document.getElementById("btnB");
// var btnCEl = document.getElementById("btnC");
// var scoreCountEl = document.getElementById("correct-score-count");
// var incorrectScoreEl= document.getElementById("incorrect-score-count");
// var timerEl = document.getElementById("timer-counter");
// var submitBtn = document.getElementById("button-submit");
// var choiceAEl = document.getElementById("choiceA");
// var choiceBEl = document.getElementById("choiceB");
// var choiceCEl = document.getElementById("choiceC")
var startBtn = document.getElementById("button-start");
// What question we are On
var pos = 0;
var correct = 0;
var test, test_status, question, choice, choices, choiceA, choiceB, choiceC;

    // var choiceA = questions[i].choices[0];  
    // var choiceB = questions[i].choices[1];
    // var choiceC = questions[i].choices[2];



var secondsLeft = 80;

//What I want to see on the page when it first loads. 

//Use Toggle Logic to start quiz. 
// submitBtn.addEventListener("click", )


function startGame () {
    var timerInterval = setInterval(function() {
      document.getElementById("button-start").innerHTML="00:" + secondsLeft;
      secondsLeft--;
      
  
      if(secondsLeft === 0) {
        clearInterval(timerInterval);
        
        alert("Times up! Let's see how you did");
        startBtn.textContent = secondsLeft;
      };
    }, 1000);
  }

  //Setting up a function to grab the questions and display on HTML. 

  function get(x) {
    return document.getElementById(x);
  }

  function questionGrab() {
    test=document.getElementById("test");
    if (pos >= questions.length) {
      test.innerHTML = "You have " + correct + "out of " + questions.length + "questions correct."
      document.getElementById("test-status").innerHTML = "You finished! You must love Coach Q and Johnny as much as I do!"
    //reset questions to restart
    pos =0;
    correct = 0;
    
    //Learned this, return false will stop the function from running when the test is over. 
    return false;
    }
  }

  // Linking questions array to postion of my questions
  question =questions[pos].question;
  var choiceA = questions.choices;  
    var choiceB = questions.choices;
    var choiceC = questions.choices;


  // Displaying the question and answers, += will append so we start on an above line
  test.innerHTML = question;

  test.innerHTML += "<label> <input type='radio' value='A'> "+choiceA+" </label>";
  test.innerHTML += "<label> <input type='radio' value='B'> "+choiceB+" </label>";
  test.innerHTML += "<label> <input type='radio' value='C'> "+choiceC+" </label>";
  test.innerHTML += "<button onclick='checkAnswer()'> Submit </button>";

  //Creating the Checkanswer Function
  function checkAnswer() {
    choices = document.getElementsByName("choices");
    for (var i=0; i<questions.length; i++); {
      if (choices[i].checked) {
        choice = choices[i].value;
      }
    }
    //checking if answer matches correct choice and increments
    if (choice == questions[pos].answer) {
      correct++
    }
    pos++

    questionGrab();
  }












  //      
  
      //Need to push an object into each button div for each answer, and submit btn will procure right or wrong. Questions need to appear in textbox. .textContent... 
// function getQuestion() {
    // var questionGrab = questions[i];

    // for(let i=0; i<questions.length; i++) {
    //     // questionBoxEl = questionGrab;
    //     // btnAEl.addEventListener("onclick", questions[0]);
    //     var storeQuestion = questions[i].question;
    //     var choiceA = questions[i].choices[0];
    //     // var choiceA = "hello World"
    //     var choiceB = questions[i].choices[1];
    //     var choiceC = questions[i].choices[2];
    //     var correctChoice = questions[i].answer;
        
    //     if(correctChoice ){
          
    //     }
    //     drawContent(storeQuestion, choiceA, choiceB, choiceC);
        
    //   }
    // function drawContent(q, A, B, C) {
    //     questionBoxEl.textContent = q;
    //     choiceAEl.textContent = A;
    //     choiceBEl.textContent = B;
    //     choiceCEl.textContent = C;
    // }
// How do I pass the Correct Answer from the question object into this function? The second argument for checkAnswer
// Click the button so it gives the right answer. 
  //   function aClick (event) {
  //     // console.log(event.target.getAttribute("data-answer"));
  //     var aAnswer = event.target.getAttribute("data-answer");
  //     checkAnswer(aAnswer);
  //   }
  //   function bClick (event) {
  //     // console.log(event.target.getAttribute("data-answer"));
  //     var bAnswer = event.target.getAttribute("data-answer");
  //     checkAnswer(bAnswer);
  //   }
  //   function cClick (event) {
  //     // console.log(event.target.getAttribute("data-answer"));
  //     var cAnswer = event.target.getAttribute("data-answer");
  //     checkAnswer(cAnswer);
  //   }

  //   var userPick = "data-answer";

  //   function checkAnswer(guess, correct) {
  //     if (guess  === correct) {
  //     console.log("you got it Right!") 
  //   }
  //   else console.log("Sorry!");

  // }



  //   btnAEl.addEventListener("click", aClick);
  //   btnBEl.addEventListener("click", bClick);
  //   btnCEl.addEventListener("click", cClick);

  
    



// Need a function to check if the User got right or wrong answer. 

// Function to end the game 

// timer to start. setInterval(someFunction, seconds*1000)

// Declare a function for question array to begin.  Declare [array of objects] - questions, options, and/or booleans





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



  
