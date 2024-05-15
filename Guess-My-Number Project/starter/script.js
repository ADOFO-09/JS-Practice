'use strict';

// console.log(displayMessage());

// document.querySelector('.message').textContent = '🎉 Correct Answer'

// document.querySelector('.score').textContent = '30'

// document.querySelector('.number').textContent = '23'

// document.querySelector('.guess').value = 13
// console.log(document.querySelector('.guess').value)

let secretNumber = Math.trunc(Math.random()* 20)+1;
let score = 20;
let highScore = 0;

const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function(){
   const guess = Number(document.querySelector('.guess').value);
   console.log(guess, typeof guess);
   if(!guess){
    displayMessage('🚫 No number!');
    //When guess is the same as secret number 
    }else if(guess === secretNumber){
    displayMessage('🎉 Correct Number');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if(score > highScore){
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
    }

    //When score is higher or lower 
   }else if(guess != secretNumber){
    if(score > 1){
        displayMessage(guess < secretNumber?'📉 Too low!':'📈 Too high!');
        score--;
        document.querySelector('.score').textContent = score;
    }else{
        displayMessage('💥 You lost the game!');
        document.querySelector('.score').textContent = 0;            
    }
} 


//Game Reset
document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    secretNumber = Math.trunc(Math.random()* 20)+1;
    
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    displayMessage('Start guessing....');
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';

    
    })
})

