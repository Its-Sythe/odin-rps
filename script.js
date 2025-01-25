const rpsOptions = ["rock", "paper", "scissors"];

let humanScore = 0;
let computerScore = 0;
let playerChoice;

document.getElementById('rock').addEventListener('click',handleUserChoice);
document.getElementById('paper').addEventListener('click',handleUserChoice);
document.getElementById('scissors').addEventListener('click',handleUserChoice);

function handleUserChoice(event) {
    let tgtId = event.target.id;
    playerChoice = tgtId;
    return playerChoice;
}

function getComputerChoice () {
    choice = Math.round((Math.random() * 2), 0);
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

playRound(playerChoice, getComputerChoice());
