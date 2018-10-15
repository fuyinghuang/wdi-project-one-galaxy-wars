// DOM elements
const blue = document.getElementById('blue');
const grey = document.getElementById('grey');
const pink = document.getElementById('pink');
const purple = document.getElementById('purple');
const circle = document.getElementsByClassName('circle');

let round = 1;
let block = 0;
const computerSequence = [];
// let computerSequence = ['grey', 'grey'];
console.log(computerSequence);
let playerSequence = [];

// start the game
function startButton() {
  console.log('startButton');
  randomCircle();
  lightCircle();
  // computerSequence.forEach(color => lightCircle(color));
  // lightCircle('blue');
}

const clickedOn = function() {
  console.log('clicked');
  console.log(this.id+' '+block);
  // alert(this.id);
  // alert(this.id+' '+block);
  playerSequence.push(this.id);
  console.log(playerSequence);
  compareCircle();
};

for (let i = 0; i < circle.length; i++) {
  circle[i].addEventListener('click', clickedOn);
  console.log('circle clicked');
  circle[i].addEventListener('click', clickedOn);

}


// generate random number
function randomCircle(round) {
  console.log('randomCircle started');
  block = Math.floor(Math.random() * 4);
  console.log(block);
}


//computer sequence
// function lightCircle(color) {
function lightCircle() {
  console.log('lightCircle Started');
  // if (color === 'blue') {
  if (block === 0) {
    blue.style.backgroundColor ='#8cbed647';
    console.log('blue');
    setTimeout(function(){
      blue.style.backgroundColor ='#8CBED6';
    }, 1000);
    computerSequence.push('blue');
  }
  // if (color === 'grey') {
  if (block === 1) {
    grey.style.backgroundColor ='#80808061';
    console.log('grey');
    setTimeout(function(){
      grey.style.backgroundColor ='#808080';
    }, 1000);
    computerSequence.push('grey');
  }
  // if (color === 'pink') {
  if(block === 2) {
    pink.style.backgroundColor ='#de707561';
    console.log('pink');
    setTimeout(function(){
      pink.style.backgroundColor ='#de7075';
    }, 1000);
    computerSequence.push('pink');
  }
  // if (color === 'purple') {
  if (block === 3) {
    purple.style.backgroundColor ='#cca2ce59';
    console.log('purple');
    setTimeout(function(){
      purple.style.backgroundColor ='#cca2ce';
    }, 1000);
    computerSequence.push('purple');
  }
  //console.log(computerSequence);
  //console.log('lightblock ended');
  // compareCircle();
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
    lightCircle();
  } else if (playerSequence.length === computerSequence.length){
    playerSequence = [];
    console.log('nope!!!');
    //incorrect answers
    restGame();
  }
}

function restGame(){
  // clearInterval(gameId);
  alert('Finshed. Play Again?');
  startButton();
}

// for (let i = 0; i === round; i++) {
//   randomCircle();
//   lightCircle();
//   // startButton();
//
// }
// //   // playerClick();
// //   // for (var j = 0; j === computerSequence.length; j++) {
// //
// //   // }
// //
// round ++;
// // if the same, secound round
//
// setInterval(function() {
// // const gameId = setInterval(function() {
//   startButton();
// }, 3000);
