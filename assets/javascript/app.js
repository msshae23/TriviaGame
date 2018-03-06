$(document).ready(function() {
    console.log( "ready!" );
});


var showGame = document.getElementById("showGame");
var play = document.getElementById("gameStart");

play.onclick = function(){
  if(showGame.className == "open"){
    //don't show game
    showGame.className = "";
  }else{
    showGame.className = "open";
    $("#View1").hide();
  }
};


//game theme music
var audio = new Audio("assets/sounds/theme.mp3");
audio.play();

//after 2 minutes the game will be over//
setTimeout (function () {
        gameOver ();
      }, 120000);

function gameOver() {
         $("#time-left").html("<h2>Game Over</h2>")
      };


    var mins = 2;  //Set the number of minutes you need
    var secs = mins * 60;
    var currentSeconds = 0;
    var currentMinutes = 0;
    /* 
     * The following line has been commented out due to a suggestion left in the comments. The line below it has not been tested. 
     * setTimeout('Decrement()',1000);
     */
    setTimeout(Decrement,1000); 

    function Decrement() {
        currentMinutes = Math.floor(secs / 60);
        currentSeconds = secs % 60;
        if(currentSeconds <= 9) currentSeconds = "0" + currentSeconds;
        secs--;
        document.getElementById("countdown").innerHTML = currentMinutes + ":" + currentSeconds; //Set the element id you need the time put into.
        if(secs !== -1) setTimeout('Decrement()',1000);
    }

    function handleClick() {         
		var amountCorrect = 0;          
		for(var i = 1; i <= 8; i++) {
  		var radios = document.getElementsByName('group'+i);
  			for(var j = 0; j < radios.length; j++) {
    		var radio = radios[j];
    	if(radio.value == "correct" && radio.checked) {
      	amountCorrect++;
      }
    };
                
    $("#score").click(function() {
      $(".lead").html("You answered " + amountCorrect + " questions correctly!");
      $("#showGame").hide();
    })
  }};

