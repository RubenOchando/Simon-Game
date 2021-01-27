
var userClickedPattern = [];
var gamePattern = [];
var buttonColours = ["red", "blue", "yellow", "green"];
var alevel = 0;
var currentLevel=0;

// Check Player Response 
function checkAnswer(icurrentLevel) {
    for (var i = 0; i < userClickedPattern.length; i++) {
        console.log("checkanswer userClickedPattern " + userClickedPattern[i]);
        console.log("checkanswer gamePattern " + gamePattern[i]);
        if (userClickedPattern[i] === gamePattern[i]) {
           
            console.log("sequence side A " + userClickedPattern.length +" sequence side B " + gamePattern.length);
            if (userClickedPattern.length === gamePattern.length) {

                var delayInMilliseconds = 2000; //1 second
                setTimeout(function () {
                  //  console.log("level inside checkanswer" + level);
                    console.log("Level pass sucessfully " + icurrentLevel);
                    userClickedPattern = [];
                    gamePattern =[];
                    icurrentLevel=icurrentLevel;
                    nextSequence(icurrentLevel);
                   
                }, delayInMilliseconds);
                
            }
        }
        else {
            console.log("wrong");
            var wrong = new Audio("sounds/wrong.mp3");
            wrong.play();
            userClickedPattern = [];

            
                $("body").addClass("game-over")
                var delayInMilliseconds = 500; //1 second
                setTimeout(function () {
                    $("body").removeClass("game-over");
                }, delayInMilliseconds);
            $("h1").text("Game Over, Press Any Key to Restart")
            break;
        }
    }

};
function playSound(soundname) {
    var audio = new Audio("sounds/" + soundname + ".mp3");
    audio.play();
};

function nextSequence(level) {
    var stopcounter = level ;   
    console.log("stop counter " + stopcounter);
    $("h1").text("Level " + level);
    var delayInMilliseconds = 3000; //1 second

    for (var k = 0; k <= stopcounter; k++) {

        var randomNumber = Math.floor(Math.random() * 4);
        var randomChosenColour = buttonColours[randomNumber];
        playSound(randomChosenColour);
        gamePattern.push(randomChosenColour);
        console.log(gamePattern);
        $("#" + randomChosenColour).fadeOut(150).fadeIn(150);
        setTimeout( console.log("Timeout"), delayInMilliseconds);
        //return randomNumber;
    }
    
}

function animatePress(currentColour) {
    $("#" + currentColour).addClass("pressed")
    var delayInMilliseconds = 1000; //1 second
    setTimeout(function () {
        $("#" + currentColour).removeClass("pressed");
    }, delayInMilliseconds);
}

function startOver(){
    gamePattern =[];
    level = 0;
}

// Start Game in this section

$("body").keypress(function (event) {
    console.log(event.key);
    var level = alevel;
    if (event.key === "a") {
        console.log("Start Game");
        $("h1").text("Level " + level);
        nextSequence(level);
    }
    else {
        console.log("Restart Game");
        $("h1").text("Press A Key to Start");
    }
});

// Player Response 

$('[type="button"]').click(function (e) {
    var userChosenColour = e.target.id;
    userClickedPattern.push(userChosenColour);
    console.log("userClickedPattern : " + userClickedPattern);
    console.log("gamePattern : " + gamePattern);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    console.log("index  : " + (userClickedPattern.length -1 ) );
    checkAnswer(userClickedPattern.length);
    
});


