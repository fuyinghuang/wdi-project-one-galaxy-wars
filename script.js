// DOM elements
const blue = document.getElementById('blue');
const grey = document.getElementById('grey');
const pink = document.getElementById('pink');
const purple = document.getElementById('purple');
const circle = document.getElementsByClassName('circle');


const round = 1;
let block = 0;
const computerSequence = [];
const playerSequence = [];
//let soundBoard = [];

//start the game
function startButton() {
  //console.log('hello');
  randomCircle();
  lightCircle();
}

const clickedOn = function() {
  alert(this.id+' '+block);
  console.log('the blcok is', block);
};

for (var i = 0; i < circle.length; i++) {
  circle[i].addEventListener('click', clickedOn);
}


//generate random number
function randomCircle() {
  //console.log('randomCircle started')
  block = Math.floor(Math.random() * 4);
  //console.log(block);
}
//computer sequence
function lightCircle() {
  //console.log('lightCircle Started')
  if (block === 0) {
    blue.style.backgroundColor ='#8cbed647';
    //console.log('blue');
    setTimeout(function(){
      blue.style.backgroundColor ='#8CBED6';}, 1000);
    computerSequence.push('blue');
  }
  if (block === 1) {
    grey.style.backgroundColor ='#80808061';
    //console.log('grey');
    setTimeout(function(){
      grey.style.backgroundColor ='#808080';}, 1000);
    computerSequence.push('grey');
  }

  if (block === 2) {
    pink.style.backgroundColor ='#de707561';
    //console.log('pink');
    setTimeout(function(){
      pink.style.backgroundColor ='#de7075';}, 1000);
    computerSequence.push('pink');
    }
  if (block === 3) {
    purple.style.backgroundColor ='#cca2ce59';
    //console.log('purple');
    setTimeout(function(){
      purple.style.backgroundColor ='#cca2ce';}, 1000);
    computerSequence.push('purple');
  }
  //console.log(computerSequence);
  //console.log('lightblock ended');
}

// player sequence

function playerClick(circle) {
  circle[i].addEventListener('click', clickedOn);

}
// playerSequence.push('happy');
// console.log(playerSequence);

//compare computerSequenceand playSequence
//   for (var i = 0; i === round; i++) {
//     randomCircle();
//     lightCircle();
//     // startGame();
//
//   }
//   // playerClick();
//   // for (var j = 0; j === computerSequence.length; j++) {
//
//   // }
//
//   round ++;
// }


// const gameId = setInterval(function() {
//   startButton();
// }, 3000);

// function restGame() {
//   clearInterval(gameId);
//   alert('Finshed. Play Again?');
// }




//display winner
