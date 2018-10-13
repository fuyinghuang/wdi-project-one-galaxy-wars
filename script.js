const blue = document.getElementById('blue');
const grey = document.getElementById('grey');
const pink = document.getElementById('pink');
const purple = document.getElementById('purple');
const circle = document.getElementsByClassName('circle');
// blue.addEventListener('click', function());
// grey.addEventListener('click', function());
// pink.addEventListener('click', funciton());
// purple.addEventListener('click', function());

const round = 1;
let block = 0;
const computerSequence = [];
const playSequence = [];
//let soundBoard = [];


//start the game
function startGame() {
  console.log('hello');
  randomCircle();
  lightCircle();
}


//circle listener
function circleClicked() {
  circle.addEventListener('click',startGame);
  alert('clicked');

}



//generate random number
function randomCircle() {
  console.log('randomCircle started')
  block = Math.floor(Math.random() * 4);
  console.log(block);
}

//computer sequence
function lightCircle() {
  console.log('lightCircle Started')
  if (block === 0) {
    blue.style.backgroundColor ='#8cbed647';
    console.log('blue');
    setTimeout(function(){
      blue.style.backgroundColor ='#8CBED6';}, 1000);
    computerSequence.push('blue');
  }
  if (block === 1) {
    grey.style.backgroundColor ='#80808061';
    console.log('grey');
    setTimeout(function(){
      grey.style.backgroundColor ='#808080';}, 1000);
    computerSequence.push('grey');
  }

  if (block === 2) {
    pink.style.backgroundColor ='#de707561';
    console.log('pink');
    setTimeout(function(){
      pink.style.backgroundColor ='#de7075';}, 1000);
    computerSequence.push('pink');
    }
  if (block === 3) {
    purple.style.backgroundColor ='#cca2ce59';
    console.log('purple');
    setTimeout(function(){
      purple.style.backgroundColor ='#cca2ce';}, 1000);
    computerSequence.push('purple');
  }
  console.log(computerSequence);
  console.log('lightblock ended');
}



// player sequence


//compare computerSequenceand playSequence






function level(round) {
  for (var i = 0; i === round; i++) {
    randomCircle();
    lightCircle();
    // startGame();

  }
  // copy();
  // for (var j = 0; j === computerSequence.length; j++) {

  // }

  round ++;
}

// function copy(letter) {
//   if (letter === 'blue') {
//     copy.push('blue');
//   }
//   if (letter === 'grey') {
//     copy.push('grey');
//   }
//   if (letter === 'pink') {
//     copy.push('pink');
//   }
//   if (letter === 'purple') {
//     copy.push('purple');
//   }
// }
//

const gameId = setInterval(function() {
  startGame();
}, 3000);

// function restGame() {
//   clearInterval(gameId);
//   alert('Finshed. Play Again?');
// }




//display winner
