// when btn pressed, computer generate randon button
//
//
// const blue = document.getElementById('blue');
// const grey = document.getElementById('grey');
// const pink = document.getElementById('pink');
// const purple = document.getElementById('purple');
// console.log('this is', 'purple');
// function squareClick() {
//   console.log('clicked!!');
// }
// blue.addEventListener('click', squareClick);
// grey.addEventListener('click', squareClick);
// pink.addEventListener('click', squareClick);
// purple.addEventListener('click', squareClick);
// // console.log(squares[0])
// // const chosedSquare = squares[Math.floor(Math.random() * 4)];
// // console.log(chosedSquare);
// // const squares = ['banana', 'apple', 'kiwi', 'mango'];
//
// const squares = ['blue', 'grey','pink', 'purple'];
// let square1 = '';
// let square2 = '';
// let square3 = '';
// let square4 = '';
//
// function generatesquares(){
//   let square1 = squares[Math.floor(Math.random() * squares.length)];
//   let square2 = squares[Math.floor(Math.random() * squares.length)];
//   let square3 = squares[Math.floor(Math.random() * squares.length)];
//   let square4 = squares[Math.floor(Math.random() * squares.length)];
//   // console.log(square1, square2, square3, square4);
// }
// console.log();
// function selectRandomColor (colors) {
//   const random = Math.floor(Math.random() * colors.length);
//   return colors[random];
// }



const blue = document.getElementById('blue');
const grey = document.getElementById('grey');
const pink = document.getElementById('pink');
const purple = document.getElementById('purple');


const round = 1;
let block = 0;
const sequence = [];
const input = [];


function startGame() {
}

function randomBlock() {
  // console.log('randomBlock started')
 block = Math.floor(Math.random() * 4);
  // console.log(block);
}

function lightBlock() {
  console.log('lightblock Started')
  if (block === 0) {
    // document.getElementById("A").style.backgroundColor ='lightGreen';
    blue.style.backgroundColor ='#8cbed647';
    console.log('blue');
    setTimeout(function(){
      blue.style.backgroundColor ='#8CBED6';}, 2000);
    sequence.push('blue');
  }
  if (block === 1) {
    // document.getElementById("A").style.backgroundColor ='lightGreen';
    grey.style.backgroundColor ='#80808061';
    console.log('grey');
    setTimeout(function(){
      grey.style.backgroundColor ='#808080';}, 2000);
    sequence.push('grey');
  }

  if (block === 2) {
    pink.style.backgroundColor ='#de707585';
    console.log('pink');
    setTimeout(function(){
      pink.style.backgroundColor ='#de7075';}, 2000);
      sequence.push('pink');
    }
  if (block === 3) {
    purple.style.backgroundColor ='#cca2ce4d';
    console.log('purple');
    setTimeout(function(){
      purple.style.backgroundColor ='#cca2ce';}, 2000);
    sequence.push('purple');
  }
  console.log(sequence);
  console.log("lightblock ended");
}

function level(round) {
  for (var i = 0; i === round; i++) {
    randomBlock();
    lightBlock();
  }
  copy();
  for (var j = 0; j === sequence.length; j++) {

  }

  round ++;
}

function copy(letter) {
  if (letter === 'blue') {
    copy.push('blue');
  }
  if (letter === 'grey') {
    copy.push('grey');
  }
  if (letter === 'pink') {
    copy.push('pink');
  }
  if (letter === 'purple') {
    copy.push('purple');
  }
}
const gameId = setInterval(function() {
  randomBlock();
  lightBlock();
}, 3000);

function restGame() {
  clearInterval(gameId);
  alert('Finshed. Play Again?');
}
