const rpsOptions = ["rock", "paper", "scissors"];

let humanScore = 0;
let computerScore = 0;
let roundCount = 0;

document.getElementById('rock').addEventListener('click',getUserChoice);
document.getElementById('paper').addEventListener('click',getUserChoice);
document.getElementById('scissors').addEventListener('click',getUserChoice);

function getUserChoice(event) {
    let tgtId = event.target.id;
    let playerChoice = tgtId;
    playRound(playerChoice, getComputerChoice());
    ++roundCount
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

