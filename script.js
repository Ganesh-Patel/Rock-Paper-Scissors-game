// Select all buttons within the btngroup class
let buttons = document.querySelectorAll(".btngroup .btn");

let userScore = document.getElementById("playerscore");
let computerScore = document.getElementById("computerscore");
let resultLine = document.getElementById("result");

let playerScore = 0;
let computerScoreCount = 0;

function computerChoice() {
  let choices = ["rock", "paper", "scissors"];
  let randomChoice = Math.floor(Math.random() * 3);
  return choices[randomChoice];
}

buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    let result = playGame(button.id, computerChoice());
  });
});

function playGame(playerChoice, compChoice) {
  if (playerChoice === compChoice) {
    resultLine.innerText = "It's a tie! Both chose " + playerChoice;
  } else if (
    (playerChoice === "rock" && compChoice === "scissors") ||
    (playerChoice === "paper" && compChoice === "rock") ||
    (playerChoice === "scissors" && compChoice === "paper")
  ) {
    playerScore++;
    userScore.textContent = playerScore;
    resultLine.innerText = "You win! " + playerChoice + " beats " + compChoice;
  } else {
    computerScoreCount++;
    computerScore.textContent = computerScoreCount;
    resultLine.innerText = "Computer wins! " + compChoice + " beats " + playerChoice;
  }
}
