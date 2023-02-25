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

function game() {
    let playerCount = 0;
    let computerCount = 0;

    for(let i = 0; i < 5; i++) {
        let playerSelection = "";
        do{
            playerSelection = prompt("Enter Your Choice :").toUpperCase();   
            if(!choice.includes(playerSelection.toLowerCase())){
                
                alert("You can only Choice: " + choice.join(", ").toUpperCase()); 
            }else{
                break;
            }
        }while(!choice.includes(playerSelection.toLowerCase()));
        const computerSelection = getComputerChoice().toUpperCase();

        const result = playRound(playerSelection, computerSelection);

        if(result == "Computer") {
            console.log(`Round ${i+1}: You Lose! ${computerSelection} beats ${playerSelection}`)
            computerCount++;
        } else if (result == "Player") {
            console.log(`Round ${i+1}: You Win! ${playerSelection} beats ${computerSelection}`)
            playerCount++;
        } else {
            console.log(`Round ${i+1}: It's a Tie! ${playerSelection} ties with ${computerSelection}`)
        }
    }

    if(playerCount > computerCount) {
        console.log("You Win!");
        alert("You Win!");
    } else if(computerCount > playerCount) {
        console.log("Your Loos!");
        alert("Your Loos!");
    } else {
        console.log("It's a Tie!");
        alert("It's a Tie!");
    }
}

game();