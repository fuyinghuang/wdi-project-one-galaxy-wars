// DOM elements
// intro page jump to main game
// const button = document.querySelector('.enter');
const enter = document.querySelector('.enter');
const intro = document.querySelector('.intro');
// console.log('this is',button);
enter.addEventListener('click', function() {
  intro.style.zIndex = -5;
  // console.log('this is');
});

const blue = document.getElementById('blue');
const green = document.getElementById('green');
const yellow = document.getElementById('yellow');
const red = document.getElementById('red');
const circle = document.getElementsByClassName('circle');
const audio1 = new Audio('sounds/pling.wav');
const audio2 = new Audio('sounds/gunshoot.wav');

// global variables
let round = 1;
let circleIndex = 0;
let computerSequence = [];
console.log(computerSequence);
let playerSequence = [];


// function
// start the game
function startButton() {
  console.log('startButton');
  randomCircle();
  computerGenerate();
  lightCircle();
}

const clickedOn = function() {
  audio2.pause();
  audio2.currentTime = 0;
  audio2.play();
  console.log('clicked');
  console.log(this.id+' '+circleIndex);
  playerSequence.push(this.id);
  console.log(playerSequence);
  compareCircle();
};

for (let i = 0; i < circle.length; i++) {
  circle[i].addEventListener('click', clickedOn);

  console.log('circle clicked');
}


// computer generate random number
function randomCircle() {
  console.log('randomCircle started');
  circleIndex = Math.floor(Math.random() * 4);
  console.log(circleIndex);
}

// circle light on
function lightCircle() {
  console.log('lightCircle Started');
  computerSequence.forEach((color, index) => {
    const time = (index * 1000) + 1200;
    console.log(time);
    setTimeout(() => {
      if(color === 'blue') {
        blue.style.opacity = '0.4';
        console.log('blue', blue);
        setTimeout(() => {
          blue.style.opacity = '1';
          audio1.play();
        }, 300);
      }
      if(color === 'green') {
        green.style.opacity = '0.4';
        console.log('green', green);
        setTimeout(() => {
          green.style.opacity = '1';
          audio1.play();
        }, 300);

      }
      if(color === 'yellow') {
        yellow.style.opacity = '0.4';
        console.log('yellow', yellow);
        setTimeout(() => {
          yellow.style.opacity = '1';
          audio1.play();
        }, 300);
      }
      if(color === 'red') {
        red.style.opacity = '0.4';
        console.log('red', red);
        setTimeout(() => {
          red.style.opacity = '1';
          audio1.play();
        }, 300);
      }
    }, time);
  });
}

// computer sequence
function computerGenerate(){
  if (circleIndex === 0){
    computerSequence.push('blue');
  }
  if (circleIndex === 1){
    computerSequence.push('green');
  }
  if (circleIndex === 2){
    computerSequence.push('yellow');
  }
  if (circleIndex === 3){
    computerSequence.push('red');
  }
  console.log(computerSequence);
}

// compare computer and player sequence
function compareCircle(){
  if (computerSequence.filter((color,index) => color === playerSequence[index]).length === computerSequence.length ){
    playerSequence = [];
    console.log(computerSequence);
    round++;
    console.log('round: ' + round);
    randomCircle();
    computerGenerate();
    lightCircle();
  } else if (playerSequence.length === computerSequence.length){
    playerSequence = [];
    console.log('nope!!!');
    restGame();
  }
}

// reset game
function restGame(){
  alert('🤯 Press start to play again!');
  computerSequence = [];
  console.log('computer',computerSequence);
  playerSequence = [];
  console.log('player',playerSequence);
  round = 0;
  console.log('game over',round);
}
