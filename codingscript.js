//----Start button----//
// var startButton = document.getElementById("start")

// startButton.addEventListener("click", ()=>{
    
//     //----Quiz Timer----//
// var timeEl = document.querySelector(".time");
// var mainEl = document.getElementById("main");

// var secondsLeft = 20;

//     function setTime() {
//         var timerInterval = setInterval(function() {
//           secondsLeft--;
//           timeEl.textContent = secondsLeft + " Seconds left!";
      
//        if(secondsLeft === 0) {
//             clearInterval(timerInterval);
            
//           }   
      
//         }, 1000);
//       }
      
//       setTime();


// //----Questions with multiple choice----//
// var myQuestions = [
//     {
//       question: "Where is Forrest from?",
//       answers: {
//         a: "Georgia",
//         b: "Alabama",
//         c: "Tennessee"
//       },
//       correctAnswer: "b"
//     },
//     {
//       question: "What is the name of Forrest's one true love?",
//       answers: {
//         a: "Jenny",
//         b: "Penny",
//         c: "Minnie"
//       },
//       correctAnswer: "a"
//     },
//     {
//       question: "What does Forrest's mama always say?",
//       answers: {
//         a: "Life is like a dream",
//         b: "Life is funny",
//         c: "Life goes on",
//         d: "Life is like a box of chocolates"
//       },
//       correctAnswer: "d"
//     }
//   ];

// document.getElementById("myBtn").addEventListener("click", displayDate);

// function displayDate() {
//   document.getElementById("demo").innerHTML = Date();
// }

//   quizContainer.innerHTML = output.join('');



const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)

//Starts the quiz
function startQuiz() {
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

//Sets next question when 'Next' button is clicked
function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}


function selectAnswer(e) {

}

var questions = [
    {
        question: 'What is 2 + 2',
        answers: [
            {text: '4', correct: true},
            {text: '22', correct: false}
        ]
    }
]