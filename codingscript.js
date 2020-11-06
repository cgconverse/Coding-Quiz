//----Start button----//
var startButton = document.getElementById("start")

startButton.addEventListener("click", ()=>{
    
    //----Quiz Timer----//
var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("main");

var secondsLeft = 20;

    function setTime() {
        var timerInterval = setInterval(function() {
          secondsLeft--;
          timeEl.textContent = secondsLeft + " Seconds left!";
      
       if(secondsLeft === 0) {
            clearInterval(timerInterval);
            
          }   
      
        }, 1000);
      }
      
      setTime();


//----Questions with multiple choice----//
var myQuestions = [
    {
      question: "Where is Forrest from?",
      answers: {
        a: "Georgia",
        b: "Alabama",
        c: "Tennessee"
      },
      correctAnswer: "b"
    },
    {
      question: "What is the name of Forrest's one true love?",
      answers: {
        a: "Jenny",
        b: "Penny",
        c: "Minnie"
      },
      correctAnswer: "a"
    },
    {
      question: "What does Forrest's mama always say?",
      answers: {
        a: "Life is like a dream",
        b: "Life is funny",
        c: "Life goes on",
        d: "Life is like a box of chocolates"
      },
      correctAnswer: "d"
    }
  ];

document.getElementById("myBtn").addEventListener("click", displayDate);

function displayDate() {
  document.getElementById("demo").innerHTML = Date();
}






  quizContainer.innerHTML = output.join('');
