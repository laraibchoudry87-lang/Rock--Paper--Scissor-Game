let userScore = 0;
let compScore = 0;

const userScoreSpan = document.getElementById("user-score");
const compScoreSpan = document.getElementById("comp-score");
const resultDiv = document.getElementById("result");
const resetBtn = document.getElementById("reset");
const historyDiv = document.getElementById("history");

document.getElementById("rock").addEventListener("click", () => playGame("rock"));
document.getElementById("paper").addEventListener("click", () => playGame("paper"));
document.getElementById("scissors").addEventListener("click", () => playGame("scissors"));
resetBtn.addEventListener("click", resetGame);

function playGame(userChoice) {
  const options = ["rock", "paper", "scissors"];
  const compChoice = options[Math.floor(Math.random() * options.length)];

  let resultText = "";

  if (userChoice === compChoice) {
    resultText = `Draw! Both chose ${userChoice}`;
  } else if (
    (userChoice === "rock" && compChoice === "scissors") ||
    (userChoice === "paper" && compChoice === "rock") ||
    (userChoice === "scissors" && compChoice === "paper")
  ) {
    userScore++;
    userScoreSpan.textContent = userScore;
    resultText = `You win! ${userChoice} beats ${compChoice}`;
  } else {
    compScore++;
    compScoreSpan.textContent = compScore;
    resultText = `You lose! ${compChoice} beats ${userChoice}`;
  }

  resultDiv.textContent = resultText;
  addHistory(userChoice, compChoice, resultText);
}

function resetGame() {
  userScore = 0;
  compScore = 0;
  userScoreSpan.textContent = userScore;
  compScoreSpan.textContent = compScore;
  resultDiv.textContent = "Game reset! Play your move.";
  historyDiv.innerHTML = "";
}

function addHistory(userChoice, compChoice, resultText) {
  const entry = document.createElement("p");
  entry.textContent = `You: ${userChoice} | Computer: ${compChoice} → ${resultText}`;
  historyDiv.appendChild(entry);
}