// DOM elements
const blue = document.getElementById('blue');
const grey = document.getElementById('grey');
const pink = document.getElementById('pink');
const purple = document.getElementById('purple');
const circle = document.getElementsByClassName('circle');

let round = 1;
let circleIndex = 0;
let computerSequence = [];
console.log(computerSequence);
let playerSequence = [];
// const isTimerRunning = false;

// start the game
function startButton() {
  // if (isTimerRunning === false) {
  console.log('startButton');
  randomCircle();
  computerGenerate();
  lightCircle();
  // computerSequence.forEach(color => lightCircle(color));
  // }
}

const clickedOn = function() {
  console.log('clicked');
  console.log(this.id+' '+circleIndex);
  // alert(this.id);
  // alert(this.id+' '+circleIndex);
  playerSequence.push(this.id);
  console.log(playerSequence);
  compareCircle();
};

for (let i = 0; i < circle.length; i++) {
  circle[i].addEventListener('click', clickedOn);
  console.log('circle clicked');
}


// generate random number
function randomCircle() {
  console.log('randomCircle started');
  circleIndex = Math.floor(Math.random() * 4);
  console.log(circleIndex);
}


//
// function lightCircle(color) {
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
        }, 500);
      }
      if(color === 'grey') {
        grey.style.backgroundColor ='#80808061';
        console.log('grey', grey);
        setTimeout(() => {
          grey.style.backgroundColor ='#808080';
        }, 500);

      }
      if(color === 'pink') {
        pink.style.backgroundColor ='#de707561';
        console.log('pink', pink);
        setTimeout(() => {
          pink.style.backgroundColor ='#de7075';
        }, 500);
      }
      if(color === 'purple') {
        purple.style.backgroundColor ='#cca2ce59';
        console.log('purple', purple);
        setTimeout(() => {
          purple.style.backgroundColor ='#cca2ce';
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



// setInterval(function() {
// // const gameId = setInterval(function() {
//   startButton();
// }, 3000);

function compareCircle(){
  if (computerSequence.filter((color,index) => color === playerSequence[index]).length === computerSequence.length ){

    playerSequence = [];

    // add more colors to the computerSequence array

    console.log(computerSequence);
    round++;
    console.log('round: ' + round);
    randomCircle();
    computerGenerate();
    lightCircle();
  } else if (playerSequence.length === computerSequence.length){
    playerSequence = [];
    console.log('nope!!!');
    //incorrect answers
    restGame();
  }
}

function restGame(){
  // clearInterval();
  // clearInterval(gameId);
  alert('CACA💩. Press start to play again!');
  computerSequence = [];
  playerSequence = [];
  round = 0;

  // randomCircle();
  // computerGenerate();
  // lightCircle();

}



//
// setInterval(function() {
// // const gameId = setInterval(function() {
//   startButton();
// }, 3000);
// playerClick();
// //   // for (var j = 0; j === computerSequence.length; j++) {
// //
// //   // }
//  round ++;
//
