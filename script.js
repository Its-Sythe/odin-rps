const rpsOptions = ["rock", "paper", "scissors"];

let humanScore = 0;
let computerScore = 0;
let roundCount = 0;

document.getElementById('rock').disabled = true;
document.getElementById('paper').disabled = true;
document.getElementById('scissors').disabled = true;

function clickHandler() {
    document.getElementById('rock').addEventListener('click',getUserChoice);
    document.getElementById('paper').addEventListener('click',getUserChoice);
    document.getElementById('scissors').addEventListener('click',getUserChoice);
}

function getUserChoice(event) {
    let tgtId = event.target.id;
    let playerChoice = tgtId;
    playRound(playerChoice, getComputerChoice());
    ++roundCount
    score(humanScore, computerScore);
    if (roundCount >= 5) {
        resetRound();
    }
}

function resetRound() {
    humanScore = 0;
    computerScore = 0;
    roundCount = 0;
    document.getElementById('rock').disabled = true;
    document.getElementById('paper').disabled = true;
    document.getElementById('scissors').disabled = true;
}

function getComputerChoice () {
    let choice = Math.round((Math.random() * 2), 0);
    return rpsOptions[choice];
}

function playRound (humanChoice, computerChoice) {
    if (computerChoice === humanChoice) {
        console.log("It's a tie!");
    }

    if (humanChoice === "rock") {
        if (computerChoice === "paper") {
            console.log("You lose! Paper beats Rock!");
            ++computerScore;
        }
        if (computerChoice === "scissors") {
            console.log("You win! Rock beats Scissors");
            ++humanScore;
        }
    }
    if (humanChoice === "paper") {
        if (computerChoice === "scissors") {
            console.log("You lose! Scissors beats Paper");
            ++computerScore;
        }
        if (computerChoice === "rock") {
            console.log("You win! Paper beats Rock");
            ++humanScore;
        } 
    }
    if (humanChoice === "scissors") {
        if (computerChoice === "rock") {
            console.log("You lose! Rock beats Scissors");
            ++computerScore;
        }
        if (computerChoice === "paper") {
            console.log("You win! Scissors beats Paper");
            ++humanScore;
        }
    }
}

function score(player, computer) {
    document.getElementById('rounds-played').innerHTML = "Rounds Played: " + roundCount; 
    document.getElementById('player-score').innerHTML = "Your Score: " + player;
    document.getElementById('computer-score').innerHTML = "Computer Score: " + computer;
}

function playBtn() {
    document.getElementById('play-btn').addEventListener('click', () => {
        document.getElementById('rock').disabled = false;
        document.getElementById('paper').disabled = false;
        document.getElementById('scissors').disabled = false;
    });
    resetRound();
    clickHandler();
}

playBtn()