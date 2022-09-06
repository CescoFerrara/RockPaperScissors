const choices = [
    "rock",
    "paper",
    "scissors"
]

let W = 0;
let L = 0;
let D = 0;

const result = document.getElementById("result");
const message = document.getElementById("message");

const scoreboard = document.getElementById("scoreboard");

function play(event) {
    const userChoice = event.target.id;
  message.innerHTML = "You selected " + userChoice + "!" + "<br/>";

  const randomNumber = Math.floor(Math.random() * choices.length);
  const computerChoice = choices[randomNumber];
  message.innerHTML += "The computer chose " + computerChoice + "!";

  if (computerChoice === userChoice) {
    result.innerHTML = "Draw!";
    D = D + 1;
  } else if (computerChoice === "rock" && userChoice === "paper") {
    result.innerHTML = "You win!";
    W = W + 1;
  } else if (computerChoice === "rock" && userChoice === "scissors") {
    result.innerHTML = "You lost!";
    L = L + 1;
  } else if (computerChoice === "paper" && userChoice === "scissors") {
    result.innerHTML = "You win!";
    W = W + 1;
  } else if (computerChoice === "paper" && userChoice === "rock") {
    result.innerHTML = "You lose!";
    L = L + 1;
  } else if (computerChoice === "scissors" && userChoice === "rock") {
    result.innerHTML = "You win!";
    W = W + 1;
  } else if (computerChoice === "scissors" && userChoice === "paper") {
    result.innerHTML = "You lose!";
    L = L + 1;
  }
  scoreboard.innerHTML = "W: " + W + " | L: " + L + " | D: " + D;
}