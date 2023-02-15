// list of possible choices
const choice = ["rock", "paper", "scissors"];

function getComputerChoice() {
    const random = Math.floor(Math.random() * choice.length)
    return choice[random];
}

function playRound(playerSelection, computerSelection) {
    let result = "";
    if(playerSelection == computerSelection) {
        result = "tie";
    } else if((playerSelection == "ROCK" && computerSelection == "SCISSORS") ||
    (playerSelection == "PAPER" && computerSelection == "ROCK") ||
    (playerSelection == "SCISSORS" && computerSelection == "PAPER")) {
        result = "Player";
    } else {
        result = "Computer";
    }
    return result;
}
