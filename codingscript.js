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
})



