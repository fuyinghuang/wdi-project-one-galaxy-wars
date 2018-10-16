// DOM elements
const blue = document.getElementById('blue');
const grey = document.getElementById('grey');
const pink = document.getElementById('pink');
const purple = document.getElementById('purple');
const circle = document.getElementsByClassName('circle');
// const sounds = [
//   { name: 'Pling', file: new Audio('sounds/Pling.wav')}
// ];
const audio1 = new Audio('sounds/pling.wav');
const audio2 = new Audio('sounds/gunshoot.wav');

// global variables
let round = 1;
let circleIndex = 0;
let computerSequence = [];
console.log(computerSequence);
let playerSequence = [];

// start the game
function startButton() {
  console.log('startButton');
  randomCircle();
  computerGenerate();
  lightCircle();
  // computerSequence.forEach(color => lightCircle(color));
}

const clickedOn = function() {
  console.log('clicked');
  console.log(this.id+' '+circleIndex);
  playerSequence.push(this.id);
  console.log(playerSequence);
  compareCircle();
  audio2.play();
};

for (let i = 0; i < circle.length; i++) {
  circle[i].addEventListener('click', clickedOn);

  console.log('circle clicked');
  // audio2.play();
}
// soundSquares.forEach(function(square) {
//   square.addEventListener('click', function() {
//     square.audio.play();
// computer sequence


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
    const time = (index * 1000) + 1500;
    console.log(time);
    setTimeout(() => {
      if(color === 'blue') {
        blue.style.backgroundColor ='#8cbed647';
        console.log('blue', blue);
        setTimeout(() => {
          blue.style.backgroundColor ='#8CBED6';
          audio1.play();
        }, 500);
      }
      if(color === 'grey') {
        grey.style.backgroundColor ='#80808061';
        console.log('grey', grey);
        setTimeout(() => {
          grey.style.backgroundColor ='#808080';
          audio1.play();
        }, 500);

      }
      if(color === 'pink') {
        pink.style.backgroundColor ='#de707561';
        console.log('pink', pink);
        setTimeout(() => {
          pink.style.backgroundColor ='#de7075';
          audio1.play();
        }, 500);
      }
      if(color === 'purple') {
        purple.style.backgroundColor ='#cca2ce59';
        console.log('purple', purple);
        setTimeout(() => {
          purple.style.backgroundColor ='#cca2ce';
          audio1.play();
        }, 500);
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
  alert('CACA💩. Press start to play again!');
  computerSequence = [];
  console.log('computer',computerSequence);
  playerSequence = [];
  console.log('player',playerSequence);
  round = 0;
  console.log('game over',round);
}
