//toggle player
var x = true;

var player = document.querySelector('#player');


// box event listeners
var boxes = document.querySelectorAll('td');

Array.from(boxes).forEach(box => {
  box.addEventListener('click', e => {
    console.log(e.target)
    if (!e.target.innerHTML) {
      if (x === true ) {
        e.target.innerHTML = "X";
        player.innerHTML = "Player 2's turn!";
        x = false;
        //console.log("X action", x);
      } else {
        e.target.innerHTML = "O";
        player.innerHTML = "Player 1's turn";
        x = true;
        //console.log("O action", x);
      }
    }

  })
})


// clear the board
const newGame = document.querySelector('#newGame');

newGame.addEventListener('click', e => {
  Array.from(boxes).forEach(box => {
    box.innerHTML = '';
    box.style.backgroundColor = 'grey';
  });
  player.innerHTML = "Player 1's turn!"
  x = true;
})

// box id selector
let box1 = document.querySelector('#one');
let box2 = document.querySelector('#two');
let box3 = document.querySelector('#three');
let box4 = document.querySelector('#four');
let box5 = document.querySelector('#five');
let box6 = document.querySelector('#six');
let box7 = document.querySelector('#seven');
let box8 = document.querySelector('#eight');
let box9 = document.querySelector('#nine');


// win conditions
var board = document.querySelector("#board")
board.addEventListener('click', () => {
  console.log('change')

// horozontal X win
  if (box1.innerHTML === "X" &&
      box2.innerHTML === "X" &&
      box3.innerHTML === "X") {
        box1.style.backgroundColor = "green";
        box2.style.backgroundColor = "green";
        box3.style.backgroundColor = "green";
        player.innerHTML = "PLAYER 1 WINS!";
      }
  if (box4.innerHTML === "X" &&
      box5.innerHTML === "X" &&
      box6.innerHTML === "X") {
        box4.style.backgroundColor = "green";
        box5.style.backgroundColor = "green";
        box6.style.backgroundColor = "green";
        player.innerHTML = "PLAYER 1 WINS!";
      }
  if (box7.innerHTML === "X" &&
      box8.innerHTML === "X" &&
      box9.innerHTML === "X") {
        box7.style.backgroundColor = "green";
        box8.style.backgroundColor = "green";
        box9.style.backgroundColor = "green";
        player.innerHTML = "PLAYER 1 WINS!";
      }
// horozontal O win
  if (box1.innerHTML === "O" &&
      box2.innerHTML === "O" &&
      box3.innerHTML === "O") {
        box1.style.backgroundColor = "green";
        box2.style.backgroundColor = "green";
        box3.style.backgroundColor = "green";
        player.innerHTML = "PLAYER 2 WINS!";
      }
  if (box4.innerHTML === "O" &&
      box5.innerHTML === "O" &&
      box6.innerHTML === "O") {
        box4.style.backgroundColor = "green";
        box5.style.backgroundColor = "green";
        box6.style.backgroundColor = "green";
        player.innerHTML = "PLAYER 2 WINS!";
      }
  if (box7.innerHTML === "O" &&
      box8.innerHTML === "O" &&
      box9.innerHTML === "O") {
        box7.style.backgroundColor = "green";
        box8.style.backgroundColor = "green";
        box9.style.backgroundColor = "green";
        player.innerHTML = "PLAYER 2 WINS!";
      }
// vertical X win
  if (box1.innerHTML === "X" &&
      box4.innerHTML === "X" &&
      box7.innerHTML === "X") {
        box1.style.backgroundColor = "green";
        box4.style.backgroundColor = "green";
        box7.style.backgroundColor = "green";
        player.innerHTML = "PLAYER 1 WINS!";
      }
  if (box2.innerHTML === "X" &&
      box5.innerHTML === "X" &&
      box8.innerHTML === "X") {
        box2.style.backgroundColor = "green";
        box5.style.backgroundColor = "green";
        box8.style.backgroundColor = "green";
        player.innerHTML = "PLAYER 1 WINS!";
      }
  if (box3.innerHTML === "X" &&
      box6.innerHTML === "X" &&
      box9.innerHTML === "X") {
        box3.style.backgroundColor = "green";
        box6.style.backgroundColor = "green";
        box9.style.backgroundColor = "green";
        player.innerHTML = "PLAYER 1 WINS!";
      }
// vertical O win
  if (box1.innerHTML === "O" &&
      box4.innerHTML === "O" &&
      box7.innerHTML === "O") {
        box1.style.backgroundColor = "green";
        box4.style.backgroundColor = "green";
        box7.style.backgroundColor = "green";
        player.innerHTML = "PLAYER 2 WINS!";
      }
  if (box2.innerHTML === "O" &&
      box5.innerHTML === "O" &&
      box8.innerHTML === "O") {
        box2.style.backgroundColor = "green";
        box5.style.backgroundColor = "green";
        box8.style.backgroundColor = "green";
        player.innerHTML = "PLAYER 2 WINS!";
      }
  if (box3.innerHTML === "O" &&
      box6.innerHTML === "O" &&
      box9.innerHTML === "O") {
        box3.style.backgroundColor = "green";
        box6.style.backgroundColor = "green";
        box9.style.backgroundColor = "green";
        player.innerHTML = "PLAYER 2 WINS!";
      }
// diagonal X win
  if (box1.innerHTML === "X" &&
      box5.innerHTML === "X" &&
      box9.innerHTML === "X") {
        box1.style.backgroundColor = "green";
        box5.style.backgroundColor = "green";
        box9.style.backgroundColor = "green";
        player.innerHTML = "PLAYER 1 WINS!";
      }
  if (box3.innerHTML === "X" &&
      box5.innerHTML === "X" &&
      box7.innerHTML === "X") {
        box3.style.backgroundColor = "green";
        box6.style.backgroundColor = "green";
        box9.style.backgroundColor = "green";
        player.innerHTML = "PLAYER 1 WINS!";
      }
// diagonal O win
  if (box1.innerHTML === "O" &&
      box5.innerHTML === "O" &&
      box9.innerHTML === "O") {
        box1.style.backgroundColor = "green";
        box5.style.backgroundColor = "green";
        box9.style.backgroundColor = "green";
        player.innerHTML = "PLAYER 2 WINS!";
      }
  if (box3.innerHTML === "O" &&
      box5.innerHTML === "O" &&
      box7.innerHTML === "O") {
        box3.style.backgroundColor = "green";
        box5.style.backgroundColor = "green";
        box7.style.backgroundColor = "green";
        player.innerHTML = "PLAYER 2 WINS!";
      }
  if (box1.innerHTML &&
      box2.innerHTML &&
      box3.innerHTML &&
      box4.innerHTML &&
      box5.innerHTML &&
      box6.innerHTML &&
      box7.innerHTML &&
      box8.innerHTML &&
      box9.innerHTML) {
        player.innerHTML = "It's a Tie!"
      }
});


