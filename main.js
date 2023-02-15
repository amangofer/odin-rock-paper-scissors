// list of possible choices
const choice = ["rock", "paper", "scissors"];

function getComputerChoice() {
    const random = Math.floor(Math.random() * choice.length)
    return choice[random];
}
