let buttonColours = ["red", "blue", "green","yellow"];
let gamePattern = [];

var userClickedPattern = [];
var started = false;
var level = 0;




// userChosenColour to store the id of the button that got clicked.
var userChosenColour = "";
$(".btn").click(function(){
    userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);

    animatePress(userChosenColour);

    checkAnswer(userClickedPattern.length-1);
});

const checkAnswer = (currentLevel) => {
    if(userClickedPattern[currentLevel] === gamePattern[currentLevel]){
        console.log("success");
    if(userClickedPattern.length === gamePattern.length){ 
        setTimeout(function(){
            nextSequence()
        },1000)
    }
    else{
        console.log("wrong");
        playSound("wrong")

        $("body").addClass("game-over");

        setTimeout(function(){
            $("body").removeClass("game-over");
        },200);        
        $("#level-title").text("Game Over, Press Any Key to Restart")
        startOver();
        }
    }
}


$("body").keypress(function(event){
    if(!started){
        $("level-title").text("Level " + level)
        nextSequence();
        started = true;
    }
})

const nextSequence = function (){
    userClickedPattern = [];
    level++;
    $("#level-title").text("Level "+ level);
    let randomNumber = Math.floor((Math.random()*4));
    let randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    //jQuery to select the button with the same id as the randomChosenColour
    $("#"+ randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100)

    //Javascript to play sound 
    var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
    audio.play();

    playSound(randomChosenColour);
}

function animatePress(currentColour){
    $("#" + currentColour).addClass("pressed")
    setTimeout(function(){
        $("#" + currentColour).removeClass("pressed");
    },100)
}

const playSound = function(name){
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

$(".btn").click(function(){
    userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);

    playSound(userChosenColour);
});

function startOver(){
    level = 0;
    gamePattern = [];
    started = false;
}










