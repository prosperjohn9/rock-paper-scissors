let playerScore = 0;
let computerScore = 0;
//get the buttons
const scoreDisplay = document.querySelector("#score");
const resultsDisplay = document.querySelector("#results");
const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");
//function to generate the computer's selection
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}
//function that plays a round of the game 
function playRound(playerSelection, computerSelection) {
    //convert playerSelection and computerSelection for case insensitivity
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    //Determine the winner
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if ((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "scissors" && computerSelection === "paper")) {
        playerScore++;
        return "You win! " + playerSelection + " beats " + computerSelection + ".";
    } else {
        computerScore++;
        return "You lose! " + computerSelection + " beats " + playerSelection + ".";
    }
}
//function to update score display
function updateScore() {
    scoreDisplay.textContent = "Score: " + playerScore + " - " + computerScore;
}
//function to check if player has won
function checkWinner() {
    if (playerScore === 5) {
        return "Congratulations! You won the game!";
    } else if (computerScore === 5) {
        return "Sorry you lost... The computer beat you.";
    } else {
        return null;
    }
}
//function to handle button click events 
function handleClick(playerSelection) {
    if (playerScore === 5 || computerScore === 5) {
        //Game over, reset scores and results
        playerScore = 0;
        computerScore = 0;
        resultsDisplay.textContent = "";
        updateScore();
    }
    const computerSelection = getComputerChoice();
    const roundResult = playRound(playerSelection, computerSelection);
    //update results display
    resultsDisplay.textContent = roundResult;
    updateScore();
    //check if the game has been won
    const gameResult = checkWinner();
    if (gameResult) {
        resultsDisplay.textContent = gameResult;//display winning message
    }
}
//add event listeners
rockButton.addEventListener("click", () => handleClick("rock"));
paperButton.addEventListener("click", () => handleClick("paper"));
scissorsButton.addEventListener("click", () => handleClick("scissors"));