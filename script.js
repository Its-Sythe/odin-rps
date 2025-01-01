const rpsOptions = ["rock", "paper", "scissors"];

let humanScore = 0;
let computerScore = 0;

function getComputerChoice () {
    choice = Math.round((Math.random() * 2), 0);
    return rpsOptions[choice];
}

function getUserChoice () {
    choice = prompt("Rock, Paper, Scissors: ");
    confirmChoice = rpsOptions.includes(choice.toLowerCase());
    if (confirmChoice) {
        return choice;
    }   else {
        alert("Unknown Option!");
    }
}

function playRound (humanChoice, computerChoice) {
    // game logic will go here
}


humanSelection = getUserChoice();
computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);

