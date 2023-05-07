// list of possible choices
const choice = ["rock", "paper", "scissors"];

function getComputerChoice() {
    const random = Math.floor(Math.random() * choice.length)
    return choice[random];
}



function playRound(playerSelection, computerSelection) {
    console.log(`${playerSelection} ${computerSelection}`);
    let result = "";
    if(playerSelection == computerSelection) {
        result = "Tie";
    } else if((playerSelection == "ROCK" && computerSelection == "SCISSORS") ||
    (playerSelection == "PAPER" && computerSelection == "ROCK") ||
    (playerSelection == "SCISSORS" && computerSelection == "PAPER")) {
        result = "Player";
    } else {
        result = "Computer";
    }
    return result;
}

function winnerHand(winner, playerSelection, computerSelection){
    if(winner === "Computer"){
        document.getElementById('round-result').textContent = `${computerSelection} bits ${playerSelection}`;
    }else if(winner === "Player"){
        document.getElementById('round-result').textContent = `${playerSelection} bits ${computerSelection}`;
    }else{
        document.getElementById('round-result').textContent = `${playerSelection} ties ${computerSelection}`;
    }
}

const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const rock = document.getElementById('rock');
const resetGame = document.getElementById('reset-game');
let countComputer = 0;
let countPlayer = 0;

document.getElementById('round-winner').textContent = `Round Winner: ?`;
document.getElementById('player-score').textContent = `${countPlayer}`;
document.getElementById('computer-score').textContent = `${countComputer}`;


function resetAll(){
    countComputer = 0;
    countPlayer = 0;
    document.getElementById('round-winner').textContent = `Round Winner: ?`;
    document.getElementById('player-score').textContent = `${countPlayer}`;
    document.getElementById('computer-score').textContent = `${countComputer}`;
    document.getElementById('winner').textContent = "Who Will Win!";
    document.getElementById('round-result').textContent = "Start When You are Ready";
    resetGame.style.visibility = 'hidden';
    paper.disabled = false;
    rock.disabled = false;
    scissors.disabled = false;
}

function checkWinner(){
    if(countComputer === 5){
        console.log("You Loose!");
        document.getElementById('winner').textContent = "You Loose!";
        paper.disabled = true;
        rock.disabled = true;
        scissors.disabled = true;
        resetGame.textContent = "Play Again!"
        resetGame.style.visibility = 'visible';

    }else if(countPlayer === 5){
        console.log("You Win!");
        document.getElementById('winner').textContent = "You Win!";
        paper.disabled = true;
        rock.disabled = true;
        scissors.disabled = true;
        resetGame.textContent = "Play Again!"
        resetGame.style.visibility = 'visible';
    }
}

resetGame.addEventListener('click', resetAll);

rock.addEventListener('click', function() {
    var computerSelection = getComputerChoice().toUpperCase();
    var playerSelection = "ROCK";
    const winner = playRound(playerSelection, computerSelection);

    if(winner === "Player"){
        countPlayer++;
    }else if(winner === "Computer") {
        countComputer++;
    }
    winnerHand(winner, playerSelection, computerSelection);
    console.log(winner, countComputer, countPlayer);
    checkWinner();
    document.getElementById('round-winner').textContent = `Round Winner: ${winner}`;
    document.getElementById('player-score').textContent = `${countPlayer}`;
    document.getElementById('computer-score').textContent = `${countComputer}`;
});

paper.addEventListener('click', function() {
    var computerSelection = getComputerChoice().toUpperCase();
    var playerSelection = "PAPER";
    const winner = playRound(playerSelection, computerSelection);

    if(winner === "Player"){
        countPlayer++;
    }else if(winner === "Computer") {
        countComputer++;
    }
    winnerHand(winner, playerSelection, computerSelection);
    console.log(winner, countComputer, countPlayer);
    
    document.getElementById('round-winner').textContent = `Round Winner: ${winner}`;
    document.getElementById('player-score').textContent = `${countPlayer}`;
    document.getElementById('computer-score').textContent = `${countComputer}`;
    checkWinner();
});

scissors.addEventListener('click', function() {
    var computerSelection = getComputerChoice().toUpperCase();
    var playerSelection = "SCISSORS";
    const winner = playRound(playerSelection, computerSelection);
    
    if(winner === "Player"){
        countPlayer++;
    }else if(winner === "Computer") {
        countComputer++;
    }
    winnerHand(winner, playerSelection, computerSelection);
    console.log(winner, countComputer, countPlayer);
    checkWinner();
    document.getElementById('round-winner').textContent = `Round Winner: ${winner}`;
    document.getElementById('player-score').textContent = `${countPlayer}`;
    document.getElementById('computer-score').textContent = `${countComputer}`;
});
