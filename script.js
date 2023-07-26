//function that will randomly return 'Rock', 'Paper', or 'Scissors'.
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
    //determine winner based on choices 
    if (playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "paper" && computerSelection === "rock" || playerSelection === "scissors" && computerSelection === "paper") {
        return "You win!";
    } else if (playerSelection === "scissors" && computerSelection === "rock" || playerSelection === "rock" && computerSelection === "paper" || playerSelection === "paper" && computerSelection === "scissors") {
        return "You lose!";
    } else {
        return "It's a tie!";
    }
}
//function to play a 5 round game that keeps score and reports a winner or loser at the end.
function game() {
    let playerScore = 0;
    let computerScore = 0;
    //play 5 rounds of the game
    for (let i = 0; i < 5; i++) {
        //get player selection
        const playerSelection = prompt("Enter your choice: rock, paper, or scissors").toLowerCase();
        //get random computer selection
        const computerSelection = getComputerChoice();
        //get result of round
        const result = playRound(playerSelection, computerSelection);
        //display result
        console.log(result);
        //determine winner and update score
        if (result === "You win!") {
            playerScore++;
        } else if (result === "You lose!") {
            computerScore++;
        }
    }
    //determine winner and display result
    if (playerScore > computerScore) {
        console.log("Congratulations, you win the game!");
    } else if (playerScore < computerScore) {
        console.log("Sorry, you lose the game!");
    } else {
        console.log("It's a tie!");
    }
}
//play the game
game();