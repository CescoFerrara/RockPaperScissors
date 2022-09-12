const choices = [
    "rock",
    "paper",
    "scissors"
]



const result = document.getElementById("result");
const message = document.getElementById("message");

let expMax = 1;
let expCurrent = 0;


function play(event) {
    const userChoice = event.target.id;
  message.innerHTML = "You selected " + userChoice + "!" + "<br/>";

  const randomNumber = Math.floor(Math.random() * choices.length);
  const computerChoice = choices[randomNumber];
  message.innerHTML += "The computer chose " + computerChoice + "!";

  if (computerChoice === userChoice) {
    result.innerHTML = "Draw!";
  } else if (computerChoice === "rock" && userChoice === "paper") {
    result.innerHTML = "You win!";
    updateExp();
  } else if (computerChoice === "rock" && userChoice === "scissors") {
    result.innerHTML = "You lost!";
  } else if (computerChoice === "paper" && userChoice === "scissors") {
    result.innerHTML = "You win!";
    updateExp();
  } else if (computerChoice === "paper" && userChoice === "rock") {
    result.innerHTML = "You lose!";
  } else if (computerChoice === "scissors" && userChoice === "rock") {
    result.innerHTML = "You win!";
    updateExp();
  } else if (computerChoice === "scissors" && userChoice === "paper") {
    result.innerHTML = "You lose!";
  }
  


}

function updateExp() {
  expCurrent = expCurrent + 1;
  if (expCurrent === expMax) {
    document.getElementById("ExpBar").style.width = 0 + "%";
    document.getElementById("ExpBar").setAttribute("aria-valuenow", 0);
    expMax = expMax + 1;
    expCurrent = 0;
    document.getElementById("ExpLeft").innerHTML = "0/" + expMax + " to Level " + expMax;
    result.innerHTML = "You win! Level Up!";
  } else {
    let percentage = ((expCurrent / expMax) * 100);
    document.getElementById("ExpBar").style.width = percentage + "%";
    document.getElementById("ExpBar").setAttribute("aria-valuenow", percentage);
    width = percentage + "%";
    document.getElementById("ExpLeft").innerHTML = expCurrent + "/" + expMax + " to Level " + expMax;
  }
}