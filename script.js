// DOM elements
// intro page jump to main game
const button = document.querySelector('.enter');
const intro = document.querySelector('.intro');
// console.log('this is',button);
button.addEventListener('click', function() {
  intro.style.zIndex = -5;
  console.log('this is');
  // button = event.target.getAttribute('src');
});

const blue = document.getElementById('blue');
const grey = document.getElementById('grey');
const pink = document.getElementById('pink');
const purple = document.getElementById('purple');
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
  // computerSequence.forEach(color => lightCircle(color));
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
        // blue.style.backgroundColor ='#8cbed647';
        blue.style.opacity = '0.5';
        console.log('blue', blue);
        setTimeout(() => {
          // blue.style.backgroundColor ='#8CBED6';
          blue.style.opacity = '1';
          audio1.play();
        }, 300);
      }
      if(color === 'grey') {
        // grey.style.backgroundColor ='#80808061';
        grey.style.opacity = '0.5';
        console.log('grey', grey);
        setTimeout(() => {
          // grey.style.backgroundColor ='#808080';
          grey.style.opacity = '1';
          audio1.play();
        }, 300);

      }
      if(color === 'pink') {
        // pink.style.backgroundColor ='#de707561';
        pink.style.opacity = '0.5';
        console.log('pink', pink);
        setTimeout(() => {
          // pink.style.backgroundColor ='#de7075';
          pink.style.opacity = '1';
          audio1.play();
        }, 300);
      }
      if(color === 'purple') {
        // purple.style.backgroundColor ='#cca2ce59';
        purple.style.opacity = '0.5';
        console.log('purple', purple);
        setTimeout(() => {
          // purple.style.backgroundColor ='#cca2ce';
          purple.style.opacity = '1';
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
    computerSequence.push('grey');
  }
  if (circleIndex === 2){
    computerSequence.push('pink');
  }
  if (circleIndex === 3){
    computerSequence.push('purple');
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
